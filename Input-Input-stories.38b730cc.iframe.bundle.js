"use strict";(self.webpackChunkkrtc_ui=self.webpackChunkkrtc_ui||[]).push([[367],{"./node_modules/@radix-ui/react-compose-refs/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>$6ed0406888f73fc4$export$43e446d32b3d21af,e:()=>$6ed0406888f73fc4$export$c7b2cbe3552a0d05});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function $6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs),refs)}},"./node_modules/@radix-ui/react-label/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>$b73a6c6685e72184$export$be92b6f5f03c0fe9});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.module.js");const $b73a6c6685e72184$export$b04be29aa201d4f5=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__.WV.label,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)({},props,{ref:forwardedRef,onMouseDown:event=>{var _props$onMouseDown;null===(_props$onMouseDown=props.onMouseDown)||void 0===_props$onMouseDown||_props$onMouseDown.call(props,event),!event.defaultPrevented&&event.detail>1&&event.preventDefault()}})))),$b73a6c6685e72184$export$be92b6f5f03c0fe9=$b73a6c6685e72184$export$b04be29aa201d4f5},"./node_modules/@radix-ui/react-primitive/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{WV:()=>$8927f6f2acc4f386$export$250ffa63cdc0d034,jH:()=>$8927f6f2acc4f386$export$6d1a0317bde7de7f});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.module.js");const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.g7:node;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target,event){target&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)((()=>target.dispatchEvent(event)))}},"./node_modules/@radix-ui/react-slot/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A4:()=>$5e63c961fc1ce211$export$d9f1ccf0bdb05d45,g7:()=>$5e63c961fc1ce211$export$8c6ed5c666ac1360});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.module.js");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},slotProps,{ref:forwardedRef}),(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(newElement,void 0,newChildren):null)}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.F)(forwardedRef,children.ref)}):react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./src/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_icons_hi2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-icons/hi2/index.esm.js"),_Input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Input/Input.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Input",component:_Input__WEBPACK_IMPORTED_MODULE_0__.I,tags:["autodocs"]},Default={args:{leftIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_2__.rJi,{className:"h-4 w-4"}),rightIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_2__.WY3,{className:"h-4 w-4"}),label:"Email",description:"We'll never share your email with anyone else.",placeholder:"email@example.com",error:""}};Default.parameters={...Default.parameters,storySource:{source:'{\n  args: {\n    leftIcon: <HiEnvelope className="h-4 w-4" />,\n    rightIcon: <HiArrowRight className="h-4 w-4" />,\n    label: "Email",\n    description: "We\'ll never share your email with anyone else.",\n    placeholder: "email@example.com",\n    error: ""\n  }\n}',...Default.parameters?.storySource}};const __namedExportsOrder=["Default"]},"./src/FormControl/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>FormControl});var index_module=__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.module.js"),index_esm=__webpack_require__("./node_modules/class-variance-authority/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormControl=({id,label,description,error,fullWidth,children})=>{const hasError=!!error;return(0,jsx_runtime.jsxs)("div",{className:(0,index_esm.cx)("flex flex-col gap-1",fullWidth?"w-full":"w-fit"),children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col",children:[label&&(0,jsx_runtime.jsx)(index_module.f,{htmlFor:id,className:"w-fit text-sm text-neutral-200",children:label}),description&&(0,jsx_runtime.jsx)(index_module.f,{htmlFor:id,className:"w-fit text-xs text-neutral-400",children:description})]}),children,hasError&&(0,jsx_runtime.jsx)(index_module.f,{htmlFor:id,className:"w-fit text-xs text-red-400",children:error})]})};FormControl.displayName="FormControl";try{FormControl.displayName="FormControl",FormControl.__docgenInfo={description:"",displayName:"FormControl",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/FormControl/FormControl.tsx#FormControl"]={docgenInfo:FormControl.__docgenInfo,name:"FormControl",path:"src/FormControl/FormControl.tsx#FormControl"})}catch(__react_docgen_typescript_loader_error){}},"./src/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input,q:()=>input});var class_variance_authority__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/class-variance-authority/dist/index.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),uuid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),react_icons_hi2__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-icons/hi2/index.esm.js"),_FormControl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/FormControl/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const input=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.j)("h-10 rounded border-none bg-white/5 text-neutral-200 placeholder:text-neutral-500 w-full min-w-[250px] text-sm",{variants:{variant:{primary:"focus:ring-1 focus:ring-blue-500"},hasLeftIcon:{true:"pl-10"},hasRightIcon:{true:"pr-10"},hasError:{true:"!ring-1 !ring-red-500 !text-red-400 focus:!ring-red-500"}},defaultVariants:{variant:"primary"}}),Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({label,description,error,leftIcon,rightIcon,id=(0,uuid__WEBPACK_IMPORTED_MODULE_4__.Z)(),type="text",fullWidth,...props},ref)=>{const hasError=!!error;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormControl__WEBPACK_IMPORTED_MODULE_1__.N,{id,label,description,fullWidth,error,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.cx)("relative"),children:[leftIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-200",children:leftIcon}),(rightIcon||hasError)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-300",children:hasError?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_5__.fd$,{className:"h-4 w-4 text-red-500"}):rightIcon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{ref,id,className:input({hasError,hasLeftIcon:!!leftIcon}),type,...props})]})})}));Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | null'}},hasLeftIcon:{defaultValue:null,description:"",name:"hasLeftIcon",required:!1,type:{name:"boolean | null"}},hasRightIcon:{defaultValue:null,description:"",name:"hasRightIcon",required:!1,type:{name:"boolean | null"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>esm_browser_v4});const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let getRandomValues;const rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const byteToHex=[];for(let i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();const rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)}}}]);