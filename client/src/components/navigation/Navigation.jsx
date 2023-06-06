import cl from './Navigation.module.css'
import calendar from '../../assets/icons/navigation/calendar.png'
import home from '../../assets/icons/navigation/home.png'
import taskSquare from '../../assets/icons/navigation/taskSquare.png'
import user from '../../assets/icons/navigation/user.png'
import logoutPng from '../../assets/icons/navigation/logout.png'
import arrowLeft from '../../assets/icons/navigation/arrowLeft.png'
import arrowRight from '../../assets/icons/navigation/arrowRight.png'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../features/auth/authSlice.js";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

function Navigation() {
    const [isArrowClicked, setIsArrowClicked] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const path = useLocation().pathname
    const { userInfo } = useSelector((state) => state.auth)
    const homeRef = useRef(null)
    const scheduleRef = useRef(null)
    const timeslotRef = useRef(null)

    function customLogout(){
        dispatch(logout())
        navigate("/login")
    }

    useEffect(() => {
        homeRef.current.classList.remove(cl.active)
        scheduleRef.current.classList.remove(cl.active)
        timeslotRef.current.classList.remove(cl.active)

        switch (path){
            case "/home":
                homeRef.current.classList.add(cl.active)
                break
            case "/schedule":
                scheduleRef.current.classList.add(cl.active)
                break
            case "/timeslot":
                timeslotRef.current.classList.add(cl.active)
                break
        }
    }, [path])

    return (
        <div className={!isArrowClicked ? cl.navigation : cl.navigationHidden + ' ' + cl.navigation}>
            <div className={cl.navigationHeader}>
                {!isArrowClicked ? <h1 className={cl.title}>Innr</h1> : ''}
                <img
                    className={cl.toggleArrow}
                    src={!isArrowClicked ? arrowLeft : arrowRight}
                    alt="arrow-left-or-right"
                    onClick={() => {
                        setIsArrowClicked(prev => !prev)
                        console.log(isArrowClicked)
                    }}
                />
            </div>
            <nav className={cl.navWrapper}>
                <div 
                    ref={homeRef} 
                    onClick={() => navigate("/home")} 
                    className={!isArrowClicked ? cl.navItem : cl.navItem + ' ' + cl.navItemMini}
                >
                    <img src={home} alt="asf"/>
                    <p>{!isArrowClicked ? 'Главная' : ''}</p>
                </div>
                <div 
                    ref={scheduleRef}
                    onClick={() => navigate("/schedule")}
                    className={!isArrowClicked ? cl.navItem : cl.navItem + ' ' + cl.navItemMini}
                >
                    <img src={calendar} alt="asf"/>
                    <p>{!isArrowClicked ? 'Расписание' : ''}</p>
                </div>
                <div 
                    ref={timeslotRef} 
                    onClick={() => navigate("/timeslot")} 
                    className={!isArrowClicked ? cl.navItem : cl.navItem + ' ' + cl.navItemMini}
                >
                    <img src={taskSquare} alt="fsaf"/>
                    <p>{!isArrowClicked ? 'Тайм слоты' : ''}</p>
                </div>
                <div className={!isArrowClicked ? cl.navItem : cl.navItem + ' ' + cl.navItemMini}>
                    <img src={user} alt="fa"/>
                    <p>{!isArrowClicked ? 'Личный кабинет' : ''}</p>
                </div>
            </nav>
            {userInfo!==null
                ?
                <div className={cl.logout} onClick={customLogout}>
                    <img src={logoutPng} alt=""/>
                    <p>{!isArrowClicked ? 'Выйти' : ''}</p>
                </div>
                :
                <div className={cl.login}><p>Войти</p></div>
            }
        </div>
    );
}

export default Navigation;
