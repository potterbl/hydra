import React from 'react';
import '../style/Technologies.css'
import Button from "./UI/Button";
import tech1 from '../images/Hydra-Tech1 1.png'
import tech2 from '../images/Hydra-Tech2 1.png'
import tech3 from '../images/Hydra-Tech3 1.png'
import tech4 from '../images/Hydra-Tech4 1.png'
import Carusel from "./Carusel";
const Technologies = ({technologiesRef}) => {
    window.addEventListener('scroll', () => {
        let technologies = document.querySelector('.technologies__top')
        let technologiesPos = technologies.getBoundingClientRect().top
        let technologiesPosBottom = technologies.getBoundingClientRect().bottom
        if(technologiesPos < window.innerHeight && technologiesPosBottom > 0) {
            technologies.style = 'transform: translateY(' + technologiesPos / (window.innerHeight * 0.04) + '%)'
        }
    })
    return (
        <div className={'technologies'} ref={technologiesRef}>
            <div className="technologies__top">
                <h1>TECHNOLOGIES & HARDWARE</h1>
                <h1 className="thin__caption">USED BY HYDRA VR.</h1>
                <Button customStyles={{fontSize: '40px', padding: '20px 15px', transform: 'rotate(90deg) translateX(-50%)',position: 'absolute', top: '100%', boxShadow: '0 0 4px 14px rgba(14, 14, 14, 0.32)' }}>></Button>
            </div>
            <div className="technologies__bottom">
                <Carusel height={'300px'}>
                    <img id={'tech1'} src={tech1} className={'image__tech'} alt=""/>
                    <img id={'tech2'} src={tech2} className={'image__tech'} alt=""/>
                    <img id={'tech3'} src={tech3} className={'image__tech'} alt=""/>
                    <img id={'tech4'} src={tech4} className={'image__tech'} alt=""/>
                </Carusel>
            </div>
        </div>
    );
};

export default Technologies;