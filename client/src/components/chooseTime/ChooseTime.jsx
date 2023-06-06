import { forwardRef } from "react";
import cl from './ChooseTime.module.css';
import clockPng from '../../assets/icons/clock.png';

const ChooseTime = forwardRef((props, ref) => {
    return <input {...props} ref={ref} className={cl.chooseTime} type="time" min="09:00" max="21:00" />;
});

export default ChooseTime;
