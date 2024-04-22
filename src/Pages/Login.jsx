
import USERS from '../Data/users.json';
import {useState} from "react";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const checkCredentials = () => {
        if(!(username.trim() && password.trim())) {
            return;
        }

        USERS.forEach((user) => {
            if(user.username === username && user.password === password) {
                console.log('Pozdrav ' + username);
            }
        });
    }

    return (
        <>
            <h1>Login</h1>
            <hr/>
            <pre>{JSON.stringify(USERS, null, 2)}</pre>
            <form>
                <input onInput={ e => setUsername(e.currentTarget.value)} type="text" placeholder="Username" />
                <input onInput={ e => setPassword(e.currentTarget.value)} type="password" placeholder="Password" />
                <button onClick={checkCredentials} type="button">Login</button>
            </form>
        </>
    )
}

export default Login;