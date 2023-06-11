import React, { useState } from 'react';
import cl from './Client.module.css';
// import Header from '../../components/header/Header';
import profilePic from '../../assets/icons/profilepic.svg';
import videoIcon from '../../assets/icons/video.svg';
import editIcon from '../../assets/icons/edit.svg';
import closeBtn from '../../assets/icons/close.svg';
import Button from '../../components/UI/button/Button';
import Modal from '../../components/UI/modal/Modal';

import Header from "../../components/header/Header.jsx";
import {useNavigate} from "react-router-dom";

function Client() {
    const navigate = useNavigate()

    const [activeTab, setActiveTab] = useState(1);
    const [isClicked, setIsClicked] = useState();

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
    
    return (
        <div className={cl.clientWrapper}>
            <div className={cl.container}>
                 {/* <Header /> */}
                <div className={cl.upcomingEntries}>Предстоящие записи</div>
                <div className={cl.client__card}>
                    <div className={cl.client__connect}>
                        <img className={cl.profilePic} src={profilePic} alt='profile picture' />
                        <p className={cl.client__name}>Ахметова Адина</p>
                        <p className={cl.client__number}>+7 777 777 77 77</p>
                        <Button style={{ fontSize: '24px', marginBottom: '8px', width: '266px' , color: '#338D42', background: '#D9D9D9'}}>Онлайн</Button>
                        <Button style={{ fontSize: '24px', width: '266px', background: '#D9D9D9' }}>Отменить запись</Button>
                    </div>
                    <div className={cl.client__info}>
                        <div className={cl.client__card__info}>
                            <p className={cl.client__heading}>ID</p>
                            <p className={cl.client__id__text}>#123457890</p>
                        </div>
                        <div className={cl.client__card__info}>
                            <p className={cl.client__heading}>Город</p>
                            <p className={cl.client__city__text}>Астана</p>
                        </div>
                        <div className={cl.client__card__info}>
                            <p className={cl.client__heading}>Статус</p>
                            <p className={cl.client__status__text}>Подтвержден</p>
                        </div>
                        <div className={cl.client__card__info}>
                            <p className={cl.client__heading}>Пол</p>
                            <p className={cl.client__gender__text}>Женщина</p>
                        </div>
                        <div className={cl.client__card__info}>
                            <p className={cl.client__heading}>Дата</p>
                            <p className={cl.client__date__text}>Июнь 02, 2023</p>
                        </div>
                        <div className={cl.client__card__info}>
                            <p className={cl.client__heading}>Время</p>
                            <p className={cl.client__time__text}>10:00</p>
                        </div>
                    </div>
                </div>
                <div className={cl.records}>
                    <div className={cl.recordsContent}>
                        <div className={cl.tabHeader}>
                            <Button 
                                className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
                                onClick={() => handleTabClick(1)}
                            >
                                Предстоящие записи
                            </Button>
                            <Button
                                className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
                                onClick={() => handleTabClick(2)}
                            >
                                Прошедшие записи
                            </Button>
                            <Button
                                className={activeTab === 1 ? cl.btnTab + ' ' + cl.activeTab : cl.btnTab}
                                onClick={() => handleTabClick(3)}
                            >
                                Примечание
                            </Button>
                        </div>
                        <div className={cl.tabContent}>
                            {
                                activeTab === 1 && 

                                <div className={cl.upcomingEntries}>
                                    <div className={cl.line}>
                                        <div className={cl.circle}></div>
                                    </div>
                                    <div className={cl.upcomingEntriesContent}>
                                        {/* <div className={cl.connectToChat}>
                                            <p className={cl.client__date__text}>Июнь 02, 2023</p>
                                            <p className={cl.client__time__text}>10:00</p>
                                            <p className={cl.client__mode__online}>Онлайн</p>
                                            <div className={cl.action}>
                                                <img className={cl.videoIcon} src={videoIcon} alt="Подключиться" />
                                                <p className={cl.action__connect} onClick={() => navigate("/lobby")}>Подключиться</p>
                                            </div>
                                        </div> */}
                                        <div className={cl.editRecord}>
                                            <p className={cl.client__date__text}>Июнь 02, 2023</p>
                                            <p className={cl.client__time__text}>10:00</p>
                                            <p className={cl.client__mode__past}>Оффлайн</p>
                                            <div className={cl.action}>
                                                <img className={cl.videoIcon} src={editIcon} alt="Edit" />
                                                <p className={cl.action__edit}>Заполнить</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {

                                activeTab === 2 &&

                                <div className={cl.pastEntries}>
                                    <div className={cl.line}>
                                        <div className={cl.circle}></div>
                                        <div className={cl.circleSecond}></div>

                                    </div>
                                    <div className={cl.pastEntriesContent}>
                                        {/* <div className={cl.emptyContent}>
                                            <p className={cl.empty}>Здесь пусто</p>
                                        </div> */}
                                        <div className={cl.pastEntriesRecords}>
                                            <p className={cl.client__date__text}>Июнь 02, 2023</p>
                                            <p className={cl.client__time__text}>10:00</p>
                                            <p className={cl.client__mode__past}>Оффлайн</p>
                                        </div>
                                        <div className={cl.pastEntriesRecords}>
                                            <p className={cl.client__date__text}>Июнь 02, 2023</p>
                                            <p className={cl.client__time__text}>10:00</p>
                                            <p className={cl.client__mode__online}>Онлайн</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            }
                            {

                                activeTab === 3 &&

                                <div className={cl.notes}>
                                    <div className={cl.notesContent}>
                                        <p className={cl.empty}>Здесь пусто</p>
                                        {/* <p className={cl.notesText}>
                                            мне удобно на казахском, сухая кожа, акне, мне удобно на казахском, сухая кожа, акне, мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне

                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                        </p> */}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={cl.comments}>
                        <div className={cl.comments__headlines}>
                            <p className={cl.headline}>Комментарии</p>

                            <p
                                onClick={() => setIsClicked(true)}

                                className={cl.viewAll}
                            >
                                <a className={cl.viewAllLink} href="#">Посмотреть все</a>
                            </p>
                            <Modal visible={isClicked}>
                                <div className={cl.modal__comments}>
                                    <div className={cl.modal__headline}>
                                        <p className={cl.headline}>Комментарии</p>

                                        <img
                                            onClick={() => setIsClicked(false)}
                                            src={closeBtn} alt="close"

                                            className={cl.closeBtn}
                                        />
                                    </div>
                                    <div className={cl.modal__comments__content}>
                                        <p className={cl.modal__comments__text}>
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне

                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                            мне удобно на казахском, сухая кожа, акне
                                        </p>
                                    </div>

                                </div>

                            </Modal>
                        </div>
                        <div className={cl.comments__content}>
                            <p className={cl.comments__text}>
                            мне удобно на казахском, сухая кожа, акне
                            мне удобно на казахском, сухая кожа, акне
                            мне удобно на казахском, сухая кожа, акне
                            мне удобно на казахском, сухая кожа, акне
                            мне удобно на казахском, сухая кожа, акне
                            мне удобно на казахском, сухая кожа, акне
                            мне удобно на казахском, сухая кожа, акне

                            мне удобно на казахском, сухая кожа, акне
                            мне удобно на казахском, сухая кожа, акне
                            мне удобно на казахском, сухая кожа, акне
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;

