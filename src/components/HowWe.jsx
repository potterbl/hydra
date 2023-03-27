import React, {useState} from 'react';
import '../style/HowWe.css'
import HeadingTop from "./HeadingTop";
import arrow from '../images/shape.png'
import Carusel from "./Carusel";
const HowWe = ({howToRef}) => {
    const [steps, setSteps] = useState([
        {id: 1, num: '01', title: '3D Conception\n' +
                '& Design'},
        {id: 2, num: '02', title: 'Interaction\n' +
                'Design'},
        {id: 3, num: '03', title: 'VR World\n' +
                'User Testing'},
        {id: 4, num: '04', title: 'Hydra VR\n' +
                'Deploy'},
    ])
    return (
        <div className={'how'} ref={howToRef}>
            <HeadingTop topId={'how__heading'} pId={'how__p'} caption={'HOW WE BUILD'} thinCaption={'WITH HYDRA VR?'}/>
            <div className="steps">
                <Carusel height={'250px'}>
                {steps.map(step => (
                    <div key={step.id} className={'step'} id={'step' + step.id}>
                        <div className="step__num">
                            <p>{step.num}</p>
                        </div>
                        <div className="step__desc">
                            <img src={arrow} alt=""/>
                            <p>{step.title}</p>
                        </div>
                    </div>
                ))}
                </Carusel>
            </div>
        </div>
    );
};

export default HowWe;