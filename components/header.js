import Link from 'next/link'
import { useRouter } from "next/router";
import { replaceStrAll } from '../lib/commonFuntions';

export default function Header({menuItems}) {
  const router = useRouter();
  // console.log("router => ", router.asPath.replaceAll('/',''));
  const menuData = menuItems?.menuItems || null
  return ( 
    <nav className="bg-white py-2 md:py-4 shadow mb-9">
    <div className="container1 px-4 mx-auto md:flex md:items-center">

      <div className="flex justify-between items-center">
        <Link href="/"><a  className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Wallpapers.</a></Link>
        <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
      {menuData && menuData.edges.map((item) => {
              const classData = replaceStrAll(item.node.uri.replace('category', 'download'), '/','') === replaceStrAll(router.asPath, '/','') ? 
              'p-2 lg:px-4 md:mx-2 text-white rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' :  'p-2 lg:px-4 md:mx-2 text-gray-600 rounded bg-gradient-to-r hover:text-white hover:from-indigo-500  hover:via-purple-500  hover:to-pink-500 transition-colors duration-100'
            return (
                <Link
                  key={item.node.path}
                  href={(item.node.uri).replace('category', 'download')} 
                >
                  <a className={classData}>{item.node.label}</a>
                </Link> 
              )
            })}
        </div>
    </div>
  </nav>  
  )
} 