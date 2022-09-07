import BottomBg from '../../assets/bg-pattern-mobile-nav.svg'
import { Menu } from './styled'

export default function MobileMenu() {
    return (
        <Menu>
            <ul>
                <li>How we work</li>
                <li>Blog</li>
                <li>Account</li>
                <button>View plans</button>
            </ul>
            <div>
                <img src={BottomBg} />
            </div>
        </Menu>
    )
}