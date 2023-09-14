import './ContactInfo.css'
import location from '../../Data/imgs/ContactInfo/geo-alt.svg'
import phone from '../../Data/imgs/ContactInfo/phone.svg'
import email from '../../Data/imgs/ContactInfo/envelope.svg'

const ContactInfo = () => (
    <div className="more-info">
        <ul className="list-ico">
            <li className="pb-3">
                <p><img src={location} alt="" /></p> Lebanon | Zahle
            </li>
            <li className="pb-3">
                <p><img src={phone} alt="" /></p> +961 78 858 135
            </li>
            <li className="pb-3">
                <p><img src={email} alt="" /></p> osamabraidy@gmail.com
            </li>
        </ul>
    </div>
);

export default ContactInfo;
