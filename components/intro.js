import Link from 'next/link'
export default function Intro({menuItems: {menuItems}}) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Wallpapers.
      </h1>
      <div className="text-center md:text-left text-lg mt-5 md:pl-8"> 
        <nav className="flex flex-wrap items-center justify-between p-6 bg-blue-500 shadow-lg">
          <ul className="flex items-center justify-end flex-grow w-full">
            {menuItems.edges.map((item) => ( 
              <li key={item.node.path}>
                <Link
                  className="p-4 ml-2 text-white hover:underline"
                  href={item.node.uri}
                >
                  <a>{item.node.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
