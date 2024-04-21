<<<<<<< HEAD
import { Link as ScrollLink } from 'react-scroll'
import './HeaderLink.css'

const HeaderLink = ({ to, children, onClick }) => {
    return (
        <li>
            <ScrollLink
                to={to}
                onClick={onClick}
                activeClass="active-link"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
            >
                {children}
            </ScrollLink>
        </li>
    );
}
=======
import { Link as ScrollLink } from 'react-scroll'
import './HeaderLink.css'

const HeaderLink = ({ to, children, onClick }) => {
    return (
        <li>
            <ScrollLink
                to={to}
                onClick={onClick}
                activeClass="active-link"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
            >
                {children}
            </ScrollLink>
        </li>
    );
}
>>>>>>> cf26256b2b839f3b47ce55256e75d447cc374d09
export default HeaderLink;