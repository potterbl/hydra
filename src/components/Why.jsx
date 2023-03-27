import React from 'react';
import '../style/Why.css'
import Button from "./UI/Button";
import HeadingTop from "./HeadingTop";
import Carusel from "./Carusel";

const Why = ({cards, servicesRef}) => {


    return (
        <div className={'content'} ref={servicesRef}>
            <HeadingTop topId={'why__heading'} pId={'why__p'} caption={'WHY BUILD'} thinCaption={'WITH HYDRA?'}/>
            <div className="why__bottom">
                <Carusel height={'511px'}>
                    {cards.map(card => (
                        <div key={card.id} className={'card'} id={`card` + card.id}>
                            <img src={card.image} alt="" className={'card__img'}/>
                            <h1>{card.title.toUpperCase()}</h1>
                            <hr/>
                            <p>{card.body}</p>
                            <Button customStyles={{position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)'}}>try it now</Button>
                        </div>
                    ))}
                </Carusel>
            </div>
        </div>
    );
};

export default Why;