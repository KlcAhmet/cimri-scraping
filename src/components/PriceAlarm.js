import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Row, Button, Col, Image } from 'react-bootstrap'
import { alarmlike } from '../map/ComponentMap'
import { Events, Const } from "../map/UtilsMap"

const PriceAlarm = props => {
    const priceAlarm = useSelector(state => state.UserProducts.priceAlarm)
    const [cards, setCard] = useState([])

    useEffect(() => {
        if (priceAlarm) {
            try {
                setCard(() => {
                    const cardsArr = []
                    priceAlarm.forEach((item, index) => {
                        cardsArr.push(
                            <Row className="priceAlarmCard" key={index}>
                                <Col xs={3} sm={3}>
                                    <Image className="priceAlarmCard-Img" src={item.productImageSrc} fluid />
                                </Col>
                                <Col xs={7} sm={7}>
                                    <Col xs={11} sm={12}><h6 className="priceAlarmCard-title"><a href={item.productLink}>{item.productTitle}</a></h6></Col>
                                    <Col xs={11} sm={12}><p className="priceAlarmCard-price">Takip fiyatı: {item.productPrice}</p></Col>
                                </Col>
                                <Col xs={1} sm={1}>
                                    <Button className="searchCard-buttons-alarmBtn" variant="outline-primary" type="button" onClick={(e) => {
                                        Events(Const.events.productAlarmUnlike.type, item)
                                    }}>
                                        <Image src={alarmlike} />
                                    </Button>
                                </Col>
                            </Row>
                        )
                    })
                    return cardsArr
                })
            } catch (error) {

            }
        }
    }, [priceAlarm])


    return (
        <div>
            {cards}
        </div>
    )
}

export default PriceAlarm