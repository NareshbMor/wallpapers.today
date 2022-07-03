import Link from 'next/link'
import { useRouter } from "next/router";
import { replaceStrAll } from '../lib/commonFuntions';

export default function CategoryList({categories}) {
  const router = useRouter();
 

  const categoryData = categories && categories.map((category, key) => {     
    return (
      category.count ?
      <Link  key={`category_${key}`} href={`/download/${category.slug}`}>
        <div className="max-w-sm  cursor-pointer grayscale-0 hover:grayscale bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='max-h-48 min_hieght_190 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-lg h-full overflow-hidden '>
            <img className="rounded-t-lg min_hieght_192 w-full" src={category.catagoryfields.catagoryImage.sourceUrl} alt={category.name} />
          </div>          
          <div className="p-5">              
            <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category.name}</h5>              
            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{category.description}</p> */}
            <a className='flex items-center justify-items-center text-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <span>View {category.name} Wallpapers</span>
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>  
      </Link>
      : null
    )
  })
  
  return ( 
    <div className='grid grid-cols-4 gap-8 gap-y-8 my-14'>
       {categoryData}  
    </div>
  )
} 