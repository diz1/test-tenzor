Vue.component('line-chart', {
    extends: VueChartJs.Line,
    props: ['messages'],
    async mounted () {
        this.setup();
    },
    computed: {
        time () {
            return this.messages.map(item => item.TIME);
        },
        voltage () {
            return this.messages.map(item => item.VOLTAGE);
        }
    },
    methods: {
        setup () {
            this.renderChart({
                labels: this.time,
                datasets: [{
                    label: 'Напряжение: ',
                    data: this.voltage,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 2
                }]
            }, {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            })
        }
    }
});