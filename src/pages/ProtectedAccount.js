/* import { useSelector } from "react-redux" */
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap'
import { MyAccount, Favorite } from '../map/ComponentMap'

const ProtectedRoute = (props) => {
    /*  const Token = useSelector(state => state.Token) */
    try {
        if (true) {
            return (
                <Container>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey={window.location.hash} >
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
                                        Fiyat Alarmı
                                  </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#hesap">
                                        <MyAccount />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#favori">
                                        <Favorite />
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