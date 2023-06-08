import React from 'react';
import cl from './Message.module.css';
// import messageIcon from '../../assets/icons/message.png';

function Message(props) {
    return (
        <div className={cl.messageWrapper}>
            <img src='' alt="messageIcon" />
            <div className={cl.message__text}>
                {/* <p className={cl.message}>У вас новая запись <span className={cl.message__date}>02.06.2023</span> в <span className={cl.message__time}>10:00</span> для Адина Ахметова из города Астана</p> */}
                <p className={cl.message}>{props.content}</p>
            </div>
        </div>
    );
}

export default Message;