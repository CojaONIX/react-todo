import {Navigate} from "react-router-dom";
import {useEffect} from "react";


const Logout = () => {

    useEffect( () => {
        localStorage.removeItem('userData');
    }, []);

    return <Navigate to="/" />
};

export default Logout;