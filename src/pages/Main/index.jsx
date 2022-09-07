import { Container } from '../../styles/GlobalStyles'

import { Div } from './styled'
import Banner from "../../components/Banner";
import Description from "../../components/Description";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BgHowWeWork from '../../assets/bg-pattern-how-we-work-desktop.svg'
import MobileBg from '../../assets/bg-pattern-how-we-work-mobile.svg'
import { useState } from 'react';
import MobileMenu from '../../components/MenuMobile';

export default function Main() {
    const [isOpen, setIsOpen] = useState(false);

    function handleMobileMenu() {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }
    return (
        <>
            <Container>
                <Header isOpen={isOpen} mobileMenu={handleMobileMenu} />
                {
                    isOpen && <MobileMenu />
                }

                <Banner />
                <Description />
                <Div>
                    <h2>Find out more about how we work</h2>
                    <button>How we work</button>
                    <img className='mobile mobile-how-we-work' src={MobileBg} />
                    <div className='desktop'>
                        <img src={BgHowWeWork} />
                    </div>
                </Div>
            </Container>
            <Footer />
        </>
    )
}