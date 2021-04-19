import { Row, Col, Form, Button } from 'react-bootstrap';
import { User } from '../map/ComponentMap'
import { cimriSearch } from '../map/UtilsMap'

const Header = props => {
    return (
        <header>
            <Row>
                <Col xs={2}>
                    <span>Header Logo</span>
                </Col>
                <Col xs={8}>
                    <Form onSubmit={(e) => {
                        e.preventDefault()
                        if (e.target[0].value !== "") cimriSearch.searchCimri(e.target[0].value)
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
        </header>
    )
}

export default Header