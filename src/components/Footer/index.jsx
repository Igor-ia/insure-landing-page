import { FooterField } from './styled'

import Logo from '../../assets/logo.svg';
import BgFooterTop from '../../assets/bg-pattern-footer-desktop.svg';
import MobileBg from '../../assets/bg-pattern-footer-mobile.svg';
import IconFacebook from '../../assets/icon-facebook.svg';
import IconTwitter from '../../assets/icon-twitter.svg';
import IconPinterest from '../../assets/icon-pinterest.svg';
import IconInstagram from '../../assets/icon-instagram.svg';


export default function Footer() {
    return (
        <FooterField>
            <img className='bg-footer desktop' src={BgFooterTop} alt="" />
            <div className='footer-top'>
                <img src={MobileBg} className="mobile mobile-footer-bg" />
                <img className='logo-footer' src={Logo} alt="Logo" />

                {/* Social media */}
                <div className="social-media">
                    <a href="">
                        <img src={IconFacebook} alt="" />
                    </a>
                    <a href="">
                        <img src={IconTwitter} alt="" />
                    </a>
                    <a href="">
                        <img src={IconPinterest} alt="" />
                    </a>
                    <a href="">
                        <img src={IconInstagram} alt="" />
                    </a>
                </div>
            </div>

            <hr />

            <div className="footer-options">
                <div className="our-company">
                    <span>Our Company</span>
                    <a href="">How we work</a>
                    <a href="">Why insure?</a>
                    <a href="">View plans</a>
                    <a href="">Reviews</a>
                </div>
                <div className="help-me">
                    <span>Help me</span>
                    <a href="">Faq</a>
                    <a href="">Terms of use</a>
                    <a href="">Privacy policy</a>
                    <a href="">Cookies</a>
                </div>
                <div className="contact">
                    <span>Contact</span>
                    <a href="">Sales</a>
                    <a href="">Support</a>
                    <a href="">Live chat</a>
                </div>
                <div className="others">
                    <span>Others</span>
                    <a href="">Careers</a>
                    <a href="">Press</a>
                    <a href="">Licenses</a>
                </div>
            </div>
        </FooterField>
    )
}