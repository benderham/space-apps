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
  
  Chart.defaults.global.maintainAspectRatio = true;
  Chart.defaults.global.defaultFontSize = 14;
  Chart.defaults.global.defaultFontSize.defaultFontColor = "#727272";
  Chart.defaults.global.defaultFontSize.defaultFontFamily = "'Cabin', sans-serif";
  Chart.defaults.global.legend = false;
  
  options = {
    scales: {
      xAxes: [{
        gridLines: {
          display: true,
          color: "rgba(255, 255, 255, 0.1)",
          drawOnChartArea: true,
          drawTicks: false,
          zeroLineColor: "rgba(255, 255, 255, 0)"
        },
        ticks: {
          display: false,
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false,
        }
      }]
    }
  };

  var rainfallData = {
    labels: ["May 1", "May 7", "May 14", "May 21", "May 28", "May 1", "May 7", "May 14", "May 21", "May 28"],
    datasets: [
      {
        label: "2016",
        fill: true,
        backgroundColor: "rgba(33,33,33,0.5)",
        borderColor: "rgba(76,175,80,1)",
        borderWidth: 8,
        pointBorderWidth: 0,
        pointBorderColor: "rgba(76,175,80,0)",
        tension: 0.3,
        yAxisID: "y-axis-0",
        data: [28, 30, 15, 19, 13, 18, 25, 32, 36, 46]
      }
    ]
  };

  var tempData = {
    labels: ["May 1", "May 7", "May 14", "May 21", "May 28", "May 1", "May 7", "May 14", "May 21", "May 28"],
    datasets: [
      {
        label: "2016",
        fill: true,
        backgroundColor: "rgba(33,33,33,0.5)",
        borderColor: "rgba(76,175,80,1)",
        borderWidth: 8,
        pointBorderWidth: 0,
        pointBorderColor: "rgba(76,175,80,0)",
        tension: 0.3,
        yAxisID: "y-axis-0",
        data: [10, 7, 15, 20, 25, 20, 30, 35, 38, 35]
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
  var soundplaying = false;
  var mp3song = new Audio("mp3/song.mp3");
  function playsong(){
    mp3song.play();
  }
  function stopsong(){
    mp3song.pause();
    mp3song.currentTime = 0;
  }

  $('.btn--spotify, .earth-emoticon--explanation').click(function(e){
    e.preventDefault();
    if (soundplaying === false ){
      soundplaying  = true;
      $('.earth-emoticon--animation').addClass('earth-emoticon--hands');
      playsong();
    } else {
      stopsong();
      soundplaying  = false;
      $('.earth-emoticon--animation').removeClass('earth-emoticon--hands');
    }
  });


});