import {useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { userLogin } from '../../features/auth/authActions.js'
import {ReactNotifications} from "react-notifications-component";
import {PropagateLoader} from "react-spinners";
import {useNotification} from "../../hooks/useNotification.js";
import Button from "../../components/UI/button/Button.jsx";
import cl from './Login.module.css'
import Modal from "../../components/UI/modal/Modal.jsx";

function Login() {
    const { loading, success, userInfo, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const emailInput = useRef(null)
    const passwordInput = useRef(null)
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        if(userInfo!==null){
            navigate("/home")
        }
    }, [userInfo])

    useEffect(() => {
        if(success && !loading && userInfo){
            useNotification("success", "Авторизация", "Успешный вход!")
            navigate("/home")
        }
        else if(!success && error && !loading){
            if(error === "Request failed with status code 401"){
                useNotification("danger", "Авторизация", "Неверные данные!")
            }
            else{
                useNotification("danger", "Авторизация", "Ошибка авторизации!")
            }
        }
    }, [success, error, loading])

    function loggingIn(){
        const details = {
            phone: emailInput.current.value,
            password: passwordInput.current.value
        }
        dispatch(userLogin(details))
    }

    return (
        <div className={cl.login}>
            <div className={cl.loginWrapper}>
                <h1 className={cl.title}>Innr</h1>
                <input ref={emailInput} type="email" required={true} placeholder="E-mail"/>
                <input ref={passwordInput} type="password" required={true} placeholder="Пароль"/>
                <Button className={cl.button} onClick={loggingIn} disabled={loading}>Войти</Button>
            </div>
            <ReactNotifications />
        </div>
    );
}

export default Login;
