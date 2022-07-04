"use strict";
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 6734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


function Avatar({ author  }) {
    const name = author ? author.node.firstName && author.node.lastName ? `${author.node.firstName} ${author.node.lastName}` : author.node.name : null;
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "w-12 h-12 relative mr-4",
                children: /*#__PURE__*/ _jsx(Image, {
                    src: author.node.avatar.url,
                    layout: "fill",
                    className: "rounded-full",
                    alt: name
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "text-xl font-bold",
                children: name
            })
        ]
    });
};


/***/ }),

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Container({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto px-5",
        children: children
    });
};


/***/ }),

/***/ 3483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CoverImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




function CoverImage({ title , coverImage , slug  }) {
    const image = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        width: 250,
        height: 200,
        // objectFit="cover"
        // width="100%" height="100%" objectFit="cover"
        layout: "raw",
        src: coverImage === null || coverImage === void 0 ? void 0 : coverImage.node.sourceUrl,
        className: "card_image rounded-md"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sm:mx-0 hover:grayscale",
        children: slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: `/hd/${slug}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                "aria-label": title,
                children: image
            })
        }) : image
    });
};


/***/ }),

/***/ 2419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function Date({ dateString  }) {
    const date = parseISO(dateString);
    return /*#__PURE__*/ _jsx("time", {
        dateTime: dateString,
        children: format(date, "LLLL	d, yyyy")
    });
};


/***/ }),

/***/ 8492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_commonFuntions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4138);




function Header({ menuItems  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // console.log("router => ", router.asPath.replaceAll('/',''));
    const menuData = (menuItems === null || menuItems === void 0 ? void 0 : menuItems.menuItems) || null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "bg-white py-2 md:py-4 shadow mb-9",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container1 px-4 mx-auto md:flex md:items-center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                                children: "Wallpapers."
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden",
                            id: "navbar-toggle",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-bars"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0",
                    id: "navbar-collapse",
                    children: menuData && menuData.edges.map((item)=>{
                        const classData = (0,_lib_commonFuntions__WEBPACK_IMPORTED_MODULE_3__/* .replaceStrAll */ .D)(item.node.uri.replace("category", "download"), "/", "") === (0,_lib_commonFuntions__WEBPACK_IMPORTED_MODULE_3__/* .replaceStrAll */ .D)(router.asPath, "/", "") ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded bg-gradient-to-r hover:text-white hover:from-indigo-500  hover:via-purple-500  hover:to-pink-500 transition-colors duration-100";
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: item.node.uri.replace("category", "download"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: classData,
                                children: item.node.label
                            })
                        }, item.node.path);
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(959);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
;// CONCATENATED MODULE: ./components/alert.js




function Alert({ preview  }) {
    return /*#__PURE__*/ _jsx("div", {
        className: cn("border-b", {
            "bg-accent-7 border-accent-7 text-white": preview,
            "bg-accent-1 border-accent-2": !preview
        }),
        children: /*#__PURE__*/ _jsx(Container, {
            children: /*#__PURE__*/ _jsx("div", {
                className: "py-2 text-center text-sm",
                children: preview ? /*#__PURE__*/ _jsxs(_Fragment, {
                    children: [
                        "This is a page preview.",
                        " ",
                        /*#__PURE__*/ _jsx("a", {
                            href: "/api/exit-preview",
                            className: "underline hover:text-cyan duration-200 transition-colors",
                            children: "Click here"
                        }),
                        " ",
                        "to exit preview mode."
                    ]
                }) : /*#__PURE__*/ _jsxs(_Fragment, {
                    children: [
                        "The source code for this blog is",
                        " ",
                        /*#__PURE__*/ _jsx("a", {
                            href: `https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`,
                            className: "underline hover:text-success duration-200 transition-colors",
                            children: "available on GitHub"
                        }),
                        "."
                    ]
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/footer.js



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-accent-1 border-t border-accent-2",
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-5 flex flex-col lg:flex-row justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "All right reserved by the Wallpapers.today"
                })
            })
        })
    });
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8299);
;// CONCATENATED MODULE: ./components/meta.js



function Meta() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/favicon/site.webmanifest"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "mask-icon",
                href: "/favicon/safari-pinned-tab.svg",
                color: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-config",
                content: "/favicon/browserconfig.xml"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "/feed.xml"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: `A statically generated blog example using Next.js and ${constants/* CMS_NAME */.yf}.`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: constants/* HOME_OG_IMAGE_URL */.vC
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout.js




function Layout({ preview , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "min-h-screen",
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};


/***/ }),

/***/ 9202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MoreStories)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/avatar.js
var avatar = __webpack_require__(6734);
// EXTERNAL MODULE: ./components/date.js
var date = __webpack_require__(2419);
// EXTERNAL MODULE: ./components/cover-image.js
var cover_image = __webpack_require__(3483);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/post-preview.js





function PostPreview({ title , coverImage , date , excerpt , author , slug ,  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "rounded-md shadow-md relative group card content ",
        children: [
            coverImage ? /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                title: title,
                coverImage: coverImage,
                slug: slug
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "min_hieght_220 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: "text-1xl rounded-b-md p-5 mb-0 leading-snug opacity-100 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl text-white font-normal bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/hd/${slug}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        //  className="hover:underline"
                        dangerouslySetInnerHTML: {
                            __html: title
                        }
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/more-stories.js


function MoreStories({ posts  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "card-columns ",
            children: posts.map(({ node  })=>/*#__PURE__*/ jsx_runtime_.jsx(PostPreview, {
                    title: node.title,
                    coverImage: node.featuredImage,
                    date: node.date,
                    author: node.author,
                    slug: node.slug,
                    excerpt: node.excerpt
                }, node.slug)
            )
        })
    });
};


/***/ }),

/***/ 7851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DT": () => (/* binding */ getAllPostsForHome),
/* harmony export */   "FF": () => (/* binding */ getPostsByTagId),
/* harmony export */   "We": () => (/* binding */ getPrimaryMenu),
/* harmony export */   "Ys": () => (/* binding */ getAllTags),
/* harmony export */   "ds": () => (/* binding */ getPostAndMorePosts),
/* harmony export */   "fj": () => (/* binding */ getCategoryBySlug),
/* harmony export */   "h9": () => (/* binding */ getAllPostsWithSlug),
/* harmony export */   "iP": () => (/* binding */ getTagBySlug),
/* harmony export */   "lj": () => (/* binding */ getAllCatagories),
/* harmony export */   "qd": () => (/* binding */ getPostsByCategoryId),
/* harmony export */   "tG": () => (/* binding */ getAllCategories)
/* harmony export */ });
/* unused harmony export getPreviewPost */
const API_URL = process.env.WORDPRESS_API_URL;
async function fetchAPI(query = "", { variables  } = {}) {
    const headers = {
        "Content-Type": "application/json"
    };
    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
        headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
    }
    // WPGraphQL Plugin must be enabled
    const res = await fetch(`${API_URL}/graphql`, {
        headers,
        method: "POST",
        body: JSON.stringify({
            query,
            variables
        })
    });
    const json = await res.json();
    if (json.errors) {
        console.error(JSON.stringify(json.errors));
        throw new Error("Failed to fetch API");
    }
    return json.data;
}
async function getPreviewPost(id, idType = "DATABASE_ID") {
    const data = await fetchAPI(`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`, {
        variables: {
            id,
            idType
        }
    });
    return data.post;
}
async function getAllPostsWithSlug() {
    const data = await fetchAPI(`
    {
      posts(first: 100000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
    return data?.posts;
}
async function getAllPostsForHome(preview) {
    const data = await fetchAPI(`
    query AllPosts {
      posts(first: 200, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `, {
        variables: {
            onlyEnabled: !preview,
            preview
        }
    });
    return data?.posts;
}
async function getPostAndMorePosts(slug, preview, previewData) {
    const postPreview = preview && previewData?.post;
    // The slug may be the id of an unpublished post
    const isId = Number.isInteger(Number(slug));
    const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;
    const isDraft = isSamePost && postPreview?.status === "draft";
    const isRevision = isSamePost && postPreview?.status === "publish";
    const data = await fetchAPI(`
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      wallpaperimage {
        images {
          wallpaper {
            altText
            mediaItemUrl
            mediaDetails {
              width
              height
            }
            mediaType
            mimeType
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      tags {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${// Only some of the fields of a revision are considered as there are some inconsistencies
    isRevision ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        ` : ""}
      }
      posts(first: 30, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `, {
        variables: {
            id: isDraft ? postPreview.id : slug,
            idType: isDraft ? "DATABASE_ID" : "SLUG"
        }
    });
    // Draft posts may not have an slug
    if (isDraft) data.post.slug = postPreview.id;
    // Apply a revision (changes in a published post)
    if (isRevision && data.post.revisions) {
        const revision = data.post.revisions.edges[0]?.node;
        if (revision) Object.assign(data.post, revision);
        delete data.post.revisions;
    }
    // Filter out the main post
    data.posts.edges = data.posts.edges.filter(({ node  })=>node.slug !== slug
    );
    // If there are still 3 posts, remove the last one
    if (data.posts.edges.length > 2) data.posts.edges.pop();
    return data;
}
//Top menu
async function getPrimaryMenu() {
    const data = await fetchAPI(`
  {
    menus(where: {location: TOP}) {
      nodes {
        menuItems {
          edges {
            node {
              path
              label
              uri
              connectedNode {
                node {
                  ... on Page {
                    isPostsPage
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `);
    return data?.menus?.nodes[0];
}
//Category By Slug
async function getCategoryBySlug(slug) {
    const data = await fetchAPI(` 
     {
      categories(where: {slug: "${slug}"}) {
        nodes {
          databaseId
          description
          id
          name
          slug
          seo {
            breadcrumbs {
              text
              url
            }
            fullHead
          }
        }
      }
     } 
  `, {});
    return data?.categories.nodes[0];
}
//Tag By Slug
async function getTagBySlug(slug) {
    const data = await fetchAPI(` 
     {
      tags(where: {slug: "${slug}"}) {
        nodes {
          databaseId
          description
          id
          name
          slug
          seo {
            breadcrumbs {
              text
              url
            }
            fullHead
          }
        }
      }
     } 
  `, {});
    return data?.tags.nodes[0];
}
// get All Categories  
async function getAllCategories(slug) {
    const data = await fetchAPI(`{
    categories(first: 10000) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
        }
      }
    }
  }
  `, {});
    const categoriesData = data?.categories.edges.map(({ node ={}  })=>node
    );
    return categoriesData;
}
// get All Tags  
async function getAllTags(slug) {
    const data = await fetchAPI(`{
    tags(first: 1000000) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
        }
      }
    }
  }
  `, {});
    const tagsData = data?.tags.edges.map(({ node ={}  })=>node
    );
    return tagsData;
}
//Category By Slug
async function getPostsByCategoryId(category, preview = false) {
    const data = await fetchAPI(`
    {
      posts(first: 2000, where: {categoryId: ${category.categoryId}, orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `, {
        variables: {
            onlyEnabled: !preview,
            preview
        }
    });
    return data?.posts;
}
//get Posts By Tag Id
async function getPostsByTagId(tagData, preview = false) {
    const data = await fetchAPI(`
    {
      posts(first: 2000, where: {tagId: "${tagData.tagId}", orderby: { field: DATE, order: DESC }}) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `, {
        variables: {
            onlyEnabled: !preview,
            preview
        }
    });
    return data?.posts;
}
//Category By Slug
async function getAllCatagories() {
    const data = await fetchAPI(`
    {
      categories(first: 20000, where: {exclude: 1, hideEmpty: true}) {
        nodes {
          databaseId
          description
          id
          name
          slug
          count
          catagoryfields {
            catagoryImage {
              mediaItemUrl
              sourceUrl(size: THUMBNAIL)
            }
          }
        }
      }
    }
  `, {});
    return data?.categories?.nodes;
}


/***/ }),

/***/ 4138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ replaceStrAll)
/* harmony export */ });
const replaceStrAll = (str, find, replace)=>{
    return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
};
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}


/***/ }),

/***/ 8299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vC": () => (/* binding */ HOME_OG_IMAGE_URL),
/* harmony export */   "yf": () => (/* binding */ CMS_NAME)
/* harmony export */ });
/* unused harmony exports EXAMPLE_PATH, CMS_URL */
const EXAMPLE_PATH = "cms-wordpress";
const CMS_NAME = "WordPress";
const CMS_URL = "https://wordpress.org";
const HOME_OG_IMAGE_URL = "https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**WordPress**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%2C%253C%253Fxml+version%3D%271.0%27+encoding%3D%27UTF-8%27%253F%253E%253Csvg+preserveAspectRatio%3D%27xMidYMid%27+version%3D%271.1%27+viewBox%3D%270+0+256+255%27+xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%253E%253Cg+fill%3D%27%2523464342%27%253E%253Cpath+d%3D%27m18.124+127.5c0+43.295+25.161+80.711+61.646+98.441l-52.176-142.96c-6.0691+13.603-9.4699+28.657-9.4699+44.515zm183.22-5.5196c0-13.518-4.8557-22.88-9.0204-30.166-5.5446-9.01-10.742-16.64-10.742-25.65+0-10.055+7.6259-19.414+18.367-19.414+0.48494+0+0.94491+0.060358+1.4174+0.087415-19.46-17.828-45.387-28.714-73.863-28.714-38.213+0-71.832+19.606-91.39+49.302+2.5662+0.077008+4.9847+0.13112+7.039+0.13112+11.441+0+29.151-1.3882+29.151-1.3882+5.8963-0.34758+6.5915+8.3127+0.7014+9.01+0+0-5.9255+0.69724-12.519+1.0427l39.832+118.48+23.937-71.79-17.042-46.692c-5.8901-0.3455-11.47-1.0427-11.47-1.0427-5.8942-0.3455-5.2033-9.3575+0.69099-9.01+0+0+18.064+1.3882+28.811+1.3882+11.439+0+29.151-1.3882+29.151-1.3882+5.9005-0.34758+6.5936+8.3127+0.7014+9.01+0+0-5.938+0.69724-12.519+1.0427l39.528+117.58+10.91-36.458c4.7287-15.129+8.3273-25.995+8.3273-35.359zm-71.921+15.087l-32.818+95.363c9.7988+2.8805+20.162+4.4561+30.899+4.4561+12.738+0+24.953-2.202+36.323-6.2002-0.29346-0.46829-0.55987-0.96572-0.77841-1.5069l-33.625-92.112zm94.058-62.046c0.47037+3.4841+0.73678+7.2242+0.73678+11.247+0+11.1-2.073+23.577-8.3169+39.178l-33.411+96.599c32.518-18.963+54.391-54.193+54.391-94.545+0.002081-19.017-4.8557-36.899-13.399-52.48zm-95.977-75.023c-70.304+0-127.5+57.196-127.5+127.5+0+70.313+57.2+127.51+127.5+127.51+70.302+0+127.51-57.194+127.51-127.51-0.002082-70.304-57.209-127.5-127.51-127.5zm0+249.16c-67.08+0-121.66-54.578-121.66-121.66+0-67.08+54.576-121.65+121.66-121.65+67.078+0+121.65+54.574+121.65+121.65+0+67.084-54.574+121.66-121.65+121.66z%27%2F%253E%253C%2Fg%253E%253C%2Fsvg%253E";


/***/ })

};
;