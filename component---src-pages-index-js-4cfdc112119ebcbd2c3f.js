"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{5323:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294);function r(){function e(){const e=window.scrollY,t=window.visualViewport?window.visualViewport.height:0,a=e/(document.documentElement.scrollHeight-t)*100,l=document.getElementById("scroller");l&&l.style&&(l.style.width=a+"%")}function t(){window.removeEventListener("scroll",e)}return(0,l.useEffect)((()=>(window.addEventListener("scroll",e),t)),[]),l.createElement("div",{id:"scroller",className:"fixed h-[3px] left-0 top-0 bg-[color:var(--color-primary)]"})}},3589:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var l=a(7294),r=a(1082);function n(e){const{post:t,position:a}=e,n=t.frontmatter.title||t.fields.slug;const c=[2,1,1,1,1,1,2][a%7];return l.createElement(l.Fragment,null,5==a&&l.createElement("div",{className:"span-3 my-5 flex gap-3"},l.createElement("div",{className:"w-[5px] bg-slate-100"}),l.createElement("div",null,l.createElement("h3",null,"Like what you are reading?")," ",l.createElement("p",null,"Reach ",l.createElement("a",null,"out"),"."))),l.createElement("article",{key:t.fields.slug,className:`cursor-pointer p-5 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_30px_-15px_rgba(0,0,0,0.7)] hover:text-black duration-300 rounded span-${c}`,onClick:()=>{return e=t.fields.slug,void(0,r.navigate)(e);var e}},l.createElement("section",{className:"mt-3 relative h-[215px]",style:{overflow:"hidden"}},l.createElement("header",null,l.createElement("span",{className:"text-xl"},n),l.createElement("div",null,t.frontmatter.date)),l.createElement("div",{className:"overflow-hidden w-[100%] mt-[10px]"},l.createElement("img",{src:`${t.fields.slug}/${t.frontmatter.icon}`,className:"article-icon"}),t.frontmatter.description,l.createElement("div",{style:{position:"absolute",left:0,right:0,bottom:0,height:80,background:"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 150))"}}))),l.createElement("p",{className:"text-[color:var(--color-primary)] text-sm"},"Read more...")))}function c(e){const{posts:t}=e;return l.createElement("div",{className:"relative bg-white pt-10 z-0 pb-[20px] shadow-[0_0_30px_0_rgba(0,0,0,0.5) margin",style:{boxShadow:"0 0 30px 0 rgba(0, 0, 0, 0.5)"}},l.createElement("div",{className:"mx-auto container"},l.createElement("div",{className:"pt-4"},l.createElement("div",{className:"text-gray-300  flex flex-col gap-1"},l.createElement("div",{className:"text-[17px] text-right"},l.createElement("i",null,"“The only thing a Big Bang rewrite guarantees is a Big Bang!”")),l.createElement("div",{className:"text-right"},l.createElement("b",null,"Martin Fowler"))),l.createElement("div",{style:{fontSize:"35px",lineHeight:"2"}},"Blog"),l.createElement("div",{className:"cards"},t.map(((e,t)=>l.createElement(n,{post:e,position:t,key:t})))))))}var s=a(5323);function i(){return l.createElement("div",{className:"mx-auto flex flex-col items-center justify-center text-slate-100 rounded relative scr-2 shadow-[0_5px_30px_-15px_rgba(0,0,0,1)] hero"},l.createElement("div",{className:"shadow-[0_0_5px_0_rgba(0,0,0,1) inner"}),l.createElement("div",{className:"bar"},l.createElement("a",{href:"https://www.linkedin.com/in/florin-toader/"},l.createElement("img",{src:"/img/in2.png",className:"w-[24px]"}))),l.createElement("div",{className:"flex flex-col items-center"},l.createElement("div",{style:{fontSize:"34px"}},"Florin Toader"),l.createElement("div",{className:"text-slate-400"},"Don't be dogmatic.")))}function o(e){let{data:t}=e;const a=t.allMarkdownRemark.nodes;return l.createElement("div",null,l.createElement("div",{className:"bg-cover  z-0 h-[550px] scroll-watcher",style:{background:"url(/img/backdrop3.jpg)"}}),l.createElement(c,{posts:a}),l.createElement("div",{style:{left:0,right:0,top:0,position:"absolute",zIndex:1e3}},l.createElement(i,null)),l.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4cfdc112119ebcbd2c3f.js.map