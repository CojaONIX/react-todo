
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./Templates/Snippets/Footer";
import ToDo from "./Pages/ToDo";
import About from "./Pages/About";
import Login from "./Pages/Login";
import {createContext, useReducer} from "react";
import {getUsersInitialData, userReducer} from "./Reducers/User";

export const UserContext = createContext();

const App = () => {

    const [userState, userDispatch] = useReducer(userReducer, getUsersInitialData());

    return (
        <BrowserRouter>
            <UserContext.Provider value={{userState, userDispatch}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={userState.isLoggedIn ? <ToDo /> : <Navigate to="/login" replace />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </UserContext.Provider>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
