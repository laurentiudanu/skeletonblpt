var callback = function(){
  (function($){

    document.querySelector("body").classList.add("loaded-doc");

    if(document.querySelector(".m-h .nav-trigger")){
      document.querySelector(".m-h .nav-trigger").addEventListener("click", function(e){ 
        document.querySelector("body").classList.toggle("mobile-nav-active");
        e.preventDefault(); 
      });
    }
    
  })(jQuery);
};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
