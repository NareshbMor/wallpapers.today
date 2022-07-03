import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <li className='rounded-md shadow-md  relative group card content '>
      {/* <div className="mb-5"> */}
        {coverImage ? (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        ): <div className='min_hieght_220 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md '></div> }
      {/* </div>   */}
      <h5 className="text-1xl rounded-b-md p-5 mb-0 leading-snug opacity-100 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl text-white font-normal bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">  
        <Link href={`/hd/${slug}`}>
          <a
          //  className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
       </h5>
      {/* <div className="text-lg mb-4">
        <Date dateString={date} />
      </div> */}
      {/* <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      /> */}
      {/* <Avatar author={author} /> */}
    </li>
  )
}
