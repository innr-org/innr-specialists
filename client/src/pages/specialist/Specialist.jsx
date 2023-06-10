import React from 'react';
import cl from './Specialist.module.css';
import profilePic from '../../assets/images/specialist/profile.png';
import firstCertificate from '../../assets/images/specialist/first.png';
import secondCertificate from '../../assets/images/specialist/second.png';
import thirdCertificate from '../../assets/images/specialist/third.png';

function Specialist() {
    return (
        <div className={cl.specialistWrapper}>
            <div className={cl.container}>
                <h2 className={cl.headline}>Личный Кабинет</h2>
                <div className={cl.specialist__card}>
                    <div className={cl.specialist__profile}>
                        <img src={profilePic} alt='profile pic'/>
                        <p className={cl.specialist__name}>Aдель Алибекова</p>
                    </div>
                    <div className={cl.specialist__info}>
                        <div className={cl.specialist__card__info}>
                            <p className={cl.specialist__heading}>ФИО</p>
                            <p className={cl.specialist__name__text}>Aдель Алибекова</p>
                        </div>
                        <div className={cl.specialist__card__info}>
                            <p className={cl.specialist__heading}>Пол</p>
                            <p className={cl.specialist__gender__text}>Женщина</p>
                        </div>
                        <div className={cl.specialist__card__info}>
                            <p className={cl.specialist__heading}>Статус</p>
                            <p className={cl.specialist__status__text}>Подтвержден</p>
                        </div>
                        <div className={cl.specialist__card__info}>
                            <p className={cl.specialist__heading}>Дата рождения</p>
                            <p className={cl.specialist__date__text}>Июнь 02, 2023</p>
                        </div>
                        <div className={cl.specialist__card__info}>
                            <p className={cl.specialist__heading}>Город</p>
                            <p className={cl.specialist__city__text}>Астана</p>
                        </div>
                        <div className={cl.specialist__card__info}>
                            <p className={cl.specialist__heading}>Опыт работы</p>
                            <p className={cl.specialist__experience__text}>10 лет</p>
                        </div>
                        <div className={cl.specialist__card__info}>
                            <p className={cl.specialist__heading}>E-mail</p>
                            <p className={cl.specialist__email__text}>adelalibekova@gmail.com</p>
                        </div>
                        <div className={cl.specialist__card__info}>
                            <p className={cl.specialist__heading}>Номер телефона</p>
                            <p className={cl.specialist__phonenumber__text}>+7 777 777 77 77</p>
                        </div>
                        <div className={cl.specialist__card__info}>
                            <p className={cl.specialist__heading}>Прайс</p>
                            <p className={cl.specialist__price__text}>10000 тг за час</p>
                        </div>
                    </div>
                </div>
                <h2 className={cl.headline}>Полная информация</h2>
                <div className={cl.fullInformation}>
                    <div className={cl.info__blocks}>
                        <p className={cl.info__headline}>Образование *</p>
                        <div className={cl.info__bg}>
                            <p className={cl.info__text}>Медицинский университет Астана</p>
                            <p className={cl.info__text}>КазНМУ им. С.Д. Асфендиярова</p>
                        </div>
                    </div>
                    <div className={cl.info__blocks}>
                        <p className={cl.info__headline}>Сертификаты *</p>
                        <div className={cl.info__bg}>
                            <p className={cl.info__text}>Международный кожный институт (IDI)</p>
                            <p className={cl.info__text}>Американская Академия Дерматологии (ADA)</p>
                        </div>
                    </div>
                    <div className={cl.info__blocks__img}>
                        <p className={cl.info__headline}></p>
                        <div className={cl.info__img}>
                            <img src={firstCertificate} alt="" />
                            <img src={secondCertificate} alt="" />
                            <img src={thirdCertificate} alt="" />
                        </div>
                    </div>
                    <div className={cl.info__blocks}>
                        <p className={cl.info__headline}>Название Клиники *</p>
                        <div className={cl.info__bg}>
                            <p className={cl.info__text}>клиника “Skin”</p>
                        </div>
                    </div>
                    <div className={cl.info__blocks}>
                        <p className={cl.info__headline}>Адрес клиники *</p>
                        <div className={cl.info__bg}>
                            <p className={cl.info__text}>ул. Мангилик Ел 55, клиника “Skin”</p>
                        </div>
                    </div>
                    <div className={cl.info__tag__blocks}>
                        <p className={cl.info__headline}>Тэги *</p>
                        <div className={cl.tag__list}>
                            <div className={cl.tag}>Акне</div>
                            <div className={cl.tag}>Косметология</div>
                            <div className={cl.tag}>Дерматология</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Specialist;