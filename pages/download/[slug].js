import Head from 'next/head' 
import Link from 'next/link'
import Container from '../../components/container'
import Header from '../../components/header'
import Heading from '../../components/heading' 
import Layout from '../../components/layout'
import MoreStories from '../../components/more-stories'
import { getPostsByCategoryId , getPrimaryMenu, getCategoryBySlug, getAllCategories  } from '../../lib/api'
import { replaceStrAll } from '../../lib/commonFuntions'

const Category = ({ category, posts: { edges }, menuItems }) => { 

  const { name, description, slug } = category;
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1) 

  return (
    <Layout preview={false}>
      <Head>
        {/* <title>Next.js Blog Example with</title> */}
        <div			
          dangerouslySetInnerHTML={{ __html: replaceStrAll(replaceStrAll(category.seo.fullHead, '<!-- This site is optimized with the Yoast SEO plugin v19.0 - https://yoast.com/wordpress/plugins/seo/ -->', ''), '<!-- / Yoast SEO plugin. -->', '') }}
        />
      </Head>
      <Header menuItems={menuItems} />      
      <Container>  

      <nav className="w-auto border-b-2 border-indigo-300">
        <ol className="list-reset flex pb-2">
          <li><Link href="/"><a className="text-blue-600 hover:text-blue-700">Home</a></Link></li>
          <li><span className="text-gray-500 mx-2">/</span></li>
          <li className="text-gray-500">{name}</li>
        </ol>
      </nav>   
      
      <Heading title={name} description={description}/>

      <MoreStories posts={edges} />
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

export default Category
 
export async function getStaticProps({ params = {} } = {}) {
  const menuItems = await getPrimaryMenu();
  const category = await getCategoryBySlug(params?.slug);
 
  const posts = await getPostsByCategoryId({
    categoryId: category.databaseId,
    queryIncludes: 'archive',
  });

  return {
    props: {
      category,
      posts,
      menuItems,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getAllCategories();
  const paths = categories.map((category) => {
    const { slug } = category;
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}