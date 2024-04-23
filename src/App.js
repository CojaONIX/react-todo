
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";

import Navigation from "./Templates/Snippets/Navigation";
import Footer from "./Templates/Snippets/Footer";
import ToDo from "./Pages/ToDo";
import About from "./Pages/About";

const App = () => {
    return (
        <>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<ToDo />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
