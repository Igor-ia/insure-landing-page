import { SectionBanner } from './styled'
import IntroImage from '../../assets/image-intro-desktop.jpg'
import IntroMobile from '../../assets/image-intro-mobile.jpg'
import BgTop from '../../assets/bg-pattern-intro-right-desktop.svg'
import BgBottom from '../../assets/bg-pattern-intro-left-desktop.svg'
import DescriptionMobileTop from '../../assets/bg-pattern-intro-left-mobile.svg'
import DescriptionMobileBottom from '../../assets/bg-pattern-intro-right-mobile.svg'
export default function Banner() {
    return (
        <SectionBanner>
            <div className="background desktop">
                <img className='bg-top desktop' src={BgTop} />
            </div>
            <img src={IntroMobile} className="intro-mobile mobile" />
            <div className="description">
                <div className="mobile-description">
                    <img src={DescriptionMobileTop} className="mobile mobile-bg-top" />
                    <hr className='top-description desktop' />
                    <h1>Humanizing your insurance.</h1>
                    <p>get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                    <button>View plans</button>
                </div>
                <img src={DescriptionMobileBottom} className="mobile mobile-bg-bottom" />
                <hr className='bottom-description' />
            </div>
            <img className='intro desktop' src={IntroImage} alt="Intro Image" />
            <img className='bg-bottom desktop' src={BgBottom} />
        </SectionBanner>
    )
}