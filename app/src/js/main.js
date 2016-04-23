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
            label: "2015",
            fill: false,
            backgroundColor: "#2196F3",
            borderColor: "#2196F3",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "2016",
            fill: false,
            backgroundColor: "#4CAF50",
            borderColor: "#4CAF50",
            data: [28, 48, 40, 19]
        }
    ]
  };

  var ctx = document.getElementById("rainfall-data").getContext("2d");

  var myNewChart = new Chart(ctx ,{
    type: "line",
    data: data
  });

});
