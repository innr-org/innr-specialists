import React, { useState, forwardRef } from 'react'
import cl from './Clientedit.module.css'
import ava from '../../assets/images/client/ava.png'
import calendarIcon from '../../assets/icons/client/calendar.svg'
import Button from '../../components/UI/button/Button'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Clientedit = () => {
    const [startDate, setStartDate] = useState(new Date())

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
      <button className={cl.customInput} ref={ref}>
        
        <span>{value.slice(3, 5)}</span>
        <span>{value.slice(0, 2)}</span>
        <span>{value.slice(6, 10)}</span>
        <img onClick={onClick} className={cl.customInputIcon} src={calendarIcon} alt='calendar-icon' />
      </button>
    ))

    return (
        <div className={cl.edit}>
            <div className={cl.tempNav}>

            </div>

            <div>
                <header className={cl.header}>
                </header>

                <div className={cl.line}></div>

                <main className={cl.main}>
                    <h2 className={cl.title}>Личный Кабинет</h2>
                    <div className={cl.editWrapper}>
                        <img className={cl.editAva} src={ava} alt='ava' />
                        <p className={cl.editTitle}>Редактировать</p>

                        <div className={cl.editColumns}>
                            <div className={cl.editColumnLabels}>
                                <p className={cl.editRowLabel}>Статус</p>
                                <p className={cl.editRowLabel}>ФИО</p>
                                <p className={cl.editRowLabel + ' ' + cl.mb}>Дата рождения</p>
                                <p className={cl.editRowLabel}>Пол</p>
                                <p className={cl.editRowLabel}>E-mail</p>
                                <p className={cl.editRowLabel}>Номер телефона</p>
                                <p className={cl.editRowLabel}>Опыт работы</p>
                                <p className={cl.editRowLabel}>Город</p>
                                <p className={cl.editRowLabel}>Прайс</p>
                            </div>

                            <div className={cl.editColumnFields}>
                                <p className={cl.editRowField + ' ' + cl.status}>Подтвержден</p>
                                <p className={cl.editRowField}>Адель Алибекова</p>
                                {/* <input className={cl.editRowFieldInput} type='date' /> */}
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    // placeholderText="ДД | ММ | ГГГГ"
                                    customInput={<ExampleCustomInput />}
                                    showYearDropdown
                                    // dateFormatCalendar="dd.MM.yyyy"
                                    yearDropdownItemNumber={100}
                                    scrollableYearDropdown
                                />
                                <p className={cl.editRowField}>Женщина</p>
                                <p className={cl.editRowField}>adelalibekova@gmail.com</p>
                                <p className={cl.editRowField}>+7 777 777 77 77</p>
                                <p className={cl.editRowField}>10 лет</p>
                                <p className={cl.editRowField}>Астана</p>
                                <p className={cl.editRowField + ' ' + cl.status}>10000 тг за час</p>
                            </div>
                        </div>
                    </div>
                    <Button className={cl.btn}>Сохранить</Button>
                </main> 
            </div>
        </div>
    );
};

export default Clientedit;