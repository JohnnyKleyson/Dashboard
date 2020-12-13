/*DONUT CHART*/
var options = {
    series: [50, 30, 20],
    chart: {
    width: 330,
    type: 'donut',
},
legend:{
    position:"top"
  },
labels: ['Toys', 'Eletronics', 'Toys'],
responsive: [{/* 
  breakpoint: 800,
    options: {
    chart: {
        width: "100%",
        height: 350
    }
    }, */
    breakpoint: 480,
    options: {
    chart: {
        width: "100%",
        height: 350
    },
    
    legend: {
        position: 'top',
        horizontalAlign: "left",
        
    }
    }
    
}]
};

var chart = new ApexCharts(document.querySelector("#apex2"), options);
chart.render();


/*LINE CHART*/
var options = {
    chart: {
      toolbar: {
        show: false
        },
      type: 'line',
      height: "250px",
        
    },
    legend:{
      position:"top"
    },
    series: [
      {
        name: "Monitors",
        data: [70, 60, 90, 80, 69, 86, 77, 89, 66],
      },
      {
        name: "Phones",
        data: [30, 20, 45, 56, 39, 58, 40, 35, 60],
      },
      {
        name: "Monitors",
        data: [85, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Laptops",
        data: [3, 13, 36, 26, 30, 17, 21, 18, 3],
      },
    ],
    xaxis: {
      categories: [2013,2014,2015,2016,2017,2018,2019,2020]
    },
    
  }
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  
  chart.render();