"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8720],{74369:function(t,n,e){var r=e(85893),i=(e(67294),e(11752));function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,i,o=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(o.push(r.value),!n||o.length!==n);u=!0);}catch(l){a=!0,i=l}finally{try{u||null==e.return||e.return()}finally{if(a)throw i}}return o}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a={woff:"woff",woff2:"woff2"};n.Z=function(){var t=(0,i.default)().publicRuntimeConfig.iconfontAssetPaths,n=function(t){return t.map((function(t){var n=u(/\.(\w+)$/.exec(t)||[],2)[1],e="url(".concat(t,")"),r=n?' format("'.concat(a[n],'")'):"";return"".concat(e).concat(r)})).join(", ")}(void 0===t?[]:t),e="\n    @font-face {\n      font-family: iconfont;\n      src: ".concat(n,";\n      font-display: swap;\n    }\n");return n?(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:e.replace(/\s/g,"")}}):null}},37575:function(t,n,e){e.d(n,{m:function(){return c}});var r=e(85893),i=(e(67294),e(9008)),o=e(45697),u=e.n(o),a=e(11752),l={noticias:"telemundonoticias",deportes:"telemundodeportes",shows:"telemundoshows",entretenimiento:"telemundoentretenimiento"};function c(t){var n,e=function(t,n){var e=(0,a.default)().publicRuntimeConfig,r=e.dev,i=e.themesCssManifest,o=e.assetPublicPath,u=l[t]||t;if(r||!i||!u)return null;var c=i[u],s=c&&"".concat(o).concat(c),f=i["".concat(u,"/").concat(n)];return f&&"".concat(o).concat(f)||s||null}(t.vertical);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("link",{href:e,rel:"preload",as:"style"},"preload-stylesheet-".concat(e)),(0,r.jsx)("link",{href:e,rel:"stylesheet"},"stylesheet-".concat(e))]})}),n]})}c.propTypes={vertical:u().string.isRequired}},12775:function(t,n,e){e.d(n,{m9:function(){return u},$L:function(){return l},Pz:function(){return v.P},MV:function(){return d.M},D9:function(){return a.D},rS:function(){return f},Z0:function(){return c.Z}});var r=e(67294),i=e(20640),o=e.n(i);function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:800,n=(0,r.useState)(!1),e=n[0],i=n[1],u=(0,r.useCallback)((function(t){"string"===typeof t||"number"===typeof t?(o()(t.toString()),i(!0)):i(!1)}),[]);return(0,r.useEffect)((function(){var n;return e&&t&&(n=setTimeout((function(){return i(!1)}),t)),function(){clearTimeout(n)}}),[e,t]),[e,u]}e(10099);var a=e(91176),l=function(t,n){var e=(0,r.useRef)(!0);(0,r.useEffect)((function(){e.current?e.current=!1:t()}),n)},c=(e(45043),e(84303)),s=e(67058);function f(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{allowDuplicate:!0},e=function(){return(0,s.stub)("register",t,n)},i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.stub)("track",t,n)};return(0,r.useEffect)(e,[s.stub]),i}var d=e(96619),v=e(86740),m=e(41549);m.Z.getSmallMQL,m.Z.getMediumMQL,m.Z.getLargeMQL,m.Z.getXLargeMQL,m.Z.getXXLargeMQL,m.Z.getXXXLargeMQL;e(14865)},10099:function(t,n,e){e.d(n,{b:function(){return i}});var r=e(67294),i=function(t,n,e){var i=(0,r.useCallback)(t,e);(0,r.useEffect)((function(){var t=setTimeout((function(){i()}),n);return function(){clearTimeout(t)}}),[i,n])}},86740:function(t,n,e){e.d(n,{P:function(){return c}});var r=e(84303),i=e(96619),o=e(32242),u=e(63100),a=e(98439),l=e(55541);function c(t){var n=(0,l.Hk)((function(t){return t.authenticationState})),e=(0,r.Z)().vertical,c=(0,i.M)().isUsa,s=(0,o.xT)(u.GATED_CONTENT,e),f=function(t){var n=t.taxonomy,e=(void 0===n?{}:n).additionalTerms;return Boolean(null===e||void 0===e?void 0:e.find((function(t){return"gated-content"===t.slug})))}(t),d=n===a.tl;return!s||!f||d&&c}},96619:function(t,n,e){e.d(n,{M:function(){return a}});var r=e(10708),i=e(98439);function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,i,o=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(o.push(r.value),!n||o.length!==n);u=!0);}catch(l){a=!0,i=l}finally{try{u||null==e.return||e.return()}finally{if(a)throw i}}return o}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(){var t=u((0,r.Z)([i.Iq]),1)[0][i.Iq];return{geoLocation:t,isUsa:t===i.NW}}},45043:function(t,n,e){e.d(n,{t:function(){return i}});var r=e(67294);function i(){var t=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]),(0,r.useCallback)((function(){return t.current}),[])}},14865:function(t,n,e){e.d(n,{Zn:function(){return E}});var r,i,o=e(67294),u=e(59734),a=e(11752),l=e(27484),c=e.n(l),s=e(85926),f=e(7428),d=e(89215);function v(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function m(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function y(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){m(t,n,e[n])}))}return t}function h(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,i,o=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(o.push(r.value),!n||o.length!==n);u=!0);}catch(l){a=!0,i=l}finally{try{u||null==e.return||e.return()}finally{if(a)throw i}}return o}}(t,n)||p(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){if(t){if("string"===typeof t)return v(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?v(t,n):void 0}}var g=parseInt(null===(r=(0,a.default)())||void 0===r||null===(i=r.publicRuntimeConfig)||void 0===i?void 0:i.LIVE_BLOG_POLLING_INTERVAL,10),w=Number.isNaN(g)?0:g;function I(t){var n,e,r=null===t||void 0===t||null===(n=t.items)||void 0===n?void 0:n[0];return c()().diff(c()(null===r||void 0===r||null===(e=r.date)||void 0===e?void 0:e.publishedAt),"h")>=12?0:w}function E(t){var n,e,r,i,a,l,c,v,m,p,g,w,E,A,S,M,T,L,C,N,O=t.taxonomyPath,j=t.initialData,P=void 0===j?{cards:{items:[]}}:j,D=t.articleId,x=(0,d.dG)(),k=null!==(C=null===x||void 0===x||null===(n=x["live-blog-card-query-limits"])||void 0===n?void 0:n.firstPage)&&void 0!==C?C:s.VW.FIRST_PAGE,Z=null!==(N=null===x||void 0===x||null===(e=x["live-blog-card-query-limits"])||void 0===e?void 0:e.loadMore)&&void 0!==N?N:s.VW.LOAD_MORE,_=(0,u.ZP)((function(){return(0,s.KD)({taxonomyPath:O,queryLimit:k,articleId:D})}),s.lC,{refreshInterval:I,refreshWhenHidden:!0,fallbackData:P}),R=_.data,B=_.error,H=_.isValidating;(0,o.useEffect)((function(){B&&(0,f.H)(B)}),[B]);var W=(0,o.useState)(R),q=W[0],G=W[1],V=(0,o.useMemo)((function(){return function(t,n){var e,r,i,o;if(!(null===t||void 0===t||null===(e=t.cards)||void 0===e?void 0:e.items)||!(null===n||void 0===n||null===(r=n.cards)||void 0===r?void 0:r.items))return{newItems:new Map,hasDeletedItems:!1,countNewItems:0};var u=new Map(null===t||void 0===t||null===(i=t.cards)||void 0===i?void 0:i.items.map((function(t){return[t.id,t]}))),a=new Map(null===n||void 0===n||null===(o=n.cards)||void 0===o?void 0:o.items.map((function(t){return[t.id,t]}))),l=b(u.entries()),c=l.findIndex((function(t){var n=h(t,1)[0];return a.has(n)})),s=c>=0,f=s?new Map(l.slice(c)):new Map,d=b(a.entries());return{newItems:s?new Map(l.slice(0,c)):new Map(u),hasDeletedItems:s&&b(f.entries()).some((function(t,n){var e=h(t,1)[0];return d[n][0]!==e})),countNewItems:s?c:u.size}}(R,q)}),[R,q]),Q=V.newItems,U=V.hasDeletedItems,X=V.countNewItems,F=(0,o.useCallback)((function(){var t=y({},R,{cards:{items:R.cards.items.map((function(t){return y({},t,{newActiveItem:Q.has(t.id)})}))}});G(t)}),[R]),$=Array.isArray(null===q||void 0===q||null===(r=q.cards)||void 0===r?void 0:r.items)&&(null===(i=q.cards)||void 0===i?void 0:i.items[(null===(a=q.cards)||void 0===a?void 0:a.items.length)-1]),z=null===$||void 0===$||null===(l=$.date)||void 0===l?void 0:l.publishedAt,K=z?(0,s.KD)({taxonomyPath:O,excludeCard:$.id,datePublished:z,queryLimit:Z,articleId:D}):null,Y=(0,u.ZP)(K,s.lC,{refreshWhenHidden:!0,revalidateOnFocus:!1}),J=Y.data,tt=Y.isLoading,nt=Y.error;(0,o.useEffect)((function(){nt&&(0,f.H)(nt)}),[nt]);var et=(0,o.useCallback)((function(){var t,n;(null===J||void 0===J||null===(t=J.cards)||void 0===t||null===(n=t.items)||void 0===n?void 0:n.length)&&G((function(t){var n,e;return y({},t,{cards:{items:b(null===t||void 0===t||null===(n=t.cards)||void 0===n?void 0:n.items).concat(b(null===J||void 0===J||null===(e=J.cards)||void 0===e?void 0:e.items))}})}))}),[J]);return(0,o.useEffect)((function(){U&&F()}),[U]),{latestItems:null===R||void 0===R||null===(c=R.cards)||void 0===c?void 0:c.items,latestPublishedDate:null===R||void 0===R||null===(v=R.cards)||void 0===v||null===(m=v.items)||void 0===m||null===(p=m[0])||void 0===p||null===(g=p.date)||void 0===g?void 0:g.publishedAt,isLatestValidating:H,latestDataError:B,activeItems:(null===q||void 0===q||null===(w=q.cards)||void 0===w?void 0:w.items)||[],activeLatestPublishedDate:null===q||void 0===q||null===(E=q.cards)||void 0===E||null===(A=E.items)||void 0===A||null===(S=A[0])||void 0===S||null===(M=S.date)||void 0===M?void 0:M.publishedAt,makeLatestActive:F,hasDeletedItems:U,countNewItems:X,newItems:Q,loadMoreCards:et,loadMoreError:nt,isMoreCardsAvailable:Boolean(null===J||void 0===J||null===(T=J.cards)||void 0===T||null===(L=T.items)||void 0===L?void 0:L.length),isFetchingMoreCardsToLoad:tt}}},91176:function(t,n,e){e.d(n,{D:function(){return i}});var r=e(67294);function i(t){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=t})),n.current}},84303:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(67294),i=e(89215),o=e(70827);function u(){var t=(0,r.useContext)(i.Aj);return{vertical:t,isBetter:t===o.BETTER,isEntretenimiento:t===o.ENTRETENIMIENTO,isEonline:t===o.EONLINE,isGlobalcitizen:t===o.GLOBALCITIZEN,isMsnbc:t===o.MSNBC,isNews:t===o.NEWS,isNoticias:t===o.NOTICIAS,isSelectCnbc:t===o.SELECT_CNBC,isSelectNews:t===o.SELECT_NEWS,isShows:t===o.SHOWS,isTelemundo:t===o.TELEMUNDO,isThink:t===o.THINK,isToday:t===o.TODAY}}}}]);