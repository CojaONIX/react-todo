
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";

import Navigation from "./Templates/Snippets/Navigation";
import Footer from "./Templates/Snippets/Footer";
import ToDo from "./Pages/ToDo";
import About from "./Pages/About";
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
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
