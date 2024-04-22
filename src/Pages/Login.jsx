
import USERS from '../Data/users.json';
import {useState} from "react";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);

    const checkCredentials = () => {
        if(!(username.trim() && password.trim())) {
            setLoginError('Uneli ste pogresne podatke!');
            return;
        }

        let foundUser = false;
        USERS.forEach((user) => {
            if(user.username === username && user.password === password) {
                foundUser = true;
            }
        });

        if(!foundUser) {
            setLoginError('Ne postoji trazeni korisnik!');
        } else {
            setLoginError('Pozdrav '+username+'!');
        }
    }

    return (
        <>
            <h1>Login</h1>
            <hr/>
            <p>{loginError}</p>
            <form>
                <input onInput={ e => setUsername(e.currentTarget.value)} type="text" placeholder="Username" />
                <input onInput={ e => setPassword(e.currentTarget.value)} type="password" placeholder="Password" />
                <button onClick={checkCredentials} type="button">Login</button>
            </form>
        </>
    )
}

export default Login;