import './ProfileInfo.css'
import AboutInfo from '../AboutInfo/AboutInfo';
import osamaAlBraidyImage from '../../assets/OsamaAlBraidy.png'

const ProfileInfo = () => {
    return (
        <div className="Profile-Info">
            <div className="about-img">
                <img src={osamaAlBraidyImage} alt='' className='img-fluid rounded b-shadow-a' />
            </div>
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
    );
};

export default ProfileInfo;

