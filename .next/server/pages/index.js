"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(959);
// EXTERNAL MODULE: ./components/more-stories.js + 1 modules
var more_stories = __webpack_require__(9202);
// EXTERNAL MODULE: ./components/avatar.js
var avatar = __webpack_require__(6734);
// EXTERNAL MODULE: ./components/date.js
var date = __webpack_require__(2419);
// EXTERNAL MODULE: ./components/cover-image.js
var cover_image = __webpack_require__(3483);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/hero-post.js





function HeroPost({ title , coverImage , date , excerpt , author , slug ,  }) {
    return /*#__PURE__*/ _jsxs("section", {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "mb-8 md:mb-16",
                children: coverImage && /*#__PURE__*/ _jsx(CoverImage, {
                    title: title,
                    coverImage: coverImage,
                    slug: slug
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                className: "mb-4 text-4xl lg:text-6xl leading-tight",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: `/hd/${slug}`,
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: "hover:underline",
                                        dangerouslySetInnerHTML: {
                                            __html: title
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "mb-4 md:mb-0 text-lg",
                                children: /*#__PURE__*/ _jsx(Date, {
                                    dateString: date
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "text-lg leading-relaxed mb-4",
                                dangerouslySetInnerHTML: {
                                    __html: excerpt
                                }
                            }),
                            /*#__PURE__*/ _jsx(Avatar, {
                                author: author
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/intro.js


function Intro({ menuItems: { menuItems  }  }) {
    return /*#__PURE__*/ _jsxs("section", {
        className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
        children: [
            /*#__PURE__*/ _jsx("h1", {
                className: "text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",
                children: "Wallpapers."
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "text-center md:text-left text-lg mt-5 md:pl-8",
                children: /*#__PURE__*/ _jsx("nav", {
                    className: "flex flex-wrap items-center justify-between p-6 bg-blue-500 shadow-lg",
                    children: /*#__PURE__*/ _jsx("ul", {
                        className: "flex items-center justify-end flex-grow w-full",
                        children: menuItems.edges.map((item)=>/*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsx(Link, {
                                    className: "p-4 ml-2 text-white hover:underline",
                                    href: item.node.uri,
                                    children: /*#__PURE__*/ _jsx("a", {
                                        children: item.node.label
                                    })
                                })
                            }, item.node.path)
                        )
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/layout.js + 4 modules
var layout = __webpack_require__(6224);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(7851);
// EXTERNAL MODULE: ./components/header.js
var header = __webpack_require__(8492);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/category-list.js




function CategoryList({ categories  }) {
    const router = (0,router_.useRouter)();
    const categoryData = categories && categories.map((category, key)=>{
        return category.count ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `/download/${category.slug}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-sm cursor-pointer grayscale-0 hover:grayscale bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "max-h-48 min_hieght_190 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-lg h-full overflow-hidden ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "rounded-t-lg min_hieght_192 w-full",
                            src: category.catagoryfields.catagoryImage.sourceUrl,
                            alt: category.name
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "p-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                children: category.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex items-center justify-items-center text-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "View ",
                                            category.name,
                                            " Wallpapers"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "ml-2 -mr-1 w-4 h-4",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        }, `category_${key}`) : null;
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid grid-cols-4 gap-8 gap-y-8 my-14",
        children: categoryData
    });
};

;// CONCATENATED MODULE: ./pages/index.js











function Index({ allPosts: { edges  } , menuItems , preview , allCatagories  }) {
    var ref;
    const heroPost = (ref = edges[0]) === null || ref === void 0 ? void 0 : ref.node;
    const morePosts = edges.slice(1);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        preview: preview,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Wallpapers for Free | Download wallpapers for Free | Awesome wallpapers on wallpapers.today"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                menuItems: menuItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(CategoryList, {
                    categories: allCatagories
                })
            })
        ]
    });
};
async function getStaticProps({ preview =false  }) {
    const allPosts = await (0,api/* getAllPostsForHome */.DT)(preview);
    const menuItems = await (0,api/* getPrimaryMenu */.We)();
    const allCatagories = await (0,api/* getAllCatagories */.lj)();
    return {
        props: {
            allPosts,
            preview,
            menuItems,
            allCatagories
        },
        revalidate: 10
    };
}


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,702], () => (__webpack_exec__(9883)));
module.exports = __webpack_exports__;

})();