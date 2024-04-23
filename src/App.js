
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./Templates/Snippets/Footer";
import ToDo from "./Pages/ToDo";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import {useReducer} from "react";
import {getUsersInitialData, userReducer} from "./Reducers/User";


const App = () => {

    const [userState, userDispatch] = useReducer(userReducer, getUsersInitialData());

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={userState.isLoggedIn ? <ToDo /> : <Navigate to="/login" replace />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
