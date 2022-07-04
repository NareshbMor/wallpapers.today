const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(`${API_URL}/graphql`, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(JSON.stringify(json.errors))
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 100000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 200, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      wallpaperimage {
        images {
          wallpaper {
            altText
            mediaItemUrl
            mediaDetails {
              width
              height
            }
            mediaType
            mimeType
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      tags {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 30, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}

//Top menu
export async function getPrimaryMenu() {
  const data = await fetchAPI(`
  {
    menus(where: {location: TOP}) {
      nodes {
        menuItems {
          edges {
            node {
              path
              label
              uri
              connectedNode {
                node {
                  ... on Page {
                    isPostsPage
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `);
  return data?.menus?.nodes[0];
}

//Category By Slug
export async function getCategoryBySlug(slug) {
  const data = await fetchAPI(
  ` 
     {
      categories(where: {slug: "${slug}"}) {
        nodes {
          databaseId
          description
          id
          name
          slug
          seo {
            breadcrumbs {
              text
              url
            }
            fullHead
          }
        }
      }
     } 
  `,
  {}
  )
 
  return data?.categories.nodes[0]
}

//Tag By Slug
export async function getTagBySlug(slug) {
  const data = await fetchAPI(
  ` 
     {
      tags(where: {slug: "${slug}"}) {
        nodes {
          databaseId
          description
          id
          name
          slug
          seo {
            breadcrumbs {
              text
              url
            }
            fullHead
          }
        }
      }
     } 
  `,
  {}
  )
 
  return data?.tags.nodes[0]
}

// get All Categories  
export async function getAllCategories(slug) {
  const data = await fetchAPI(
  `{
    categories(first: 10000) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
        }
      }
    }
  }
  `,
  {}
  ) 
  const categoriesData = data?.categories.edges.map(({ node = {} }) => node);
  return categoriesData
}

// get All Tags  
export async function getAllTags(slug) {
  const data = await fetchAPI(
  `{
    tags(first: 1000000) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
        }
      }
    }
  }
  `,
  {}
  ) 
  const tagsData = data?.tags.edges.map(({ node = {} }) => node);
  return tagsData
}

//Category By Slug
export async function getPostsByCategoryId(category, preview=false) { 
  const data = await fetchAPI(
    `
    {
      posts(first: 2000, where: {categoryId: ${category.categoryId}, orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

//get Posts By Tag Id
export async function getPostsByTagId(tagData, preview=false) {   
  const data = await fetchAPI(
    `
    {
      posts(first: 2000, where: {tagId: "${tagData.tagId}", orderby: { field: DATE, order: DESC }}) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

//Category By Slug
export async function getAllCatagories() {
  const data = await fetchAPI(
    `
    {
      categories(first: 20000, where: {exclude: 1, hideEmpty: true}) {
        nodes {
          databaseId
          description
          id
          name
          slug
          count
          catagoryfields {
            catagoryImage {
              mediaItemUrl
              sourceUrl(size: THUMBNAIL)
            }
          }
        }
      }
    }
  `,
    {}
  ) 
  return data?.categories?.nodes
}
