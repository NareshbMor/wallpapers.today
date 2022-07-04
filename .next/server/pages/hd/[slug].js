(() => {
var exports = {};
exports.id = 770;
exports.ids = [770];
exports.modules = {

/***/ 4162:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "post-body_content__1R6cU"
};


/***/ }),

/***/ 5857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Heading = ({ title , description , position ="left"  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-10 mt-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: `mb-4 text-6xl lg:text-6xl leading-tight text-${position}`,
                children: title
            }),
            description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                dangerouslySetInnerHTML: {
                    __html: description
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 8306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(959);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/post-body.module.css
var post_body_module = __webpack_require__(4162);
var post_body_module_default = /*#__PURE__*/__webpack_require__.n(post_body_module);
;// CONCATENATED MODULE: external "jquery"
const external_jquery_namespaceObject = require("jquery");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "file-saver"
const external_file_saver_namespaceObject = require("file-saver");
;// CONCATENATED MODULE: ./components/wallpaper-images.js



function WallpaperImages({ title , wallpapers  }) {
    const downloadImage = (image_url)=>{
        const cTime = new Date().getTime();
        console.log("cTime => ", cTime);
        (0,external_file_saver_namespaceObject.saveAs)(image_url, `wallpapers-today-${cTime}.jpg`) // Put your image url here.
        ;
    };
    const wallpaperData = wallpapers ? wallpapers.map((wallpaper, key)=>{
        var ref, ref1, ref2, ref3;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "rounded-lg shadow-lg bg-white mb-10",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#!",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: wallpaper.wallpaper.altText,
                        width: (wallpaper === null || wallpaper === void 0 ? void 0 : (ref = wallpaper.wallpaper) === null || ref === void 0 ? void 0 : (ref1 = ref.mediaDetails) === null || ref1 === void 0 ? void 0 : ref1.width) || 2000,
                        height: (wallpaper === null || wallpaper === void 0 ? void 0 : (ref2 = wallpaper.wallpaper) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.mediaDetails) === null || ref3 === void 0 ? void 0 : ref3.height) || 2000,
                        layout: "raw",
                        src: wallpaper.wallpaper.mediaItemUrl,
                        className: "rounded-t-lg w-full shadow-lg max-w-full h-auto align-middle border-none"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-6 flex justify-between justify-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-gray-900 text-xl font-medium mb-2 pr-2",
                                children: "Card title"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center border-l-2 border-indigo-500 pl-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                onClick: ()=>downloadImage(wallpaper.wallpaper.mediaItemUrl)
                                ,
                                className: " block px-6 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
                                children: "Download"
                            })
                        })
                    ]
                })
            ]
        }, `wallpaper_${key}`);
    }) : null;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex-col justify-center",
        children: wallpaperData
    });
};

;// CONCATENATED MODULE: ./components/post-body.js





