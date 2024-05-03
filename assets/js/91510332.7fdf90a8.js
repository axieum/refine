"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36039],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(96540);var a=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"React useEffect Cleanup Function",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",slug:"useeffect-cleanup",authors:"peter_osah",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-22-useeffect-cleanup/social.png",hide_table_of_contents:!1},c=void 0,s={permalink:"/blog/useeffect-cleanup",source:"@site/blog/2024-03-22-useeffect-cleanup.md",title:"React useEffect Cleanup Function",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",date:"2024-03-22T00:00:00.000Z",formattedDate:"March 22, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:5.865,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"React useEffect Cleanup Function",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",slug:"useeffect-cleanup",authors:"peter_osah",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-22-useeffect-cleanup/social.png",hide_table_of_contents:!1},prevItem:{title:"Tailwind Animations with Examples",permalink:"/blog/tailwind-animations"},nextItem:{title:"Building a CRUD app with Shadcn UI and Refine",permalink:"/blog/shadcn-ui"},relatedPosts:[{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.78,date:"2022-07-21T00:00:00.000Z"},{title:"Dynamic Forms with React Hook Form",description:"How to build dynamic forms with React hook form in React CRUD apps.",permalink:"/blog/dynamic-forms-in-react-hook-form",formattedDate:"December 23, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:21.955,date:"2022-12-23T00:00:00.000Z"},{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with Refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.095,date:"2023-02-23T00:00:00.000Z"}],authorPosts:[{title:"Building components with Radix UI",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",permalink:"/blog/radix-ui",formattedDate:"April 4, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.375,date:"2024-04-04T00:00:00.000Z"},{title:"Swiper.js Tutorial - A Powerful Touch Slider Library",description:"We'll take a dive into the Swiper.js library, a powerful JavaScript library that lets you quickly add touch-enabled and responsive sliders to your website or web application.",permalink:"/blog/swiper-js",formattedDate:"December 7, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:13.65,date:"2023-12-07T00:00:00.000Z"},{title:"Building a Complete React CRUD App with Airtable",description:"We will be building a Complete React CRUD application using Refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/react-crud-app-airtable",formattedDate:"January 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:29.64,date:"2023-01-17T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"What are \u201cside-effects\u201d?",id:"what-are-side-effects",level:2},{value:"Why cleanup \u201cside-effects\u201d?",id:"why-cleanup-side-effects",level:2},{value:"What is the <code>useEffect</code> cleanup function?",id:"what-is-the-useeffect-cleanup-function",level:2},{value:"What does <code>useEffect</code> function do?",id:"what-does-useeffect-function-do",level:2},{value:"When to use the <code>useEffect</code> cleanup function",id:"when-to-use-the-useeffect-cleanup-function",level:2},{value:"Fetch requests",id:"fetch-requests",level:3},{value:"Timeouts",id:"timeouts",level:3},{value:"Intervals",id:"intervals",level:3},{value:"Event Listeners",id:"event-listeners",level:3},{value:"Web sockets",id:"web-sockets",level:3},{value:"Conclusion.",id:"conclusion",level:2}],d={toc:u},m="wrapper";function h(e){var{components:t}=e,n=r(e,["components"]);return(0,a.yg)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook is a popular hook that combines the functionality of ",(0,a.yg)("inlineCode",{parentName:"p"},"componentDidMount"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"componentDidUpdate"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"componentWillUnmount")," lifecycle methods of ",(0,a.yg)("inlineCode",{parentName:"p"},"React")," class components. The hook helps developers handle side effects in their programmes. Side effects may involve receiving data from an ",(0,a.yg)("strong",{parentName:"p"},"API"),", configuring ",(0,a.yg)("strong",{parentName:"p"},"event listeners"),", or subscribing to a ",(0,a.yg)("strong",{parentName:"p"},"WebSocket"),". All of these activities might influence the state of your application and may cause memory leaks if not taken care of."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook comes with a cleanup function that cleans up effects to prevent memory leaks, which in turn improves the performance of the application. In this article, we will explain the cleanup function of the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,a.yg)("h2",{id:"what-are-side-effects"},"What are \u201cside-effects\u201d?"),(0,a.yg)("p",null,'A "',(0,a.yg)("strong",{parentName:"p"},"side effect"),'" is an operation that impacts something other than the function being executed.\nIn React, a side effect occurs when we impact something outside the scope of React in our ',(0,a.yg)("inlineCode",{parentName:"p"},"React")," components.\nA ",(0,a.yg)("strong",{parentName:"p"},"side effect")," could be retrieving data from a remote server, reading or writing to local storage, configuring event listeners, or creating a subscription. These side effects could also occur when a button is clicked, a form is submitted, or a component is mounted and unmounted."),(0,a.yg)("h2",{id:"why-cleanup-side-effects"},"Why cleanup \u201cside-effects\u201d?"),(0,a.yg)("p",null,"Cleaning up side effects in ",(0,a.yg)("inlineCode",{parentName:"p"},"React")," is a method of removing side effects that are no longer required. This, in turn, avoids ",(0,a.yg)("strong",{parentName:"p"},"memory leaks"),", which occur when your program or application attempts to perform an unnecessary operation or update a state memory location that no longer exists."),(0,a.yg)("h2",{id:"what-is-the-useeffect-cleanup-function"},"What is the ",(0,a.yg)("inlineCode",{parentName:"h2"},"useEffect")," cleanup function?"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," cleanup function is a return function within the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useEffect } from "React";\n\nuseEffect(() => {\n  // Your effect\n  return () => {\n    // Cleanup\n  };\n}, []);\n')),(0,a.yg)("h2",{id:"what-does-useeffect-function-do"},"What does ",(0,a.yg)("inlineCode",{parentName:"h2"},"useEffect")," function do?"),(0,a.yg)("p",null,"The function allows React developers to stop side effects that do not need to be executed before our component is unmounted."),(0,a.yg)("p",null,"For example, you have a ",(0,a.yg)("inlineCode",{parentName:"p"},"React")," component that performs a certain action in a ",(0,a.yg)("inlineCode",{parentName:"p"},"setTimeout"),". Every time the component is shown, it runs the ",(0,a.yg)("inlineCode",{parentName:"p"},"setTimeout")," function and performs the action in the timeout on that component.\nAssuming You decided to navigate away from this component and into another portion of the app. The component is no longer being rendered, thus there is no need to leave the ",(0,a.yg)("inlineCode",{parentName:"p"},"setTimeout")," function running in the background. However, the setTimeout function is still running in the background."),(0,a.yg)("p",null,"This is where the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," cleaning function comes in. In the cleanup function, we can simply add a ",(0,a.yg)("inlineCode",{parentName:"p"},"clearTimeout")," which clears the timeout when the component is unmounted (i.e., no longer rendered)."),(0,a.yg)("h2",{id:"when-to-use-the-useeffect-cleanup-function"},"When to use the ",(0,a.yg)("inlineCode",{parentName:"h2"},"useEffect")," cleanup function"),(0,a.yg)("p",null,"There are various scenarios which will prompt the use of the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," cleanup function. Thery are as follows:"),(0,a.yg)("h3",{id:"fetch-requests"},"Fetch requests"),(0,a.yg)("p",null,"When initiating an ",(0,a.yg)("strong",{parentName:"p"},"API")," request in a component, it is important that we also account for a way to abort the request when the component is unmounted or re-rendered.\nThere are several methods for canceling fetch request calls; we can use the native ",(0,a.yg)("inlineCode",{parentName:"p"},"fetch")," ",(0,a.yg)("inlineCode",{parentName:"p"},"AbortController")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"Axios's")," ",(0,a.yg)("inlineCode",{parentName:"p"},"AbortController")," (If you are utilizing ",(0,a.yg)("inlineCode",{parentName:"p"},"Axios")," as our API Client)."),(0,a.yg)("p",null,"To utilise ",(0,a.yg)("inlineCode",{parentName:"p"},"AbortController"),", first, create a controller with the ",(0,a.yg)("inlineCode",{parentName:"p"},"AbortController()")," constructor. When our fetch request is initiated, we pass ",(0,a.yg)("inlineCode",{parentName:"p"},"signal")," as an option in the request's options object."),(0,a.yg)("p",null,"This associates the controller and signals with the fetch request, allowing us to cancel the request call at any time using the ",(0,a.yg)("inlineCode",{parentName:"p"},"AbortController.abort()")," method.\nWe will then add the ",(0,a.yg)("inlineCode",{parentName:"p"},"AbortController.abort()")," method to our ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," cleanup function to ensure that the request is aborted when the component is unmounted or re-rendered."),(0,a.yg)("p",null,"Examples of the useCases are displayed below:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Fetch example:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  //create the abort controller\n  let controller = new AbortController();\n\n  (async () => {\n    try {\n      const response = await fetch(APIEndpoint, {\n        // attach the controller to the request\n        signal: controller.signal,\n      });\n      // add the sucess response to a state value\n    } catch (e) {\n      // Handle the error\n    }\n  })();\n  //abort the request when the component umounts\n  return () => controller?.abort();\n}, []);\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Axios example:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  // create a controller\n  let controller = new AbortController();\n\n  (async () => {\n    try {\n      const response = await axios.get(APIEndpoint, {\n        // attach the controller to the request\n        signal: controller.signal,\n      });\n\n      // add the sucess response to a state value\n    } catch (e) {\n      // Handle the error\n    }\n  })();\n  //abort the request when the component umounts\n  return () => controller?.abort();\n}, []);\n")),(0,a.yg)("h3",{id:"timeouts"},"Timeouts"),(0,a.yg)("p",null,"For timeouts, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"setTimeout(callback, timeInMs)")," timer function in the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook, followed by the ",(0,a.yg)("inlineCode",{parentName:"p"},"clearTimeout(timerId)")," function in the cleanup function. This guarantees that the timer is cleared when the component is unmounted."),(0,a.yg)("p",null,"An example of this is displayed below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  let timerId = setTimeout(() => {\n    // perform an action like state update\n    timerId = null;\n  }, 5000);\n\n  // clear the timer when component unmouts\n  return () => clearTimeout(timerId);\n}, []);\n")),(0,a.yg)("h3",{id:"intervals"},"Intervals"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"setInterval(callback, timeInMs)")," function can be declared in the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook, and the ",(0,a.yg)("inlineCode",{parentName:"p"},"clearInterval(intervalId)")," function can be added to the cleanup function to handle intervals. By doing this, you can be sure that the timer will stop when the part is unmounted."),(0,a.yg)("p",null,"An example of this is displayed below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  let intervalId = setInterval(() => {\n    // perform an action like state update\n    intervalId = null;\n  }, 5000);\n\n  // cleanup the interval when component unmounts\n  return () => clearInterval(interval);\n}, []);\n")),(0,a.yg)("h3",{id:"event-listeners"},"Event Listeners"),(0,a.yg)("p",null,"For event listeners, you can define them in the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," callback by attaching the ",(0,a.yg)("inlineCode",{parentName:"p"},"addEventListener")," function to the element, and then cleanup the listeners by attaching the ",(0,a.yg)("inlineCode",{parentName:"p"},"removeEventListener")," function to the element on the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," cleanup function. This guarantees that the listener is removed from the element when the component is mounted."),(0,a.yg)("p",null,"A simple usage of this is displayed in the example below, which is a custom hook for handling click events that occur outside of a certain ",(0,a.yg)("inlineCode",{parentName:"p"},"DOM")," element, such as a ",(0,a.yg)("inlineCode",{parentName:"p"},"div"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const useOutsideClick = (callback: () => void) => {\n  const ref = useRef<HTMLElement>();\n\n  useEffect(() => {\n    const handleClick = (event: Event) => {\n      if (ref.current && !ref.current.contains(event.target as Node)) {\n        callback();\n      }\n    };\n\n    document.addEventListener("click", handleClick, true);\n\n    return () => {\n      document.removeEventListener("click", handleClick, true);\n    };\n  }, [callback, ref]);\n\n  return ref;\n};\n')),(0,a.yg)("h3",{id:"web-sockets"},"Web sockets"),(0,a.yg)("p",null,"For ",(0,a.yg)("strong",{parentName:"p"},"WebSockets"),", When you create a ",(0,a.yg)("strong",{parentName:"p"},"WebSocket")," connection in a component, you can close it when the component unmounts by including the ",(0,a.yg)("inlineCode",{parentName:"p"},"socket.close()")," method in the cleanup function."),(0,a.yg)("p",null,"An example of this is displayed below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  const ws = new WebSocket(url, protocols);\n  // perform socket related actions\n\n  // cleanup web socket when component unmounts\n  return () => ws.close();\n}, []);\n")),(0,a.yg)("h2",{id:"conclusion"},"Conclusion."),(0,a.yg)("p",null,"In this article, we learned about side effects and how they create memory leaks and unwanted behaviors in ",(0,a.yg)("inlineCode",{parentName:"p"},"React")," components. We also looked at how to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," cleanup function to fix memory leaks.\nUnderstanding how and when to repair memory leaks with the cleanup function is a significant step toward becoming a better React developer."))}h.isMDXComponent=!0}}]);