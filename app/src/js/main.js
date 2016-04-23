$(document).ready(function () {
  
  $(".page-nav a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
  
});
