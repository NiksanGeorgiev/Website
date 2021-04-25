let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['YES', 'YES BUT IN GREEN'],
        datasets: [ {
            data: [69, 31],
            backgroundColor: ['#49A9EA', '#36CAAB']
        }]
    },
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    }
});