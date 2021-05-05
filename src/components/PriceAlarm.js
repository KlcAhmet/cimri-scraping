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
                            <Row key={index}>
                                <Col xs={3} sm={3}>
                                    <Image src={item.productImageSrc} fluid />
                                </Col>
                                <Col xs={7} sm={7}>
                                    <Col xs={12} sm={12}><h6><a href={item.productLink}>{item.productTitle}</a></h6></Col>
                                    <Col xs={12} sm={12}><p>Takip fiyatı: {item.productPrice}</p></Col>
                                </Col>
                                <Col xs={1} sm={1}>
                                    <Button variant="outline-primary" type="button" onClick={(e) => {
                                        Events(Const.events.productAlarmUnlike.type, item)
                                    }}><Image src={alarmlike} style={{ width: 20, zIndex: 2 }} /></Button>
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

{/*   <Button variant="outline-primary" type="button" className="firsatlarCard-body-button" onClick={(e) => {
                                            setalarm(((alarm.id === 'alarmunlike') ? { id: 'alarmlike', img: alarmlike } : { id: 'alarmunlike', img: alarmunlike }))
                                            if (alarm.id === 'alarmunlike') {
                                                Events(Const.events.productAlarmLike.type, props)
                                            }
                                            else {
                                                Events(Const.events.productAlarmUnlike.type, props)
                                            }
                                        }}><img style={{ width: 20, zIndex: 2 }} src={alarm.img} alt="like" /></Button> */}