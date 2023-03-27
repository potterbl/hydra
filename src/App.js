import React, {useEffect, useRef, useState} from 'react';
import './style/App.css'
import MainView from "./components/MainView";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Why from "./components/Why";
import Technologies from "./components/Technologies";
import HowWe from "./components/HowWe";
import cardImage1 from "./images/pexels-shvets-production-7561969 1.png";
import cardImage2 from "./images/pexels-mikhail-nilov-7887140 1.png";
import cardImage3 from "./images/pexels-rodnae-productions-8098263 1.png";
import cardImage4 from "./images/pexels-mali-maeder-756439 1.png";
import Join from "./components/Join";
import Footer from "./components/Footer";
function App() {
    const [cards, setCards] = useState([
        {id: 1, title: 'simulation', body: 'Vitae sapien pellentesque habitant morbi\n' +
                'nunc. Viverra aliquet  porttitor rhoncus \n' +
                'libero justo laoreet sit amet vitae.', image: cardImage1},
        {id: 2, title: 'EDUCATION', body: 'Vitae sapien pellentesque habitant morbi\n' +
                'nunc. Viverra aliquet  porttitor rhoncus \n' +
                'libero justo laoreet sit amet vitae.', image: cardImage2},
        {id: 3, title: 'SELF-CARE', body: 'Vitae sapien pellentesque habitant morbi\n' +
                'nunc. Viverra aliquet  porttitor rhoncus \n' +
                'libero justo laoreet sit amet vitae.', image: cardImage3},
        {id: 4, title: 'OUTDOOR', body: 'Vitae sapien pellentesque habitant morbi\n' +
                'nunc. Viverra aliquet  porttitor rhoncus \n' +
                'libero justo laoreet sit amet vitae.', image: cardImage4},
    ])

    let aboutRef = useRef(null)
    let servicesRef = useRef(null)
    let technologiesRef = useRef(null)
    let howToRef = useRef(null)
    let joinRef = useRef(null)
    let contactRef = useRef(null)
    let mainRef = useRef(null)

    useEffect(() => {


        window.addEventListener('scroll', () => {


            let contact = contactRef.current
            let contactPosition = contact.getBoundingClientRect().top;
            let intoductionHeading = document.querySelector('#introduction__heading')
            let intoductionP = document.querySelector('#introduction__p')
            let intoductionHeadingPosition = intoductionHeading.getBoundingClientRect().top;

            let whyHeading = document.querySelector('#why__heading')
            let whyP = document.querySelector('#why__p')
            let whyHeadingPos = whyHeading.getBoundingClientRect().top
            let card1 = document.querySelector('#card1')
            let card2 = document.querySelector('#card2')
            let card3 = document.querySelector('#card3')
            let card4 = document.querySelector('#card4')
            let cardPos = card1.getBoundingClientRect().top
            let tech1 = document.querySelector('#tech1')
            let tech2 = document.querySelector('#tech2')
            let tech3 = document.querySelector('#tech3')
            let tech4 = document.querySelector('#tech4')
            let techPos = tech1.getBoundingClientRect().top
            let howHeading = document.querySelector('#how__heading')
            let howP = document.querySelector('#how__p')
            let howHeadingPos = howHeading.getBoundingClientRect().top
            let step1 = document.querySelector('#step1')
            let step2 = document.querySelector('#step2')
            let step3 = document.querySelector('#step3')
            let step4 = document.querySelector('#step4')
            let stepPos = step1.getBoundingClientRect().top

            if(contactPosition <= window.innerHeight * 0.8){
                contact.style = 'transform: translateY(0); opacity: 1'
            }
            if(intoductionHeadingPosition <= window.innerHeight * 0.8 ){
                intoductionHeading.style = 'transform: translate(0) ; opacity: 1'
                intoductionP.style = 'transform: translate(0) ; opacity: 1'
            }

            if(whyHeadingPos <= window.innerHeight * 0.8){
                whyP.style = 'transform: translate(0) ; opacity: 1'
                whyHeading.style = 'transform: translate(0) ; opacity: 1'
            }
            if(cardPos <= window.innerHeight * 0.8){
                card1.style = 'transform: translate(0) ; opacity: 1'
                setTimeout(() => {
                    card2.style = 'transform: translate(0) ; opacity: 1'
                    setTimeout(() => {
                        card3.style = 'transform: translate(0) ; opacity: 1'
                        setTimeout(() => {
                            card4.style = 'transform: translate(0) ; opacity: 1'
                        }, 200)
                    }, 200)
                }, 200)
            }
            if(techPos <= window.innerHeight * 0.8){
                tech1.style = 'transform: translate(0) ; opacity: 1'
                setTimeout(() => {
                    tech2.style = 'transform: translate(0) ; opacity: 1'
                    setTimeout(() => {
                        tech3.style = 'transform: translate(0) ; opacity: 1'
                        setTimeout(() => {
                            tech4.style = 'transform: translate(0) ; opacity: 1'
                        }, 200)
                    }, 200)
                }, 200)
            }
            if(howHeadingPos <= window.innerHeight * 0.8){
                howHeading.style = 'transform: translate(0) ; opacity: 1'
                howP.style = 'transform: translate(0) ; opacity: 1'
            }
            if(stepPos <= window.innerHeight * 0.8){
                step1.style = 'transform: translate(0) ; opacity: 1'
                setTimeout(() => {
                    step2.style = 'transform: translate(0) ; opacity: 1'
                    setTimeout(() => {
                        step3.style = 'transform: translate(0) ; opacity: 1'
                        setTimeout(() => {
                            step4.style = 'transform: translate(0) ; opacity: 1'
                        }, 200)
                    }, 200)
                }, 200)
            }
        })
    }, [])

  return (
    <div className="App">
        <Header mainRef={mainRef} aboutRef={aboutRef} servicesRef={servicesRef} technologiesRef={technologiesRef} howToRef={howToRef} contactRef={contactRef} joinRef={joinRef}/>
        <MainView contactRef={contactRef} mainRef={mainRef}/>
        <Introduction aboutRef={aboutRef}/>
        <Why cards={cards} servicesRef={servicesRef}/>
        <Technologies  technologiesRef={technologiesRef}/>
        <HowWe howToRef={howToRef}/>
        <Join joinRef={joinRef}/>
        <Footer/>
    </div>
  );
}

export default App;
