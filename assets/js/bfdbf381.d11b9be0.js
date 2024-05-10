"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13737],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),g=a,y=m["".concat(o,".").concat(g)]||m[g]||c[g]||r;return t?i.createElement(y,l(l({ref:n},u),{},{components:t})):i.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},10171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>m});t(96540);var i=t(15680);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={title:"A Detailed Guide on TypeScript Enum with Examples",description:"We'll explore TypeScript Enums with examples.",slug:"typescript-enum",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-21-typescript-enums/social.png",hide_table_of_contents:!1},o=void 0,p={permalink:"/blog/typescript-enum",source:"@site/blog/2023-05-21-typescript-enums.md",title:"A Detailed Guide on TypeScript Enum with Examples",description:"We'll explore TypeScript Enums with examples.",date:"2023-05-21T00:00:00.000Z",formattedDate:"May 21, 2023",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:12.605,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"A Detailed Guide on TypeScript Enum with Examples",description:"We'll explore TypeScript Enums with examples.",slug:"typescript-enum",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-21-typescript-enums/social.png",hide_table_of_contents:!1},prevItem:{title:"Creating responsive tooltips in React with react-tooltip",permalink:"/blog/react-tooltip"},nextItem:{title:"How to use Zustand",permalink:"/blog/zustand-react-state"},relatedPosts:[{title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:7.225,date:"2022-09-12T00:00:00.000Z"},{title:"Dictionaries in TypeScript -  How to Ensure Type Safety",description:"This post is provides a guide on how to ensure type safety to dictionaries with TypeScript.",permalink:"/blog/typescript-dictionary",formattedDate:"May 7, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:20.44,date:"2024-05-07T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.44,date:"2022-10-03T00:00:00.000Z"}],authorPosts:[{title:"How to Use JavaScript Array Splice",description:"This post is about various uses of the splice() method in JavaScript.",permalink:"/blog/javascript-splice-method",formattedDate:"October 20, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.04,date:"2023-10-20T00:00:00.000Z"},{title:"Audit Log With Refine",description:"We'll apply Refine's built-in audit logging functionality",permalink:"/blog/refine-pixels-7",formattedDate:"February 20, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:15.515,date:"2023-02-20T00:00:00.000Z"},{title:"Building a React Admin Panel with Refine and daisyUI",description:"We'll build a simple React admin panel using Refine and daisyUI.",permalink:"/blog/daisy-ui-react-admin-panel",formattedDate:"September 6, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:60.515,date:"2023-09-06T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"TypeScript Enums Examples",id:"typescript-enums-examples",level:2},{value:"<code>enum</code>s Produce Runtime JavaScript Objects",id:"enums-produce-runtime-javascript-objects",level:3},{value:"<code>enum</code> Types in TypeScript",id:"enum-types-in-typescript",level:2},{value:"String Enums in TypeScript",id:"string-enums-in-typescript",level:3},{value:"Numerical Enums in TypeScript",id:"numerical-enums-in-typescript",level:3},{value:"Enum Member Initialization in TypeScript",id:"enum-member-initialization-in-typescript",level:2},{value:"Member Initialization in TypeScript String Enums",id:"member-initialization-in-typescript-string-enums",level:3},{value:"Member Initialization in TypeScript Numerical Enums",id:"member-initialization-in-typescript-numerical-enums",level:3},{value:"TypeScript Enums at Compile Time and Runtime",id:"typescript-enums-at-compile-time-and-runtime",level:2},{value:"TypeScript String Enums Have Unidirectional Mapping",id:"typescript-string-enums-have-unidirectional-mapping",level:3},{value:"TypeScript Numerical Enums Have Bidirectional Mapping",id:"typescript-numerical-enums-have-bidirectional-mapping",level:3},{value:"Enum Member Values in TypeScript: Constant vs Computed",id:"enum-member-values-in-typescript-constant-vs-computed",level:2},{value:"Constant Values of Enum Members",id:"constant-values-of-enum-members",level:3},{value:"Computed Values of Enum Members",id:"computed-values-of-enum-members",level:3},{value:"Types from TypeScript Enums",id:"types-from-typescript-enums",level:2},{value:"Individual Types",id:"individual-types",level:3},{value:"Union of Member Keys",id:"union-of-member-keys",level:3},{value:"Using TypeScript Enums in Classes",id:"using-typescript-enums-in-classes",level:2},{value:"Summary",id:"summary",level:2}],c={toc:m},g="wrapper";function y(e){var{components:n}=e,t=l(e,["components"]);return(0,i.yg)(g,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){a(e,n,t[n])}))}return e}({},c,t),{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Enum"),"s are constants based data structures that store a set of named constants grouped around a central theme or intent. In TypeScript, Enums are a feature that injects runtime JavaScript objects to an application in addition to providing usual type-level extensions."),(0,i.yg)("p",null,"This post explores ",(0,i.yg)("strong",{parentName:"p"},"enums")," in TypeScript with examples from a tiers based Subscription model where subscription entities differ according to account types and billing schedules."),(0,i.yg)("p",null,"While examining the examples, we discuss underlying ",(0,i.yg)("strong",{parentName:"p"},"enums")," concepts including ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"enum")," member")," types such as ",(0,i.yg)("strong",{parentName:"p"},"string")," or ",(0,i.yg)("strong",{parentName:"p"},"numeric")," and ",(0,i.yg)("strong",{parentName:"p"},"constant")," or ",(0,i.yg)("strong",{parentName:"p"},"computed"),"; ",(0,i.yg)("strong",{parentName:"p"},"homogeneity")," and ",(0,i.yg)("strong",{parentName:"p"},"heterogeneity")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"enum"),"s as well as ",(0,i.yg)("strong",{parentName:"p"},"member initialization")," with or without setting a value. We also explore how an enum translates to an IIFE during compilation, carries out ",(0,i.yg)("strong",{parentName:"p"},"directional mapping")," and injects its JavaScript object to the runtime environment. We examine and leverage the individual types generated by enum members to define our own subtypes and see how the main enum type generates a union of member keys. Lastly, we bring all these enum concepts together to implement a simple ",(0,i.yg)("inlineCode",{parentName:"p"},"PersonalSubscription")," class."),(0,i.yg)("p",null,"In the sections ahead, we relate to examples for the tiers based Subscription model and analyze them to discuss underlying concepts and behaviors."),(0,i.yg)("p",null,"Steps well'll cover:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#typescript-enums-examples"},"TypeScript Enums Examples")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#enum-types-in-typescript"},(0,i.yg)("inlineCode",{parentName:"a"},"enum")," Types in TypeScript")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#enum-member-initialization-in-typescript"},"Enum Member Initialization in TypeScript")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#typescript-enums-at-compile-time-and-runtime"},"TypeScript Enums at Compile Time and Runtime")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#enum-member-values-in-typescript-constant-vs-computed"},"Enum Member Values in TypeScript: Constant vs Computed")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#types-from-typescript-enums"},"Types from TypeScript Enums")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#using-typescript-enums-in-classes"},"Using TypeScript Enums in Classes"))),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("p",null,"In order to properly follow this post and test out the examples, you need to have a JavaScript engine. It could be ",(0,i.yg)("strong",{parentName:"p"},"Node.js")," in your local machine with TypeScript supported or you could use the ",(0,i.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/play#code"},"TypeScript Playground"),"."),(0,i.yg)("h2",{id:"typescript-enums-examples"},"TypeScript Enums Examples"),(0,i.yg)("p",null,"In order to illustrate ",(0,i.yg)("inlineCode",{parentName:"p"},"enum"),"s concepts in TypeScript, we are using a tiers based Subscription model. Let's say, we have a subscription entity stored in a ",(0,i.yg)("inlineCode",{parentName:"p"},"subscriptions")," table. And it has ",(0,i.yg)("inlineCode",{parentName:"p"},"accountType")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"billingSchedule")," attributes."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"accountType"),"s can be one of ",(0,i.yg)("inlineCode",{parentName:"p"},"Personal"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Startup"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Enterprise")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Custom"),". ",(0,i.yg)("inlineCode",{parentName:"p"},"billingSchedule")," can be categorized as one of ",(0,i.yg)("inlineCode",{parentName:"p"},"Free"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Monthly"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Quarterly")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Yearly"),". These possible options indicate an intent to group a subscription based on account type and billing schedule. We can use TypeScript ",(0,i.yg)("inlineCode",{parentName:"p"},"enum"),"s to define types for these attributes. Using ",(0,i.yg)("inlineCode",{parentName:"p"},"enum"),"s not only allows us to declare types for ",(0,i.yg)("inlineCode",{parentName:"p"},"accountType")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"billingSchedule"),", but also creates representative runtime objects which would otherwise need to be produced from a database table for reference."),(0,i.yg)("p",null,"So, to start the proceedings let's define a couple of enums. We can declare the ",(0,i.yg)("inlineCode",{parentName:"p"},"enum")," for ",(0,i.yg)("inlineCode",{parentName:"p"},"accountType")," attribute like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'enum AccountType {\n  PERSONAL = "Personal",\n  STARTUP = "Startup",\n  ENTERPRISE = "Enterprise",\n  CUSTOM = "Custom",\n}\n')),(0,i.yg)("p",null,"We are using ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," literals to initialize all ",(0,i.yg)("inlineCode",{parentName:"p"},"enum")," members in ",(0,i.yg)("inlineCode",{parentName:"p"},"AccountType"),". This is an example of ",(0,i.yg)("strong",{parentName:"p"},"string enum"),"s. Further elaboration ahead in ",(0,i.yg)("a",{parentName:"p",href:"#string-enums-in-typescript"},"an upcoming section"),"."),(0,i.yg)("p",null,"One way of defining an ",(0,i.yg)("inlineCode",{parentName:"p"},"enum")," for ",(0,i.yg)("inlineCode",{parentName:"p"},"billingSchedule")," looks like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"enum BillingSchedule {\n  FREE = 0,\n  MONTHLY,\n  QUARTERLY,\n  YEARLY,\n}\n")),(0,i.yg)("p",null,"Here, we are using a numeric literal to initialize the first member of ",(0,i.yg)("inlineCode",{parentName:"p"},"BillingSchedule"),". This is an example of ",(0,i.yg)("strong",{parentName:"p"},"numeric enum"),"s. More on this in ",(0,i.yg)("a",{parentName:"p",href:"#numerical-enums-in-typescript"},"a later section"),"."),(0,i.yg)("p",null,"Let's quickly test out the runtime role of enums as we start discussing underlying ",(0,i.yg)("inlineCode",{parentName:"p"},"enum"),"s concepts."),(0,i.yg)("h3",{id:"enums-produce-runtime-javascript-objects"},(0,i.yg)("inlineCode",{parentName:"h3"},"enum"),"s Produce Runtime JavaScript Objects"),(0,i.yg)("p",null,"We mentioned before that ",(0,i.yg)("inlineCode",{parentName:"p"},"enum"),"s inject JS objects to runtime environment. This can be observed when we run the following snippet:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'const accountType = AccountType.PERSONAL;\nconst billingSchedule = BillingSchedule.FREE;\n\nconsole.log(accountType); // "Personal"\nconsole.log(billingSchedule); // 0\n')),(0,i.yg)("p",null,"With ",(0,i.yg)("inlineCode",{parentName:"p"},"AccountType.PERSONAL")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"BillingSchedule.FREE"),", we are calling actual objects at runtime and getting appropriate responses. These indicate that TypeScript ",(0,i.yg)("inlineCode",{parentName:"p"},"enum")," definitions are not just simple type definitions, but also introduce JS objects to our application. We revisit this in ",(0,i.yg)("a",{parentName:"p",href:"#typescript-enums-at-compile-time-and-runtime"},"a later part of this post"),"."),(0,i.yg)("h2",{id:"enum-types-in-typescript"},(0,i.yg)("inlineCode",{parentName:"h2"},"enum")," Types in TypeScript"),(0,i.yg)("p",null,"Enum members are typically used to store constants. Members can have string constants, numerical constants or mix of both. Homogeneity of member values determines whether the enum is a ",(0,i.yg)("strong",{parentName:"p"},"string enum")," or a ",(0,i.yg)("strong",{parentName:"p"},"numerical enum"),"."),(0,i.yg)("h3",{id:"string-enums-in-typescript"},"String Enums in TypeScript"),(0,i.yg)("p",null,"When all members of an enum have string values, it is a string enum. As in ",(0,i.yg)("inlineCode",{parentName:"p"},"AccountType"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'enum AccountType {\n  PERSONAL = "Personal",\n  STARTUP = "Startup",\n  ENTERPRISE = "Enterprise",\n  CUSTOM = "Custom",\n}\n')),(0,i.yg)("h3",{id:"numerical-enums-in-typescript"},"Numerical Enums in TypeScript"),(0,i.yg)("p",null,"Similarly, when all members have numerical values, the enum itself becomes numerical:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"enum BillingSchedule {\n  // highlight-next-line\n  FREE = 0,\n  MONTHLY,\n  QUARTERLY,\n  YEARLY,\n}\n")),(0,i.yg)("p",null,"Here, ",(0,i.yg)("inlineCode",{parentName:"p"},"BillingSchedule")," has the first member initialized to a number, and the subsequent ones are uninitialized but TypeScript's enum defaults auto-increment them by ",(0,i.yg)("inlineCode",{parentName:"p"},"1"),". So, all members here are numerical and ",(0,i.yg)("inlineCode",{parentName:"p"}," BillingSchedule")," is a numerical enum. We discuss this more in the next section on enum member initialization."),(0,i.yg)("h2",{id:"enum-member-initialization-in-typescript"},"Enum Member Initialization in TypeScript"),(0,i.yg)("p",null,"String enum members must be initialized explicitly with string values. In numerical enums, they may remain uninitialized and the value is then assigned implicitly by TypeScript."),(0,i.yg)("h3",{id:"member-initialization-in-typescript-string-enums"},"Member Initialization in TypeScript String Enums"),(0,i.yg)("p",null,"For string enums, as we can see in our ",(0,i.yg)("inlineCode",{parentName:"p"},"AccountType")," example, we are explicitly initializing all members:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'enum AccountType {\n  PERSONAL = "Personal",\n  STARTUP = "Startup",\n  ENTERPRISE = "Enterprise",\n  CUSTOM = "Custom",\n}\n')),(0,i.yg)("p",null,"Here, we are using string literals to meaningfully document and describe our intent of grouping account types in to several options, which is useful for our application features and developer experience. Explicit string initialization also helps with serialization of the JS object created at runtime."),(0,i.yg)("p",null,"An uninitialized member coming after a string member is invalid:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'enum AccountType {\n  PERSONAL = "Personal",\n  STARTUP = "Startup",\n  ENTERPRISE = "Enterprise",\n  CUSTOM,\n}\n\n/*\nEnum member must have initializer.(1061)\n(enum member) AccountType.CUSTOM\n*/\n')),(0,i.yg)("p",null,"If ",(0,i.yg)("inlineCode",{parentName:"p"},"CUSTOM")," is uninitialized as the first member, it is assigned ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," by default, but we then have a ",(0,i.yg)("strong",{parentName:"p"},"heterogenous")," enum with a numeric member mixed with string members:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'// Heterogenous enum\n\nenum AccountType {\n  CUSTOM,\n  PERSONAL = "Personal",\n  STARTUP = "Startup",\n  ENTERPRISE = "Enterprise",\n}\n\nconst accountTypeCustom = AccountType.CUSTOM;\nconsole.log(accountTypeCustom); // 0\n')),(0,i.yg)("h3",{id:"member-initialization-in-typescript-numerical-enums"},"Member Initialization in TypeScript Numerical Enums"),(0,i.yg)("p",null,"Members in a numerical enum may or may not be initialized explicitly. Uninitialized members are assigned implicit default values."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Explicitly Initialized Numerical Members")),(0,i.yg)("p",null,"In our ",(0,i.yg)("inlineCode",{parentName:"p"},"BillingSchedule")," enum, we explicitly assigned ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," to the first member:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"// First member initialized, subsequent members auto-increment\n\nenum BillingSchedule {\n  // highlight-next-line\n  FREE = 0,\n  MONTHLY,\n  QUARTERLY,\n  YEARLY,\n}\n")),(0,i.yg)("p",null,"The subsequent members get an auto-incremented value increased by ",(0,i.yg)("inlineCode",{parentName:"p"},"1"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"console.log(BillingSchedule.MONTHLY); // 1\nconsole.log(BillingSchedule.QUARTERLY); // 2\nconsole.log(BillingSchedule.YEARLY); // 3\n")),(0,i.yg)("p",null,"As we can see, initializing a member with a number represents an offset value based on which auto-incremented values of subsequent members are determined. Assigning the first member with ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," represents a zero offset. We could have been better off without initialization of a member at all, like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"// No initialization\n\nenum BillingSchedule {\n  // highlight-next-line\n\n  FREE,\n  MONTHLY,\n  QUARTERLY,\n  YEARLY,\n}\n\nconsole.log(BillingSchedule.FREE); // 0\n")),(0,i.yg)("p",null,"This is because the default offset for first member is ",(0,i.yg)("inlineCode",{parentName:"p"},"0"),". This definition offers more convenience."),(0,i.yg)("p",null,"We can assign an offset anywhere and it would reflect in subsequent implicitly incremented member values:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"enum BillingSchedule {\n  FREE,\n  MONTHLY,\n  QUARTERLY = 5,\n  YEARLY,\n}\n\nconsole.log(BillingSchedule.MONTHLY); // 1\nconsole.log(BillingSchedule.QUARTERLY); // 5\nconsole.log(BillingSchedule.YEARLY); // 6\n")),(0,i.yg)("h2",{id:"typescript-enums-at-compile-time-and-runtime"},"TypeScript Enums at Compile Time and Runtime"),(0,i.yg)("p",null,"At compile time, TypeScript translates an enum to a corresponding IIFE which then introduces into runtime a JavaScript object representation of the enum."),(0,i.yg)("p",null,"String members and numeric members behave differently at compilation. A string member gets mapped ",(0,i.yg)("strong",{parentName:"p"},"unidirectionally")," to its corresponding JavaScript object property. In contrast, a numeric member gets mapped ",(0,i.yg)("strong",{parentName:"p"},"bi-directionally")," to its runtime object property. So, as we see in the sections below, string enums are limited to unidirectional navigation, but numeric members offer us the convenience of bidirectional access to constants."),(0,i.yg)("h3",{id:"typescript-string-enums-have-unidirectional-mapping"},"TypeScript String Enums Have Unidirectional Mapping"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"AccountType")," enum we declared in the beginning compiles to the following JS code:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'/*\nenum AccountType {\n    PERSONAL = "Personal",\n    STARTUP = "Startup",\n    ENTERPRISE = "Enterprise",\n    CUSTOM = "Custom"\n}\n*/\n\n"use strict";\nvar AccountType;\n(function (AccountType) {\n  AccountType.PERSONAL = "Personal";\n  AccountType["STARTUP"] = "Startup";\n  AccountType["ENTERPRISE"] = "Enterprise";\n  AccountType["CUSTOM"] = "Custom";\n})(AccountType || (AccountType = {}));\n')),(0,i.yg)("p",null,"This IIFE propels the following object to runtime:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    PERSONAL: "Personal",\n    STARTUPP: "Startup",\n    ENTERPRISEP: "Enterprise",\n    CUSTOMP: "Custom"\n}\n')),(0,i.yg)("p",null,"Unidrectional mapping of a string member sets only the constant names as keys and therefore limits access to the enum only via constant names only, not by the value:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"console.log(AccountType.PERSONAL); // \"Personal\"\nconsole.log(AccountType.Personal); // Property 'Personal' does not exist on type 'typeof AccountType'. Did you mean 'PERSONAL'?(2551)\n")),(0,i.yg)("p",null,"Accessing the enum via member values is possible in numeric enums, as we'll see next."),(0,i.yg)("h3",{id:"typescript-numerical-enums-have-bidirectional-mapping"},"TypeScript Numerical Enums Have Bidirectional Mapping"),(0,i.yg)("p",null,"In contrast to unidirectional mapping of string enums, numerical enums compile to bidirectional JS objects. Our ",(0,i.yg)("inlineCode",{parentName:"p"},"BillingSchedule")," object translates to the following IIFE:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'/*\nenum BillingSchedule {\n    FREE,\n    MONTHLY,\n    QUARTERLY = 5,\n    YEARLY\n}\n*/\n\n"use strict";\nvar BillingSchedule;\n(function (BillingSchedule) {\n  BillingSchedule[(BillingSchedule["FREE"] = 0)] = "FREE";\n  BillingSchedule[(BillingSchedule["MONTHLY"] = 0)] = "MONTHLY";\n  BillingSchedule[(BillingSchedule["QUARTERLY"] = 0)] = "QUARTERLY";\n  BillingSchedule[(BillingSchedule["YEARLY"] = 0)] = "YEARLY";\n})(BillingSchedule || (BillingSchedule = {}));\n')),(0,i.yg)("p",null,"And it introduces this object to the runtime environment:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    "0": "FREE",\n    "1": "MONTHLY",\n    "2": "QUARTERLY",\n    "3": "YEARLY",\n    "FREE": 0,\n    "MONTHLY": 1,\n    "QUARTERLY": 2,\n    "YEARLY": 3\n}\n')),(0,i.yg)("p",null,"So, now we are able to navigate both ways for numeric members:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'console.log(BillingSchedule.FREE); // 0\nconsole.log(BillingSchedule[0]); // "FREE"\nconsole.log(BillingSchedule.YEARLY); // 3\nconsole.log(BillingSchedule[3]); // "YEARLY"\n')),(0,i.yg)("h2",{id:"enum-member-values-in-typescript-constant-vs-computed"},"Enum Member Values in TypeScript: Constant vs Computed"),(0,i.yg)("p",null,"Enum member values can be ",(0,i.yg)("strong",{parentName:"p"},"constant")," or ",(0,i.yg)("strong",{parentName:"p"},"computed"),"."),(0,i.yg)("h3",{id:"constant-values-of-enum-members"},"Constant Values of Enum Members"),(0,i.yg)("p",null,"In both our examples, the value of enums are constant. However, there are subtle differences among constant values too. For example, in the ",(0,i.yg)("inlineCode",{parentName:"p"},"AccountType")," enum, all values are string literals which are considered as ",(0,i.yg)("strong",{parentName:"p"},"literal enum expressions"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'enum AccountType {\n  PERSONAL = "Personal",\n  STARTUP = "Startup",\n  ENTERPRISE = "Enterprise",\n  CUSTOM = "Custom",\n}\n')),(0,i.yg)("p",null,"Similarly, in the following ",(0,i.yg)("inlineCode",{parentName:"p"},"BillingSchedule")," enum, the numeric literal ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," is also a literal enum expression:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"enum BillingSchedule {\n  FREE = 0,\n  MONTHLY,\n  QUARTERLY,\n  YEARLY,\n}\n")),(0,i.yg)("p",null,"Uninitialized members which implicitly get assigned numeric literals are also considered constants. As all the members have in this version of ",(0,i.yg)("inlineCode",{parentName:"p"},"BillingSchedule"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"enum BillingSchedule {\n  FREE,\n  MONTHLY,\n  QUARTERLY,\n  YEARLY,\n}\n")),(0,i.yg)("p",null,"There are other nuanced forms of literal enum expressions, such as a value referenced from another enum member. For the rest of the possible cases, please look up the ",(0,i.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/enums.html"},"TypeScript ",(0,i.yg)("strong",{parentName:"a"},"Enums")," docs"),"."),(0,i.yg)("h3",{id:"computed-values-of-enum-members"},"Computed Values of Enum Members"),(0,i.yg)("p",null,"A computed value is assumed when a member's value is computed from a JavaScript expression. We have no such use case in our examples, but a basic instance would look like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'enum ABasicExample {\n    A_BASIC_EXAMPLE = "A Basic Example".length;\n}\n')),(0,i.yg)("h2",{id:"types-from-typescript-enums"},"Types from TypeScript Enums"),(0,i.yg)("p",null,"So far, we have explored only the object aspects of TypeScript enums. Let's now consider types act out in enums."),(0,i.yg)("p",null,"When all members of an enum are literal enum expressions, types for each member are generated from their member names. And the enum itself effectively becomes a union of all the subtypes."),(0,i.yg)("h3",{id:"individual-types"},"Individual Types"),(0,i.yg)("p",null,"Individual types are generated from each member when all members of the enum are either string literals or numeric literals. This becomes clear when such standalone types are used to define new subtypes. For example, from our ",(0,i.yg)("inlineCode",{parentName:"p"},"AccountType")," enum, we can produce a few account subtypes which uses the member types:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"type TPersonalAccount = {\n  // highlight-next-line\n  tier: AccountType.PERSONAL;\n  postsQuota: number;\n  verified: boolean;\n};\n\ninterface IStartupAccount {\n  // highlight-next-line\n  tier: AccountType.STARTUP;\n  postsQuota: number;\n  verified: boolean;\n}\n")),(0,i.yg)("p",null,"In the above type definitions, we are using ",(0,i.yg)("inlineCode",{parentName:"p"},"AccountType.PERSONAL")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"AccountType.STARTUP")," enum member types to define new subtypes of accounts."),(0,i.yg)("p",null,"In a similar vein, let's look at a subtype derived from a ",(0,i.yg)("inlineCode",{parentName:"p"},"BillingSchedule")," member:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"interface IFreeBilling {\n  tier: BillingSchedule.FREE;\n  startDate: string | boolean;\n  expiryDate: string | boolean;\n}\n")),(0,i.yg)("h3",{id:"union-of-member-keys"},"Union of Member Keys"),(0,i.yg)("p",null,"The type generated by the enum itself is effectively a union of all enum member types. It can be accessed with the ",(0,i.yg)("inlineCode",{parentName:"p"},"keyof typeof")," functions chained like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'/*\n    enum AccountType {\n        PERSONAL = "Personal",\n        STARTUP = "Startup",\n        ENTERPRISE = "Enterprise",\n        CUSTOM = "Custom"\n    }\n*/\n\ntype TAccountType = keyof typeof AccountType;\n\n/*\nThe generated type is equivalent to:\n\n    type TAccountType = "PERSONAL" | "STARTUP" | ENTERPRISE | "ENTERPRISE" | "CUSTOM";\n*/\n')),(0,i.yg)("p",null,"The code above first accesses the enum object with ",(0,i.yg)("inlineCode",{parentName:"p"},"typeof")," and then grabs the member names (keys) with ",(0,i.yg)("inlineCode",{parentName:"p"},"keyof"),"."),(0,i.yg)("p",null,"With these essential concepts covered, let's now see how to use enums and its generated types inside TypeScript classes."),(0,i.yg)("h2",{id:"using-typescript-enums-in-classes"},"Using TypeScript Enums in Classes"),(0,i.yg)("p",null,"We can now refactor some of the enums and type definitions and implement a rudimentary ",(0,i.yg)("inlineCode",{parentName:"p"},"PersonalSubscription")," class which uses them:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'enum AccountType {\n  PERSONAL = "Personal",\n  STARTUP = "Startup",\n  ENTERPRISE = "Enterprise",\n  CUSTOM = "Custom",\n}\n\nenum BillingSchedule {\n  FREE,\n  MONTHLY,\n  QUARTERLY,\n  YEARLY,\n}\n\ntype TAccount<AccountType> = {\n  tier: AccountType;\n  postsQuota: number;\n  verified: boolean;\n};\n\ninterface IBilling<BillingSchedule> {\n  tier: BillingSchedule;\n  startDate: string | boolean;\n  expiryDate: string | boolean;\n}\n\nclass PersonalAccount implements TAccount<AccountType.PERSONAL> {\n  tier: AccountType.PERSONAL = AccountType.PERSONAL;\n  postsQuota = 2;\n  verified = false;\n}\n\nclass FreeBilling implements IBilling<BillingSchedule.FREE> {\n  tier: BillingSchedule.FREE = BillingSchedule.FREE;\n  startDate = false;\n  expiryDate = false;\n}\n\ninterface IPersonalSubscription<TAccount, IBilling> {\n  accountType: TAccount;\n  billingSchedule: IBilling;\n  creditCard: string;\n}\n\nclass PersonalSubscription\n  implements\n    IPersonalSubscription<\n      TAccount<AccountType.PERSONAL>,\n      IBilling<BillingSchedule.FREE>\n    >\n{\n  accountType = new PersonalAccount();\n  billingSchedule = new FreeBilling();\n  creditCard: string = "XXXXXXXXXXXXXXXX";\n}\n')),(0,i.yg)("p",null,"In the above code, for ",(0,i.yg)("inlineCode",{parentName:"p"},"BillingSchedule")," we have used a numeric enum with all uninitialized members. The first member is therefore assigned ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," and subsequent ones get auto-incremented by ",(0,i.yg)("inlineCode",{parentName:"p"},"1"),". We have used generics to pass in ",(0,i.yg)("inlineCode",{parentName:"p"},"AccountType")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"BillingSchedule")," types to ",(0,i.yg)("inlineCode",{parentName:"p"},"TAccount")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"IBilling")," respectively so their use becomes more flexible in the ",(0,i.yg)("inlineCode",{parentName:"p"},"PersonalAccount")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"FreeBilling")," classes as well as in the ",(0,i.yg)("inlineCode",{parentName:"p"},"IPersonalSubscription")," type, where we are using enum members both as constant values as well as type definitions."),(0,i.yg)("br",null),(0,i.yg)("div",null,(0,i.yg)("a",{href:"https://discord.gg/refine"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,i.yg)("h2",{id:"summary"},"Summary"),(0,i.yg)("p",null,"In this post, we explored TypeScript enum concepts by storing groups of constants in a couple of enums defined to implement a simplistic tier based Subscription model. We stored constants in enums for ",(0,i.yg)("inlineCode",{parentName:"p"},"AccountType")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"BillingSchedule"),". On our way, we found that it is mandatory to initialize every member in a string enum, and which is not necessary in a numeric enum. We saw how an uninitialized first member is automatically assigned an offset of ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," and subsequent members get auto-incremented by ",(0,i.yg)("inlineCode",{parentName:"p"},"1"),". We learned how to assign offset values at any point in a numeric enum."),(0,i.yg)("p",null,"We also demonstrated how string enums implement unidirectional mapping and numeric enums implement a more convenient unidirectional mapping at compiltion and got an idea of typical objects introduced by them to runtime. We discussed the common usage of literal enum expressions in declaring string and numeric enums with constant values, and how they differ from computed member values."),(0,i.yg)("p",null,"Towards the end, we explored the types generated by the enums and leveraged them to derive our own subtypes. Finally we implemented a basic ",(0,i.yg)("inlineCode",{parentName:"p"},"PersonalSubscription")," class that demonstrates the convenience offered by objects and types generated by TypeScript enums."))}y.isMDXComponent=!0}}]);