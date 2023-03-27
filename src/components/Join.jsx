import React from 'react';
import '../style/Join.css'
import Input from "./UI/Input";
import Button from "./UI/Button";
const Join = ({joinRef}) => {
    return (
        <div className={'join'} ref={joinRef}>
            <div className="heading__join">
                <h1>JOIN HYDRA</h1>
                <hr/>
                <h1 className="thin__caption">Let’s Build Your VR Experience</h1>
            </div>
            <div className="join__twice">
                <Input title={'First Name'} style={{gridArea: 'a'}} id={'fn'}/>
                <Input title={'Last Name'} style={{gridArea: 'b'}} id={'ln'}/>
                <Input title={'Email'} style={{gridArea: 'c'}} id={'email'}/>
                <Input title={'Phone number'} style={{gridArea: 'd'}} id={'pn'}/>
            </div>
            <Input title={'Subject'}  id={'sub'}/>
            <Input title={'Tell Us Something...'} style={{  height: '200px', wordWrap: 'break-word', whiteSpace: 'pre-wrap'}} id={'tus'}/>
            <Button customStyles={{padding: '16px 54px', width: 'fit-content', margin: '0 auto'}}>Send to hydra</Button>
        </div>
    );
};

export default Join;