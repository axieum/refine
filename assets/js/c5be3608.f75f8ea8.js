"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37959],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>m});n(96540);var i=n(15680);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["Refine","react","material-ui","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",source:"@site/blog/2022-07-21-admin-panel-with-materialui-and-strapi.md",title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",date:"2022-07-21T00:00:00.000Z",formattedDate:"July 21, 2022",tags:[{label:"Refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"strapi",permalink:"/blog/tags/strapi"}],readingTime:16.78,hasTruncateMarker:!0,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["Refine","react","material-ui","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",hide_table_of_contents:!1},prevItem:{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react"},nextItem:{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program"},relatedPosts:[{title:"How to use Material UI Card Component",description:"We'll discover the Material UI Card component with examples",permalink:"/blog/material-ui-card",formattedDate:"January 4, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.22,date:"2023-01-04T00:00:00.000Z"},{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"November 24, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:6.915,date:"2022-11-24T00:00:00.000Z"},{title:"Adding CRUD Actions and Authentication",description:"We'll initialize our Pixels app using Refine and get familiar with the boilerplate code to be created with the create refine-app CLI tool.",permalink:"/blog/refine-pixels-3",formattedDate:"February 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:29.96,date:"2023-02-16T00:00:00.000Z"}],authorPosts:[{title:"Low Code Limitations - Exploring the Risk of Vendor Lock-In",description:"We discuss the limitations and risks associated with low-code platforms and how to avoid getting stuck with one vendor.",permalink:"/blog/low-code-tools",formattedDate:"April 19, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.255,date:"2024-04-19T00:00:00.000Z"},{title:"refine Joins the Hacktoberfest Fun",description:"Hactoberfest is back and we are excited to be a part of it. Join us in making open source contributions.",permalink:"/blog/hacktoberfest-refine",formattedDate:"October 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.88,date:"2022-10-04T00:00:00.000Z"},{title:"4 Ways to Generate UUIDs in Node.js",description:"We'll explore how UUIDs work in Node.js and how they can help keep data distinct and make your projects easier to scale.",permalink:"/blog/node-js-uuid",formattedDate:"April 24, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.355,date:"2024-04-24T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2}],u={toc:m},d="wrapper";function g(e){var{components:t}=e,n=o(e,["components"]);return(0,i.yg)(d,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,i.yg)("strong",{parentName:"p"},"Refine"),". Although we plan to update it with the latest version of ",(0,i.yg)("strong",{parentName:"p"},"Refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,i.yg)("p",{parentName:"admonition"},"You should know that ",(0,i.yg)("strong",{parentName:"p"},"Refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,i.yg)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"We will build an ",(0,i.yg)("strong",{parentName:"p"},"admin panel")," that supports ",(0,i.yg)("strong",{parentName:"p"},"CRUD")," operations, has built-in ",(0,i.yg)("strong",{parentName:"p"},"authentication"),", and a ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/mutation-mode/"},"mutation mode")," feature using industry-standard best tools."),(0,i.yg)("p",null,"Industry-standard tools and practices can be hard to reach and time-consuming to maintain on your own. Frameworks can save you time by doing these jobs for you. So, we'll use powerful frameworks including ",(0,i.yg)("a",{parentName:"p",href:"https://mui.com"},"Material UI"),", ",(0,i.yg)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi"),", and ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/"},"Refine")," to build a high-quality admin panel."))}g.isMDXComponent=!0}}]);