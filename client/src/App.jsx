import {BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {PropagateLoader} from "react-spinners";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import './App.css'
import {useGetUserDetailsQuery} from "./app/services/auth/authService.js";
import Navigation from "./components/navigation/Navigation.jsx";
import {useEffect} from "react";
import {setCredentials} from "./features/auth/authSlice.js";
import NotAuth from "./components/notAuth/NotAuth.jsx";
import TimeSlot from "./pages/timeslot/TimeSlot.jsx";
import Schedule from "./pages/schedule/Schedule.jsx";
import Lobby from "./pages/lobby/Lobby.jsx";
import Videochat from "./pages/videochat/Videochat.jsx";
import Offlinechat from "./pages/offlinechat/Offlinechat.jsx";
import Client from "./pages/client/Client.jsx";
import Notifications from "./pages/notifications/Notifications.jsx";
import DateService from "./app/services/date/dateService.js";
import NotFound from "./components/notFound/NotFound.jsx";



function App() {
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.auth)
    const { userInfo } = useSelector((state) => state.auth)

    const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
        pollingInterval: 900000,
    })

    useEffect(() => {
        if (data) dispatch(setCredentials(data))
    }, [data, dispatch])

    return (
            <BrowserRouter>
                <div className="app--wrapper">
                    {userInfo && <Navigation/>}
                    <Routes>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/home" element={<Home/>}></Route>
                        <Route path="/timeslot" element={<TimeSlot/>}></Route>
                        <Route path="/schedule" element={<Schedule/>}></Route>

                        <Route path="/videochat" element={<Videochat/>}></Route>
                        <Route path="/offlinechat" element={<Offlinechat/>}></Route>

                        <Route path="/client" element={<Client/>}></Route>
                        <Route path="/notifications" element={<Notifications/>}></Route>
                        <Route path="/lobby" element={<Lobby/>}></Route>
                        <Route path="*" element={<Navigate to="/login" replace={true} />}></Route>
                    </Routes>
                </div>
                <PropagateLoader
                    color="green"
                    loading={loading || isFetching}
                    cssOverride={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                    }}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                {(loading || isFetching) &&  <div className="overlay"></div>}
            </BrowserRouter>
    )
}

export default App
