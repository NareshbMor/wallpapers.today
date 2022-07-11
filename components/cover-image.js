import cn from 'classnames'
import Image from 'next/future/image'
import Link from 'next/link'

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
   
    <Image
      width={250}
      height={200}
      // objectFit="cover"
      // width="100%" height="100%" objectFit="cover"
      layout="raw"
      src={coverImage?.node.sourceUrl}
      className="card_image rounded-md"
      // className={cn('shadow-small', {
      //   'hover:shadow-medium transition-shadow duration-200': slug,
      // })}
    />
  )
  return (
    <div className="sm:mx-0 hover:grayscale">
      {slug ? (
        <Link href={`/hd/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )} 
    </div>
  )
}
