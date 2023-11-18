import './ProfileInfo.css'
import AboutInfo from '../AboutInfo/AboutInfo';
import osamaAlBraidyImage from '../../assets/OsamaAlBraidy.jpg'

const ProfileInfo = () => {
    return (
        <div className="row">
            <div className="col-sm-6 col-md-5">
                <div className="about-img">
                    <img src={osamaAlBraidyImage} alt='' width={150} height={150} className='img-fluid rounded b-shadow-a'/>
                </div>
            </div>
            <div className="col-sm-6 col-md-7">
                <div className="about-info">
                    <AboutInfo
                        title="Name: "
                        details="Osama Al Braidy"
                    />
                    <AboutInfo
                        title="Profile: "
                        details="Web Developer"
                    />
                    <AboutInfo
                        title="Email: "
                        details="osamabraidy@gmail.com"
                    />
                    <AboutInfo
                        title="Phone: "
                        details="+961 78 858 135"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;

