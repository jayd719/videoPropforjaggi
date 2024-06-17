(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9798],{60036:function(e,t,n){"use strict";n.d(t,{S:function(){return p}});var r=n(67294),o=n(45697),i=n.n(o);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function l(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}var d=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(i,e);var t,n,r,o=f(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={hasError:!1},t}return t=i,(n=[{key:"componentDidCatch",value:function(e,t){var n=this.props,r=n.children,o=void 0===r?{}:r,i=n.errorLogger,a=o.type&&o.type.displayName;"undefined"!==typeof console&&"function"===typeof console.error&&console.error("error in component: ".concat(a),e,t),i&&i(e,t),this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,t=this.props,n=t.children,r=t.errorHandler;return e?r&&r()||null:n}}])&&a(t.prototype,n),r&&a(t,r),i}(r.Component);c(p,"propTypes",{children:i().node.isRequired,errorHandler:i().func,errorLogger:i().func}),c(p,"defaultProps",{errorHandler:null,errorLogger:null})},71050:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(67294),o=n(73935),i=n(45697),a=n.n(i);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function u(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var h="object"===typeof document?document.getElementById("modal-root"):null,v="object"===typeof document?document.getElementById("content"):null,y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,r,i=p(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={scrollPosition:null},t.el=document.createElement("div"),t}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this.props.preventBackgroundScroll;h&&h.appendChild(this.el),e&&(this.setState({scrollPosition:window.pageYOffset}),v.classList.add("verticalScrollDisabled"))}},{key:"componentDidUpdate",value:function(e){var t=this.props.preventBackgroundScroll;e.preventBackgroundScroll!==t&&(t?v.classList.add("verticalScrollDisabled"):v.classList.remove("verticalScrollDisabled"))}},{key:"componentWillUnmount",value:function(){var e=this.state.scrollPosition,t=this.props.preventBackgroundScroll;h&&h.removeChild(this.el),t&&(v.classList.remove("verticalScrollDisabled"),window.scrollTo(0,e))}},{key:"render",value:function(){var e=this.props.children;return h&&e?o.createPortal(e,this.el):null}}])&&c(t.prototype,n),r&&c(t,r),a}(r.Component);s(y,"propTypes",{children:a().oneOfType([a().node,a().arrayOf(a().node)]),preventBackgroundScroll:a().bool}),s(y,"defaultProps",{children:null,preventBackgroundScroll:!1});var b=y},64458:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(85893),o=n(67294),i=n(2664),a=n(45697),c=n.n(a),s=n(11752),l=n(47015),u=n(27662),d=n(67058),f=n(41840),p=n(54598),h=n(94184),v=n.n(h),y=(n(2156),"#911010");function b(e){var t=e.error,n=e.onClick;return(0,r.jsxs)("div",{className:v()("relative","df","justify-center","items-center","h3","founders-cond","f6","f7-l","b","lh-none","pl5","pr10","ph0-m"),"data-testid":"tve-notice",style:{backgroundColor:"#ffb4b4",color:y},children:[(0,r.jsx)("span",{className:"".concat("tve-notice","__label"),dangerouslySetInnerHTML:{__html:u.notifyErrorMap[t]||"There was a problem."}}),(0,r.jsx)("button",{className:"absolute right2 b-none bg-transparent p0 m0",onClick:n,style:{color:y},type:"button",children:(0,r.jsx)("span",{className:"icon icon-close"})})]})}b.propTypes={error:c().string.isRequired,onClick:c().func.isRequired},b.defaultProps={};var _=b,m=n(97082);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function C(e,t){return!t||"object"!==I(t)&&"function"!==typeof t?S(e):t}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C(this,n)}}var A="tve_auth",R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(a,e);var t,n,o,i=j(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),E(S(t=i.call(this,e)),"accessEnablerCreateIFrame",(function(e,n){var r=t.props,o=r.iframeRef;(0,r.showProviderIFrame)();var i=o.current.childNodes[0];i.style.width="".concat(e,"px"),i.style.height="".concat(n,"px"),t.logDebugMsg("createIframe",o)})),E(S(t),"accessEnablerDestroyIFrame",(function(){var e=t.props,n=e.hideProviderIFrame,r=e.iframeRef;n(),r.current.childNodes[0].src=u.configTVE.iframeSrc})),E(S(t),"accessEnablerDisplayProviderDialog",(function(){})),E(S(t),"accessEnablerLoaded",(function(){var e=t.props,n=e.disableBackgroundLogin,r=e.domain,o=u.configTVE[r],i=void 0===o?{}:o,a=i.backgroundLogin,c=i.backgroundLogout,s=i.requestorID;if(s){var l=window[u.ACCESS_ENABLER_OBJ];l.bind("errorEvent","handleAccessEnablerErrors"),l.setRequestor(s,null,{backgroundLogin:!n&&a,backgroundLogout:c}),l.checkAuthentication()}})),E(S(t),"accessEnablerError",(function(e){if("error"===e.level){var n=e.errorId;if(n&&Object.keys(u.notifyErrorMap).includes(n))t.setState({error:n});else(0,t.props.setError)(m.iR.ERROR)}t.logDebugMsg("Error",e)})),E(S(t),"handleClearError",(function(){t.setState({error:null})})),E(S(t),"accessEnablerSelectedProvider",(function(e){var n=e.AE_State,r=e.MVPD,o=void 0!==r&&r,i=t.props.setAuthentication;if("User Authenticated"===n)i({authenticated:!0,provider:o});t.logDebugMsg("SelectedProvider",{aeState:n,MVPD:o})})),E(S(t),"accessEnablerSendTrackingData",(function(e,n){var r=t.props.setAuthentication;["authenticationDetection","authorizationDetection"].includes(e)&&(w(n,1)[0]||r({provider:null}));t.logDebugMsg("Tracking",{eventType:e,data:n}),(0,d.stub)("track",A,{action:e,data:n})})),E(S(t),"accessEnablerSetAuthStatus",(function(e,n){var r=t.props,o=r.domain,i=r.selectedProvider,a=r.setAuthentication,c=r.setAuthorization;if(1===parseInt(e,10)){var s=u.configTVE[o],l=void 0===s?{}:s,d=l.channelTitle,f=l.itemTitle,p=l.guid,h=(0,u.getResourceID)(d,f,p),v=window[u.ACCESS_ENABLER_OBJ];v.getSelectedProvider(),v.getAuthorization(h),v.getMetadata("userID"),v.getMetadata("hba_status"),a({authenticated:!0})}else c({token:null});t.logDebugMsg("SetAuthStatus",{authed:e,error:n,selectedProvider:i})})),E(S(t),"accessEnablerSetConfig",(function(e){if(/^<config>/.test(e))for(var n=(new DOMParser).parseFromString(e,"application/xml").querySelectorAll("config > requestor > mvpds > mvpd > tempPass"),r=0;r<n.length;r+=1){var o=n[r].parentNode.querySelector("id");if(o&&o.textContent&&-1===o.textContent.indexOf("flex")){(0,t.props.setTempPassProvider)(o.textContent);break}}})),E(S(t),"accessEnablerSetToken",(function(e,n){var r=t.props,o=r.selectedProvider;(0,r.setAuthorization)({token:n}),t.logDebugMsg("SetToken",{resourceID:e,token:n,selectedProvider:o})})),E(S(t),"accessEnablerSetMetadataStatus",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.logDebugMsg("SetMetaData",n);var o=n[0];if(o){var i,a=t.props.setAccountMetadata;a(E({},o,null!==(i=n[2])&&void 0!==i?i:""))}})),E(S(t),"accessEnablerTokenRequestFailed",(function(e,n,r){var o=t.props.authenticated;switch(n){case"User Not Authenticated Error":case"User Not Authorized Error":o&&window[u.ACCESS_ENABLER_OBJ].logout()}t.logDebugMsg("TokenRequestFailed",{resourceID:e,errorCode:n,errorMessage:r})})),E(S(t),"logDebugMsg",(function(){})),t.state={error:null},t}return t=a,(n=[{key:"componentDidMount",value:function(){var e=(0,u.getAccessEnablerConfig)(!0),t=(0,s.default)().publicRuntimeConfig.ACCESS_ENABLER_SCRIPT_URL;if("undefined"===typeof window[u.ACCESS_ENABLER_OBJ]){var n=this;(0,l.Z)(t||e("script")).then((function(){window[u.ACCESS_ENABLER_OBJ]=new window.Adobe.AccessEnabler(e("softwareStatement")),window.createIFrame=n.accessEnablerCreateIFrame,window.destroyIFrame=n.accessEnablerDestroyIFrame,window.displayProviderDialog=n.accessEnablerDisplayProviderDialog,window.entitlementLoaded=n.accessEnablerLoaded,window.handleAccessEnablerErrors=n.accessEnablerError,window.selectedProvider=n.accessEnablerSelectedProvider,window.sendTrackingData=n.accessEnablerSendTrackingData,window.setAuthenticationStatus=n.accessEnablerSetAuthStatus,window.setConfig=n.accessEnablerSetConfig,window.setToken=n.accessEnablerSetToken,window.setMetadataStatus=n.accessEnablerSetMetadataStatus,window.tokenRequestFailed=n.accessEnablerTokenRequestFailed})),(0,d.stub)("register",[A])}}},{key:"render",value:function(){var e=this.state.error;return(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsx)(_,{error:e,onClick:this.handleClearError})})}}])&&O(t.prototype,n),o&&O(t,o),a}(o.Component);E(R,"propTypes",{authenticated:c().oneOfType([c().bool,c().string]),disableBackgroundLogin:c().bool,domain:c().string.isRequired,iframeRef:c().oneOfType([c().func,c().shape({})]).isRequired,selectedProvider:c().string,setAuthentication:c().func,setAuthorization:c().func,setAccountMetadata:c().func.isRequired,setTempPassProvider:c().func,setError:c().func,showProviderIFrame:c().func,hideProviderIFrame:c().func}),E(R,"defaultProps",{authenticated:null,disableBackgroundLogin:!1,selectedProvider:null,setAuthentication:Function.prototype,setAuthorization:Function.prototype,setTempPassProvider:Function.prototype,setError:Function.prototype,showProviderIFrame:Function.prototype,hideProviderIFrame:Function.prototype});var x=(0,i.$j)((function(e){var t=e.router,n=e.shared,r=e.tve;return{authenticated:r.authenticated,domain:t.domain,hasTempPass:r.hasTempPass,selectedProvider:r.provider,tempPassProviderID:r.tempPassProviderID,vertical:n.vertical}}),(function(e){return{hideProviderIFrame:function(){return e((0,f.zk)())},setAuthentication:function(t){return e((0,f.m2)(t))},setAuthorization:function(t){return e((0,f.wm)(t))},setAccountMetadata:function(t){return e((0,f._5)(t))},setError:function(t){return e((0,p.L4)(t))},setTempPassProvider:function(t){return e((0,f.f)(t))},showProviderIFrame:function(){return e((0,f.cr)())}}}))(R)},28360:function(e,t,n){"use strict";n.d(t,{Z:function(){return te}});var r=n(85893),o=n(67294),i=n(45697),a=n.n(i),c=n(2664),s=n(41549),l=n(4783),u=n(27662),d=n(41840),f=n(71050),p=o.forwardRef((function(e,t){return(0,r.jsx)("div",{id:"mvpddiv",ref:t,children:(0,r.jsx)("iframe",{loading:"lazy",title:"provider signin",id:"mvpdframe",name:"mvpdframe",src:u.configTVE.iframeSrc,frameBorder:"0"})})})),h="tve__provider-select",v="".concat(h,"__back-button");function y(e){var t=e.text,n=e.onClick;return(0,r.jsxs)("div",{className:v,children:[(0,r.jsxs)("button",{type:"button",onClick:n,className:"".concat(h,"__button ").concat(v,"__button"),"data-testid":"".concat(v,"__button"),children:[(0,r.jsx)("span",{className:"icon icon-back"}),(0,r.jsx)("span",{className:"dn-m",children:"Back"}),(0,r.jsx)("span",{className:"dn db-m",children:"Go Back"})]}),t&&(0,r.jsx)("h3",{className:"".concat(h,"__heading-h3 ").concat(v,"__text"),children:t})]})}y.propTypes={onClick:a().func,text:a().string},y.defaultProps={onClick:Function.prototype,text:null};var b=y,_=n(94184),m=n.n(_);var g="".concat(h,"__featured-grid"),S=function(e){var t=e.item,n=e.onClick;return t?(0,r.jsx)("button",{type:"button",onClick:n,value:t.id,className:"".concat(h,"__button ").concat(g,"__button__provider"),"data-testid":"".concat(h,"__featured-grid-item"),children:(0,r.jsx)("img",{src:t.logo2xWhite,alt:t.displayName})}):null};function O(e){for(var t,n,o,i=e.featured,a=e.onClick,c=3*Math.ceil(i.length/3),s=5*Math.ceil(i.length/5),l=[],u=0;u<s;u+=1){var d=m()("".concat(g,"__provider"),(t={},n="".concat(g,"__provider__hide-mobile"),o=u+1>c,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t));l.push((0,r.jsx)("div",{className:d,"data-testid":"".concat(g,"__provider"),children:(0,r.jsx)(S,{item:i[u],onClick:a})},"provider-".concat(u)))}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"".concat(h,"__heading-h3"),children:"Select your TV Provider Below"}),(0,r.jsx)("div",{className:"".concat(g," clearfix"),children:l})]})}S.propTypes={item:a().shape(l.Yv),onClick:a().func.isRequired},S.defaultProps={item:null},O.propTypes={featured:a().arrayOf(a().shape(l.Yv)),onClick:a().func},O.defaultProps={featured:[],onClick:Function.prototype};var E=O;var P=function(){return(0,r.jsxs)("div",{className:"".concat(h,"__loader-icon"),children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"icon icon-dot"}),(0,r.jsx)("span",{className:"icon icon-dot"}),(0,r.jsx)("span",{className:"icon icon-dot"})]}),(0,r.jsx)("p",{children:"Connecting"})]})};var C="".concat(h,"__map"),T=function(e){var t,n,o,i=e.active,a=e.text;return(0,r.jsx)("div",{className:m()("".concat(C,"__item"),(t={},n="".concat(C,"__item--active"),o=i,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t)),"data-testid":"".concat(C,"__item"),children:a})};function w(e){var t=e.step2,n=e.step3;return(0,r.jsxs)("div",{className:C,children:[(0,r.jsx)(T,{active:!0,text:"1. Select Provider"}),(0,r.jsx)(T,{active:t,text:"2. Verify Account"}),(0,r.jsx)(T,{active:n,text:"3. Watch TV"})]})}T.propTypes={active:a().bool.isRequired,text:a().string.isRequired},w.propTypes={step2:a().bool,step3:a().bool},w.defaultProps={step2:!1,step3:!1};var I=w,j="".concat(h,"__select");function A(e){var t=e.options,n=e.onChange;return(0,r.jsxs)("div",{className:j,children:[(0,r.jsxs)("select",{onChange:n,"data-testid":j,children:[(0,r.jsx)("option",{children:"Select TV Provider"}),t.map((function(e){return(0,r.jsx)("option",{value:e.id,children:e.displayName},"option-".concat(e.id))}))]}),(0,r.jsx)("span",{className:"".concat(j,"__down icon icon-angle-down")})]})}A.propTypes={onChange:a().func,options:a().arrayOf(a().shape(l.Kw))},A.defaultProps={onChange:Function.prototype,options:[]};var R=A;var x="".concat(h,"__search-results");function N(e){var t,n,o,i=e.fill,a=e.results,c=e.onClick;return(0,r.jsx)("div",{className:m()(x,(t={},n="".concat(x,"--fill"),o=i,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t)),children:a.map((function(e){return(0,r.jsx)("button",{type:"button",onClick:function(){c(e.id)},className:"".concat(h,"__button ").concat(x,"__button"),"data-testid":"".concat(x,"__button"),children:e.displayName},e.id)}))})}N.propTypes={fill:a().bool,onClick:a().func,results:a().arrayOf(a().shape(l.Kw))},N.defaultProps={fill:!1,onClick:Function.prototype,results:[]};var L=N;function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function M(e,t){return!t||"object"!==U(t)&&"function"!==typeof t?k(e):t}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}var U=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return M(this,n)}}var q="".concat(h,"__search-form"),Y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(a,e);var t,n,o,i=V(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),F(k(t=i.call(this,e)),"handleChange",(function(e){var n=e.target.value,r=t.props.filter;t.setState({showClear:n.length>0}),(0,t.props.onChange)(e,r)})),F(k(t),"handleClear",(function(e){t.setState({showClear:!1}),(0,t.props.onClickClear)(e)})),t.state={showClear:!1},t}return t=a,(n=[{key:"render",value:function(){var e=this.state.showClear,t=this.props,n=t.filter,o=t.inputRef,i="Type provider name to search";return n&&(i="Type provider name to filter"),(0,r.jsxs)("div",{className:q,children:[(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:(0,r.jsx)("input",{type:"text",ref:o,placeholder:i,onChange:this.handleChange,className:"".concat(q,"__input-text ").concat(q,"__input-text__search")})}),(0,r.jsxs)("div",{className:"".concat(q,"__search-icon"),children:[!e&&(0,r.jsx)("button",{type:"button",className:"".concat(h,"__button ").concat(q,"__button"),onClick:function(){o.current.focus()},children:(0,r.jsx)("span",{className:"icon icon-search"})}),e&&(0,r.jsx)("button",{type:"button",className:"".concat(h,"__button ").concat(q,"__button"),onClick:this.handleClear,children:(0,r.jsx)("span",{className:"icon icon-close"})})]})]})}}])&&D(t.prototype,n),o&&D(t,o),a}(o.Component);F(Y,"propTypes",{filter:a().bool,inputRef:a().shape({current:a().shape({focus:a().func})}).isRequired,onClickClear:a().func,onChange:a().func}),F(Y,"defaultProps",{filter:!1,onClickClear:Function.prototype,onChange:Function.prototype});var G=Y;n(6205);function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}function J(e,t){return!t||"object"!==X(t)&&"function"!==typeof t?z(e):t}function Q(e,t){return Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Q(e,t)}var X=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=W(e);if(t){var o=W(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return J(this,n)}}var ee=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(c,e);var t,n,i,a=$(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),K(z(t=a.call(this,e)),"searchTO",null),K(z(t),"initialState",{searchResults:[],showFeatured:!0,showFullList:!1,showLoader:!1}),K(z(t),"onBreakpointChange",(function(){t.setState({fullListType:t.getFullListType()})})),K(z(t),"getFullListType",(function(){return s.Z.isSorM()?"select":"list"})),K(z(t),"handleGoBack",(function(e){e.preventDefault(),(0,t.props.hideProviderIFrame)(),t.setState({searchResults:[],showFeatured:!0,showFullList:!1,showLoader:!1})})),K(z(t),"handleShowFullList",(function(e){e.preventDefault();var n=t.props.options;t.setState({showFeatured:!1,showFullList:!0,showLoader:!1,searchResults:n})})),K(z(t),"handleSelectProvider",(function(e){e.preventDefault();var n=e.target.value;t.setState({fullListType:t.getFullListType(),searchResults:[],showFeatured:!1,showFullList:!1,showLoader:!0},(function(){t.selectProvider(n)}))})),K(z(t),"selectProvider",(function(e){var n=t.props.redirectUrl,r=window[u.ACCESS_ENABLER_OBJ];r.setSelectedProvider(null),r.getAuthentication(n),r.setSelectedProvider(e)})),K(z(t),"handleSearch",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.preventDefault(),t.searchTO&&clearTimeout(t.searchTO);var r=t.props.options;t.searchTO=setTimeout((function(){var e=t.inputRef.current.value.trim().toLowerCase(),o=n?r:[];e.length&&(o=r.filter((function(t){return t.displayName.toLowerCase().indexOf(e)>-1}))),t.setState({searchResults:o})}),250)})),K(z(t),"handleSearchClear",(function(e){e.preventDefault();var n=t.state.showFullList,r=t.props.options;t.setState({searchResults:n?r:[]}),t.inputRef.current.value=""})),t.inputRef=o.createRef(),t.state={searchResults:[],showFeatured:!0,showFullList:!1,showLoader:!1},t}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.featured,n=e.options,r=e.vertical,o=e.loadFeatured,i=e.loadOptions;t.length||o(r),n.length||i(r),s.Z.getMediumMQL().addListener(this.onBreakpointChange),s.Z.getLargeMQL().addListener(this.onBreakpointChange)}},{key:"componentDidUpdate",value:function(e){var t=e.providerIFrameVisible,n=this.props.providerIFrameVisible;!t&&n&&this.setState({showLoader:!1})}},{key:"componentWillUnmount",value:function(){s.Z.getMediumMQL().removeListener(this.onBreakpointChange),s.Z.getLargeMQL().removeListener(this.onBreakpointChange)}},{key:"renderOverlay",value:function(){var e=this.state,t=e.showFeatured,n=e.showFullList,o=e.showLoader,i=e.searchResults,a=e.fullListType,c=this.props,s=c.hideProviderSelect,l=c.iframeRef,u=c.featured,d=c.options,f=c.providerIFrameVisible,v=a||this.getFullListType();return(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("button",{type:"button",onClick:s,className:"".concat(h,"__button ").concat(h,"__button__close"),children:(0,r.jsx)("span",{className:"icon icon-close"})}),(0,r.jsx)("h1",{className:"".concat(h,"__heading-h1"),children:"Sign In"}),(0,r.jsx)("p",{className:"".concat(h,"__description"),children:"Sign in with the same username and password you use to access your TV provider account."}),(0,r.jsx)(I,{step2:o||f}),t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E,{featured:u,onClick:this.handleSelectProvider}),(0,r.jsxs)("p",{className:"".concat(h,"__search-text"),children:[(0,r.jsx)("strong",{children:"Don\u2019t see your provider?"})," ","Search Below, or select from the"," ",(0,r.jsx)("button",{type:"button",onClick:this.handleShowFullList,className:"".concat(h,"__button ").concat(h,"__button__full-list"),children:"full list"})]}),(0,r.jsx)(G,{inputRef:this.inputRef,onClickClear:this.handleSearchClear,onChange:this.handleSearch}),(0,r.jsx)(L,{onClick:this.selectProvider,results:i})]}),n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{text:"Full List of TV Providers Below",onClick:this.handleGoBack}),"select"===v&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(R,{options:d,onChange:this.handleSelectProvider})}),"list"===v&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(G,{filter:!0,inputRef:this.inputRef,onClickClear:this.handleSearchClear,onChange:this.handleSearch,results:i}),(0,r.jsx)(L,{fill:!0,onClick:this.selectProvider,results:i})]})]}),f&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{text:"Verify Account",onClick:this.handleGoBack}),(0,r.jsx)(p,{ref:l})]}),o&&(0,r.jsx)(P,{})]})}},{key:"render",value:function(){return(0,r.jsx)(f.Z,{preventBackgroundScroll:!0,children:this.renderOverlay()})}}])&&Z(t.prototype,n),i&&Z(t,i),c}(o.Component);K(ee,"propTypes",{featured:a().arrayOf(a().shape(l.Yv)),options:a().arrayOf(a().shape(l.Kw)),hideProviderIFrame:a().func,hideProviderSelect:a().func,loadOptions:a().func.isRequired,loadFeatured:a().func.isRequired,iframeRef:a().shape({}).isRequired,providerIFrameVisible:a().bool.isRequired,redirectUrl:a().string,vertical:a().string.isRequired}),K(ee,"contextTypes",{store:a().shape({})}),K(ee,"defaultProps",{featured:[],hideProviderIFrame:Function.prototype,hideProviderSelect:Function.prototype,options:[],redirectUrl:null});var te=(0,c.$j)((function(e){e.shared;var t=e.tve;return{vertical:"msnbc",featured:t.featured,options:t.options,providerIFrameVisible:t.providerIFrameVisible}}),(function(e){return{hideProviderSelect:function(){e((0,d.NK)()),e((0,d.zk)())},hideProviderIFrame:function(){return e((0,d.zk)())},loadFeatured:function(t){return e((0,d.Y4)(t))},loadOptions:function(t){return e((0,d.SC)(t))}}}))(ee)},97082:function(e,t,n){"use strict";n.d(t,{iR:function(){return y},Vp:function(){return _},ZP:function(){return m}});var r=n(85893),o=(n(67294),n(2664)),i=n(45697),a=n.n(i),c=n(42954),s=n.n(c),l=n(82882),u=n.n(l),d=n(34247),f=n.n(d),p=n(38677),h=n.n(p),v={msnbc:{adsAreDown:s(),generic:u(),streamIsDown:f(),unsupportedBrowser:h()}},y={ADS:"ads",BROWSER:"browser",ERROR:"error",STREAM:"stream"};function b(e){var t=e.error,n=e.vertical;if(!t||!v[n])return null;var o=v[n],i=o.adsAreDown,a=o.generic,c=o.streamIsDown,s=o.unsupportedBrowser,l="An error has occurred, please try again later",u=a;switch(t){case y.ADS:l="We'll be right back after the break",u=i;break;case y.BROWSER:l="Your web browser is not supported",u=s;break;case y.STREAM:l="Not available, please try again later",u=c}return(0,r.jsx)(_,{src:u,alt:l})}function _(e){var t=e.src,n=e.alt;return(0,r.jsx)("img",{alt:n,src:t,style:{width:"100%",height:"100%"}})}_.propTypes={src:a().string.isRequired,alt:a().string.isRequired},b.propTypes={error:a().oneOfType([a().string,a().bool]),vertical:a().string.isRequired},b.defaultProps={error:!1};var m=(0,o.$j)((function(e){var t=e.shared;return{error:e.video.error,vertical:t.vertical}}))(b)},4783:function(e,t,n){"use strict";n.d(t,{Yv:function(){return c},Kw:function(){return i},Os:function(){return s}});var r=n(45697),o=n.n(r),i={displayName:o().string,id:o().string};function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},i,{logo2xWhite:o().string}),s={guid:o().string,startTime:o().number,startTimeFormatted:o().string,program:o().shape({description:o().string,title:o().string})}},77192:function(e,t,n){"use strict";n.d(t,{u2:function(){return d},wr:function(){return c},ym:function(){return v},wy:function(){return i},V5:function(){return f},r_:function(){return s},Uh:function(){return h}});var r=n(29208),o=n.n(r),i=function(e){return!!e&&"shell"===o()(e,"presentation.style",null)},a=n(19723),c=function(e){var t,n=null!==(t=null===e||void 0===e?void 0:e.subType)&&void 0!==t?t:null;return"liveBlog"===n||"blog"===n},s=function(e){if(!e)return!1;var t=o()(e,"nativeAd",null),n=o()(e,"adsEnabled",null);return!t&&!!n},l=(n(55084),n(63100)),u=n(32242),d=function(e,t){var n,r,o;if(!e||!t)return!1;var s,d,f,p,h=null!==(s=null===e||void 0===e?void 0:e.nativeAd)&&void 0!==s?s:null,v=null!==(d=null===e||void 0===e?void 0:e.ecommerceEnabled)&&void 0!==d?d:null,y=null!==(f=null===e||void 0===e||null===(n=e.presentation)||void 0===n?void 0:n.hideRecommendations)&&void 0!==f?f:null,b=null!==(p=null===e||void 0===e||null===(r=e.taxonomy)||void 0===r||null===(o=r.primarySection)||void 0===o?void 0:o.name)&&void 0!==p?p:"";return(t!==a.verticalSlugMap.today||"Shop"===b)&&(!(0,u.xT)(l.RECOMMENDATIONS_ENABLED,t)||y||h||v||{food:!0}[b.toLowerCase()]||i(e)||c(e))},f=function(e,t){var n,r;if(!e||!t)return!1;var o,i,s=a.verticalSlugMap.today,l=a.verticalSlugMap.news,u=null!==(o=null===e||void 0===e?void 0:e.ecommerceEnabled)&&void 0!==o?o:null,d=null!==(i=null===e||void 0===e||null===(n=e.taxonomy)||void 0===n||null===(r=n.primarySection)||void 0===r?void 0:r.name)&&void 0!==i?i:"",f=!c(e);return!(!u||!f||t!==s&&t!==l||"Shop"!==d&&"Shopping"!==d)&&t},p=n(41549),h=function(e,t){return!!e&&(!o()(e,"nativeAd",null)&&(!!t||p.Z.isS()))},v=function(e,t){var n,r,o,i,c=a.verticalSlugMap.msnbc,s=null!==(o=null===t||void 0===t||null===(n=t.primarySection)||void 0===n?void 0:n.name)&&void 0!==o?o:"",l=null!==(i=null===t||void 0===t||null===(r=t.primaryTopic)||void 0===r?void 0:r.name)&&void 0!==i?i:"";return e===c&&"Opinion"===s&&"Opinion"===l}},55084:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{P:function(){return i},Sl:function(){return c},YK:function(){return u},OQ:function(){return d},TV:function(){return f}});var i={SELECT:{VERTICAL:"nbcnews/vertical/select",SECTION_PRIME_DAY:"nbcnews/section/shopping/amazon-prime-day"},MSNBC:{VERTICAL:"nbcnews/vertical/msnbc",VERTICAL_TAXONOMY_FALLBACK:"nbcnews/section/msnbc",SECTION_OPINION:"nbcnews/section/opinion",SECTION_COLUMNIST:"nbcnews/section/featured-columnist"},THINK:{VERTICAL:"nbcnews/vertical/think"},TODAY:{GIFT_GUIDE:"today/section/shop/gift-guides",SECTION_FOOD:"today/section/food",SECTION_HOME:"today/section/home",SECTION_PETS:"today/section/pets",SECTION_STYLE:"today/section/style",SECTION_SHOP:"today/section/shop",SECTION_TMRW_TODAY:"today/section/tmrw",SHOP_BEAUTY_TOPIC:"today/section/shop/beauty-products",SHOP_BEDDING_LABEL:"today/label/shop-bedding",SHOP_BESTSELLERS_LABEL:"today/label/shop-best-sellers",SHOP_CELEBRITY_FAVORITES_LABEL:"today/label/shop-celebrity-favorites",SHOP_CLOTHING_LABEL:"today/label/shop-clothing",SHOP_COUNTER_TOP_APPLIANCES_LABEL:"today/label/shop-countertop-appliances",SHOP_DEALS_LABEL:"today/label/shop-deals",SHOP_FOOD_GROCERIES_LABEL:"today/label/shop-food-groceries",SHOP_KITCHEN_TOPIC:"today/section/shop/kitchen",SHOP_PET_SUPPLIES_LABEL:"today/label/shop-pet-supplies",SHOP_STORAGE_ORGANIZATION_LABEL:"today/label/shop-storage-organization",SHOP_STYLE_TOPIC:"today/section/style/style",SHOP_TECH_TOPIC:"today/section/shop/tech-gadgets",SHOP_WELLNESS_LABEL:"today/label/shop-wellness",SECTION_ABOUT:"today/section/about",SECTION_GAMES:"today/section/games",SECTION_HEALTH:"today/section/health",SECTION_INFORMATION:"today/section/information",SECTION_LIFE:"today/section/life",SECTION_MONEY:"today/section/money",SECTION_PAID_CONTENT:"today/section/paid-content",SECTION_PARENTING_GUIDES:"today/section/parenting-guides",SECTION_PARENTS:"today/section/parents",SECTION_PODCASTS:"today/section/podcasts",SECTION_POPCULTURE:"today/section/popculture",SECTION_SEASON_OF_KINDNESS:"today/section/season-of-kindness",SECTION_KINDNESS:"today/section/kindness",SECTION_TOGETHER:"today/section/together",SECTION_VISIT_TODAY:"today/section/visit-today",SHOP_ALL_DAY_TOPIC:"today/label/shop-all-day",SHOP_AMAZON_BESTSELLERS_TOPIC:"today/section/shop/amazon-bestsellers",SHOP_AMAZON_PRIME_DAY_TOPIC:"today/section/shop/amazon-prime-day",SHOP_BEAUTY_PRODUCTS_TOPIC:"today/section/shop/beauty-products",SHOP_BESTSELLERS_TOPIC:"today/section/shop/bestsellers",SHOP_CONSUMER_REPORTS_TOPIC:"today/section/shop/consumer-reports",SHOP_FASHION_TOPIC:"today/section/shop/fashion",SHOP_GIFT_GUIDES_TOPIC:"today/section/shop/gift-guides",SHOP_HOME_DECOR_TOPIC:"today/section/shop/home-decor",SHOP_KIDS_BABIES_TOPIC:"today/section/shop/kids-babies",SHOP_LIFESTYLE_FITNESS_TOPIC:"today/section/shop/lifestyle-fitness",SHOP_PET_SUPPLIES_TOPIC:"today/label/shop-pet-supplies",SHOP_POP_UP_SHOP_TOPIC:"today/section/shop/pop-up-shop",SHOP_SHOP_BLACK_FRIDAY_DEALS_TOPIC:"today/section/shop/shop-black-friday-deals",SHOP_SHOP_WOMEN_OWNED_BUSINESS_TOPIC:"today/section/shop/shop-women-owned-business",SHOP_TECH_GADGETS_TOPIC:"today/section/shop/tech-gadgets",SHOP_TIKTOK_TOPIC:"today/label/shop-tiktok",SHOP_TODAY_HOLIDAY_PLAZA_TOPIC:"today/section/shop/today-holiday-plaza",SHOP_DIET_LABEL:"today/label/diet",SHOP_WOMENS_DAY_LABEL:"today/label/womens-day"}},a=["2020-election","2022-election","2024-election","elecciones-estados-unidos-2022"],c=function(e,t){return!!Array.isArray(e)&&e.some((function(e){return e&&e.slug===t}))},s=function(e){return!!e&&"object"===typeof e&&"string"===typeof e.id},l=function(e,t){if(s(e))return e[t];var n=[];return"object"===typeof e&&Object.values(e).forEach((function(e){Array.isArray(e)&&e.length?n=o(n).concat(o(l(e,t))):s(e)&&n.push(e[t])})),n.filter((function(e,t,n){return n.indexOf(e)===t}))},u=function(e){return l(e,"path")},d=function(e){return l(e,"slug").toString()};function f(e){return a.some((function(t){return t===e}))}},32755:function(e){e.exports={container:"globalContainerStyles_container__XzPpd",XPNV_header_wrapper:"globalContainerStyles_XPNV_header_wrapper__0wQtp","live-dot-blink":"globalContainerStyles_live-dot-blink__MgRyw","fade-in":"globalContainerStyles_fade-in__JvvsJ","expand-in":"globalContainerStyles_expand-in__RnX0m"}},2156:function(){},6205:function(){},42954:function(e){e.exports="/_next/static/images/ads-are-down-ae7612f560bb988a01a15e41aebee8fa.svg"},38677:function(e){e.exports="/_next/static/images/browser-is-not-supported-05b7dc02279f263639f09adbfe413e9f.svg"},82882:function(e){e.exports="/_next/static/images/generic-3f32bafe342aa95c6fc93f32e1e33bf4.svg"},34247:function(e){e.exports="/_next/static/images/stream-is-down-589a3006a7c6deea182c20c32c0f216a.svg"}}]);