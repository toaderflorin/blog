"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{5812:function(e,t,n){n.d(t,{Z:function(){return r}});var l=n(7294);function r(){return l.createElement("div",{id:"first"},l.createElement("div",{id:"inner"},l.createElement("div",null,"Florin Toader")))}},4089:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var l=n(7294),r=n(1597);function a(){return l.createElement("div",{id:"header-container"},l.createElement("div",{id:"header"},l.createElement("div",{style:{color:"#555"}},l.createElement("div",null,l.createElement("b",{style:{fontSize:"70px"}},l.createElement("span",null,"florin"),l.createElement("span",{style:{color:"#fa0265"}},"toader"))),l.createElement("div",{id:"lower"},l.createElement("div",null),l.createElement("div",{style:{color:"black",borderLeft:"3px solid #fa0265",padding:"0 20px"}},"Welcome to my professional abode on the internet.")))))}var i=n(5812);function o(e){var t=e.data,n=(e.location,t.allMarkdownRemark.nodes),o=(0,l.useRef)(null);if((0,l.useEffect)((function(){window.addEventListener("scroll",(function(e){o.current&&window.scrollY>0&&(o.current.className="trans")}))}),[]),0===n.length)return l.createElement("div",null,l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'));return l.createElement("div",null,l.createElement(i.Z,null),l.createElement("div",{ref:o},l.createElement(a,null)),l.createElement("div",null,l.createElement("div",{style:{margin:"130px auto 0 auto",width:"830px"}},l.createElement("h1",{style:{marginLeft:"25px",marginBottom:"20px"}},"Blog"),n.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("article",{key:e.fields.slug,className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article",onClick:function(){return t=e.fields.slug,void(0,r.navigate)(t);var t}},l.createElement("header",null,l.createElement("h2",null,l.createElement("span",{itemProp:"headline"},t)),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",{style:{padding:0}},l.createElement("img",{src:e.fields.slug+"/"+e.frontmatter.icon,className:"article-icon"}),l.createElement("span",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}),l.createElement("p",{style:{fontWeight:"bold",fontSize:"14px",color:"black"}},"Read more..")))})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3a733559cfef0aa74504.js.map