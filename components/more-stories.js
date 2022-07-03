import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2> */}
      {/* grid grid-cols-1 md:grid-cols-5 md:gap-x-5 lg:gap-x-10 gap-y-10 md:gap-y-10 mb-20 */}
      <ul className="card-columns ">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </ul>
    </section>
  )
}
