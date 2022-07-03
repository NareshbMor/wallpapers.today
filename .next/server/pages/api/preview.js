"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 4869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ preview)
});

;// CONCATENATED MODULE: ./lib/api.js
const API_URL = process.env.WORDPRESS_API_URL;
async function fetchAPI(query = "", { variables  } = {}) {
    const headers = {
        "Content-Type": "application/json"
    };
    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
        headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
    }
    // WPGraphQL Plugin must be enabled
    const res = await fetch(`${API_URL}/graphql`, {
        headers,
        method: "POST",
        body: JSON.stringify({
            query,
            variables
        })
    });
    const json = await res.json();
    if (json.errors) {
        console.error(JSON.stringify(json.errors));
        throw new Error("Failed to fetch API");
    }
    return json.data;
}
async function getPreviewPost(id, idType = "DATABASE_ID") {
    const data = await fetchAPI(`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`, {
        variables: {
            id,
            idType
        }
    });
    return data.post;
}
async function getAllPostsWithSlug() {
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
  `);
    return data === null || data === void 0 ? void 0 : data.posts;
}
async function getAllPostsForHome(preview) {
    const data = await fetchAPI(`
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
  `, {
        variables: {
            onlyEnabled: !preview,
            preview
        }
    });
    return data === null || data === void 0 ? void 0 : data.posts;
}
async function getPostAndMorePosts(slug, preview, previewData) {
    const postPreview = preview && (previewData === null || previewData === void 0 ? void 0 : previewData.post);
    // The slug may be the id of an unpublished post
    const isId = Number.isInteger(Number(slug));
    const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;
    const isDraft = isSamePost && (postPreview === null || postPreview === void 0 ? void 0 : postPreview.status) === "draft";
    const isRevision = isSamePost && (postPreview === null || postPreview === void 0 ? void 0 : postPreview.status) === "publish";
    const data = await fetchAPI(`
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
        ${// Only some of the fields of a revision are considered as there are some inconsistencies
    isRevision ? `
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
        ` : ""}
      }
      posts(first: 30, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `, {
        variables: {
            id: isDraft ? postPreview.id : slug,
            idType: isDraft ? "DATABASE_ID" : "SLUG"
        }
    });
    // Draft posts may not have an slug
    if (isDraft) data.post.slug = postPreview.id;
    // Apply a revision (changes in a published post)
    if (isRevision && data.post.revisions) {
        var ref;
        const revision = (ref = data.post.revisions.edges[0]) === null || ref === void 0 ? void 0 : ref.node;
        if (revision) Object.assign(data.post, revision);
        delete data.post.revisions;
    }
    // Filter out the main post
    data.posts.edges = data.posts.edges.filter(({ node  })=>node.slug !== slug
    );
    // If there are still 3 posts, remove the last one
    if (data.posts.edges.length > 2) data.posts.edges.pop();
    return data;
}
//Top menu
async function getPrimaryMenu() {
    var ref;
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
    return data === null || data === void 0 ? void 0 : (ref = data.menus) === null || ref === void 0 ? void 0 : ref.nodes[0];
}
//Category By Slug
async function getCategoryBySlug(slug) {
    const data = await fetchAPI(` 
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
  `, {});
    return data === null || data === void 0 ? void 0 : data.categories.nodes[0];
}
//Tag By Slug
async function getTagBySlug(slug) {
    const data = await fetchAPI(` 
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
  `, {});
    return data === null || data === void 0 ? void 0 : data.tags.nodes[0];
}
// get All Categories  
async function getAllCategories(slug) {
    const data = await fetchAPI(`{
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
  `, {});
    const categoriesData = data === null || data === void 0 ? void 0 : data.categories.edges.map(({ node ={}  })=>node
    );
    return categoriesData;
}
// get All Tags  
async function getAllTags(slug) {
    const data = await fetchAPI(`{
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
  `, {});
    const tagsData = data === null || data === void 0 ? void 0 : data.tags.edges.map(({ node ={}  })=>node
    );
    return tagsData;
}
//Category By Slug
async function getPostsByCategoryId(category, preview = false) {
    const data = await fetchAPI(`
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
  `, {
        variables: {
            onlyEnabled: !preview,
            preview
        }
    });
    return data === null || data === void 0 ? void 0 : data.posts;
}
//get Posts By Tag Id
async function getPostsByTagId(tagData, preview = false) {
    const data = await fetchAPI(`
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
  `, {
        variables: {
            onlyEnabled: !preview,
            preview
        }
    });
    return data === null || data === void 0 ? void 0 : data.posts;
}
//Category By Slug
async function getAllCatagories() {
    var ref;
    const data = await fetchAPI(`
    {
      categories(where: {exclude: 1, hideEmpty: true}) {
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
  `, {});
    return data === null || data === void 0 ? void 0 : (ref = data.categories) === null || ref === void 0 ? void 0 : ref.nodes;
}

;// CONCATENATED MODULE: ./pages/api/preview.js

async function preview(req, res) {
    const { secret , id , slug  } = req.query;
    // Check the secret and next parameters
    // This secret should only be known by this API route
    if (!process.env.WORDPRESS_PREVIEW_SECRET || secret !== process.env.WORDPRESS_PREVIEW_SECRET || !id && !slug) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
    // Fetch WordPress to check if the provided `id` or `slug` exists
    const post = await getPreviewPost(id || slug, id ? "DATABASE_ID" : "SLUG");
    // If the post doesn't exist prevent preview mode from being enabled
    if (!post) {
        return res.status(401).json({
            message: "Post not found"
        });
    }
    // Enable Preview Mode by setting the cookies
    res.setPreviewData({
        post: {
            id: post.databaseId,
            slug: post.slug,
            status: post.status
        }
    });
    // Redirect to the path from the fetched post
    // We don't redirect to `req.query.slug` as that might lead to open redirect vulnerabilities
    res.writeHead(307, {
        Location: `/posts/${post.slug || post.databaseId}`
    });
    res.end();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4869));
module.exports = __webpack_exports__;

})();