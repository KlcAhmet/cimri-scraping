import { Row, Col, Form, Button, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import { User } from '../map/ComponentMap'
import { cimriSearch, history } from '../map/UtilsMap'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

const Header = props => {
    const headerCimri = useSelector(state => state.headerCimri)
    const [navigationBar, setNavigation] = useState([])
    const [navSubCategory, setnavSubCategory] = useState([])

    useEffect(() => {
        const navArr = []


    }, [headerCimri])

    return (
        <header>
            <Row>
                <Col xs={2}>
                    <button onClick={() => { history.push("/") }}>Header Logo</button>
                </Col>
                <Col xs={8}>
                    <Form onSubmit={(e) => {
                        e.preventDefault()
                        if (e.target[0].value !== "") {
                            cimriSearch.searchCimri(e.target[0].value)
                        }
                    }}>
                        <Row>
                            <Col xs={9}><Form.Group controlId="formText"><Form.Control type="text" placeholder="Ürün arayın" /></Form.Group></Col>
                            <Col xs={3}><Button variant="primary" type="submit">ARA</Button></Col>
                        </Row>
                    </Form>
                </Col>
                <Col xs={2}>
                    <User />
                </Col>
            </Row>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header