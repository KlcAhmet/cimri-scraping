/* import { useSelector } from "react-redux" */
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap'

const ProtectedRoute = (props) => {
    /*  const Token = useSelector(state => state.Token) */
    try {
        if (true) {
            return (
                <Container>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#hesap">
                        <Row>
                            <Col sm={4}>
                                <ListGroup>
                                    <ListGroup.Item action href="#hesap">
                                        Hesabım
                                     </ListGroup.Item>
                                    <ListGroup.Item action href="#favori">
                                        Favorilerim
                                  </ListGroup.Item>
                                    <ListGroup.Item action href="#fiyatalarm">
                                        Favorilerim
                                  </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#hesap">
                                        hesap
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#favori">
                                        favori
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#fiyatalarm">
                                        fiyat
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            )
        }
        else {
            return (
                <p>aaaa</p>
            )
        }
    } catch (error) {

    }

}

export default ProtectedRoute;