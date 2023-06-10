import React from 'react'

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
import smallVideoImg from '../../assets/images/videochat/smallVideoImg.png'
import img1 from '../../assets/images/videochat/img1.jpeg'
import img2 from '../../assets/images/videochat/img2.jpeg'
import extraSmallVideoImg from '../../assets/images/videochat/extraSmallVideoImg.png'

import cl from './Videochat.module.css'
import Button from '../../components/UI/button/Button'
import { useState } from 'react'
import Modal from '../../components/UI/modal/Modal'

const Videochat = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [zoom, setZoom] = useState(false)
    const [click, setClick] = useState(false)

    // const images = [scanResultImg, img1, img2]

    function requestScans()
    {
        setIsClicked(true)
    }

    function closeScans()
    {
        setIsClicked(false)
    }

    function muteAudio()
    {
        setIsMuted(prev => !prev)
    }

    return (
        <div className={cl.videochat}>
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
                
                <section className={!isClicked ? cl.video : cl.video + ' ' + cl.videoMove}>
                    <div className={!isClicked ? cl.videoWrapper : cl.videoWrapper + ' ' + cl.videoWrapperSmall}>
                        <div className={!isClicked ? cl.videoTimer : cl.videoTimer + ' ' + cl.videoTimerSmall}>00:45</div>
                        <div
                            className={!isClicked ? cl.videoMicro : cl.videoMicro + ' ' + cl.videoMicroSmall}
                            onClick={muteAudio}
                        >
                            <img
                                className={!isClicked ? cl.videoMicroIcon : cl.videoMicroIcon + ' ' + cl.videoMicroIconSmall}
                                src={isMuted ? microMutedIcon : microphoneIcon}
                                alt="micro-icon"
                            />
                        </div>
                        <div className={!isClicked ? cl.videoCall : cl.videoCall + ' ' + cl.videoCallSmall}>
                            <img className={!isClicked ? '' : cl.videoCallIcon} src={callIcon} alt="call-icon" />
                        </div>
                        <div className={cl.videoSmall}>
                            <img className={cl.videoSmallImg} src={!isClicked ? smallVideoImg : extraSmallVideoImg} alt="small-img" />
                        </div>
                    </div>
                </section>

                <aside className={cl.aside}>
                    <Button className={!isClicked ? cl.btnReq : cl.btnReq + ' ' + cl.btnReqHidden} onClick={requestScans}>Запросить сканы</Button>
                    <p className={!isClicked ? cl.text : cl.text + ' ' + cl.textFirst}>Примечание</p>
                    <div className={cl.notes}>
                        <textarea className={!isClicked ? cl.note : cl.note + ' ' + cl.noteBig} placeholder='мне удобно на казахском, сухая кожа, акне'></textarea>
                        <Button className={cl.notesBtn}>Сохранить и отправить</Button>
                    </div>
                    <Button className={cl.btnEnd}>Прием завершен</Button>
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
                        {/* {images.map((photo, i) =>
                        {
                            console.log(photo);
                            <SwiperSlide className={cl.swiperSlide}>
                                <img
                                    className={cl.scanZoomedImg}
                                    src={`./assets/images/videochat/${photo.toString()}`}
                                    alt='scan-img'
                                />
                            </SwiperSlide>
                        })} */}

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

export default Videochat;