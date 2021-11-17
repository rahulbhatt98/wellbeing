import Button from '@mui/material/Button';

const ProgressChart = (props: any) => {
    return (
        <div className="progress-bar-main">
            <div className="progress-bar-main-box">
                <div className="progress-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="33.667">
                        <defs>
                            <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#fff" />
                                <stop offset="0.149" stopColor="#fdf7fb" />
                                <stop offset="0.469" stopColor="#faeff6" />
                                <stop offset="1" stopColor="#faedf5" />
                            </linearGradient>
                        </defs>
                        <rect id="Rectangle_46" dataname="Rectangle 46" width="100%" height="33.667" rx="5.612" fill="url(#linear-gradient)" />
                    </svg>
                </div>
                <div className="progress-bar-content">
                    <div className="progress-text">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="progress-process">
                        <svg className="svg-rotate" xmlns="http://www.w3.org/2000/svg" style={{"width": `${props.percentage}%`}} height="33.667" >
                            <path id="Path_1" dataname="Path 1" d="M-785.227,3983.3h-383.979a5.61,5.61,0,0,0-5.612,5.61v22.445a5.611,5.611,0,0,0,5.612,5.612h383.979a5.611,5.611,0,0,0,5.612-5.612V3988.91A5.611,5.611,0,0,0-785.227,3983.3Z" transform="translate(1174.818 -3983.3)" fill="#e20886" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="progress-percentage">
                <Button variant="contained">{props.percentage}%</Button>
            </div>
        </div>
    )
}

export default ProgressChart