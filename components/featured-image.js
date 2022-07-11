import cn from 'classnames'
import Image from 'next/future/image'
import Link from 'next/link'

export default function FeaturedImage({ title, FeaturedImage, slug }) {
  const image = (
   
    <Image
      width={250}
      height={200}
      // objectFit="cover"
      // width="100%" height="100%" objectFit="cover"
      layout="raw"
      src={FeaturedImage?.node.sourceUrl}
      className="featured_image rounded-md shadow-2xl"
      // className={cn('shadow-small', {
      //   'hover:shadow-medium transition-shadow duration-200': slug,
      // })}
    />
  )
  return (
    <div className="sm:mx-0 hover:grayscale  mb-14">
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
