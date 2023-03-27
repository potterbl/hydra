import React from 'react';
import '../style/MainView.css'
import girlPic from "../images/girlMain.png"
import Button from "./UI/Button";
import arrow from "../images/shape.png"
import location from "../images/location.png"
import phone from "../images/phone.png"
import mail from "../images/mail.png"
const MainView = ({contactRef, mainRef}) => {



    window.addEventListener('scroll', () => {
        let image = document.querySelector('.image')
        let imagePos = image.getBoundingClientRect().top
        let imageBottom = image.getBoundingClientRect().bottom
        if(imagePos < window.innerHeight && imageBottom > 0){
            image.style = 'transform: translateY(' + imagePos / (window.innerHeight * 0.03) + '%)'
        }
    })

    return (
        <div className="content" ref={mainRef}>
            <div className="content__top">
                <div className={'text__main'}>
                    <h1><span className={'gradient'}>Dive</span> Into The Depths</h1>
                    <h1>Of <span className={'gradient'}>Virtual Reality</span></h1>
                    <p className={'about'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                    <div className={'navigation'}>
                        <Button cn={'intr__btn'}>build your world</Button>
                        <a style={{marginLeft: '40px'}} href="#"><img src={arrow} style={{ height: '33px' }} alt=""/></a>
                    </div>
                </div>
                <img src={girlPic} className={'image'} alt=""/>
            </div>
            <div className="content__bottom" ref={contactRef}>
                <div className="bottom__section">
                    <img src={location} alt=""/>
                    <div className="section__text">
                        <h2>Pay Us a Visit</h2>
                        <p>Union St, Seattle, WA 98101, United States</p>
                    </div>
                </div>
                <hr/>
                <div className="bottom__section">
                    <img src={phone} alt=""/>
                    <div className="section__text">
                        <h2>Give Us a Call</h2>
                        <p>(110) 1111-1010</p>
                    </div>
                </div>
                <hr/>
                <div className="bottom__section">
                    <img src={mail} alt=""/>
                    <div className="section__text">
                        <h2>Send Us a Message</h2>
                        <p>Contact@HydraVTech.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainView;