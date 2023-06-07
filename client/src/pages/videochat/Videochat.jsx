import React from 'react'

import calendarIcon from '../../assets/icons/videochat/calendar.svg'
import callIcon from '../../assets/icons/videochat/call.svg'
import microphoneIcon from '../../assets/icons/videochat/microphone.svg'
import profileIcon from '../../assets/icons/videochat/profile.svg'

import scanResultSmallImg from '../../assets/images/videochat/scanResultImg.png'
import scanResultBigImg from '../../assets/images/videochat/scanResultBig.png'
import smallVideoImg from '../../assets/images/videochat/smallVideoImg.png'

import cl from './Videochat.module.css'
import Button from '../../components/UI/button/Button'
import { useState, useRef } from 'react'

const Videochat = () => {
    const [isClicked, setIsClicked] = useState(false)
    const btnRef = useRef(null)

    function requestScans()
    {
        setIsClicked(true)
    }

    function closeScans()
    {
        setIsClicked(false)
    }

    return (
        <div className={cl.videochat}>
            <header className={cl.header}>
                <div className={cl.headerIcon}>
                    <img className={cl.headerIconImg} src={calendarIcon} alt='icon' />
                </div>
                <div className={cl.headerProfile}>
                    <img className={cl.headerProfileIcon} src={profileIcon} alt='profile-icon' />
                    <p className={cl.headerProfileName}>Aхметова Адина</p>
                </div>
            </header>

            <div className={cl.line}></div>

            <main className={cl.main}>
                
                <section className={cl.video}>
                    <div className={cl.videoWrapper}>
                        <div className={cl.videoTimer}>00:45</div>
                        <div className={cl.videoMicro}>
                            <img className={cl.videoMicroIcon} src={microphoneIcon} alt="micro-icon" />
                        </div>
                        <div className={cl.videoCall}>
                            <img className={cl.videoCallIcon} src={callIcon} alt="call-icon" />
                        </div>
                        <div className={cl.videoSmall}>
                            <img className={cl.videoSmallImg} src={smallVideoImg} alt="small-img" />
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
            </main>

            <section className={!isClicked ? cl.scans : cl.scans + ' ' + cl.scansActive}>
                <img className={cl.scanImg} src={scanResultSmallImg} alt='scan-img' />
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
                        <Button className={cl.scanMagnifyBtn}>Увеличить фото</Button>
                        <Button className={cl.scanCloseBtn} onClick={closeScans}>Закрыть</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Videochat;