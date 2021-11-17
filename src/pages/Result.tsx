import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Chart from '../components/Charts'
import DonutChart from '../components/DonutChart'
import ProgressChart from '../components/ProgressChart'
import TriArcChart from '../components/TriArcChart'
import Button from '@mui/material/Button';
import Industry from '../assets/img/industry.svg';
import Mind from '../assets/img/mind.svg';
import Employees from '../assets/img/employees.svg';
import Manufacture from '../assets/img/manufacture.svg';
import Support from '../assets/img/support.svg';
import Health from '../assets/img/health.svg';
import Workforce from '../assets/img/workforce.svg';
import Discover from '../assets/img/discover.jpg';
import { getBenchmark, benchmarkSelector } from '../slices/benchmark';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import _ from 'lodash'

const Result = () => {

    const { benchmark, industry, loading, hasErrors } = useSelector(benchmarkSelector);

    const { industryValue } = useParams();

    const filterHighest = _.orderBy(benchmark[0]?.employeeHealthCareProvision, ['percentage'], ['desc']);
    const healthTopSeven = _.take(filterHighest, 7);
    const filterTopSeven = healthTopSeven.flatMap((val) => (val.percentage == 0) ? [] : val);

    const filterWellbeing = _.orderBy(benchmark[0]?.healthWellBeingIssue, ['percentage'], ['desc']);
    const WellbeingTopSeven = _.take(filterWellbeing, 7);
    const filterTopWellbeing = WellbeingTopSeven.flatMap((val) => (val.percentage == 0) ? [] : val);

    const generation = _.take(benchmark[0]?.generationMakeUp, 5);

    const getPosition = (data: any) => {
        if (Number(Number(data) <= 16)) {
            return 'bh-donet-health-st1';
        }
        else if (Number(Number(data) <= 33)) {
            return 'bh-donet-health-st2'
        }
        else if (Number(Number(data) <= 49)) {
            return 'bh-donet-health-st3'
        }
        else if (Number(Number(data) <= 67)) {
            return 'bh-donet-health-st4'
        }
        else if (Number(Number(data) <= 83)) {
            return 'bh-donet-health-st5'
        }
        else if (Number(Number(data) <= 100)) {
            return 'bh-donet-health-st6'
        }
    }

    let notSureZeroCase = (benchmark[0]?.leftStatus.notSureDueToHealth == 0) ? benchmark[0]?.leftStatus.notSureDueToHealth : benchmark[0]?.leftStatus.notSureDueToHealth / 2;
    let notLeftZeroCase = (benchmark[0]?.leftStatus.notLeftDueToHealth == 0) ? benchmark[0]?.leftStatus.notLeftDueToHealth : benchmark[0]?.leftStatus.notLeftDueToHealth / 2;
    let leftZeroCase = (benchmark[0]?.leftStatus.leftDueToHealth == 0) ? benchmark[0]?.leftStatus.leftDueToHealth : benchmark[0]?.leftStatus.leftDueToHealth / 2;

    let notSureZeroPosition = Number(100 - (benchmark[0]?.leftStatus.notLeftDueToHealth + benchmark[0]?.leftStatus.leftDueToHealth));
    let notSureZeroSolve = (benchmark[0]?.leftStatus.notSureDueToHealth == 0) ? notSureZeroPosition : notSureZeroPosition;

    let notLeftSmallCase = (benchmark[0]?.leftStatus.notLeftDueToHealth <= 20) ? (benchmark[0]?.leftStatus.notLeftDueToHealth + benchmark[0]?.leftStatus.notSureDueToHealth) : (benchmark[0]?.leftStatus.notSureDueToHealth + notLeftZeroCase);

    let notSurePosition = notSureZeroCase;
    let notLeftPosition = Number(notLeftSmallCase);
    let leftPosition = Number(notSureZeroSolve + benchmark[0]?.leftStatus.notLeftDueToHealth + leftZeroCase);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBenchmark(industryValue));
    }, []);

    return (
        <>
            {(benchmark.length > 0) ?
                <>
                    <div className="bh-result">

                        <div className="bh-download-report">
                            <h1>Results for companies in the {industry} Industry</h1>
                            <p>You can download our full 2021 National Health and Wellbeing at Work Report for more national insights.</p>
                            <a href="https://forbusiness.benenden.co.uk/l/482581/2021-09-09/2hvh5t?utm_source=Webste&utm_medium=nhr_report&utm_campaign=Benchmarking" target="_top">Download Report</a>
                        </div>

                        <div className="bh-question-box">
                            <div className="bh-question">
                                <div className="bh-question-icon">
                                    <img src={Industry} />
                                </div>
                                <div className="bh-question-text">
                                    <h2>What are the most common health and wellbeing issues affecting employees in the {industry} Industry?</h2>
                                    <p>Understanding what health concerns your employees have will help you create a more inclusive health and wellbeing programme that's tailored for them</p>
                                </div>
                            </div>
                            <div className="bh-progress-chart">
                                {
                                    filterTopWellbeing.map((val, index) => {
                                        return (
                                            <ProgressChart title={val.name} percentage={val.percentage} key={index} />
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="bh-question-box">
                            <div className="bh-question">
                                <div className="bh-question-icon">
                                    <img src={Mind} />
                                </div>
                                <div className="bh-question-text">
                                    <h2>What is the prevalence of poor mental health in the {industry} Industry vs the National Average?</h2>
                                    <p>Our research shows that poor mental health is by far the most widely experiences health issue faced by employees across the nation, so it’s essential to consider mental health support in your health and wellbeing programme</p>
                                </div>
                            </div>
                            <div className="bh-progress-chart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 698.249 300.271">

                                    {
                                        ((benchmark[0].healthWellBeingIssue[0].percentage < 25)) ?
                                            <>
                                                <g id="Group_91" dataname="Group 91" transform="translate(-2061.9 -800.64)">
                                                    <path id="Path_161" dataname="Path 161" d="M2157.264,917.595v-82.08a5.611,5.611,0,0,0-5.611-5.611h-57.726a5.61,5.61,0,0,0-5.61,5.611v194.8h68.947Z" fill="#007acc" />
                                                    <path id="Path_162" dataname="Path 162" d="M2259.864,1001.835v-82.08a5.611,5.611,0,0,0-5.612-5.611h-57.725a5.611,5.611,0,0,0-5.611,5.611V1030.32h68.948Z" fill="#e20886" style={{ display: (benchmark[0].healthWellBeingIssue[0].percentage == 0) ? "none" : "block" }} />
                                                    <text className="bh-display-desktop" id="_13_of_employees_in_the_manufacturing_industry_have_experienced_mental_health_issues_in_the_last_two_years" dataname="13% of employees in the manufacturing industry have experienced mental health issues in the last two years" transform="translate(2278.149 912.423)" fill="#d70a87" fontSize="20" fontFamily="MarkOT-Bold, Mark OT" fontWeight="700"><tspan x="0" y="24" className="desk-text">{benchmark[0].healthWellBeingIssue[0].percentage}%</tspan><tspan y="24" fontSize="14.826" fontFamily="MarkOT-Book, Mark OT" fontWeight="400"> </tspan><tspan y="24" fill="#1d1d1b" fontSize="14.826" fontFamily="MarkOT-Book, Mark OT" fontWeight="400" className="desk-text">of employees in the {industry} Industry have </tspan><tspan x="0" y="48.8" fill="#1d1d1b" fontSize="14.826" fontFamily="MarkOT-Book, Mark OT" fontWeight="400" className="desk-text">experienced mental health issues in the last two years</tspan></text>
                                                    <text className="bh-display-desktop" id="_27_of_employees_across_the_country_have_experienced_mental_health_issues_in_the_last_two_years" dataname="25% of employees across the country have experienced mental health issues in the last two years" transform="translate(2177.349 828.184)" fill="#007acc" fontSize="20" fontFamily="MarkOT-Bold, Mark OT" fontWeight="700"><tspan x="0" y="24" className="desk-text">25%</tspan><tspan y="24" xmlSpace="preserve" fill="#1d1d1b" fontSize="14.826" fontFamily="MarkOT-Book, Mark OT" fontWeight="400" className="desk-text"> of employees across the country have </tspan><tspan x="0" y="48.8" fill="#1d1d1b" fontSize="14.826" fontFamily="MarkOT-Book, Mark OT" fontWeight="400" className="desk-text">experienced mental health issues in the last two years</tspan></text>
                                                    <path id="Path_163" data-name="Path 163" d="M2062.4,800.64v229.68h238.32" fill="none" stroke="#231f20" strokeWidth="1" />
                                                    <text id="National_average" dataname="National average" transform="translate(2084.86 1035.911)" fontSize="12"><tspan x="12" y="10">National </tspan><tspan x="13" y="24.4">Average</tspan></text>
                                                    <text id="Manufacturing_industry" dataname="indutry" transform="translate(2177.78 1035.911)" fontSize="12"><tspan x="26" y="10">{industry} </tspan><tspan x="24" y="24.4">Industry</tspan></text>
                                                </g>
                                            </> :
                                            <></>
                                    }

                                    {
                                        ((benchmark[0].healthWellBeingIssue[0].percentage > 25)) ?
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="614.249" height="262.671" viewBox="0 0 614.249 262.671">

                                                    <g id="_2" data-name="2" transform="translate(-2061.9 -800.64)">
                                                        <path id="Path_161" data-name="Path 161" d="M2157.26,917.595v-82.08a5.611,5.611,0,0,0-5.611-5.611h-57.726a5.61,5.61,0,0,0-5.61,5.611v194.8h68.947Z" fill="#e20886" />
                                                        <path id="Path_162" data-name="Path 162" d="M2259.86,1001.84V919.76a5.611,5.611,0,0,0-5.612-5.611h-57.725a5.611,5.611,0,0,0-5.611,5.611v110.56h68.948Z" fill="#007acc" />
                                                        <text className="bh-display-desktop" id="_13_of_employees_in_the_manufacturing_industry_have_experienced_mental_health_issues_in_the_last_two_years" data-name="13% of employees in the manufacturing industry have experienced mental health issues in the last two years" transform="translate(2278.149 936.423)" fill="#007acc" fontSize="24" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0" className="desk-text">25% </tspan><tspan  y="0" fill="#1d1d1b" fontSize="16.82" fontFamily="SegoeUI, Segoe UI" fontWeight="400" className="desk-text">of employees across the country have</tspan><tspan fill="#1d1d1b" fontSize="16.82" fontFamily="SegoeUI, Segoe UI" fontWeight="400"><tspan className="desk-text" x="0" y="28.8">experienced mental health issues in the last two years</tspan></tspan></text>
                                                        <text className="bh-display-desktop" id="_27_of_employees_across_the_country_have_experienced_mental_health_issues_in_the_last_two_years" data-name="27% of employees across the country have experienced mental health issues in the last two years" transform="translate(2177.349 852.184)" fill="#e20886" fontSize="24" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0" className="desk-text">{benchmark[0].healthWellBeingIssue[0].percentage}%</tspan><tspan y="0" fontSize="16.82" fontFamily="SegoeUI, Segoe UI" fontWeight="400"> </tspan><tspan y="0" fill="#1d1d1b" fontSize="16.82" fontFamily="SegoeUI, Segoe UI" fontWeight="400" className="desk-text">of employees in the {industry} Industry have</tspan><tspan fill="#1d1d1b" fontSize="16.82" fontFamily="SegoeUI, Segoe UI" fontWeight="400"><tspan x="0" y="28.8" className="desk-text">experienced mental health issues in the last two years</tspan></tspan></text>
                                                        <path id="Path_163" data-name="Path 163" d="M2062.4,800.64v229.68h238.32" fill="none" stroke="#231f20" strokeWidth="1" />
                                                        <g id="Group" transform="translate(3)">
                                                            <text id="Manufacturing" transform="translate(2076.4 1045.911)" fontSize="12"><tspan x="0" y="0">{industry}</tspan></text>
                                                            <text id="industry" transform="translate(2095.4 1060.311)" fontSize="12"><tspan x="0" y="0">Industry</tspan></text>
                                                        </g>
                                                        <g id="Group-2" data-name="Group" transform="translate(-1)">
                                                            <text id="National" transform="translate(2201.4 1045.911)" fontSize="9"><tspan x="0" y="0">National</tspan></text>
                                                            <text id="average" transform="translate(2202.4 1060.311)" fontSize="9"><tspan x="0" y="0">Average</tspan></text>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </> :
                                            <></>
                                    }

                                    {
                                        ((benchmark[0].healthWellBeingIssue[0].percentage == 25)) ?
                                            <>
                                                <g id="_3" data-name="3" transform="translate(-2061.9 -800.64)">
                                                    <path id="Path_161" data-name="Path 161" d="M2157.26,886.786V833.544c0-2.01-2.512-3.64-5.611-3.64h-57.726c-3.1,0-5.611,1.63-5.61,3.64V959.9h68.947Z" transform="translate(0 70.736)" fill="#e20886" />
                                                    <path id="Path_162" data-name="Path 162" d="M2259.86,1012.279V920.428c0-3.468-2.513-6.28-5.612-6.279h-57.725c-3.1,0-5.611,2.811-5.611,6.279v123.721h68.948Z" transform="translate(0 -13.509)" fill="#007acc" />
                                                    <text className="bh-display-desktop" id="_13_of_employees_in_the_manufacturing_industry_have_experienced_mental_health_issues_in_the_last_two_years" data-name="25% of employees in the manufacturing industry have experienced mental health issues in the last two years" transform="translate(2278.149 936.423)" fill="#007acc" fontSize="24" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0" className="desk-text">25% </tspan><tspan y="0" fill="#1d1d1b" fontSize="16.82" fontFamily="SegoeUI, Segoe UI" fontWeight="400" className="desk-text">of employees across the country have</tspan><tspan fill="#1d1d1b" fontSize="16.82" fontFamily="SegoeUI, Segoe UI" fontWeight="400"><tspan x="0" y="28.8" className="desk-text">experienced mental health issues in the last two years</tspan></tspan></text>
                                                    <text className="bh-display-desktop" id="_27_of_employees_across_the_country_have_experienced_mental_health_issues_in_the_last_two_years" data-name="25% of employees across the country have experienced mental health issues in the last two years" transform="translate(2088.349 852.184)" fill="#e20886" fontSize="24" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0" className="desk-text">25%</tspan><tspan y="0" fontSize="16.82" fontFamily="SegoeUI, Segoe UI" fontWeight="400"> </tspan><tspan y="0" fill="#1d1d1b" fontSize="16.82" fontFamily="SegoeUI, Segoe UI" fontWeight="400" className="desk-text">of employees in the {industry} Industry have</tspan><tspan fill="#1d1d1b" fontSize="16.82" fontFamily="SegoeUI, Segoe UI" fontWeight="400"><tspan x="0" y="28.8" className="desk-text">experienced mental health issues in the last two years</tspan></tspan></text>
                                                    <path id="Path_163" data-name="Path 163" d="M2062.4,800.64v229.68h238.32" fill="none" stroke="#231f20" strokeWidth="1" />
                                                    <g id="Group" transform="translate(3)">
                                                        <text id="Manufacturing" transform="translate(2076.4 1045.911)"  fontSize="12"><tspan x="0" y="0">{industry}</tspan></text>
                                                        <text id="industry" transform="translate(2095.4 1060.311)"  fontSize="12"><tspan x="0" y="0">Industry</tspan></text>
                                                    </g>
                                                    <g id="Group-2" data-name="Group" transform="translate(-1)">
                                                        <text id="National" transform="translate(2201.4 1045.911)" fontSize="12"><tspan x="0" y="0">National</tspan></text>
                                                        <text id="average" transform="translate(2202.4 1060.311)" fontSize="12"><tspan x="0" y="0">Average</tspan></text>
                                                    </g>
                                                </g>
                                            </> :
                                            <></>
                                    }

                                </svg>
                                <div className="bh-national-average-app bh-display-mobile">
                                        <p><span className="bh-industry-average">{benchmark[0].healthWellBeingIssue[0].percentage}%</span> of employees in the {industry} Industry have experienced mental health issues in the last two years</p>
                                        <p><span className="bh-national-average">25%</span> of employees across the country have experienced mental health issues in the last two years</p>
                                    </div>
                            </div>
                        </div>

                        <div className="bh-question-box">
                            <div className="bh-question">
                                <div className="bh-question-icon">
                                    <img src={Employees} />
                                </div>
                                <div className="bh-question-text">
                                    <h2>What percentage of companies in the {industry} Industry feel they’ve lost employees due to health and wellbeing issues?</h2>
                                    <p>As well as costing the business through absenteeism, lower productivity and low employee morale, employee health issues can also lead to higher turnover.</p>
                                </div>
                            </div>
                            {
                                (benchmark[0]?.leftStatus.leftDueToHealth == 0 && leftPosition == 0 && benchmark[0]?.leftStatus.notSureDueToHealth == 0) ? '' :
                                    <>
                                        <div className="bh-progress-chart">
                                            <div className={`${(((notSurePosition <= 16) && (notSureZeroCase !== 0)) || ((leftPosition <= 16) && (leftZeroCase !== 0)) || ((notLeftPosition <= 16) && (notLeftZeroCase !== 0))) ? 'bh-donet-health custom' : 'bh-donet-health'}`}>
                                                <div className="bh-donot-clip">
                                                    <div className="donot-clipping">
                                                        <div className="bh_svgClipping">
                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 555 507">
                                                                <image id="Circle-New" xlinkHref="data:img/png;base64,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" />
                                                            </svg>
                                                        </div>
                                                        <TriArcChart
                                                            left={benchmark[0]?.leftStatus.leftDueToHealth}
                                                            notLeft={benchmark[0]?.leftStatus.notLeftDueToHealth}
                                                            notSure={benchmark[0]?.leftStatus.notSureDueToHealth}
                                                        />
                                                    </div>
                                                </div>

                                                {
                                                    (!(benchmark[0]?.leftStatus.leftDueToHealth == 0)) ? <>
                                                        <div className={`bh-donet-health-st  ${getPosition(leftPosition)}`}>
                                                            <p>Have had employees leave because they were struggling with their health.</p>
                                                            <h4>{(benchmark[0]?.leftStatus.leftDueToHealth).toFixed(0)}%</h4>
                                                        </div>
                                                    </> : ''
                                                }

                                                {
                                                    (!(benchmark[0]?.leftStatus.notLeftDueToHealth == 0)) ? <>
                                                        <div className={`bh-donet-health-st  ${getPosition(notLeftPosition)}`}>
                                                            <p>Haven’t had employees leave due to struggles with health issues</p>
                                                            <h4>{(benchmark[0]?.leftStatus.notLeftDueToHealth).toFixed(0)}%</h4>
                                                        </div>
                                                    </> : ''
                                                }

                                                {
                                                    (!(benchmark[0]?.leftStatus.notSureDueToHealth == 0)) ? <>
                                                        <div className={`bh-donet-health-st bh-custom ${getPosition(notSurePosition)} `}>
                                                            <p>Are not sure if employees have left due to their poor health</p>
                                                            <h4>{(benchmark[0]?.leftStatus.notSureDueToHealth).toFixed(0)}%</h4>
                                                        </div>
                                                    </> : ''
                                                }
                                            </div>
                                        </div>
                                    </>
                            }

                        </div>

                        <div className="bh-question-box">
                            <div className="bh-question">
                                <div className="bh-question-icon">
                                    <img src={Manufacture} />
                                </div>
                                <div className="bh-question-text">
                                    <h2>Do similar companies in the {industry} Industry offer health and wellbeing programmes to their employees?</h2>
                                </div>
                            </div>
                            <div className="bh-progress-chart">
                                <div className="bh-donet-indstry">
                                    <div className="bh-donot-clip">
                                        <DonutChart percentage={benchmark[0]?.healthWellBeingOffered} />
                                    </div>
                                    <div className="bh-donet-indstry-txt">
                                        <p>No. of employers in your industry with a similar number of employees offer a health and wellbeing programme in addition to the statutory allowance</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bh-question-box">
                            <div className="bh-question">
                                <div className="bh-question-icon">
                                    <img src={Support} />
                                </div>
                                <div className="bh-question-text">
                                    <h2>Why do employers in the {industry} Industry believe in the importance of supporting employee health and wellbeing?</h2>
                                    <p>Not only does a supportive health and wellbeing programme help you take care of your team, it also increases productivity and boosts employee morale.</p>
                                </div>
                            </div>
                            <div className="bh-progress-chart">
                                <ProgressChart title="I care about my team" percentage={benchmark[0]?.employeeCareByIndustry.careAboutTeam} />
                                <ProgressChart title="It increases productivity" percentage={benchmark[0]?.employeeCareByIndustry.increasesProductivity} />
                                <ProgressChart title="I don’t think it’s important" percentage={benchmark[0]?.employeeCareByIndustry.dontCare} />
                            </div>
                        </div>

                        <div className="bh-question-box">
                            <div className="bh-question">
                                <div className="bh-question-icon">
                                    <img src={Health} />
                                </div>
                                <div className="bh-question-text">
                                    <h2>Out of those employers who offer health and wellbeing programmes, here’s what their employees use the most</h2>
                                    <p>See what employees across the {industry} Industry find most valuable in their employers’ health and wellbeing programme.</p>
                                </div>
                            </div>
                            <div className="bh-progress-chart">
                                {
                                    filterTopSeven.map((val, index) => {
                                        return (

                                            <ProgressChart title={val.name} percentage={val.percentage} key={index} />

                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="bh-question-box">
                            <div className="bh-question">
                                <div className="bh-question-icon">
                                    <img src={Workforce} />
                                </div>
                                <div className="bh-question-text">
                                    <h2>Generational make-up of the workforce across the {industry} Industry</h2>
                                    <p>Understanding the different generations of your workforce will help you refine your health and wellbeing strategy and identify their specific needs</p>
                                </div>
                            </div>
                            <div className="bh-progress-chart bh-workspace-graph">

                                {
                                    generation?.map((val, index) => {
                                        return (
                                            <div className="bh-donot-clip" key={index}>
                                                <div className="donut-chart-box">
                                                    <DonutChart percentage={val?.percentage} title={val?.name} subtitle={val?.ageGroup} key={index} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>

                        <div className="bh-question-box">
                            <div className="bh-question-reslt">
                                <p>*Results are based on a survey of 2,007+ employees and 500+ employers in the United Kingdom from a variety of industries, regions and company sizes conducted by Benenden Health in July 2021</p>
                            </div>
                        </div>
                        <div className="bh-result-description">

                        </div>

                        <div className="bh-discover">
                            <div className="bh-download-image">
                                <img src={Discover} />
                            </div>
                            <div className="bh-download-content">
                                <h3>Discover greater insights into the health and wellbeing of employees across the UK</h3>
                                <p>Download our 2021 National Health and Wellbeing at Work Report.</p>
                                <a href="https://forbusiness.benenden.co.uk/l/482581/2021-09-09/2hvh5t?utm_source=Webste&utm_medium=nhr_report&utm_campaign=Benchmarking" target="_top">Download Now</a>
                            </div>
                        </div>
                    </div>
                </> : <> </>}
        </>
    )
}

export default Result