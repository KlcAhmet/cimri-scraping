import { Row, Col, Form, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { User } from '../map/ComponentMap'
import { history } from '../map/UtilsMap'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { postSearch } from '../map/ServiceMap'

const Header = props => {
    const headerCimri = useSelector(state => state.headerCimri)
    const [navigationBar, setNavigation] = useState([])

    useEffect(() => {
        try {
            const navArr = []
            let forIndex = 0
            for (let i = 0; i < headerCimri.headerNav.length; i++) {
                const temp = []
                for (let j = forIndex; j < forIndex + 10; j++) {
                    temp.push(
                        <NavDropdown.Item key={j} onClick={(e) => {
                            postSearch(headerCimri.headerSubCategory[j].link.substring(1, headerCimri.headerSubCategory[j].link.length))
                        }}
                        >{headerCimri.headerSubCategory[j].title}</NavDropdown.Item>
                    )
                }
                navArr.push(
                    <NavDropdown key={i} title={headerCimri.headerNav[i].title} id="basic-nav-dropdown" >
                        {temp}
                    </NavDropdown >
                )
                forIndex += 10
            }
            setNavigation(navArr)
        } catch (error) {

        }
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
                            postSearch(e.target[0].value)
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
                        {navigationBar}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header