function e(){return(e=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}module.exports=function(o){void 0===o&&(o={});var t,r=e({},{el:"",activeClass:"current",offsetTop:0},o);if("string"==typeof r.el){try{t=document.querySelector(r.el).querySelectorAll("a")}catch(e){return void console.error('options.el "'+o.el+'" must has child "A" Tag.')}window.addEventListener("scroll",function(e){var o=window.scrollY+r.offsetTop;t.forEach(function(e){var n=document.querySelector(e.hash);n?n.offsetTop<=o&&(t.forEach(function(e){e.classList.remove(r.activeClass)}),e.classList.add(r.activeClass)):console.error('The element with ID "'+e.hash+'" not found.')})}),t.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var o=document.querySelector(e.target.hash);o&&window.scrollTo({top:o.offsetTop-r.offsetTop,behavior:"smooth"})})})}else console.error('options.el "'+o.navElements+'" must be string.')};
//# sourceMappingURL=scrollspy.js.map