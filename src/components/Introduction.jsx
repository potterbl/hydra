import React, {useRef} from 'react';
import '../style/Introduction.css'
import longArrow from '../images/LongArrow.png'
import image from '../images/introduction.png'
import Button from "./UI/Button";
import HeadingTop from "./HeadingTop";
const Introduction = ({aboutRef}) => {
    window.addEventListener('scroll', () => {
        let about = document.querySelector('#about__text')
        let vrImage = document.querySelector('.vr__image')
        let vrPos = vrImage.getBoundingClientRect().top
        let vrPosBottom = vrImage.getBoundingClientRect().bottom
        if(vrPos < window.innerHeight && vrPosBottom > 0) {
            vrImage.style.transform = 'translateY(' + vrPos / (window.innerHeight * 0.04) + '%)'
        }
        if(vrPos <= window.innerHeight * 0.8){
            about.style = 'transform: translate(0) ; opacity: 1'
        }
    })
    return (
        <div className={'introduction'} ref={aboutRef}>
            <HeadingTop topId={'introduction__heading'} pId={'introduction__p'} caption={'INTRODUCTION'} thinCaption={'TO HYDRA VR'}/>
            <div className="flexable">
                <img className={'vr__image'} src={image} alt=""/>
                <div className="about" id={'about__text'}>
                    <h1>ABOUT</h1>
                    <h1 className={'thin__caption'}>HYDRA VR</h1>
                    <p style={{marginTop: '42px'}}>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                        n tempor.</p>
                    <Button cn={'buttom__int'} customStyles={{marginTop: '28px'}}>Let's get in touch</Button>
                </div>
            </div>
        </div>
    );
};

export default Introduction;