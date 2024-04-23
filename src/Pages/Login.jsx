
import USERS from '../Data/users.json';
import {useEffect, useReducer, useState} from "react";
import {getUsersInitialData, userReducer} from "../Reducers/User";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);

    const [userState, userDispatch] = useReducer(userReducer, getUsersInitialData());

    const checkCredentials = () => {
        if(!(username.trim() && password.trim())) {
            setLoginError('Uneli ste pogresne podatke!');
            return;
        }

        let foundUser = false;
        USERS.forEach((user) => {
            if(user.username === username && user.password === password) {
                foundUser = true;
                userDispatch({type: 'SET_USERNAME', payload: username});
                userDispatch({type: 'SET_IS_LOGGED_IN', payload: true});
                userDispatch({type: 'SET_LOGIN_TIME', payload: new Date().getTime()});
            }
        });

        if(!foundUser) {
            setLoginError('Ne postoji trazeni korisnik!');
        } else {
            setLoginError('Pozdrav '+username+'!');
        }
    }

    useEffect( () => {
        if(userState.isLoggedIn){
            localStorage.setItem('userData', JSON.stringify(userState));
        }

    }, [userState]);


    return (
        <div className="container">
            <h1>Login</h1>
            <hr/>
            <p>{loginError}</p>

            {!userState.isLoggedIn &&
                <form>
                    <input onInput={ e => setUsername(e.currentTarget.value)} type="text" placeholder="Username" />
                    <input onInput={ e => setPassword(e.currentTarget.value)} type="password" placeholder="Password" />
                    <button onClick={checkCredentials} type="button">Login</button>
                </form>
            }

        </div>
    )
}

export default Login;