import Header from "../../components/header/Header.jsx";
import cl from './Schedule.module.css'
import ScheduleItem from "../../components/scheduleItem/ScheduleItem.jsx";
import {useEffect, useState} from "react";
import {all} from "axios";

function Schedule() {
    const [currentWeekDay, setCurrentWeekDay] = useState(new Date().toLocaleString(window.navigator.language, {weekday: 'long'}))
    const [allDays, setAllDays] = useState([])
    useEffect(() => {
        setAllDays([])
        let weekday=new Array(7);
        weekday[0]="понедельник";
        weekday[1]="вторник";
        weekday[2]="среда";
        weekday[3]="четверг";
        weekday[4]="пятница";
        weekday[5]="суббота";
        weekday[6]="воскресенье";

        for (let i = weekday.indexOf(currentWeekDay); i <7; i++) {
            setAllDays(prevDays => [...prevDays, weekday[i]])
        }

        console.log(allDays)
    }, [currentWeekDay])

    useEffect(() => {
        console.log(allDays)
    }, [allDays])

    function increaseWeek(){
        /*Some clonned date*/
        const clonedDate = new Date(new Date().getTime());
        /*next week date*/
        const nextWeek = new Date()

        // add number of days that is requiered
        const numOfDays = ((7 - clonedDate.getDay()) % 7 + 1) % 7;
        nextWeek.setDate(new Date().getDate() + numOfDays)
        console.log(nextWeek.toLocaleString(window.navigator.language, {weekday: 'long'}))
        setCurrentWeekDay(nextWeek.toLocaleString(window.navigator.language, {weekday: 'long'}))
    }

    const scheduleItems = allDays.slice(0,5).map(day => {
        return <ScheduleItem day={day}></ScheduleItem>
    })

       return (
        <div className={cl.scheduleWrapper}>
            <div className={cl.container}>
                <Header/>
                <div>
                    <h1>Расписание</h1>
                    <p>ВАЖНО! Вы можете отменить запись за 3 часа до самого приема</p>
                    <div className={cl.scheduleItemsWrapper}>
                        {scheduleItems}
                        <div onClick={() => setCurrentWeekDay(increaseWeek)} className={cl.nextWeek}>Следующая неделя ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;
