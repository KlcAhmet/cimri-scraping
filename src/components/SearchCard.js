import { Card, Button, Image } from 'react-bootstrap'
import { useState } from 'react';
import { likered, likeblack, alarmlike, alarmunlike } from '../map/ComponentMap'
import { Events, Const } from "../map/UtilsMap"

function SearchCard({ props, isLike, isAlarm }) {
    const [like, setlike] = useState({
        id: ((isLike === true) ? 'red' : 'black'),
        img: ((isLike === true) ? likered : likeblack)
    })
    const [alarm, setalarm] = useState({
        id: ((isAlarm === true) ? 'alarmlike' : 'alarmunlike'),
        img: ((isAlarm === true) ? alarmlike : alarmunlike)
    })
    let offerArr = []

    props.productTopOffers.forEach((item, index) => {
        /* Component */
        const offer = <a key={index} href={item.offerLink} className="searchCard-body-priceBody-link">
            <span className="searchCard-body-priceBody-link-offerName">{item.offerName}</span>
            <span className="searchCard-body-priceBody-link-offerPrice">{item.offerPrice}</span>
        </a>
        /*  */
        offerArr.push(offer)
    })

    return (
        <Card className="searchCard" /* onClick={() => { window.location.href = props.productLink }} */>
            <div className="searchCard-buttons">
                <Button className="searchCard-buttons-likeBtn" variant="outline-primary" type="button" onClick={(e) => {
                    setlike(((like.id === 'black') ? { id: 'red', img: likered } : { id: 'black', img: likeblack }))
                    if (like.id === 'black') Events(Const.events.productLike.type, props)
                    else Events(Const.events.productUnlike.type, props)
                }}>
                    <Image src={like.img} fluid />
                </Button>
                <Button className="searchCard-buttons-alarmBtn" variant="outline-primary" type="button" onClick={(e) => {
                    setalarm(((alarm.id === 'alarmunlike') ? { id: 'alarmlike', img: alarmlike } : { id: 'alarmunlike', img: alarmunlike }))
                    if (alarm.id === 'alarmunlike') Events(Const.events.productAlarmLike.type, props)
                    else Events(Const.events.productAlarmUnlike.type, props)
                }}>
                    <Image src={alarm.img} fluid />
                </Button>
            </div>
            <Card.Img className="searchCard-Img" variant="top" src={props.productImageSrc} />
            <Card.Body className="searchCard-body">
                <Card.Title className="searchCard-body-title">{props.productTitle}</Card.Title>
                <div className="searchCard-body-priceBody">{offerArr}</div>
            </Card.Body>
        </Card>
    )
}

export default SearchCard