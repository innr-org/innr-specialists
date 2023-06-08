import React, { useEffect, useState, useRef, forwardRef } from "react";
import Calendar from "react-calendar";
import cl from './TimeSlot.module.css';
import Header from "../../components/header/Header.jsx";
import DateService from "../../app/services/date/dateService.js";
import TimeSlotItem from "../../components/timeslotItem/TimeSlotItem.jsx";
import Button from "../../components/UI/button/Button.jsx";
import ChooseTime from "../../components/chooseTime/ChooseTime.jsx";
import { slotsSpecialist } from '../data/slots.js';
import { standardSlots } from "../data/standardSlots.js";
import "../../app/services/date/toLocaleStringPolyfill.js";


function TimeSlot() {
    const format = DateService.formatIsoToNormal;
    const getHours = DateService.getHours;
    const getMinutes = DateService.getMinutes;
    const [dateValue, onChange] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(dateValue.toISOString());
    const [selectedDateSlots, setSelectedDateSlots] = useState([]);
    const [newSlots, setNewSlots] = useState([]);
    const [slots, setSlots] = useState(slotsSpecialist)
    const startInput = useRef(null);
    const endInput = useRef(null);
    const [newId, setNewId] = useState(slots.length+1)

    useEffect(() => {
        setSelectedDate(dateValue.toISOString());
    }, [dateValue]);

    useEffect(() => {
        setSelectedDateSlots([]);

        slots.forEach(slot => {
            console.log(new Date(slot.dateStart).toLocaleString().split(",")[0] === new Date(selectedDate).toLocaleString().split(",")[0])
            if (new Date(slot.dateStart).toLocaleString().split(",")[0] === new Date(selectedDate).toLocaleString().split(",")[0]) {
                setSelectedDateSlots(prevSlots => [...prevSlots, slot]);
            }
        });
    }, [selectedDate]);


    /*SLOTS BY DAY*/
    const selectedDateSlotsItems = selectedDateSlots.map((slot) => {
        console.log(slot)
        const startHours = getHours(slot.dateStart);
        const startMinutes = getMinutes(slot.dateStart);
        const endHours = getHours(slot.dateEnd);
        const endMinutes = getMinutes(slot.dateEnd);
        return (
            <TimeSlotItem key={slot.id} type="small">
                {`${startHours}:${startMinutes} - ${endHours}:${endMinutes}`}
            </TimeSlotItem>
        );

    });

    /*STANDARD SLOTS*/
    const standardSlotsItems = standardSlots.map(slot => {
        return (
            <TimeSlotItem onClick={() => selectSlot(slot)} key={slot.id} type="big">
                {`${slot.timeStart} - ${slot.timeEnd}`}
            </TimeSlotItem>
        );
    });

    /*NEW SELECTED SLOTS*/
    const newSlotsItems = newSlots.map(newSlot => {
        return (
            <TimeSlotItem key={newSlot.id} type="check" accepted>
                {`${newSlot.timeStart} - ${newSlot.timeEnd}`}
            </TimeSlotItem>
        );
    });

    /*SELECTING FROM STANDARD SLOTS*/
    function selectSlot(slot) {
        if (newSlots.length !== 0) {
            for (const newSlot of newSlots) {
                if (newSlot.id === slot.id) {
                    return;
                }
            }
        }
        setNewSlots([...newSlots, slot]);
    }

    function submitTime(e) {
        e.preventDefault();
        const timeStart = startInput.current.value;
        const timeEnd = endInput.current.value;
        console.log(Number(timeEnd.substring(3,5) - Number(timeStart.substring(3,5))))
        if(timeStart.substring(0,2)===timeEnd.substring(0,2)){
            return
        }
        if(Number(timeEnd.substring(3,5) - Number(timeStart.substring(3,5)))!==0){
            return
        }
        if(Number(timeStart.substring(0,2))-Number(timeEnd.substring(0,2))>=2){
            return;
        }
        if (newSlots.length !== 0) {
            for (const newSlot of newSlots) {
                if (newSlot.timeStart.substring(0, 2) === timeStart.substring(0, 2)) {
                    return;
                }
            }
        }
        const newCustomSlot = {
            id: newId.toString(),
            timeStart,
            timeEnd,
        }
        setNewId(prevId => prevId + 1)
        setNewSlots([...newSlots, newCustomSlot])
    }

    const ChooseTimeWithRef = forwardRef((props, ref) => (
        <ChooseTime ref={ref} {...props} />
    ));

    function addSlot(){
        newSlots.forEach(slot => {
            console.log(slot.timeStart)
            setSlots([...slots, {
                id: newId,
                dateStart: selectedDate.substring(0,11) + slot.timeStart + ":00." + selectedDate.substring(20),
                dateEnd: selectedDate.substring(0,11) + slot.timeEnd + ":00." + selectedDate.substring(20)
            }])
            setNewId(prevId => prevId+1)
        })
        setNewSlots([])
    }

    useEffect(() => {
        console.log(slots)
    }, [slots])

    return (
        <div className={cl.timeslotWrapper}>
            <div className={cl.container}>
                <Header />
                <div className={cl.slotsWrapper}>
                    <div className={cl.checkSlots}>
                        <h1 className={cl.title}>Тайм слоты</h1>
                        <Calendar locale={"ru"} className={cl.calendar} onChange={onChange} value={dateValue} />
                        <div className={cl.selectedDateWrapper}>
                            <h2 className={cl.selectedDate}>{format(selectedDate)}</h2>
                            <div className={cl.selectedDateSlots}>
                                {selectedDateSlotsItems.length !== 0 ? selectedDateSlotsItems : <h2>Здесь пусто</h2>}
                            </div>
                            <Button className={cl.selectedDateSave} onClick={addSlot}>Сохранить</Button>
                        </div>
                    </div>

                    <div className={cl.newSlots}>
                        <h2 className={cl.title}>Выберите свободное время и дату для встречи для стандартного слота</h2>
                        <div className={cl.newSlotsItems}>
                            {standardSlotsItems}
                        </div>
                        <h2 className={cl.title}>Создать свой тайм слот</h2>
                        <form className={cl.chooseTimeWrapper}>
                            <ChooseTimeWithRef ref={startInput} /> <div className={cl.line}></div> <ChooseTimeWithRef ref={endInput} />
                        </form>
                        <Button onClick={submitTime} style={{ fontSize: '1rem', marginBottom: '30px' }}>Добавить</Button>
                        <div className={cl.selectedNewSlots}>
                            {newSlotsItems}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeSlot;
