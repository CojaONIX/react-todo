import {Container, Nav, Navbar} from "react-bootstrap";
import {useContext} from "react";
import {UserContext} from "../../App";

const Navigation = () => {

    const {userState} = useContext(UserContext);

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">ToDo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link className={!userState.isLoggedIn ? "text-danger" : null } href="/todo">ToDoList</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>

                    {userState.isLoggedIn
                        ? <>
                            <p className="my-2">Hello, {userState.username}</p>
                            <a onClick={() => localStorage.removeItem('userData')} className="btn btn-outline-danger ms-3" href="/">Logout</a>
                        </>
                        : <a className="btn btn-outline-primary ms-3" href="/login">Login</a>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;