import { Nav } from './styled';

import Logo from '../../assets/logo.svg'
import MobileToggle from '../../assets/icon-hamburger.svg'
import CloseIcon from '../../assets/icon-close.svg'

export default function Header({ isOpen, mobileMenu }) {
    return (
        <Nav>
            <img src={Logo} alt="Logo" />
            <ul className='hidden'>
                <li>
                    <a href="">How we work</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Account</a>
                </li>
                <li>
                    <button>View plans</button>
                </li>
            </ul>
            <button onClick={mobileMenu} className='mobile-toggle'>
                <img src={isOpen ? CloseIcon : MobileToggle} className="menu-toggle" />
            </button>
        </Nav>
    )
}