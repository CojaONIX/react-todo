import USERS from "../Data/users.json";
import {useContext, useState} from "react";
import {UserContext} from "../App";


const LoginForm = () => {

    const {userState, userDispatch} = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState(null);

    const checkCredentials = () => {
        if(!(username.trim() && password.trim())) {
            setLoginMessage('Uneli ste pogresne podatke!');
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
            setLoginMessage('Ne postoji trazeni korisnik!');
        }
    }

    return (
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
                            <label htmlFor="password">Password <span
                                className="text-danger">* </span></label>
                            <input onInput={e => setPassword(e.currentTarget.value)} type="password"
                                   className="form-control mt-2"/>
                        </div>

                        <button onClick={checkCredentials} type="button"
                                className="btn btn-primary form-control my-2">Login
                        </button>

                    </form>
                </div>

                <div className="card-footer">
                    <h6 className="text-danger">{loginMessage}</h6>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;