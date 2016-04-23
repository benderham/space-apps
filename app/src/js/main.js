$(document).ready(function () {
  
  /**
   * Scroll To - smooth scrolling to elements.
   */
  $(".page-nav a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
  $("a.earth-status__btn").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
  
  /**
   * Headroom - apply classes to header on scroll
   */
  $(".page-head").headroom();

  /**
   * Charts - fake data sets and charts for data.
   */
  
  Chart.defaults.global.defaultFontSize = 14;
  Chart.defaults.global.defaultFontSize.defaultFontColor = "#727272";
  Chart.defaults.global.defaultFontSize.defaultFontFamily = "'Cabin', sans-serif";
  Chart.defaults.global.animationEasing = "easeOutBounce";

  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
          label: "2015",
          fill: true,
          backgroundColor: "rgba(33,150,243,0.5)",
          borderColor: "rgba(33,150,243,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "2016",
          fill: true,
          backgroundColor: "rgba(76,175,80,0.5)",
          borderColor: "rgba(76,175,80, 1)",
          pointDotRadius: 0,
          pointDotStrokeWidth: 0,
          data: [28, 48, 40, 19, 32, 21, 50]
        }
    ]
  };

  var ctx = document.getElementById("rainfall-data").getContext("2d");

  var myNewChart = new Chart(ctx ,{
    type: "line",
    data: data,
    scaleShowGridLines: false
  });

  // make earth emoticon stick to top right when scrolling
  var heightOffset = $(window).innerHeight() * 0.75;
  $( window ).scroll(function(e) {
    if ( $(this).scrollTop() > heightOffset) {
      $('.overview .earth-emoticon--container').addClass('stick');
    } else {
      $('.overview .earth-emoticon--container').removeClass('stick');
    }
  });
  $(window).resize(function(){
    heightOffset = $(window).innerHeight() * 0.75;
  });
  // update emoticon based on spotify interaction
  $('.spotify__playlist').click(function(e){
    console.log('clicked');
    $('.earth-emoticon--animation').toggleClass('earth-emoticon--hands');
  });


});