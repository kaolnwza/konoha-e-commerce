import { Container, Nav, Navbar, NavDropdown, Button, Form } from 'react-bootstrap'
import LoginModal from './LoginModal'
import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";

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
                        <Nav.Link href="/">Home</Nav.Link>
                        {localStorage.getItem('user_id') != '' ?
                            <>
                                <Nav.Link href="/userprofile">Profile</Nav.Link>
                                <Nav.Link href="/myproduct">My Product</Nav.Link>
                            </>
                            : null
                        }

                    </Nav>

                    <Nav>
                        {localStorage.getItem('user_id') == '' ?
                            <>
                                <Link to={'/login'}>
                                    <Button
                                        style={{ marginRight: 5 }}
                                        variant="outline-primary">Login</Button></Link>
                                <Link to="/signup">
                                    <Button variant="outline-primary">Register</Button>
                                </Link>
                            </>


                            :
                            <Link to="/cart">
                                <BsCart2 size={25} style={{ color: "grey" }} />
                            </Link>





                        }
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