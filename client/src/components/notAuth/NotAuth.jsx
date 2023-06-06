import cl from './NotAuth.module.css'
import Button from "../UI/button/Button.jsx";
import {useNavigate} from "react-router-dom";

function NotAuth() {
    const navigate = useNavigate()

    return (
        <div className={cl.noAuthWrapper}>
            <h2>Вы не авторизованы!</h2>
            <Button onClick={() => navigate("/login")}>Войти в систему</Button>
        </div>
    );
}

export default NotAuth;
