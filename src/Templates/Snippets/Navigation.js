import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useEffect, useReducer} from "react";
import {getUsersInitialData, userReducer} from "../../Reducers/User";


const Navigation = () => {
    const [userState, userDispatch] = useReducer(userReducer, getUsersInitialData());

    useEffect( () => {
        if(!userState.isLoggedIn){
            localStorage.removeItem('userData');
        }

    }, [userState]);

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">ToDo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/todo">ToDo</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>

                    {userState.isLoggedIn
                        ? <>
                            <p className="my-2">Hello, {userState.username}</p>
                            <button onClick={() => userDispatch({type: 'SET_IS_LOGGED_IN', payload: false})} className="btn btn-outline-danger ms-3">Logout</button>
                          </>
                        : <a className="btn btn-outline-primary ms-3" href="/login">Login</a>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;