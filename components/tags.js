import Link from 'next/link'
export default function Tags({ tags }) { 
  return (
    <div className="max-w-2xl mx-auto text-center mb-5">
      <p className="mt-8 text-lg font-bold">        
        {tags.edges.map((tag, index) => (
          <span key={index}  className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded dark:bg-blue-500 dark:text-blue-800">
            <Link href={`/free/${tag.node.slug}`}><a>{tag.node.name}</a></Link>
          </span>
        ))}
      </p>
    </div>
  )
}
