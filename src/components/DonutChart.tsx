import { useState } from 'react'
import Chart from 'react-apexcharts'

const TriArcChart = (props: any) => {

    let options = {
        labels: ['', '', ''],
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                }
            },
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
        hover: { mode: null },
        fill: {
            colors: ['#007ACC','#C7DEF5']
        },
    };

    let secondPercent = Number(100 - Number(props.percentage))
    let series = [props.percentage, secondPercent];

    const [initialOption, setInitialOption] = useState<any>(options);
    const [initialSeries, setInitialSeries] = useState<any>(series);

    return (
        <>
        <div className="donot-clipping">
            <div className="bh_svgClipping">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 555 507">
                    <image id="Circle-New"  xlinkHref="data:img/png;base64,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"/>
                </svg>
            </div>
            <div className="bh_chart">
                <Chart options={initialOption} series={initialSeries} type="pie"  width="100%"/>
            </div>
            <div className="bh_chart-per">
               <h4>{props.percentage}%</h4> 
            </div>
        </div>
                <h2>{props.title}</h2>
                {
                    (props.subtitle) ? <>
                        <h3>({props.subtitle} years)</h3>
                    </> : ''
                }
        </>
    )
}

export default TriArcChart