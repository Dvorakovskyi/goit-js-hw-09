!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=null;t.addEventListener("click",(function(t){o=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.target.disabled=!0,e.disabled=!1,t.target.style.boxShadow=""})),e.addEventListener("click",(function(e){clearInterval(o),e.target.disabled=!0,t.disabled=!1,e.target.style.boxShadow=""}));var r=document.querySelectorAll("button"),n=!0,a=!1,d=void 0;try{for(var l,i=r[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var u=l.value;u.style.cssText="width: 90px; padding: 15px; font-size: 14px; font-weight: bold; background-color: rgba(224, 220, 220, 0.3); cursor: pointer; border: none; border-radius: 10px;",u.addEventListener("mouseover",(function(t){t.target.style.boxShadow="0 5px 15px rgba(0, 0, 0, 0.5)"})),u.addEventListener("mouseout",(function(t){t.target.style.boxShadow=""}))}}catch(t){a=!0,d=t}finally{try{n||null==i.return||i.return()}finally{if(a)throw d}}}();
//# sourceMappingURL=01-color-switcher.4a8cb96a.js.map