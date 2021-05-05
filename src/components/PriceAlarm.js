import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Row, Button, Col, Image } from 'react-bootstrap'
import { alarmlike, alarmunlike } from '../map/ComponentMap'
import { Events, Const } from "../map/UtilsMap"

const PriceAlarm = props => {
    const priceAlarm = useSelector(state => state.UserProducts.priceAlarm)
    const [cards, setCard] = useState([])
    const [alarm, setalarm] = useState({
        id: 'alarmlike',
        img: alarmlike
    })

    useEffect(() => {
        if (priceAlarm) {
            try {
                setCard(() => {
                    const cardsArr = []
                    priceAlarm.forEach((item, index) => {
                        cardsArr.push(
                            <Row key={index}>
                                <Col xs={4}>
                                    <Image src={item.productImageSrc} fluid />
                                </Col>
                                <Col xs={7}>
                                    <Row>
                                        <h6><a href={item.productLink}>{item.productTitle}</a></h6>
                                    </Row>
                                    <Row>
                                        <p>Takip fiyatı: {item.productPrice}</p>
                                    </Row>
                                </Col>
                                <Col xs={1}>
                                    <Button variant="outline-primary" type="button" onClick={(e) => {
                                        Events(Const.events.productAlarmUnlike.type, item)
                                    }}><Image src={alarm.img} style={{ width: 20, zIndex: 2 }} /></Button>
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
        <Row>
            {cards}
        </Row>
    )
}

export default PriceAlarm

{/*   <Button variant="outline-primary" type="button" className="firsatlarCard-body-button" onClick={(e) => {
                                            setalarm(((alarm.id === 'alarmunlike') ? { id: 'alarmlike', img: alarmlike } : { id: 'alarmunlike', img: alarmunlike }))
                                            if (alarm.id === 'alarmunlike') {
                                                Events(Const.events.productAlarmLike.type, props)
                                            }
                                            else {
                                                Events(Const.events.productAlarmUnlike.type, props)
                                            }
                                        }}><img style={{ width: 20, zIndex: 2 }} src={alarm.img} alt="like" /></Button> */}