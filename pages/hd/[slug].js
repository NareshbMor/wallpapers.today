import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts, getPrimaryMenu } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Tags from '../../components/tags'
import Heading from '../../components/heading'
import CoverImage from '../../components/cover-image'
import FeaturedImage from '../../components/featured-image'

export default function Post({ post, posts, preview, menuItems, history }) { 
  const router = useRouter()   
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Header menuItems={menuItems} />
      <Container>      
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {post.title} for Free | Download {post.title}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.sourceUrl}
                />
              </Head>
              <Heading title={post.title.includes("wallpapers")?post.title : post.title+' Wallpapers'} position="center"/>

              {post.featuredImage && <FeaturedImage title={post.title} FeaturedImage={post.featuredImage} /> }

              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
             
              {/* <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              /> */}
              <PostBody content={post.content} title={post.title} wallpapers={post?.wallpaperimage?.images}/>

              {/* <footer>
              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer> */}
            </article>

            <SectionSeparator />
            <h2 className='text-2xl mb-4 leading-tight'>You may also like</h2>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const menuItems = await getPrimaryMenu();
  const data = await getPostAndMorePosts(params.slug, preview, previewData)
  
  return {
    props: {
      menuItems:menuItems,
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
   return {
    paths: allPosts.edges.map(({ node }) => `/hd/${node.slug}`) || [],
    fallback: true, 
  }
}
