import react, { useEffect } from 'react'
import styles from './post-body.module.css'
import $ from "jquery";
import WallpaperImages from './wallpaper-images';
export default function PostBody({ content, title, wallpapers }) {
  useEffect(() => {
    // $('.post_content_start ul li').css('color', 'blue')
	// 		console.log("loadinggg........");
	// 		var i = 0;
	// 		var url = window.location.origin; 
	// 		$('.post_content_start ul li').wrapInner('<div class="li_inner"></div>');
	//     	$('.post_content_start ul li').each(function(){ 	    		  
	//     		$(this).addClass("content_holder_li content_li_"+i);
	//     		$(this).attr('id', "content_li_"+i);  
	//     	//	$(this).prepend('<div class="tradmark">Freshtrends.in</div>');
	//     		$( '<button class="save_this_img" id="save_this_img_'+i+'" data-id="'+i+'"><i class="fa fa-cloud-download" aria-hidden="true"></i> Download</button>').insertAfter(this);  
    //       // <img src="http://freshtrends.in/wp-content/uploads/2020/05/745.gif" id="show_on_download_'+i+'" class="show_on_download"><a href="whatsapp://send?text='+res+' '+url+'" class="share_via_whatsapp" rel="nofollow" data-action="share/whatsapp/share" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a><a href="http://twitter.com/share?text='+res+'&url='+url+'&hashtags=Freshtrends,Shayari,Quotes" rel="nofollow" class="share_via_whatsapp" target="_blank" ><i class="fa fa-twitter" aria-hidden="true"></i></a>' ).insertAfter(this);    		
	//     		// var imageUrl = 'https://source.unsplash.com/random/850x350/?love,'+i;		 
	//     		// $(this).css('background', 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('+imageUrl+')');
	//     		i++;
	//     	});
 		
  }, [])

  return (
	//   max-w-2xl mx-auto
    <div className="flex post_content_start">
		<div className='w-1/5 border0 h-screen sticky top-0'>Ads</div>
		<div className='w-3/5 px-5'>
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
			<WallpaperImages  title={title} wallpapers={wallpapers} />
		</div>
		<div className='w-1/5  border0 h-screen sticky top-0'>Ads</div>
    </div>
  )
}
