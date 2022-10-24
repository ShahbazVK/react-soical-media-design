import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { HiHome } from 'react-icons/hi'
import { MdDarkMode } from 'react-icons/md'
import { AiFillSetting, AiFillMail } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { Form } from 'react-bootstrap'
import { IoMdNotifications } from 'react-icons/io'
import { useEffect, useState } from 'react';


export const NavbarMenu = () => {
    const [isDark, setisDark] = useState()
    useEffect(() => {
        !localStorage.getItem('mode') && localStorage.setItem('mode', 'light')
    }, [])

    return (
        <Navbar collapseOnSelect expand="lg" style={{ borderBottom: "2px solid #bfbcb2", paddingBottom: "6px" }}>
            <Navbar.Brand style={{ color: "blue", fontWeight: "bold" }} href="#home">ShabBook</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto pt-2">
                    <Nav.Link href="#features"><HiHome className='navbariconsenlarge' /></Nav.Link>
                    <Nav.Link onClick={() => {
                        if (localStorage.getItem("mode") == 'light') {
                            setisDark(true)
                            localStorage.setItem("mode", "dark")
                        }
                        else {
                            setisDark(false)
                            localStorage.setItem("mode", "light")

                        }
                    }}><MdDarkMode className='navbariconsenlarge' /></Nav.Link>
                    <Nav.Link href="#pricing"><AiFillSetting className='navbariconsenlarge' /></Nav.Link>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control style={{ borderRadius: "10px" }} type="search" placeholder="Search" />
                    </Form.Group>

                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav className='ml-auto'>
                    <Nav.Link href="#deets"><AiFillMail className='navbariconsenlarge' /></Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        <IoMdNotifications className="navbariconsenlarge" />
                    </Nav.Link>
                    <Nav.Link href="#deets"><BiUser className='navbariconsenlarge' /></Nav.Link>
                    <Nav.Link href="#deets"><img className='navbaruser' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />John Doe</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}