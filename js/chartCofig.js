const charData = {
    type: 'doughnut',
    data: {
        labels: ['Hạ sốt', 'Giảm đau', 'Kháng Sinh', 'Da Liễu', 'An Thần'],
        datasets: [{
            data: [100, 60, 70, 40, 50],
            backgroundColor: [
                'rgba(153, 102, 255)',
                'rgba(255, 206, 86)',
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(75, 192, 192)',
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
            ],
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom',
                fullSize: false,
                align: 'start',
                labels: {
                    padding: 10,
                    usePointStyle: true,
                    pointSytle: 'circle'
                }
            }
        },
    }
};
const data = [
    { x: 'Jan', income: 19, expenses: 16 },
    { x: 'Feb', income: 15, expenses: 8 },
    { x: 'Mar', income: 24, expenses: 14 },
    { x: 'Apr', income: 8, expenses: 7 },
    { x: 'May', income: 11, expenses: 7 },
    { x: 'Jun', income: 10, expenses: 6 },
    { x: 'Jul', income: 17, expenses: 15 },
    { x: 'Aug', income: 19, expenses: 18 },
    { x: 'Sep', income: 18, expenses: 12 },
    { x: 'Oct', income: 19, expenses: 20 },
    { x: 'Nov', income: 18, expenses: 8 },
    { x: 'Dec', income: 17, expenses: 12 },
];

const secondcharData = {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'income',
            borderRadius: 5,
            data: data,
            backgroundColor: '#FF7A00',
            maxBarThickness: 5,
            parsing: {
                yAxisKey: 'income'
            },
        },
        {
            label: 'expenses ',
            borderRadius: 5,
            maxBarThickness: 5,
            data: data,
            backgroundColor: '#6F52ED',
            parsing: {
                yAxisKey: 'expenses'
            },
        },
        ]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            y: {
                beginAtZero: true,
                max: 25
            },
            x: {
                grid: {
                    display: false
                }
            },
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};
const ctx = document.getElementById('myChart');
const second = document.getElementById('secondChart');
const myChart = new Chart(ctx, charData);
const secondChart = new Chart(second, secondcharData);
myChart;
secondChart;