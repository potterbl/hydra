import React from 'react';
import '../style/Footer.css'
import logo from '../images/Logo.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import linkedIn from '../images/linkedin.png'
import youtube from '../images/youtube.png'
import insta from '../images/instagram.png'
import pin from '../images/pinterest.png'
import Button from "./UI/Button";
const Footer = () => {
    return (
        <div className={'footer'}>
            <div className="footer__top">
                <div className="container">
                    <img src={logo} style={{width: '185px', height: '185px'}} alt="Logo"/>
                </div>
                <hr/>
                <div className="container footer__links">
                    <ul>
                        <a href="#"><li>ABOUT</li></a>
                        <a href="#"><li>SERVICES</li></a>
                        <a href="#"><li>TECHNOLOGIES</li></a>
                        <a href="#"><li>HOW TO</li></a>
                        <a href="#"><li>JOIN HYDRA</li></a>
                    </ul>
                </div>
                <hr/>
                <div className="container footer__links">
                    <ul>
                        <a href="#"><li>F.A.Q</li></a>
                        <a href="#"><li>SITEMAP</li></a>
                        <a href="#"><li>CONDITION</li></a>
                        <a href="#"><li>LICENSES</li></a>
                    </ul>
                </div>
                <hr/>
                <div className="container">
                    <p>SOCIALIZE WITH HYDRA</p>
                    <div className="container__buttons">
                        <img src={facebook} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={linkedIn} alt=""/>
                        <img src={youtube} alt=""/>
                        <img src={insta} alt=""/>
                        <img src={pin} alt=""/>
                    </div>
                    <Button>BUILD YOUR WORLD</Button>
                </div>
            </div>
            <hr/>
            <div className="footer__bottom">
                <p>2023 © HYDRA LANDING PAGE - BY V. PLISKO - ALL RIGHTS RESERVED </p>
            </div>
        </div>
    );
};

export default Footer;