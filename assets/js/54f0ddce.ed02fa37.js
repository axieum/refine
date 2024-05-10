"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47790],{99546:(e,t,n)=>{n.d(t,{O:()=>m});var i=n(20053),o=n(96540),r=n(59047),a=n(7363),s=n(33257);const l=({horizontalSize:e,onMouseDown:t})=>o.createElement("div",{className:(0,i.A)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:t,style:{left:`calc(${e}% - 5px)`}});function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){c(e,t,n[t])}))}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m=e=>"nextjs"===(null==e?void 0:e.template)?o.createElement(g,e):o.createElement(f,e),f=e=>{var t,n,c,m,f,g,{startRoute:h,showNavigator:y,showLineNumbers:b,showOpenInCodeSandbox:v,initialPercentage:w=50,dependencies:k,showReadOnly:N,options:x={showTabs:!0,initMode:"lazy",classes:{"sp-bridge-frame":"!hidden","sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,i.A)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-file-explorer":"border-r !border-r-gray-300 dark:!border-r-gray-700","sp-console":(0,i.A)("not-prose","!border-t-0 !border !border-solid !border-t-none","!border-gray-300 dark:!border-gray-700","!rounded-bl-lg !rounded-br-lg","!bg-refine-react-light-code","dark:!bg-refine-react-dark-code"),"sp-console-header":(0,i.A)("!bg-gray-0 dark:!bg-gray-800","border-b border-solid !border-b-gray-300 dark:!border-b-gray-700","!h-[32px] !min-h-[32px]"),"sp-console-header-actions":(0,i.A)("h-full","!gap-0"),"sp-console-header-button":(0,i.A)("!bg-transparent","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link","h-full","!text-gray-800 dark:!text-gray-100","!rounded-none","-ml-px"),"sp-console-list":(0,i.A)("!bg-refine-react-light-code","dark:!bg-refine-react-dark-code","[&>code]:!bg-transparent"),"sp-tab-button":(0,i.A)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:P="react-ts",customSetup:O,files:C,previewOnly:R,layout:T,height:E=420,wrapperClassName:S,className:A,showFiles:j=!1,showConsole:B=!1,hidePreview:F=!1}=e,D=p(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[M,I]=o.useState(!1);o.useEffect((()=>{I(!0)}),[]);const{colorMode:U}=(0,s.G)();var z,L;null!=x||(x={}),null!==(z=(f=x).resizablePanels)&&void 0!==z||(f.resizablePanels=!0),null!==(L=(g=x).editorWidthPercentage)&&void 0!==L||(g.editorWidthPercentage=null!=w?w:50);const G={showTabs:x.showTabs,showLineNumbers:x.showLineNumbers,showInlineErrors:x.showInlineErrors,wrapContent:x.wrapContent,closableTabs:x.closableTabs,initMode:x.initMode,extensions:null===(t=x.codeEditor)||void 0===t?void 0:t.extensions,extensionsKeymap:null===(n=x.codeEditor)||void 0===n?void 0:n.extensionsKeymap,readOnly:x.readOnly,showReadOnly:null!=N?N:x.showReadOnly,additionalLanguages:null===(c=x.codeEditor)||void 0===c?void 0:c.additionalLanguages},H={activeFile:x.activeFile,visibleFiles:x.visibleFiles,recompileMode:x.recompileMode,recompileDelay:x.recompileDelay,autorun:x.autorun,autoReload:x.autoReload,bundlerURL:x.bundlerURL,startRoute:x.startRoute,skipEval:x.skipEval,fileResolver:x.fileResolver,initMode:x.initMode,initModeObserverOptions:x.initModeObserverOptions,externalResources:x.externalResources,logLevel:x.logLevel,classes:x.classes},[W,$]=o.useState(!1),{onHandleMouseDown:X,horizontalSize:q}=(({initialSize:e=50})=>{const[t,n]=o.useState(e),i=o.useRef(null),r=e=>{if(!i.current)return;const t=i.current.parentElement;if(!t)return;const{left:o,width:r}=t.getBoundingClientRect(),a=(e.clientX-o)/r*100,s=Math.min(Math.max(a,25),75);n(s),t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},a=()=>{var e;const t=null===(e=i.current)||void 0===e?void 0:e.parentElement;t&&(t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),i.current=null)};return o.useEffect((()=>(document.body.addEventListener("mousemove",r),document.body.addEventListener("mouseup",a),()=>{document.body.removeEventListener("mousemove",r),document.body.removeEventListener("mouseup",a)})),[]),{horizontalSize:t,onHandleMouseDown:o.useCallback((e=>{i.current=e.target}),[])}})({initialSize:x.editorWidthPercentage}),_=!R&&!(null==T?void 0:T.includes("col"));var Y,K,Z,J,Q;return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,i.A)("pb-6",S)},o.createElement("div",{className:(0,i.A)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",A)},o.createElement(a.l5,d({key:`${P}-${U}-${M}`,customSetup:d({dependencies:k},O),files:C,options:u(d({},H),{classes:u(d({},H.classes),{"sp-layout":(0,i.A)(null===(m=H.classes)||void 0===m?void 0:m["sp-layout"],B&&"!rounded-bl-none !rounded-br-none")})}),template:P,theme:"light"===U?u(d({},r.Zw),{colors:u(d({},r.Zw.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):u(d({},r.hc),{colors:u(d({},r.hc.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,i.A)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},D),o.createElement(a.am,{className:(0,i.A)("col"===T&&"!flex-col","col-reverse"===T&&"!flex-col-reverse")},j&&o.createElement(a.Lm,{autoHiddenFiles:!0,style:{height:null!==(Y=x.editorHeight)&&void 0!==Y?Y:E}}),!R&&o.createElement(a.cW,u(d({},G),{showLineNumbers:b,closableTabs:j,initMode:"lazy",style:u(d({height:null!==(K=x.editorHeight)&&void 0!==K?K:E},(null==T?void 0:T.includes("col"))?{flex:"initial"}:{flexGrow:q,flexShrink:q,flexBasis:0}),{overflow:"hidden"})})),_?o.createElement(l,{onMouseDown:X,horizontalSize:q}):null,F?null:o.createElement(o.Fragment,null,o.createElement(a.G5,{showOpenInCodeSandbox:v,startRoute:h,showNavigator:null!=y?y:x.showNavigator,showRefreshButton:x.showRefreshButton,style:u(d({display:F?"none":"flex"},(null==T?void 0:T.includes("col"))?{flex:"initial",width:"100%"}:{flexGrow:100-q,flexShrink:100-q,flexBasis:0,width:R?"100%":100-q+"%"}),{gap:0,height:null!==(Z=x.editorHeight)&&void 0!==Z?Z:E})},o.createElement("div",{className:"sp-custom-loading"},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,i.A)("w-12","h-12","rounded-full")}))))),B?o.createElement(a.X2,{style:u(d({height:200},(null==T?void 0:T.includes("col"))?{flex:"initial"}:{flexGrow:q,flexShrink:q,flexBasis:0}),{overflow:"hidden"})}):null)),o.createElement("div",{className:(0,i.A)(""),style:{height:Number(null!==(J=x.editorHeight)&&void 0!==J?J:E)+2}}),o.createElement("div",{className:(0,i.A)((null==T?void 0:T.includes("col"))?"block":"block md:hidden"),style:{height:Number(null!==(Q=x.editorHeight)&&void 0!==Q?Q:E)+2}}),o.createElement("div",{className:(0,i.A)(B?"block":"hidden","h-[200px]")})),o.createElement("section",{className:"hidden max-w-0 max-h-0"},o.createElement("p",null,`Dependencies: ${Object.keys(null!=k?k:{}).map((e=>`${e}@${k[e]}`))}`),o.createElement("h3",null,"Code Files"),Object.keys(null!=C?C:{}).map((e=>o.createElement("div",{key:e},o.createElement("div",null,`File: ${e}`),o.createElement("div",null,`Content: ${"code"in C[e]?C[e].code:C[e]}`))))))},g=e=>{const t={hidePreview:!0,showConsole:!1};return o.createElement(f,u(d({},t,e),{template:"react-ts"}))}},10888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>N,default:()=>B,frontMatter:()=>k,metadata:()=>x,toc:()=>O});var i=n(96540),o=n(15680),r=n(99546);function a(){return i.createElement(r.O,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/antd":"latest","@refinedev/core":"latest","@refinedev/simple-rest":"latest",antd:"^5.0.5"},startRoute:"/",files:{"/App.tsx":{code:s},"/home-page.tsx":{code:l,active:!0}}})}const s='\nimport React from "react";\n\nimport { Refine } from "@refinedev/core";\nimport { useNotificationProvider, RefineThemes } from "@refinedev/antd";\nimport { ConfigProvider, App as AntdApp } from "antd";\nimport dataProvider from "@refinedev/simple-rest";\nimport "@refinedev/antd/dist/reset.css";\nimport { HomePage } from "./home-page";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ConfigProvider theme={RefineThemes.Blue}>\n            <AntdApp>\n                <Refine\n                    dataProvider={dataProvider(API_URL)}\n                    notificationProvider={useNotificationProvider}\n                >\n                    <HomePage />\n                </Refine>\n            </AntdApp>\n        </ConfigProvider>\n    );\n};\n\nexport default App;\n\n'.trim(),l='\nimport React from "react";\nimport { useNotification } from "@refinedev/core";\nimport { Button, Col, Row } from "antd";\n\nexport const HomePage: React.FC = () => {\n  const { open, close } = useNotification();\n\n  return (\n      <Row\n          gutter={[16, 16]}\n          style={{\n              justifyContent: "center",\n              alignItems: "center",\n              height: "100vh",\n          }}\n      >\n          <Col>\n              <Button\n                  type="primary"\n                  onClick={() => {\n                      open?.({\n                          type: "success",\n                          message: "Notification Title",\n                          description:\n                              "This is the content of the notification.",\n                          key: "notification-key",\n                      });\n                  }}\n              >\n                  Open Notification\n              </Button>\n          </Col>\n          <Col>\n              <Button\n                  type="default"\n                  onClick={() => {\n                      close?.("notification-key");\n                  }}\n              >\n                  Close Notification\n              </Button>\n          </Col>\n      </Row>\n  );\n};\n\n\n'.trim();function c(){return i.createElement(r.O,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@emotion/react":"^11.8.2","@emotion/styled":"^11.8.1","@mui/lab":"^5.0.0-alpha.85","@mui/material":"^5.14.2","@mui/system":"latest","@refinedev/mui":"latest"},startRoute:"/",files:{"/App.tsx":{code:d},"/home-page.tsx":{code:u,active:!0}}})}const d='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport {\n    RefineThemes,\n    useNotificationProvider,\n    RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport GlobalStyles from "@mui/material/GlobalStyles";\nimport { ThemeProvider } from "@mui/material/styles";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider preventDuplicate={true}>\n                <Refine\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={useNotificationProvider}\n                >\n                    <HomePage />\n                </Refine>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nexport default App;\n\n'.trim(),u='\nimport React from "react";\nimport Grid from "@mui/material/Grid";\nimport Button from "@mui/material/Button";\nimport { useNotification } from "@refinedev/core";\n\nexport const HomePage = () => {\n    const { open, close } = useNotification();\n    return (\n        <Grid\n            container\n            spacing={2}\n            sx={{\n                justifyContent: "center",\n                alignItems: "center",\n                height: "100vh",\n            }}\n        >\n            <Grid item>\n                <Button\n                    variant="contained"\n                    onClick={() => {\n                        open?.({\n                            type: "success",\n                            message: "Notification Title",\n                            description:\n                                "This is the content of the notification.",\n                            key: "notification-key",\n                        });\n                    }}\n                >\n                    Open Notification\n                </Button>\n            </Grid>\n            <Grid item>\n                <Button\n                    variant="outlined"\n                    onClick={() => {\n                        close?.("notification-key");\n                    }}\n                >\n                    Close Notification\n                </Button>\n            </Grid>\n        </Grid>\n    );\n};\n\n\n'.trim();function p(){return i.createElement(r.O,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@mantine/notifications":"^5.10.4","@emotion/react":"^11.8.2","@mantine/core":"^5.10.4","@mantine/hooks":"^5.10.4","@refinedev/mantine":"^2.28.21"},startRoute:"/",files:{"/App.tsx":{code:m},"/home-page.tsx":{code:f,active:!0}}})}const m='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport { useNotificationProvider, RefineThemes } from "@refinedev/mantine";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { MantineProvider, Global } from "@mantine/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\nconst App: React.FC = () => {\n    return (\n        <MantineProvider\n            theme={RefineThemes.Blue}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={useNotificationProvider}\n                >\n                    <HomePage />\n                </Refine>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nexport default App;\n\n'.trim(),f='\nimport React from "react";\nimport { Flex, Button } from "@mantine/core";\nimport { useNotification } from "@refinedev/core";\n\nexport const HomePage = () => {\n    const { open, close } = useNotification();\n\n    return (\n        <Flex mih={"100vh"} gap="md" justify="center" align="center">\n            <Button\n                onClick={() => {\n                    open?.({\n                        type: "success",\n                        message: "Notification Title",\n                        description: "This is the content of the notification.",\n                        key: "notification-key",\n                    });\n                }}\n            >\n                Open Notification\n            </Button>\n            <Button\n                variant="outline"\n                onClick={() => {\n                    close?.("notification-key");\n                }}\n            >\n                Close Notification\n            </Button>\n        </Flex>\n    );\n};\n\n\n'.trim();function g(){return i.createElement(r.O,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@chakra-ui/react":"^2.5.1","@refinedev/chakra-ui":"^2.26.17"},startRoute:"/",files:{"/App.tsx":{code:h},"/home-page.tsx":{code:y,active:!0}}})}const h='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport { RefineThemes, useNotificationProvider } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={RefineThemes.Blue}>\n            <Refine\n                notificationProvider={useNotificationProvider()}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            >\n                <HomePage />\n            </Refine>\n        </ChakraProvider>\n    );\n};\n\nexport default App;\n'.trim(),y='\nimport React from "react";\nimport { Flex, Button } from "@chakra-ui/react";\nimport { useNotification } from "@refinedev/core";\n\nexport const HomePage = () => {\n    const { open, close } = useNotification();\n\n    return (\n        <Flex align="center" justify="center" height="100vh" gap={4}>\n            <Button\n                onClick={() => {\n                    open?.({\n                        type: "success",\n                        message: "Notification Title",\n                        description: "This is the content of the notification.",\n                        key: "notification-key",\n                    });\n                }}\n            >\n                Open Notification\n            </Button>\n            <Button\n                variant="outline"\n                onClick={() => {\n                    close?.("notification-key");\n                }}\n            >\n                Close Notification\n            </Button>\n        </Flex>\n    );\n};\n\n\n'.trim();function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function w(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const k={title:"Notifications"},N=void 0,x={unversionedId:"guides-concepts/notifications/index",id:"guides-concepts/notifications/index",title:"Notifications",description:"One of the most important parts of an application is the notifications and the visual feedbacks. Refine has this built-in notification integration that works automatically when it's needed in cases such as when a request fails or when a form is submitted.",source:"@site/docs/guides-concepts/notifications/index.md",sourceDirName:"guides-concepts/notifications",slug:"/guides-concepts/notifications/",permalink:"/docs/guides-concepts/notifications/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/notifications/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1715324e3,formattedLastUpdatedAt:"May 10, 2024",frontMatter:{title:"Notifications"},sidebar:"mainSidebar",previous:{title:"UI Libraries",permalink:"/docs/guides-concepts/ui-libraries/"},next:{title:"Realtime",permalink:"/docs/guides-concepts/realtime/"}},P={},O=[{value:"Notification Providers",id:"notification-providers",level:2},{value:"Built-in Notification Providers",id:"built-in-notification-providers",level:3},{value:"Undoable",id:"undoable",level:3},{value:"Customizing Notifications",id:"customizing-notifications",level:2},{value:"With props",id:"with-props",level:3},{value:'With i18n <GuideBadge id="i18n/i18n-provider/" />',id:"with-i18n-",level:3}],C=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",t)},R=C("DocThumbsUpDownFeedbackWidget"),T=C("Tabs"),E=C("TabItem"),S=C("GuideBadge"),A={toc:O},j="wrapper";function B(e){var{components:t}=e,n=w(e,["components"]);return(0,o.yg)(j,v(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){b(e,t,n[t])}))}return e}({},A,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"One of the most important parts of an application is the notifications and the visual feedbacks. Refine has this built-in notification integration that works automatically when it's needed in cases such as when a request fails or when a form is submitted."),(0,o.yg)("p",null,"While this integration is not coupled with the UI integrations, it will be a wise choice to use the one that is provided by the UI libraries for a consistent design language. This is why Refine's UI integrations also provides a ",(0,o.yg)("a",{parentName:"p",href:"/docs/notification/notification-provider/"},(0,o.yg)("inlineCode",{parentName:"a"},"notificationProvider"))," to be used with the notification integration of refine."),(0,o.yg)("h2",{id:"notification-providers"},"Notification Providers"),(0,o.yg)(R,{id:"notification-providers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Refine let's you set a notification API by providing the ",(0,o.yg)("inlineCode",{parentName:"p"},"notificationProvider")," property to the ",(0,o.yg)("inlineCode",{parentName:"p"},"<Refine />")," component. ",(0,o.yg)("inlineCode",{parentName:"p"},"notificationProvider")," is an object with close and open methods. Refine uses these methods to show and hide notifications. These methods can be called from anywhere in the application with ",(0,o.yg)("inlineCode",{parentName:"p"},"useNotification")," hook."),(0,o.yg)("p",null,"An ",(0,o.yg)("inlineCode",{parentName:"p"},"notificationProvider")," must include ",(0,o.yg)("inlineCode",{parentName:"p"},"open")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," methods with the following types:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'interface NotificationProvider {\n  open: (params: OpenNotificationParams) => void;\n  close: (key: string) => void;\n}\n\ninterface OpenNotificationParams {\n  key?: string;\n  message: string;\n  type: "success" | "error" | "progress";\n  description?: string;\n  cancelMutation?: () => void;\n  undoableTimeout?: number;\n}\n')),(0,o.yg)("p",null,"Once you provide the notification provider, Refine seamlessly integrate with ",(0,o.yg)("a",{parentName:"p",href:"/docs/guides-concepts/data-fetching/#data-hooks"},"data hooks")," to displays user-friendly notifications for various data-related actions, ensuring a clear and informative user experience. This includes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Form Submission"),": Whether a ",(0,o.yg)("a",{parentName:"li",href:"/docs/data/hooks/use-form/"},"form")," is successfully submitted or encounters errors, Refine will display the appropriate notification to keep the user informed."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Resource Management"),": ",(0,o.yg)("a",{parentName:"li",href:"/docs/data/hooks/use-create/"},"Creation"),", ",(0,o.yg)("a",{parentName:"li",href:"/docs/data/hooks/use-delete/"},"deletion"),", ",(0,o.yg)("a",{parentName:"li",href:"/docs/data/hooks/use-update/"},"update"),", ",(0,o.yg)("a",{parentName:"li",href:"/docs/core/hooks/utilities/use-import/"},"import"),", and ",(0,o.yg)("a",{parentName:"li",href:"/docs/core/hooks/utilities/use-export/"},"export")," of resources are all accompanied by success or error notifications, providing immediate feedback to the user."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Data Fetching"),": Refine also displays notifications for failed data fetching operations, including those using ",(0,o.yg)("a",{parentName:"li",href:"/docs/data/hooks/use-list/"},"useList"),", ",(0,o.yg)("a",{parentName:"li",href:"/docs/data/hooks/use-infinite-list/"},"useInfiniteList"),", ",(0,o.yg)("a",{parentName:"li",href:"/docs/data/hooks/use-many/"},"useMany"),", ",(0,o.yg)("a",{parentName:"li",href:"/docs/data/hooks/use-one/"},"useOne"),"."),(0,o.yg)("li",{parentName:"ul"},"Auth Actions: ",(0,o.yg)("a",{parentName:"li",href:"/docs/authentication/hooks/use-login/"},"Login"),", ",(0,o.yg)("a",{parentName:"li",href:"/docs/authentication/hooks/use-logout/"},"logout"),", ",(0,o.yg)("a",{parentName:"li",href:"/docs/authentication/hooks/use-register/"},"register"),", ",(0,o.yg)("a",{parentName:"li",href:"/docs/authentication/hooks/use-update-password/"},"update password"),", and ",(0,o.yg)("a",{parentName:"li",href:"/docs/authentication/hooks/use-forgot-password/"},"forgot password")," actions are all integrated with Refine's notification provider to display error notifications."))),(0,o.yg)("h3",{id:"built-in-notification-providers"},"Built-in Notification Providers"),(0,o.yg)(R,{id:"built-in-notification-providers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Using of the prebuilt notification providers are optional and can be customized, extended or even swapped with a custom implementation if needed."),(0,o.yg)("p",null,"As an example, we'll demonstrate how to open and close notifications using the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNotification")," hook. However, in most cases, you won't need to do this, as Refine typically manages notifications for you automatically."),(0,o.yg)(T,{wrapContent:!1,mdxType:"Tabs"},(0,o.yg)(E,{default:!0,value:"antd",label:"Ant Design",mdxType:"TabItem"},(0,o.yg)(a,{mdxType:"NotificationAntd"})),(0,o.yg)(E,{value:"material-ui",label:"Material UI",mdxType:"TabItem"},(0,o.yg)(c,{mdxType:"NotificationMui"})),(0,o.yg)(E,{value:"mantine",label:"Mantine",mdxType:"TabItem"},(0,o.yg)(p,{mdxType:"NotificationMantine"})),(0,o.yg)(E,{value:"chakra-ui",label:"Chakra UI",mdxType:"TabItem"},(0,o.yg)(g,{mdxType:"NotificationChakraUI"})))),(0,o.yg)("h3",{id:"undoable"},"Undoable"),(0,o.yg)(R,{id:"undoable",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Refine also supports undoable notification."),(0,o.yg)("p",null,"You can trigger an undoable notification by setting the ",(0,o.yg)("inlineCode",{parentName:"p"},"type")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"progress"),". After timeout, the notification will be closed automatically. If the user clicks the undo button, the ",(0,o.yg)("inlineCode",{parentName:"p"},"cancelMutation")," callback will be called."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const { open } = useNotification();\n\nopen?.({\n  type: "progress",\n  message: "Progress",\n  undoableTimeout: 5,\n  cancelMutation: () => {\n    // when undo button is clicked, run this callback\n  },\n});\n')),(0,o.yg)("p",null,"Mutation hooks such as ",(0,o.yg)("inlineCode",{parentName:"p"},"useUpdate"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"useDelete")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"useForm")," supports undoable notifications. It can be used for canceling the mutation."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import { useForm } from "@refinedev/core";\n\n// automatically cancel the mutation when undo button is clicked\nuseForm({ mutationMode: "undoable" });\n'))),(0,o.yg)("h2",{id:"customizing-notifications"},"Customizing Notifications"),(0,o.yg)("h3",{id:"with-props"},"With props"),(0,o.yg)(R,{id:"with-props",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"All data hooks have a ",(0,o.yg)("inlineCode",{parentName:"p"},"successNotification")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"errorNotification")," prop that can be used to customize the notification that will be shown when the hook is called."),(0,o.yg)("p",null,"We will look ",(0,o.yg)("inlineCode",{parentName:"p"},"useUpdate")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"useForm")," hooks as an example but all data hooks have the same props and they work the same way."),(0,o.yg)(T,{mdxType:"Tabs"},(0,o.yg)(E,{default:!0,value:"useUpdate",label:"useUpdate",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@refinedev/core";\n\nconst { mutate } = useUpdate();\n\nmutate({\n  // it will be called when the mutation is successful\n  // By setting it to `false`, you can disable the notification.\n  successNotification: (data, values, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n  // it will be called when the mutation is failed\n  errorNotification: (data, values, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n'))),(0,o.yg)(E,{value:"useForm",label:"useForm",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useForm } from "@refinedev/core";\n\nuseForm({\n  //  it will be called when the form is submitted successfully\n  // By setting it to `false`, you can disable the notification.\n  successNotification: (data, values, resource) => {\n    return {\n      message: `Successfully created ${data.title}`,\n      description: "good job!",\n      type: "success",\n    };\n  },\n  // it will be called when the form is submitted with errors\n  // By setting it to `false`, you can disable the notification.\n  errorNotification: (error, values, resource) => {\n    return {\n      message: `Failed to create ${values.title}`,\n      description: error.message,\n      type: "error",\n    };\n  },\n});\n'))))),(0,o.yg)("h3",{id:"with-i18n-"},"With i18n ",(0,o.yg)(S,{id:"i18n/i18n-provider/",mdxType:"GuideBadge"})),(0,o.yg)(R,{id:"with-i18n-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Refine's notification integration is also integrated with the ",(0,o.yg)("a",{parentName:"p",href:"/docs/i18n/i18n-provider/"},(0,o.yg)("inlineCode",{parentName:"a"},"i18n Provider")),". This means that you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"i18n")," integration to customize the notifications."),(0,o.yg)("p",null,"Refine uses following keys for the notifications and popultes ",(0,o.yg)("inlineCode",{parentName:"p"},"{{resource}}")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"{{statusCode}}"),". You can override these keys in your ",(0,o.yg)("inlineCode",{parentName:"p"},"i18n")," provider to customize the notifications."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="/locales/en/common.json"',title:'"/locales/en/common.json"'},'{\n  "notifications": {\n    "success": "Successful",\n    "error": "Error (status code: {{statusCode}})",\n    "undoable": "You have {{seconds}} seconds to undo",\n    "createSuccess": "Successfully created {{resource}}",\n    "createError": "There was an error creating {{resource}} (status code: {{statusCode}})",\n    "deleteSuccess": "Successfully deleted {{resource}}",\n    "deleteError": "Error when deleting {{resource}} (status code: {{statusCode}})",\n    "editSuccess": "Successfully edited {{resource}}",\n    "editError": "Error when editing {{resource}} (status code: {{statusCode}})",\n    "importProgress": "Importing: {{processed}}/{{total}}"\n  }\n}\n'))))}B.isMDXComponent=!0}}]);