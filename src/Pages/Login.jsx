import USERS from '../Data/users.json';
import {useEffect, useReducer, useState} from "react";
import {getUsersInitialData, userReducer} from "../Reducers/User";
import {Navigate} from "react-router-dom";
import Navigation from "../Templates/Snippets/Navigation";

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
        <>
            <Navigation />
            <div className="container">
                <h1>Login</h1>
                <hr/>

                {userState.isLoggedIn
                    ? <Navigate to="/" />
                    :
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h4>LOGIN</h4>
                            </div>

                            <div className="card-body">
                                <form>

                                    <div className="mb-3">
                                        <label htmlFor="email">Email <span className="text-danger">* </span></label>
                                        <input onInput={e => setUsername(e.currentTarget.value)} type="email"
                                               className="form-control mt-2" autoFocus/>
                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="password">Password <span className="text-danger">* </span></label>
                                        <input onInput={e => setPassword(e.currentTarget.value)} type="password"
                                               className="form-control mt-2"/>
                                    </div>

                                    <button onClick={checkCredentials} type="button"
                                            className="btn btn-primary form-control my-2">Login
                                    </button>

                                </form>
                            </div>

                            <div className="card-footer">
                                <h6 className="text-danger">{loginError}</h6>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default Login;