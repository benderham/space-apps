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
  Chart.defaults.global.legend = false;
  
  options = {
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false,
          beginAtZero: true,
          fontColor: "#727272"
        }
      }]
    }
  };

  var rainfallData = {
    labels: ["May 1", "May 7", "May 14", "May 21", "May 28"],
    datasets: [
      {
        label: "2016",
        fill: true,
        backgroundColor: "rgba(33, 150, 243, 0.1)",
        borderColor: "rgba(33, 150, 243, 1)",
        pointBorderWidth: 0,
        pointBorderColor: "rgba(76,175,80,0)",
        tension: 0,
        data: [28, 30, 15, 19, 32]
      }
    ]
  };

  var tempData = {
    labels: ["May 1", "May 7", "May 14", "May 21", "May 28"],
    datasets: [
      {
        label: "2016",
        fill: true,
        backgroundColor: "rgba(76,175,80,0.1)",
        borderColor: "rgba(76,175,80,1)",
        pointBorderWidth: 0,
        pointBorderColor: "rgba(76,175,80,0)",
        tension: 0,
        data: [28, 30, 15, 19, 32]
      }
    ]
  };

  var rainfallCtx = document.getElementById("rainfall-data").getContext("2d");
  var tempCtx = document.getElementById("temp-data").getContext("2d");

  var rainfallChart = new Chart(rainfallCtx, {
    type: "line",
    data: rainfallData,
    options: options
  });

  var tempChart = new Chart(tempCtx, {
    type: "line",
    data: tempData,
    options: options
  });


  var heightOffset = $(window).innerHeight();
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