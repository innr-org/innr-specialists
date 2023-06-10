import cl from "./Header.module.css";
import merey from "../../assets/images/home/merey.png";
import settings from "../../assets/images/home/settings.png";
import notifications from "../../assets/images/home/notifications.png";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Header() {
    const { userInfo } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    return (
        <header className={cl.header}>
            <div className={cl.profile}>
                <div className={cl.profileImg}><img src={merey} alt=""/></div>
                <h1>{userInfo.fullName}</h1>
            </div>
            <div className={cl.additional}>
                <img src={settings} alt=""/>
                <img onClick={() => navigate("/notifications")} src={notifications} alt=""/>
            </div>
        </header>
    );
}

export default Header;
