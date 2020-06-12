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
                    label: 'Напряжение',
                    data: this.voltage,
                    backgroundColor: [
                        'rgba(99,205,245,0.47)',
                    ],
                    borderColor: [
                        'rgb(99,138,255)',
                    ],
                    borderWidth: 1
                }]
            },{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            callback: function(value, index, values) {
                                return value + ' В';
                            }
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Напряжение, В'
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            callback: function(value, index, values) {
                                return value + ' с';
                            },
                            sampleSize: 10
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Время, с'
                        },
                    }]
                }
            })
        }
    }
});
