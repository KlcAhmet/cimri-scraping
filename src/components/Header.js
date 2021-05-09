import { Row, Col, Form, Button, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { User, logo } from '../map/ComponentMap'
import { history } from '../map/UtilsMap'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { postSearch } from '../map/ServiceMap'
import { Link } from "react-router-dom";

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
                const splitWord = headerCimri.headerNav[i].title.split(',')
                navArr.push(
                    <NavDropdown key={i} title={splitWord[0]} id="basic-nav-dropdown" >
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
            <Row className="d-flex align-items-center headerTop" style={{ margin: 0 }}>
                <Col className="headerTop-logo" xs={12} sm={12} md={12} lg={2}>
                    <Link to="/"><Image src={logo} fluid /></Link>
                </Col>
                <Col xs={12} sm={12} md={12} lg={7} className="headerTop-search">
                    <Form onSubmit={(e) => {
                        e.preventDefault()
                        if (e.target[0].value !== "") {
                            postSearch(e.target[0].value)
                        }
                    }}>
                        <Row>
                            <Col style={{ paddingRight: 0 }} xs={11} sm={12} md={12} lg={10} >
                                <Form.Group controlId="formText">
                                    <Form.Control type="text" placeholder="Ürün arayın" onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault()
                                            if (e.target.value !== "") {
                                                postSearch(e.target.value)
                                            }
                                        }
                                    }} />
                                </Form.Group>
                            </Col>
                            <Col style={{ paddingLeft: 0 }} xs={11} sm={12} md={12} lg={2} >
                                <Button variant="primary" type="submit" block>ARA</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col xs={12} sm={12} md={12} lg={3} className="headerTop-user" >
                    <User />
                </Col>
            </Row>
            <Row style={{ margin: 0 }}>
                <Col style={{ padding: 0 }} xs={12} sm={12}>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className=" headerBottom">
                                {navigationBar}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </header>
    )
}

export default Header