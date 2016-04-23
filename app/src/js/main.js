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
  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "#2196F3",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            backgroundColor: "#BBDEFB",
            strokeColor: "#BBDEFB",
            pointColor: "#BBDEFB",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
  };

  var ctx = document.getElementById("rainfall-data").getContext("2d");

  var myNewChart = new Chart(ctx ,{
    type: "line",
    data: data
  });

});
