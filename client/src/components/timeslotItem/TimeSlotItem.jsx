import cl from './TimeSlotItem.module.css'
import clockPng from '../../assets/icons/clock.png'
import acceptPng from '../../assets/icons/accept.png'
import rejectPng from '../../assets/icons/reject.png'
import {useEffect} from "react";

function TimeSlotItem({type, selected, accepted, children, ...props}) {

   return (
        <div className={(type==="big" ? cl.timeSlotItemBig : cl.timeSlotItemSmall)
                + " " +
                (selected && cl.selected)
                + " " +
                (type==="check" && (accepted ? cl.accepted : cl.rejected))} {...props}>
            <p className={cl.interval}>{children}</p>
            <p className={cl.time}><img src={clockPng} alt=""/><span><b style={{fontWeight: 500}}>1</b> час</span></p>
            {type==="check" && <img className={cl.check} src={accepted ? acceptPng : rejectPng} alt=""/>}
        </div>
    );
}

export default TimeSlotItem;
