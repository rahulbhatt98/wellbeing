import { useState } from 'react'
import Chart from 'react-apexcharts'

const TriArcChart = (props: any) => {

    let series = [props.notSure, props.notLeft, props.left];

    let options = {
        labels: ['', '', ''],
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        segmentShowStroke: false,
        states: {
            hover: {
                filter: {
                    type: 'none',
                }
            },
        },
        arc: {
            borderWidth: 0
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        tooltip: {
            enabled: false
        },
        fill: {
            colors: ['#C7DEF5', '#007ACC', '#7EC0EE']
        },
    };

    const [initialOption, setInitialOption] = useState<any>(options);
    const [initialSeries, setInitialSeries] = useState<any>(series);

    return (
        <>
            {
                (props.left == 0 && props.notLeft == 0 && props.notSure == 0) ?
                    ''
                    :
                    <>
                        <div className={`bh_chart`}>
                            <Chart options={initialOption} series={initialSeries} type="pie" />
                        </div>

                        <div></div>
                    </>
            }
        </>
    )
}

export default TriArcChart