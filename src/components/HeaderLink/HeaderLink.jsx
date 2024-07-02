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
export default HeaderLink;