/* import { useSelector } from "react-redux" */
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap'
import { MyAccount, Favorite, PriceAlarm } from '../map/ComponentMap'
import { history } from '../map/UtilsMap'
import { useSelector } from "react-redux"

const ProtectedRoute = (props) => {
    const isLoggin = useSelector(state => state.User.id)
    try {
        if (isLoggin) {
            return (
                <Container>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey={window.location.hash} >
                        <Row>
                            <Col sm={3}>
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
                                        <PriceAlarm />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            )
        }
        else {
            history.push('/login')
            window.location.reload();
        }
    } catch (error) {

    }

}

export default ProtectedRoute;