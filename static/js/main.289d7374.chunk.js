(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(8),n=a.n(s),i=a(2),l=a(3),o=a(5),r=a(4),j=(a(13),a(0)),d=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.homeData,t=e.greeting,a=e.rotatingDescription[0];return Object(j.jsxs)("div",{className:"section section-home",children:[Object(j.jsx)("div",{className:"section-background-color"}),Object(j.jsx)("div",{className:"section-background",style:{backgroundImage:"url(".concat(e.background,")")}}),Object(j.jsxs)("div",{className:"greeting",children:[Object(j.jsx)("h3",{className:"subtitle",children:t}),Object(j.jsx)("h1",{className:"title",children:a})]}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"#1",className:"scroll-down","aria-label":"Scroll to next section",children:Object(j.jsx)("i",{className:"fa fa-chevron-down fa-3x"})})})]})}}]),a}(c.Component),b=(a(15),function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).navToggle=function(){var e=document.querySelector(".nav-collapse-links");"nav-collapse-links"===e.className?e.className+=" collapse":e.className="nav-collapse-links"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.navData,a=t.map((function(e,t){return Object(j.jsx)("a",{className:"nav-links nav-expand",href:e.url,children:e.name},t)})),c=t.map((function(t,a){return Object(j.jsx)("a",{className:"nav-links",href:t.url,onClick:e.navToggle,children:t.name},a)}));return Object(j.jsxs)("div",{className:"navbar sticky",children:[a,Object(j.jsxs)("div",{className:"nav-collapse",children:[Object(j.jsx)("i",{className:"fa fa-bars fa-2x",onClick:this.navToggle}),Object(j.jsx)("div",{className:"nav-collapse-links",children:c})]})]})}}]),a}(c.Component));a(16),a(17);function u(e){return Object(j.jsx)("div",{className:"carousel-left",onClick:e.onClick,children:Object(j.jsx)("i",{className:"fa fa-angle-left fa-3x"})})}function h(e){return Object(j.jsx)("div",{className:"carousel-right",onClick:e.onClick,children:Object(j.jsx)("i",{className:"fa fa-angle-right fa-3x"})})}function O(e){var t=e.carouselData[e.activeIndex],a={backgroundImage:"url(".concat(t,")")};return Object(j.jsx)("div",{className:"carousel-slides",style:a})}var m=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={activeIndex:0},c}return Object(l.a)(a,[{key:"goToPrevSlide",value:function(e){e.preventDefault();var t=this.state.activeIndex-1,a=this.props.carouselData.length;t<0&&(t=a-1),this.setState({activeIndex:t})}},{key:"goToNextSlide",value:function(e){e.preventDefault();var t=this.state.activeIndex+1;t===this.props.carouselData.length&&(t=0),this.setState({activeIndex:t})}},{key:"render",value:function(){var e=this,t=this.props.carouselData;return Object(j.jsxs)("div",{className:"carousel",children:[Object(j.jsx)(O,{carouselData:t,activeIndex:this.state.activeIndex}),1!==t.length&&Object(j.jsxs)("div",{className:"carousel-slides-overlay",children:[Object(j.jsx)(u,{onClick:function(t){return e.goToPrevSlide(t)}}),Object(j.jsx)(h,{onClick:function(t){return e.goToNextSlide(t)}})]})]})}}]),a}(c.Component),p=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.paragraphData.map((function(e,t){return Object(j.jsx)("p",{children:e},t)}))}}]),a}(c.Component),v=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.aboutData;return Object(j.jsxs)("div",{className:"section section-pad section-about",children:[Object(j.jsx)("div",{className:"section-background"}),Object(j.jsx)("div",{className:"section-background-color"}),Object(j.jsx)("div",{className:"section-title title",children:e.title}),Object(j.jsxs)("div",{className:"about-body body",children:[Object(j.jsx)("div",{className:"about-body-images",children:Object(j.jsx)(m,{carouselData:e.imageSlideshow})}),Object(j.jsx)("div",{className:"about-body-description",children:Object(j.jsx)(p,{paragraphData:e.description})})]})]})}}]),a}(c.Component),x=a(6),f=(a(18),function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={isOpen:!1},c.handleClick=c.handleClick.bind(Object(x.a)(c)),c.handleEsc=c.handleEsc.bind(Object(x.a)(c)),c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.body.appendChild(this.element),a.modals.push(this),document.addEventListener("keydown",this.handleEsc)}},{key:"componentWillUnmount",value:function(){var e=this;a.modals=a.modals.filter((function(t){return t.props.id!==e.props.id})),this.element.remove(),document.removeEventListener("keydown",this.handleEsc)}},{key:"handleClick",value:function(e){"jw-modal"===e.target.className&&a.close(this.props.id)(e)}},{key:"handleEsc",value:function(e){"Escape"===e.key&&a.close(this.props.id)(e)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{style:{display:+this.state.isOpen?"":"none"},onClick:this.handleClick,ref:function(t){return e.element=t},children:[Object(j.jsx)("div",{className:"jw-modal",children:Object(j.jsx)("div",{className:"jw-modal-body",children:this.props.children})}),Object(j.jsx)("div",{className:"jw-modal-background"})]})}}]),a}(c.Component));f.modals=[],f.open=function(e){return function(t){t.preventDefault(),f.modals.find((function(t){return t.props.id===e})).setState({isOpen:!0}),document.body.classList.add("jw-modal-open")}},f.close=function(e){return function(t){t.preventDefault(),f.modals.find((function(t){return t.props.id===e})).setState({isOpen:!1}),document.body.classList.remove("jw-modal-open")}};var N=f,k=(a(19),function(e){var t=e.icon,a=e.iconLabel,c="https://icongr.am/".concat(t.icongram,".svg?size=25");return"true"===a?Object(j.jsxs)("div",{className:"icon-label",children:[Object(j.jsx)("img",{className:"icon-image",src:c,alt:t.name}),t.name]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{className:"icon-image",src:c,alt:t.name}),Object(j.jsx)("div",{className:"icon-name subtitle",children:t.name})]})}),g=function(e){var t=e.iconData,a=e.iconLabel;return t.map((function(e,t){return Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(k,{icon:e,iconLabel:a})},t)}))},y=(a(20),function(e){return e.portfolioData.projects.map((function(e,t){var a=e.links?e.links.map((function(e){return Object(j.jsx)("a",{href:e.url,children:Object(j.jsx)("button",{children:e.name.toUpperCase()})},e.name)})):null,c="project".concat(t);return Object(j.jsxs)("div",{className:"project",children:[Object(j.jsx)("img",{src:e.displayImage,alt:"project"}),Object(j.jsx)("div",{className:"project-overlay",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"project-title title",children:e.name}),Object(j.jsx)("div",{className:"project-subtitle subtitle",children:e.highlight}),Object(j.jsx)("button",{onClick:N.open(c),children:"LEARN MORE"})]})}),Object(j.jsx)(N,{id:c,children:Object(j.jsxs)("div",{className:"project-modal",children:[Object(j.jsx)("div",{className:"project-images",children:Object(j.jsx)(m,{carouselData:e.imageSlideshow})}),Object(j.jsxs)("div",{className:"project-details",children:[Object(j.jsxs)("div",{className:"project-header",children:[Object(j.jsx)("div",{className:"project-title title",children:e.name}),Object(j.jsx)("div",{className:"project-skills",children:Object(j.jsx)(g,{iconData:e.skills,iconLabel:"false"})})]}),Object(j.jsx)("div",{className:"project-body body",children:Object(j.jsx)(p,{paragraphData:e.description})})]}),Object(j.jsxs)("div",{className:"project-buttons",children:[Object(j.jsx)("div",{className:"project-links",children:a}),Object(j.jsx)("button",{className:"project-close",onClick:N.close(c),children:Object(j.jsx)("i",{className:"fa fa-times fa-2x"})})]})]})})]},c)}))}),D=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.portfolioData;return Object(j.jsxs)("div",{className:"section section-pad section-portfolio",children:[Object(j.jsx)("div",{className:"section-background"}),Object(j.jsx)("div",{className:"section-background-color"}),Object(j.jsx)("div",{className:"section-title title",children:e.title}),Object(j.jsx)("div",{className:"portfolio-body",children:Object(j.jsx)(y,{portfolioData:e})})]})}}]),a}(c.Component),C=(a(21),function(e){return e.sections.map((function(e){return Object(j.jsxs)("div",{className:"skill-section",children:[Object(j.jsx)("div",{className:"skill-section-title title",children:e.title}),Object(j.jsx)("div",{className:"skill-section-body",children:Object(j.jsx)(g,{iconData:e.data,iconLabel:"true"})})]},e.title)}))}),w=function(e){var t=e.skillData;return Object(j.jsxs)("div",{className:"section section-pad section-skills",children:[Object(j.jsx)("div",{className:"section-title title",children:t.title}),Object(j.jsx)("div",{className:"skill-body body",children:Object(j.jsx)("div",{className:"skill-table",children:Object(j.jsx)(C,{sections:t.sections})})})]})},S=(a(22),function(e){return e.contactData.icons.map((function(e,t){return Object(j.jsx)("span",{title:e.toolTip,children:Object(j.jsx)("a",{href:e.url,"aria-label":e.toolTip,className:"section-icon",children:Object(j.jsx)("i",{className:e.className})})},t)}))}),I=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.contactData;return Object(j.jsx)("div",{className:"section section-contact",children:Object(j.jsxs)("div",{className:"section-footer",children:[Object(j.jsx)(S,{contactData:e}),Object(j.jsxs)("div",{className:"credits subtitle",children:["COPYRIGHT \xa9 2019 ",Object(j.jsx)("a",{href:"mailto:jessikw@uci.edu",children:"JESSICA WONG"})]})]})})}}]),a}(c.Component),E=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={websiteData:JSON.parse(c.props.appData)},c}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{id:"0"}),Object(j.jsx)(d,{homeData:this.state.websiteData.home}),Object(j.jsx)(b,{navData:this.state.websiteData.navigation}),Object(j.jsx)("div",{id:"1"}),Object(j.jsx)(v,{aboutData:this.state.websiteData.about}),Object(j.jsx)("div",{id:"2"}),Object(j.jsx)(D,{portfolioData:this.state.websiteData.portfolio}),Object(j.jsx)("div",{id:"3"}),Object(j.jsx)(w,{skillData:this.state.websiteData.skills}),Object(j.jsx)("div",{id:"4"}),Object(j.jsx)(I,{contactData:this.state.websiteData.contact})]})}}]),a}(c.Component),T=(a(23),new XMLHttpRequest),L={};T.onreadystatechange=function(){4===this.readyState&&200===this.status&&(L=JSON.parse(T.responseText),n.a.render(Object(j.jsx)(E,{appData:JSON.stringify(L)}),document.getElementById("root")))},T.open("GET","".concat("","/websiteData.json"),!0),T.send()}],[[24,1,2]]]);
//# sourceMappingURL=main.289d7374.chunk.js.map