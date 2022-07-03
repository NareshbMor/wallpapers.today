import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllCatagories, getAllPostsForHome, getPrimaryMenu } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import CategoryList from '../components/category-list'
 

export default function Index({ allPosts: { edges }, menuItems,  preview, allCatagories }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1) 
  return (
    <Layout preview={preview}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Header menuItems={menuItems} />
      <Container>    
      <CategoryList categories={allCatagories} />  
      
      {/* <MoreStories posts={edges} />   */}
        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={edges} />} */}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const menuItems = await getPrimaryMenu();
  const allCatagories = await getAllCatagories(); 
  return {
    props: { allPosts, preview, menuItems, allCatagories },
    revalidate: 10,
  }
}
