import Image from 'next/image'
import { saveAs } from 'file-saver';
export default function WallpaperImages({title, wallpapers}) { 

  const downloadImage = (image_url) => {
    const cTime = new Date().getTime()
    console.log("cTime => ", cTime);
    saveAs(image_url, `wallpapers-today-${cTime}.jpg`) // Put your image url here.
  }
  
  const wallpaperData = wallpapers ? wallpapers.map((wallpaper, key) => {    
    return (     
        <div key={`wallpaper_${key}`} className="rounded-lg shadow-lg bg-white mb-10">
          <a href="#!">             
            <Image
            title={wallpaper.wallpaper.altText}
            alt={wallpaper.wallpaper.altText}
            width={wallpaper?.wallpaper?.mediaDetails?.width || 300}
            height={wallpaper?.wallpaper?.mediaDetails?.height || 200}     
            layout="raw"
            src={wallpaper.wallpaper.mediaItemUrl}
            className="rounded-t-lg w-full shadow-lg max-w-full h-auto align-middle border-none"      
          />
          </a>
          <div className="p-6 flex justify-between justify-items-center">
            <div>
            <h2 className="text-gray-900 text-xl font-medium capitalize mb-2 pr-2">{wallpaper?.imageTitle ?? title}</h2>
            {wallpaper?.colors && <p className="text-gray-900 text-sm capitalize font-regular mb-2 pr-2"><strong>Colors</strong>: {wallpaper.colors}</p> } 
            {wallpaper?.tags && <p className="text-gray-900 text-sm capitalize font-regular mb-2 pr-2"><strong>About Image</strong>: {wallpaper.tags}</p> } 
            {/* <p className="text-gray-700 text-base mb-4">
              Width: {wallpaper?.wallpaper?.mediaDetails?.width}, Height: {wallpaper?.wallpaper?.mediaDetails?.height}, MimeType: {wallpaper.wallpaper.mimeType}
            </p> */}
            </div>
            <div className='flex items-center border-l-2 border-indigo-500 pl-5'>
            <button type="button" onClick={() => downloadImage(wallpaper.wallpaper.mediaItemUrl)} className=" block px-6 py-2.5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Download</button>
            </div>
            
          </div>
        </div>     
    )
    
  }) : null
 
  return ( 
    <div className="flex-col justify-center">
      {wallpaperData}
    </div>
  )
} 