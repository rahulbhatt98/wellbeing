import { useState } from 'react'
import Chart from 'react-apexcharts'

const ChartBar = (props: any) => {

    let options = {
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                    // console.log(chart, w, e)
                }
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                ['National Average'],
                [props.industry]
            ],
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        labels: ["National Average", props.industry]
    };

    let series = [
        {
            data: [25, props.percentage]
        }
    ];

    const [initialOption, setInitialOption] = useState<any>(options);
    const [initialSeries, setInitialSeries] = useState<any>(series);
    return (
        <>
            <Chart
                options={initialOption}
                series={initialSeries}
                type="bar"
                width="500"
            />
        </>
    )
}

export default ChartBar