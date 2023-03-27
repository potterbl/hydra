import React from 'react';
import arrow from "../images/LongArrow.png";
import '../style/HeadingTop.css'
const HeadingTop = ({...props}) => {
    return (
            <div className="content__top">
                <div className="top__heading" id={props.topId}>
                    <h1>{props.caption}</h1>
                    <div className="heading__float">
                        <h1 className="thin__caption">{props.thinCaption}</h1>
                        <img style={{marginLeft: '18px'}} src={arrow} alt=""/>
                    </div>
                </div>
                <p className={'text__heading'} id={props.pId}>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
            </div>
    );
};

export default HeadingTop;