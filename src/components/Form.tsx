import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import TextField from '@mui/material/TextField';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { resetBenchmark } from '../slices/benchmark';
import { useDispatch } from 'react-redux';

const Form = () => {
    const [industryValue, setIndustryValue] = useState('');
    // const [emailValue, setEmailValue] = useState('');
    const [formEnabled, setFormEnabled] = useState(false);
    // const [terms, setTerms] = useState(false);
    let history = useHistory();

    const handleIndustry = (event: SelectChangeEvent) => {
        setIndustryValue(event.target.value);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetBenchmark());
    },[]);

    // const handleEmail = (event: any) => {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     const checkEmail = re.test(String(event.target.value));
    //     if(checkEmail){
    //         setEmailValue(event.target.value);
    //     }
    //     else{
    //         setEmailValue('');
    //     }
    // };

    // const handleTerms = () => {
    //     if (!terms) {
    //         setTerms(true);
    //     }
    //     else {
    //         setTerms(false);
    //     }
    // }

    const handleSubmit = () => {
        history.push(`/result/${industryValue}`);
    }

    useEffect(() => {
        let formSubmission = (industryValue) ? true : false;
        setFormEnabled(formSubmission);

    }, [industryValue])

    return (
        <>
            <div className="bh-form-box">
                <h3>
                    Benchmark your health and wellbeing strategy by finding out more
                    about the needs of employees in similar companies in
                    your industry and region
                </h3>
                <div className="bh-form">
                    <form onSubmit={handleSubmit}>
                        <div className="bh-select-input">
                            <div className="bh-select-box">
                                <div className="bh-title">
                                    <h4>Select your industry</h4>
                                </div>
                                <div className="bh-select">
                                    <FormControl className="bh-input">
                                        <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="industryselect"
                                            value={industryValue}
                                            label="industry"
                                            onChange={handleIndustry}
                                        >
                                            <MenuItem className="bh-select-li" value="Architecture, Engineering & Building">Architecture, Engineering & Building</MenuItem>
                                            <MenuItem className="bh-select-li" value="Arts & Culture">Arts & Culture</MenuItem>
                                            <MenuItem className="bh-select-li" value="Education">Education</MenuItem>
                                            <MenuItem className="bh-select-li" value="Finance">Finance</MenuItem>
                                            <MenuItem className="bh-select-li" value="Healthcare">Healthcare</MenuItem>
                                            <MenuItem className="bh-select-li" value="HR">HR</MenuItem>
                                            <MenuItem className="bh-select-li" value="IT & Telecoms">IT & Telecoms</MenuItem>
                                            <MenuItem className="bh-select-li" value="Legal">Legal</MenuItem>
                                            <MenuItem className="bh-select-li" value="Manufacturing & Utilities">Manufacturing & Utilities</MenuItem>
                                            <MenuItem className="bh-select-li" value="Catering & Leisure">Catering & Leisure</MenuItem>
                                            <MenuItem className="bh-select-li" value="Sales, Media & Marketing">Sales, Media & Marketing</MenuItem>
                                            <MenuItem className="bh-select-li" value="Travel & Transport">Travel & Transport </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                            {/* <div className="bh-select-box">
                                <div className="bh-title">
                                    <h4>Email address</h4>
                                </div>
                                <div className="bh-select">
                                    <TextField type="email" className="bh-input" required id="outlined-basic" label="example@example.com" variant="outlined" onChange={handleEmail} />
                                </div>
                            </div>

                            <div className="bh-select-box">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="By completing this tool from Benenden Health, you agree to our Privacy Policy." onClick={handleTerms} />
                                    <span className="bh-pvc">Please note we may contact you about our business products. You can opt out at any time.</span>
                                </FormGroup>
                            </div> */}

                        </div>
                        <div className="bh-form-submit">
                            <Button variant="contained" onClick={handleSubmit} disabled={!formEnabled}>Show me my results</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>)
}

export default Form
