import headerimg from '../assets/img/Mask Group 1.png';
import Bannervector1 from '../assets/img/banner1.svg';
import Bannervector2 from '../assets/img/banner2.svg';
import Bannervector3 from '../assets/img/banner3.svg';

const HeaderMain = () => {
    return (
        <div className="bh-header-main-box">
            <div className="bh-header-main">
                <div className="bh-header">
                        <h1>Employee Wellbeing Benchmark Tool</h1>
                        <p>
                            Find out how your health and wellbeing programme measures up
                            against others in your industry by using our simple tool
                        </p>
                </div>
                <div className="bh-header-image">
                    <img className="bh-banner-img" src={headerimg} alt="headerimg" />
                    <div className="bh-banner-vector">
                        <img className="bh-banner-vector1" src={Bannervector1} alt="Bannervector1" />
                        <img className="bh-banner-vector2" src={Bannervector2} alt="Bannervector2" />
                        <img className="bh-banner-vector3" src={Bannervector3} alt="Bannervector3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain
