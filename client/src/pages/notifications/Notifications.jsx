import React, {useState} from 'react';
import cl from './Notifications.module.css';
import Message from '../../components/UI/message/Message';
import Header from '../../components/header/Header';

function Notifications() {
    const allMessages = [];

    const [messagesInfo, setMessageInfo] = useState([{
            text: "У вас новая запись 02.06.2023 в 10:00 для Адина Ахметова из города Астана",
        },
        {
            text: "Адина Ахметова по ID #1234567 отменяет запись",
        },
        {
            text: "Адина Ахметова по ID #1234567 переносит запись",
        },
        {
            text: "Вы отменили запись на 02.06.2023 в 10:00",
        },]
        )

    messagesInfo.forEach((message) => {
        allMessages.push(<Message onClick={() => setMessageInfo(messagesInfo.filter(msg => msg.text!==message.text))} content={message.text}/>)
    });

    return (
        <div className={cl.notificationsWrapper}>
            <div className={cl.container}>
                 <Header />
                <p className={cl.notifications__text}>Уведомления</p>
                {allMessages}

            </div>
        </div>
    );
}

export default Notifications;
