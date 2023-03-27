import React, { useEffect, useState } from 'react';
import '../style/Carusel.css'
const Carusel = ({ children, height }) => {
    const [slide, setSlide] = useState(1);
    const [transformValue, setTransformValue] = useState('translateX(0)');

    function prevSlide() {
        if (slide > 1) {
            setSlide(slide - 1);
        }
    }
    function nextSlide() {
        if (slide < 4) {
            setSlide(slide + 1);
        }
    }

    useEffect(() => {
        if (slide === 1) {
            setTransformValue('translateX(0)');
        } else if (slide === 2) {
            setTransformValue('translateX(-25%)');
        } else if (slide === 3) {
            setTransformValue('translateX(-50%)');
        } else if (slide === 4) {
            setTransformValue('translateX(-75%)');
        }
    }, [slide]);

    return (
        <div style={{height: height}} className={'carusel__wrapper'}>
            <button className={'carusel__button left__btn'} onClick={prevSlide}>
                ←
            </button>
            <button className={'carusel__button right__btn'} onClick={nextSlide}>
                →
            </button>
            <div style={{ transform: transformValue, height: height }} className="carusel">
                {children}
            </div>
        </div>
    );
};

export default Carusel;
