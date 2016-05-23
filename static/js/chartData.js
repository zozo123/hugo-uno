var ctx = document.getElementById("chartTesting").getContext("2d");
var data = {
    labels: ["Jekyll", "Hugo", "Wintersmith", ],
    datasets: [


        {
            label: "Mean build time",
            fillColor: "#E1EDD7",
            strokeColor: "#E1EDD7",
            highlightFill: "#C1D8AB",
            highlightStroke: "#C1D8AB",
            data: [784, 100, 5255, ],
        },

    ]
};

var options = {
    scaleBeginAtZero: true,
    responsive: true,
    maintainAspectRatio: false,
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    barShowStroke: true,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 1,
};
var myLineChart = new Chart(ctx).Bar(data, options)
