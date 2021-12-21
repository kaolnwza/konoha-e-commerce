import { Container, Nav, Navbar, NavDropdown, Button, Form } from 'react-bootstrap'
import LoginModal from './LoginModal'
import React from 'react';

const NavbarComp = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Navbar bg="light" expand="lg" >
            <Container style={{ width: 1200 }}>

                <LoginModal />
                <Navbar.Brand href="/" >KONOHA SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">หน้าหลัก</Nav.Link>
                        <Nav.Link href="/userprofile">โปรไฟล์</Nav.Link>
                        <NavDropdown title="ประเภทสินค้า" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Find product" />

                        </Form.Group>
                    </Nav>

                    <Nav>
                        <Button
                            style={{ marginRight: 5 }}
                            variant="outline-primary"
                            onClick={() => setModalShow(true)}>Login</Button>
                        <Button variant="outline-primary">Register</Button>
                    </Nav>
                </Navbar.Collapse>

                <LoginModal
                    show={modalShow}
                    onHide={() => setModalShow(false)} />

            </Container>
        </Navbar>
    )
}

// const navbarStyle = {
//     backgroundColor: '',
//     height: 50,
//     boxShadow: "0px 3px 0px #303030",
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: 350
// }

// const colStyle = {
//     color: '#333333',
//     fontSize: 25,
//     fontWeight: 'bold'
// }

export default NavbarComp