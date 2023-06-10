import React, { useState } from 'react'
import cl from './Offlinechat.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

import calendarIcon from '../../assets/icons/videochat/calendar.svg'
import callIcon from '../../assets/icons/videochat/call.svg'
import microphoneIcon from '../../assets/icons/videochat/microphone.svg'
import profileIcon from '../../assets/icons/videochat/profile.svg'
import microMutedIcon from '../../assets/icons/videochat/microMute.svg'

import scanResultImg from '../../assets/images/videochat/scanResultImg.png'
import img1 from '../../assets/images/videochat/img1.jpeg'
import img2 from '../../assets/images/videochat/img2.jpeg'

import Button from '../../components/UI/button/Button'
import Modal from '../../components/UI/modal/Modal'


const Offlinechat = () => {
    const [click, setClick] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [zoom, setZoom] = useState(false)

    function requestScans()
    {
        setIsClicked(true)
    }

    function closeScans()
    {
        setIsClicked(false)
    }

    return (
        <div>
            <header className={cl.header}>
                <div className={cl.headerIcon}>
                    <img
                        className={cl.headerIconImg}
                        src={calendarIcon}
                        alt='icon'
                        onClick={() => setClick(prev => !prev)}
                    />

                    <div className={!click ? cl.records : cl.records + ' ' + cl.recordsActive}>
                        <ul className={cl.calendarRecordsList}>
                            <li className={cl.calendarRecordsListItem}>Май 30, 2023</li>
                            <li className={cl.calendarRecordsListItem}>Май 20, 2023</li>
                            <li className={cl.calendarRecordsListItem}>Май 15, 2023</li>
                        </ul>
                    </div>

                </div>
                <div className={cl.headerProfile}>
                    <img className={cl.headerProfileIcon} src={profileIcon} alt='profile-icon' />
                    <p className={cl.headerProfileName}>Aхметова Адина</p>
                </div>
            </header>

            <div className={cl.line}></div>

            <main className={cl.main}>
                <aside className={cl.aside}>
                    <div className={cl.asideWrapper}>
                        <p className={!isClicked ? cl.text : cl.text + ' ' + cl.textFirst}>Примечание</p>
                        <div className={cl.notes}>
                            <textarea
                                className={!isClicked ? cl.note : cl.note + ' ' + cl.noteBig}
                                placeholder='мне удобно на казахском, сухая кожа, акне'>
                            </textarea>
                            <Button className={!isClicked ? cl.notesBtn : cl.notesBtn + ' ' + cl.hide}>Сохранить и отправить</Button>
                            <Button className={!isClicked ? cl.btnEnd : cl.btnEnd + ' ' + cl.hide}>Прием завершен</Button>

                            <div className={!isClicked ? cl.btnsWrapper : cl.btnsWrapper + ' ' + cl.btnsWrapperActive}>
                                <Button className={!isClicked ? cl.notesBtn : cl.notesBtn + ' ' + cl.notesBtnShow}>Сохранить и отправить</Button>
                                <Button className={!isClicked ? cl.btnEnd : cl.btnEnd + ' ' + cl.btnEndShow}>Прием завершен</Button>
                            </div>
                        </div>
                        
                    </div>
                    <Button className={!isClicked ? cl.btnReq : cl.btnReq + ' ' + cl.btnReqHidden} onClick={requestScans}>Запросить сканы</Button>
                </aside>

                <section className={!isClicked ? cl.scans : cl.scans + ' ' + cl.scansActive}>
                    <img className={cl.scanImg} src={scanResultImg} alt='scan-img' />
                    <Modal visible={zoom ? true : false} className={cl.lightbox}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        speed={800}
                        slidesPerView={1}
                        loop
                        className={cl.myswiper}
                    >
                        <SwiperSlide className={cl.swiperSlide}>
                            <img
                                className={cl.scanZoomedImg}
                                src={scanResultImg}
                                alt='scan-img'
                            />
                        </SwiperSlide>
                        <SwiperSlide className={cl.swiperSlide}>
                            <img
                                className={cl.scanZoomedImg}
                                src={img1}
                                alt='scan-img'
                            />
                        </SwiperSlide>
                        <SwiperSlide className={cl.swiperSlide}>
                            <img
                                className={cl.scanZoomedImg}
                                src={img2}
                                alt='scan-img'
                            />
                        </SwiperSlide>
                    </Swiper>
                        
                        <Button
                            className={cl.closeZoomImgBtn}
                            onClick={() => setZoom(false)}
                        >
                            Закрыть
                        </Button>
                    </Modal>

                    <div className={cl.scanResultsWrapper}>
                        <div className={cl.scanResults}>
                            <div className={cl.scanResultItem}>
                                <h2 className={cl.scanResultTitle}>Скан</h2>
                                <p className={cl.scanResultInfo}>Май 30, 2023</p>
                            </div>
                            <div className={cl.scanResultItem}>
                                <h2 className={cl.scanResultTitle}>Результат</h2>
                                <p className={cl.scanResultInfoGreen}>98%</p>
                            </div>
                            <div className={cl.scanResultItem}>
                                <h2 className={cl.scanResultTitle}>Заболевание</h2>
                                <p className={cl.scanResultInfo}>Акне папуло-пустулезное</p>
                            </div>
                        </div>
                        <div className={cl.scanResultBtns}>
                            <Button
                                className={cl.scanMagnifyBtn}
                                onClick={() => setZoom(true)}
                            >
                                Увеличить фото
                            </Button>
                            <Button className={cl.scanCloseBtn} onClick={closeScans}>Закрыть</Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Offlinechat;