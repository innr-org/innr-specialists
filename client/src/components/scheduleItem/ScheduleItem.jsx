import cl from './ScheduleItem.module.css'
import TimeSlotItem from "../timeslotItem/TimeSlotItem.jsx";
import acceptPng from "../../assets/icons/accept.png"
import rejectPng from "../../assets/icons/reject.png"
import {useState} from "react";
import DateService from "../../app/services/date/dateService.js";
import {slots} from "../../pages/data/slots.js";
import Modal from "../UI/modal/Modal.jsx";
import Button from "../UI/button/Button.jsx";
import {set} from "react-hook-form";

function ScheduleItem({day}) {
    const [getCurrentDate, setGetCurrentDate] = useState(new Date().toISOString())
    const [allSlots, setAllSlots] = useState(slots)
    const [clickedSlots, setClickedSlots] = useState([]);
    const [modalOpened, setModalOpened] = useState({opened: false, id: ""})

    async function removeSlot(id){
        setAllSlots(allSlots.filter(slot => slot.id!==id))
        setModalOpened({opened: false, id: ""})
    }

    const todayScheduleSlots = allSlots.map(slot => {
        if(new Date(slot.dateStart).toLocaleDateString()===new Date(getCurrentDate).toLocaleDateString()){
            const startHours = DateService.getHours(slot.dateStart)
            const endHours = DateService.getHours(slot.dateStart)
            const startMinutes = DateService.getMinutes(slot.dateStart)
            const endMinutes = DateService.getMinutes(slot.dateStart)
            const isClicked = clickedSlots.includes(slot.id);

            const handleClick = () => {
                if (isClicked) {
                    setClickedSlots(prevClickedSlots => prevClickedSlots.filter(id => id !== slot.id)); // Remove from clickedSlots
                } else {
                    setClickedSlots(prevClickedSlots => [...prevClickedSlots, slot.id]); // Add to clickedSlots
                }
            };

            return <div key={slot.id} onClick={handleClick} className={cl.slot}>
                <TimeSlotItem type="small">{`${startHours}:${startMinutes} - ${endHours}:${endMinutes}`}</TimeSlotItem>
                {isClicked &&
                    <img style={{cursor: 'pointer'}}
                         className={cl.acceptPng}
                         src={acceptPng} alt="" />}
                {isClicked &&
                    <img style={{cursor: 'pointer'}}
                         className={cl.rejectPng}
                         onClick={() => setModalOpened({opened: true, id: slot.id})}
                         src={rejectPng} alt="" />}
            </div>
        }
    })

    return (
        <div className={cl.scheduleItem}>
            <p className={cl.day}>Сегодня</p>
            <h2 className={cl.weekDay}>{day}</h2>
            <p className={cl.date}>{DateService.getSelectedDate(new Date(getCurrentDate))}</p>
            <div className={cl.slots}>
                {todayScheduleSlots}
            </div>
            <Modal visible={modalOpened.opened}>
                <div className={cl.modal}>
                    <h2>Вы уверены, что хотите отменить прием?</h2>
                    <Button onClick={() => removeSlot(modalOpened.id)}>Да, отменить</Button>
                    <Button onClick={() => setModalOpened({opened: false, id: ""})}>Закрыть</Button>
                </div>
            </Modal>
        </div>
    );
}

export default ScheduleItem;
