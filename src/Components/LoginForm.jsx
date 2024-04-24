import USERS from "../Data/users.json";
import {useContext, useState} from "react";
import {UserContext} from "../App";
import {useForm} from "react-hook-form";
import {EmailValidator} from "../Validators/EmailValidator";
import {PasswordValidator} from "../Validators/PasswordValidator";


const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const {userDispatch} = useContext(UserContext);
    const [loginMessage, setLoginMessage] = useState(null);

    const formSubmitted = (data) => {
        let foundUser = false;
        USERS.forEach((user) => {
            if (user.username === data.username && user.password === data.password) {
                foundUser = true;
                userDispatch({type: 'SET_USERNAME', payload: data.username});
                userDispatch({type: 'SET_IS_LOGGED_IN', payload: true});
                userDispatch({type: 'SET_LOGIN_TIME', payload: new Date().getTime()});
            }
        });

        if (!foundUser) {
            setLoginMessage('Wrong credentials!');
        }
    }

    return (
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h4>LOGIN</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit(formSubmitted)}>
                        <div className="mb-3">
                            <label htmlFor="username">Email <span className="text-danger">*</span></label>
                            <input {...register("username", EmailValidator)}
                                   onInput={e => setLoginMessage('')}
                                   type="text"
                                   id="username"
                                   className="form-control mt-2"
                                   autoFocus
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password">Password <span className="text-danger">*</span></label>
                            <input {...register("password", PasswordValidator)}
                                   onInput={e => setLoginMessage('')}
                                   type="text"
                                   id="password"
                                   className="form-control mt-2"
                            />
                        </div>

                        <button className="btn btn-primary form-control my-2">Login</button>
                    </form>
                </div>

                <div className="card-footer text-danger">
                    <h6>{errors.username && <span>{errors.username.message}</span>}</h6>
                    <h6>{errors.password && <span>{errors.password.message}</span>}</h6>
                    <h6>{loginMessage}</h6>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;