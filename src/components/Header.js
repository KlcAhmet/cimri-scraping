import { Row, Col, Form, Button } from 'react-bootstrap';
import { User } from '../map/ComponentMap'

const Header = props => {

    return (
        <header>
            <Row>
                <Col xs={2}>
                    <span>Header Logo</span>
                </Col>
                <Col xs={8}>
                    <Form>
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