import React, { useEffect, useState } from 'react';
import '../style/Header.css';
import logo from '../images/Logo.png';
import name from '../images/name.png';
import Button from './UI/Button';

const Header = ({aboutRef, servicesRef, technologiesRef , howToRef, joinRef, contactRef, mainRef}) => {

    function headerAboutGo (e) {
        e.preventDefault()
        aboutRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    function headerServicesGo(e) {
        e.preventDefault()
        servicesRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    function headerTechnologiesGo(e) {
        e.preventDefault()
        technologiesRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    function headerHowToGo(e) {
        e.preventDefault()
        howToRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    function headerJoinGo(e) {
        e.preventDefault()
        joinRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    function headerContact(e) {
        e.preventDefault()
        contactRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    function headerMain(e) {
        e.preventDefault()
        mainRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {

        const anim = document.querySelector('.anim__header')

        if (menuVisible) {
            anim.classList.remove('animation__out')
            anim.classList.add('animation__in')
        } else {

            anim.classList.remove('animation__in')
            anim.classList.add('animation__out')
            setTimeout(() => {
                anim.classList.remove('animation__out')
            }, 600)
        }
    }, [menuVisible]);



    return (
        <div className="header">
            <div className="left" onClick={headerMain}>
                <img src={logo} alt="" />
                <img className={'hide__logo'} src={name} alt="" style={{ marginLeft: '15px' }} />
            </div>
            <div className="anim__header">
                <div className="center" id="menu__center">
                    <a href="#" onClick={headerAboutGo}>ABOUT</a>
                    <a href="#" onClick={headerServicesGo}>SERVICES</a>
                    <a href="#" onClick={headerTechnologiesGo}>TECHNOLOGIES</a>
                    <a href="#" onClick={headerHowToGo}>HOW TO</a>
                </div>
                <div className="right" id="menu__right">
                    <Button
                        customStyles={{
                            background: 'transparent',
                            border: '2px solid #FFFFFF',
                            color: 'white',
                            boxSizing: 'border-box',
                        }}
                        onClick={headerContact}
                    >
                        contact us
                    </Button>
                    <Button onClick={headerJoinGo}>Join hydra</Button>
                </div>
            </div>
            <Button
                id={'menu__button'}
                onClick={() => setMenuVisible(!menuVisible)}
                customStyles={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: '3'
                }}
            >
                Menu
            </Button>
        </div>
    );
};

export default Header;