function PostBody({ content , title , wallpapers  }) {
    (0,external_react_.useEffect)(()=>{
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
    }, []);
    return(//   max-w-2xl mx-auto
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex post_content_start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-1/5 border0 h-screen sticky top-0",
                children: "Ads"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-3/5 px-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (post_body_module_default()).content,
                        dangerouslySetInnerHTML: {
                            __html: content
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(WallpaperImages, {
                        title: title,
                        wallpapers: wallpapers
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-1/5 border0 h-screen sticky top-0",
                children: "Ads"
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/more-stories.js + 1 modules
var more_stories = __webpack_require__(9202);
// EXTERNAL MODULE: ./components/header.js
var header = __webpack_require__(8492);
// EXTERNAL MODULE: ./components/avatar.js
var avatar = __webpack_require__(6734);
// EXTERNAL MODULE: ./components/date.js
var date = __webpack_require__(2419);
// EXTERNAL MODULE: ./components/cover-image.js
var cover_image = __webpack_require__(3483);
;// CONCATENATED MODULE: ./components/post-title.js

function post_title_PostTitle({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",
        dangerouslySetInnerHTML: {
            __html: children
        }
    });
};

;// CONCATENATED MODULE: ./components/categories.js

function categories_Categories({ categories  }) {
    return /*#__PURE__*/ _jsxs("span", {
        className: "ml-1",
        children: [
            "under",
            categories.edges.length > 0 ? categories.edges.map((category, index)=>/*#__PURE__*/ _jsx("span", {
                    className: "ml-1",
                    children: category.node.name
                }, index)
            ) : /*#__PURE__*/ _jsx("span", {
                className: "ml-1",
                children: categories.edges.node.name
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/post-header.js






function PostHeader({ title , coverImage , date , author , categories ,  }) {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(PostTitle, {
                children: title
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "hidden md:block md:mb-12",
                children: /*#__PURE__*/ _jsx(Avatar, {
                    author: author
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "mb-8 md:mb-16 sm:mx-0",
                children: /*#__PURE__*/ _jsx(CoverImage, {
                    title: title,
                    coverImage: coverImage
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "max-w-2xl mx-auto",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "block md:hidden mb-6",
                        children: /*#__PURE__*/ _jsx(Avatar, {
                            author: author
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "mb-6 text-lg",
                        children: [
                            "Posted ",
                            /*#__PURE__*/ _jsx(Date, {
                                dateString: date
                            }),
                            /*#__PURE__*/ _jsx(Categories, {
                                categories: categories
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/section-separator.js

function SectionSeparator() {
    return /*#__PURE__*/ jsx_runtime_.jsx("hr", {
        className: "border-accent-2 mt-2 mb-8"
    });
};

// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(654);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(7851);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8299);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/tags.js


function Tags({ tags  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "max-w-2xl mx-auto text-center mb-5",
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: "mt-8 text-lg font-bold",
            children: tags.edges.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded dark:bg-blue-500 dark:text-blue-800",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/free/${tag.node.slug}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: tag.node.name
                        })
                    })
                }, index)
            )
        })
    });
};

// EXTERNAL MODULE: ./components/heading.js
var heading = __webpack_require__(5857);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
;// CONCATENATED MODULE: ./components/featured-image.js




function FeaturedImage1({ title , FeaturedImage , slug  }) {
    const image = /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        width: 250,
        height: 200,
        // objectFit="cover"
        // width="100%" height="100%" objectFit="cover"
        layout: "raw",
        src: FeaturedImage === null || FeaturedImage === void 0 ? void 0 : FeaturedImage.node.sourceUrl,
        className: "featured_image rounded-md shadow-2xl"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "sm:mx-0 hover:grayscale mb-14",
        children: slug ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `/hd/${slug}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                "aria-label": title,
                children: image
            })
        }) : image
    });
};

;// CONCATENATED MODULE: ./pages/hd/[slug].js


















function Post({ post , posts , preview , menuItems , history  }) {
    var ref, ref1;
    const router = (0,router_.useRouter)();
    const morePosts = posts === null || posts === void 0 ? void 0 : posts.edges;
    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {
        return /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        preview: preview,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                menuItems: menuItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
                children: router.isFallback ? /*#__PURE__*/ jsx_runtime_.jsx(post_title_PostTitle, {
                    children: "Loading\u2026"
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                                            children: [
                                                post.title,
                                                " | Next.js Blog Example with ",
                                                constants/* CMS_NAME */.yf
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                            property: "og:image",
                                            content: (ref = post.featuredImage) === null || ref === void 0 ? void 0 : ref.sourceUrl
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(heading/* default */.Z, {
                                    title: post.title,
                                    position: "center"
                                }),
                                post.featuredImage && /*#__PURE__*/ jsx_runtime_.jsx(FeaturedImage1, {
                                    title: post.title,
                                    FeaturedImage: post.featuredImage
                                }),
                                post.tags.edges.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(Tags, {
                                    tags: post.tags
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PostBody, {
                                    content: post.content,
                                    title: post.title,
                                    wallpapers: post === null || post === void 0 ? void 0 : (ref1 = post.wallpaperimage) === null || ref1 === void 0 ? void 0 : ref1.images
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionSeparator, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl mb-4 leading-tight",
                            children: "You may also like"
                        }),
                        morePosts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(more_stories/* default */.Z, {
                            posts: morePosts
                        })
                    ]
                })
            })
        ]
    });
};
async function getStaticProps({ params , preview =false , previewData  }) {
    const menuItems = await (0,api/* getPrimaryMenu */.We)();
    const data = await (0,api/* getPostAndMorePosts */.ds)(params.slug, preview, previewData);
    return {
        props: {
            menuItems: menuItems,
            preview,
            post: data.post,
            posts: data.posts
        },
        revalidate: 10
    };
}
async function getStaticPaths() {
    const allPosts = await (0,api/* getAllPostsWithSlug */.h9)();
    return {
        paths: allPosts.edges.map(({ node  })=>`/hd/${node.slug}`
        ) || [],
        fallback: true
    };
}


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,91], () => (__webpack_exec__(8306)));
module.exports = __webpack_exports__;

})();