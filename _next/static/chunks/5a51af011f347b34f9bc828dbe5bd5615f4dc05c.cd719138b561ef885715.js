(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/lsK":function(e,t,i){"use strict";var o=i("nKUr"),r=i("YFqc"),a=i.n(r),n=(i("q1tI"),i("vOnD").c.article.withConfig({displayName:"Work__Article",componentId:"sc-1f4tq9j-0"})(["cursor:pointer;transition:0.2s;&:hover{transform:scale(1.02);}& > *{width:100%;margin:4px 0px;}img{border-radius:8px;max-height:400px;object-fit:cover;}h2{font-size:18px;font-weight:bold;}p{color:#555;}small{font-size:14px;}"]));t.a=function(e){var t=e.data,i=t.id,r=(t.linkHref,t.imageName),c=(t.supportVideo,t.videoName,t.title),s=t.description,l=t.createdYear;t.tags,t.techIcons;return Object(o.jsx)(a.a,{href:"/work/".concat(i),children:Object(o.jsxs)(n,{children:[Object(o.jsx)("img",{src:"/img/workspace/".concat(r)}),Object(o.jsx)("h2",{children:c}),Object(o.jsx)("p",{children:s}),Object(o.jsx)("small",{children:l})]})})}},F1wk:function(e,t,i){"use strict";var o=i("vOnD").c.main.withConfig({displayName:"Page",componentId:"jsm1i-0"})(["width:100vw;max-width:1024px;margin:0px auto;"]);t.a=o},YFqc:function(e,t,i){e.exports=i("cTJO")},cTJO:function(e,t,i){"use strict";var o=i("J4zp"),r=i("284h");t.__esModule=!0,t.default=void 0;var a=r(i("q1tI")),n=i("elyg"),c=i("nOHt"),s=i("vNVm"),l={};function d(e,t,i,o){if(e&&(0,n.isLocalURL)(t)){e.prefetch(t,i,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+i+(r?"%"+r:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,i=(0,c.useRouter)(),r=i&&i.pathname||"/",p=a.default.useMemo((function(){var t=(0,n.resolveHref)(r,e.href,!0),i=o(t,2),a=i[0],c=i[1];return{href:a,as:e.as?(0,n.resolveHref)(r,e.as):c||a}}),[r,e.href,e.as]),u=p.href,f=p.as,m=e.children,g=e.replace,h=e.shallow,v=e.scroll,j=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var k=a.Children.only(m),b=k&&"object"===typeof k&&k.ref,N=(0,s.useIntersection)({rootMargin:"200px"}),y=o(N,2),w=y[0],I=y[1],x=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);(0,a.useEffect)((function(){var e=I&&t&&(0,n.isLocalURL)(u),o="undefined"!==typeof j?j:i&&i.locale,r=l[u+"%"+f+(o?"%"+o:"")];e&&!r&&d(i,u,f,{locale:o})}),[f,u,I,j,t,i]);var C={ref:x,onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,i,o,r,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,n.isLocalURL)(i))&&(e.preventDefault(),null==c&&(c=o.indexOf("#")<0),t[r?"replace":"push"](i,o,{shallow:a,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,i,u,f,g,h,v,j)},onMouseEnter:function(e){(0,n.isLocalURL)(u)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),d(i,u,f,{priority:!0}))}};if(e.passHref||"a"===k.type&&!("href"in k.props)){var Y="undefined"!==typeof j?j:i&&i.locale,H=i&&i.isLocaleDomain&&(0,n.getDomainLocale)(f,Y,i&&i.locales,i&&i.domainLocales);C.href=H||(0,n.addBasePath)((0,n.addLocale)(f,Y,i&&i.defaultLocale))}return a.default.cloneElement(k,C)};t.default=p},d2SW:function(e){e.exports=JSON.parse('[{"linkHref":"https://github.com/1000ship/choose-your-favorite-character-game","id":"cyfc","imageName":"cyfc.png","supportVideo":false,"videoName":null,"title":"Choose Your Favorite Character","description":"2020 \uac00\uc0bc\ub85c\uc9c0\uc744 \uc804\uc2dc \uc791\ud488","createdYear":"2020\ub144","tags":["\uc678\uc8fc","\uac00\uc0bc\ub85c\uc9c0\uc744 \uc804\uc2dc\uc791\ud488","CYFC"],"techIcons":["react","javascript"]},{"linkHref":"http://space.1000ship.me","id":"spaceship","imageName":"spaceship.png","supportVideo":false,"videoName":null,"title":"Space-Ship","description":"\ucf54\ub85c\ub09819\ub85c \ube44\ub300\uba74\uc774 \uc911\uc694\ud574\uc9c0\ub294 \uc9c0\uae08, \uce5c\uad6c\ub4e4 \uc9d1 \ucd08\ub300\ub97c \uc704\ud574 \ub9cc\ub4e0 \uac00\uc0c1\uacf5\uac04","createdYear":"2020\ub144","tags":["Socket.io","\uac00\uc0c1\uacf5\uac04"],"techIcons":["react","javascript","aws"]},{"linkHref":"http://poty.1000ship.me","id":"poty","imageName":"poty.png","supportVideo":false,"videoName":null,"title":"POTY : Play of the Youtube","description":"\ud559\uad50 \uc878\uc5c5\ud504\ub85c\uc81d\ud2b8\ub85c \uc9c4\ud589\ud55c \ud504\ub85c\uc81d\ud2b8. \uc720\ud29c\ube0c \ub313\uae00/\ucd94\ucc9c \uc218\ub97c \ubaa8\uc544 \ud558\uc774\ub77c\uc774\ud2b8\ub97c \ub9cc\ub4e0\ub2e4","createdYear":"2020\ub144","tags":["\uc878\uc5c5\ud504\ub85c\uc81d\ud2b8","\uc720\ud29c\ube0c \ud558\uc774\ub77c\uc774\ud2b8"],"techIcons":["react","javascript","nodejs","python","flask"]},{"linkHref":"https://1000ship.github.io/nomflix","id":"nomflix","imageName":"nomflix.png","supportVideo":false,"videoName":null,"title":"Nomflix","description":"ReactJS\ub97c \uc775\ud788\uae30 \uc704\ud55c Netflix \ud074\ub860 \ucf54\ub529","createdYear":"2020\ub144","tags":["NomadCoder","\ud074\ub860\ucf54\ub529"],"techIcons":["react","javascript"]},{"linkHref":"https://blog.naver.com/cjstjdgur123/221843365322","id":"remocon","imageName":"remocon.jpg","supportVideo":true,"videoName":"remocon.mp4","title":"Remocon","description":"\ubaa8\ubc14\uc77c \uc6f9\uc73c\ub85c PC\uc758 \ud0a4\ubcf4\ub4dc/\ub9c8\uc6b0\uc2a4\ub97c \uc6d0\uaca9\uc870\uc791\ud558\ub294 \uc720\ud2f8\ub9ac\ud2f0","createdYear":"2020\ub144","tags":["WebSocket","\uc6d0\uaca9\uc81c\uc5b4"],"techIcons":["python","javascript","framework7"]},{"linkHref":"https://blog.naver.com/cjstjdgur123/221833669565","id":"travelbadge","imageName":"travelbadge.jpg","supportVideo":false,"videoName":null,"title":"TravelBadge","description":"iOS \uc704\uc82f\uc5d0 \ub0b4\uac00 \ub2e4\ub140\uc628 \uc5ec\ud589\uc9c0\ub97c \ub2ec \uc218 \uc788\uac8c","createdYear":"2020\ub144","tags":["\uc5ec\ud589"],"techIcons":["swift","ios"]},{"linkHref":"https://blog.naver.com/cjstjdgur123/221833705335","id":"foodiary","imageName":"foodiary.jpg","supportVideo":true,"videoName":"foodiary.mp4","title":"Foodiary","description":"SW\ub9c8\uc5d0\uc2a4\ud2b8\ub85c \uacfc\uc815 \uc911 \uc9c4\ud589\ud55c \ud300\ud504\ub85c\uc81d\ud2b8, \uc624\ub298 \uba39\uc740 \uc74c\uc2dd\uc73c\ub85c \uc4f0\ub294 \uc77c\uae30\uc7a5","createdYear":"2019\ub144","tags":["SW\ub9c8\uc5d0\uc2a4\ud2b8\ub85c"],"techIcons":["ruby","rails","framework7","android","ios","aws"]},{"linkHref":"https://blog.naver.com/cjstjdgur123/130179162297","id":"cookeat","imageName":"cookeat.jpg","supportVideo":false,"videoName":null,"title":"CookEat","description":"\uc694\ub9ac \ub808\uc2dc\ud53c\ub97c \uacf5\uc720\ud558\ub294 SNS","createdYear":"2013\ub144","tags":["2013 SK \uc2a4\ub9c8\ud2f4\uc571\ucc4c\ub9b0\uc9c0 \ucd5c\uc6b0\uc218"],"techIcons":["air","php"]},{"linkHref":"https://blog.naver.com/cjstjdgur123/130171930719","id":"evermind_pc","imageName":"evermind_pc.jpg","supportVideo":false,"videoName":null,"title":"Evermind for PC","description":"\ub9c8\uc778\ub4dc\ub9f5\uc744 \uadf8\ub9ac\uae30 \uc704\ud55c Window/MacOS \ud504\ub85c\uadf8\ub7a8","createdYear":"2012\ub144","tags":["\ubca0\uc9c0\uc5b4 \uace1\uc120","\ud55c\uad6d\ub514\uc9c0\ud138\ubbf8\ub514\uc5b4\uace0\ub4f1\ud559\uad50 IT\uacbd\uc9c4\ub300\ud68c \ucd5c\uc6b0\uc218"],"techIcons":["air"]},{"linkHref":"https://github.com/devxoul/Evermind","id":"evermind","imageName":"evermind.jpg","supportVideo":false,"videoName":null,"title":"Evermind for Android","description":"\ub9c8\uc778\ub4dc\ub9f5\uc744 \uadf8\ub9ac\uae30 \uc704\ud55c Android \uc571","createdYear":"2012\ub144","tags":["\ubca0\uc9c0\uc5b4 \uace1\uc120","2013 SK \uc2a4\ub9c8\ud2f4\uc571\ucc4c\ub9b0\uc9c0 \uc6b0\uc218"],"techIcons":["air","android"],"sizeContain":true},{"linkHref":"https://blog.naver.com/cjstjdgur123/130137426814","id":"kinect","imageName":"kinect.png","supportVideo":true,"videoName":"kinect.mp4","title":"MS Kinect, \uc801\uc678\uc120 \uc2e0\uccb4\uc6c0\uc9c1\uc784 \ud0d0\uc9c0","description":"MS Kinect\ub85c \ub044\uc801\uc774\ub358 \ud1a0\uc774\ud504\ub85c\uc81d\ud2b8","createdYear":"2012\ub144","tags":["Kinect","\uc801\uc678\uc120 \ud0d0\uc9c0","Microsoft","NativeExtension"],"techIcons":["flash","java"],"sizeContain":true},{"linkHref":"https://blog.naver.com/cjstjdgur123/130141493586","id":"dimimons","imageName":"dimimons.jpg","supportVideo":false,"videoName":null,"title":"Dimimons","description":"\ub514\uc9c0\ud138\ubbf8\ub514\uc5b4\uace0\ub4f1\ud559\uad50 \ube44\uacf5\uc2dd \uad50\ub0b4 \uc778\ud2b8\ub77c\ub137 \uc571","createdYear":"2012\ub144","tags":["\uad50\ub0b4 \uc571 \uac1c\ubc1c","\ud589\uc815\uc548\uc804\ubd80 SW\uc778\uc7ac\ubc1c\uad74 \uc571\uac1c\ubc1c\uacbd\uc9c4\ub300\ud68c \uc7a5\ub824"],"techIcons":["air","android"],"sizeContain":true},{"linkHref":"https://blog.naver.com/cjstjdgur123/130130619961","id":"kickball","imageName":"kickball.jpg","supportVideo":true,"videoName":"kickball.mp4","title":"KickBall","description":"\uc548\ub4dc\ub85c\uc774\ub4dc \ucd08\ucc3d\uae30 \ucc98\uc74c\uc73c\ub85c \ub9cc\ub4e4\uc5b4\ubcf8 \uac8c\uc784\uc571","createdYear":"2012\ub144","tags":["\uac8c\uc784","44.51K Downloads"],"techIcons":["air","android"],"sizeContain":true},{"linkHref":"https://blog.naver.com/cjstjdgur123/130141988984","id":"ship2d","imageName":"ship2d.jpg","supportVideo":true,"videoName":"ship2d.mp4","title":"Ship2D","description":"2D \uc774\ubbf8\uc9c0\ub97c GPU\ub85c \ube60\ub974\uac8c \ub80c\ub354\ud560 \uc218 \uc788\uac8c\ub9cc\ub4e0 \ub77c\uc774\ube0c\ub7ec\ub9ac","createdYear":"2011\ub144","tags":["\ube44\uacf5\uc2dd \uac1c\uc778\ud504\ub85c\uc81d\ud2b8","GPU\uac00\uc18d\ub80c\ub354\ub9c1"],"techIcons":["flash"]},{"linkHref":"https://blog.naver.com/cjstjdgur123/130120715679","id":"molehill","imageName":"molehill.jpg","supportVideo":true,"videoName":"molehill.mp4","title":"Molehill","description":"GPU \ub80c\ub354\ub9c1 \ub77c\uc774\ube0c\ub7ec\ub9ac Alternativa3D\ub97c \ud65c\uc6a9\ud55c \ub450\ub354\uc9c0\uc7a1\uae30 \uac8c\uc784","createdYear":"2011\ub144","tags":["\ube44\uacf5\uc2dd \ud300\ud504\ub85c\uc81d\ud2b8","GPU\uac00\uc18d\ub80c\ub354\ub9c1"],"techIcons":["flash","alternativa3d"]}]')},vNVm:function(e,t,i){"use strict";var o=i("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!n,s=(0,r.useRef)(),l=(0,r.useState)(!1),d=o(l,2),p=d[0],u=d[1],f=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),i||p||e&&e.tagName&&(s.current=function(e,t,i){var o=function(e){var t=e.rootMargin||"",i=c.get(t);if(i)return i;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return c.set(t,i={id:t,observer:r,elements:o}),i}(i),r=o.id,a=o.observer,n=o.elements;return n.set(e,t),a.observe(e),function(){n.delete(e),a.unobserve(e),0===n.size&&(a.disconnect(),c.delete(r))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[i,t,p]);return(0,r.useEffect)((function(){if(!n&&!p){var e=(0,a.requestIdleCallback)((function(){return u(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[p]),[f,p]};var r=i("q1tI"),a=i("0G5g"),n="undefined"!==typeof IntersectionObserver;var c=new Map}}]);