import "../../../node_modules/chart.js/dist/chart.umd.js";

(function(){
    const chartCanvas= document.getElementById("chartArea");
    const data= JSON.parse(chartCanvas.parentElement.dataset.values); // get data from parent of chartcanvas whic is c-chart
    const brandColor = (window.getComputedStyle(chartCanvas)).getPropertyValue('--color-brand') || "#2541b2";
   
    const chart= new Chart(chartCanvas, {
        type: "line",
        data: {
            labels: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            datasets: [{
                label: "مبيعات الشهر",
                data: data,
                borderColor: brandColor,
                backgroundColor: "transparent",
                lineTension: 0.2
            }]
        },
        options: {
            plugins: {
              legend: {
                display: false // This will hide the legend
              }
            },
            scales: {
              y: { // 'yAxes' is now just 'y' in Chart.js 4.4
                display: false // This will hide the y-axis
              },
              x: { // 'xAxes' is now just 'x' in Chart.js 4.4
                position: 'top' // This sets the x-axis to the top of the chart
              }
            }
          }
    });

    //arrows raandom numbers
    const navigation= document.querySelector(".c-table__navigation__chart__arrows");
    const randomArray= (mylength, max) => Array.from({length: mylength}, () => Math.round(Math.random()*max));
    navigation.addEventListener("click", () => {
        chart.data.datasets[0].data= randomArray(12, 1200);
        chart.update();
    })

})();