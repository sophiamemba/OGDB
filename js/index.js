/*SIDEBAR TOGGLE*/ 

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}


// BARCHART

      
var barChartOptions = {
    series: [{
    data: [2016,2017,2018,2019,2020,2021,2022,2023]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
       show: false
    },
  },
 colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1"
 ],
  plotOptions: {
    bar: {
      distributed: true,  
      borderRadius: 4,
      horizontal: true,
      columnWidth: '70%',
    }
  },
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Diploma', 'Degree', 'Post-Graduate', 'Masters', 'PHD'
    ],
  },
  yaxis: {
     title: {
        text: "Levels",
     }
  },
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();


//   DOUGNUT CHART

      

      
var PieChartoptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 500,
    type: 'pie',
    toolbar: {
        show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  labels: ['Administrators', 'Hr', 'Graduates', 'Others'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#doughnut-chart"), PieChartoptions);
  chart.render();