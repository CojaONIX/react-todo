
import {useContext, useEffect} from "react";
import {Navigate} from "react-router-dom";
import Navigation from "../Templates/Snippets/Navigation";
import {UserContext} from "../App";
import LoginForm from "../Components/LoginForm";

const Login = () => {

    const {userState} = useContext(UserContext);

    useEffect( () => {
        if(userState.isLoggedIn){
            localStorage.setItem('userData', JSON.stringify(userState));
        }
    }, [userState]);


    return (
        <>
            <Navigation />
            <div className="container" style={{marginBottom: '200px'}}>
                <h1>Login</h1>
                <hr/>

                <h5>Test Login:</h5>
                <p>Email: user@gmail.com</p>
                <p>Pass: User#123</p>

                {userState.isLoggedIn
                    ? <Navigate to="/"/>
                    : <LoginForm />
                }

            </div>
        </>
    )
}

export default Login;