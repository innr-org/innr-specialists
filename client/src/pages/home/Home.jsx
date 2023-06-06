import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import cl from './Home.module.css'
import merey from '../../assets/images/home/merey.png'
import settings from  '../../assets/images/home/settings.png'
import notifications from  '../../assets/images/home/notifications.png'
import Button from "../../components/UI/button/Button.jsx";
import Entries from "../../components/entries/Entries.tsx";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useNavigate} from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import DateService from "../../app/services/date/dateService.js";

function Home() {
    const navigate = useNavigate()
    const [entriesType, setEntriesType] = useState("upcoming")
    const [dateValue, onChange] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(DateService.getSelectedDate(dateValue))

    useEffect(() => {
        setSelectedDate(DateService.getSelectedDate(dateValue))
    }, [dateValue])

    useEffect(() => {
        console.log(selectedDate)
    }, [selectedDate])
        return (
            <div className={cl.homeWrapper}>
                <div className={cl.container}>
                    <Header/>
                    <Calendar locale={"ru"} className={cl.calendar} onChange={onChange} value={dateValue} />
                    <div className={cl.entries}>
                        <Button>Расписание</Button>
                        <Button onClick={() => navigate("/timeslot")}>Тайм слоты</Button>

                        <div>
                            <h2 className={cl.entriesTitle}>Текущие записи</h2>
                            <div className={cl.entriesSubWrapper}>
                                <h3 className={cl.entriesSub + " " + (entriesType==="upcoming" && cl.active)} onClick={() => setEntriesType("upcoming")}>Предстоящие записи</h3>
                                <h3 className={cl.entriesSub + " " + (entriesType==="old" && cl.active)} onClick={() => setEntriesType("old")}>Прошедшие записи</h3>
                            </div>
                            <Entries type={entriesType} selectedDate={selectedDate}/>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Home;
