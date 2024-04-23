import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";


const Navigation = () => {
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
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <a className="btn btn-outline-primary ms-3" href="/login">LogIn</a>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;