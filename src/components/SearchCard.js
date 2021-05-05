import { Card, Button } from 'react-bootstrap'
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
        const offer = <a key={index} href={item.offerLink} className="SeachCard-priceBody-link">
            <p className="SeachCard-priceBody-offerName">{item.offerName}</p>
            <p className="SeachCard-priceBody-offerPrice">{item.offerPrice}</p>
        </a>
        /*  */
        offerArr.push(offer)
    })

    return (
        <Card className="SeachCard" style={{ width: '18rem' }} /* onClick={() => { window.location.href = props.productLink }} */>
            <div>
                <Button variant="outline-primary" type="button" onClick={(e) => {
                    setlike(((like.id === 'black') ? { id: 'red', img: likered } : { id: 'black', img: likeblack }))
                    if (like.id === 'black') {
                        Events(Const.events.productLike.type, props)
                    }
                    else {
                        Events(Const.events.productUnlike.type, props)
                    }
                }}><img style={{ width: 20, zIndex: 2 }} src={like.img} alt="like" /></Button>
                <Button variant="outline-primary" type="button" onClick={(e) => {
                    setalarm(((alarm.id === 'alarmunlike') ? { id: 'alarmlike', img: alarmlike } : { id: 'alarmunlike', img: alarmunlike }))
                    if (alarm.id === 'alarmunlike') {
                        Events(Const.events.productAlarmLike.type, props)
                    }
                    else {
                        Events(Const.events.productAlarmUnlike.type, props)
                    }
                }}><img style={{ width: 20, zIndex: 2 }} src={alarm.img} alt="like" /></Button>
            </div>
            <Card.Img className="SeachCard-topImg" variant="top" src={props.productImageSrc} />
            <Card.Body className="SeachCard-body">
                <Card.Title className="SeachCard-title">{props.productTitle}</Card.Title>
                <div className="SeachCard-priceBody">
                    {offerArr}
                </div>
            </Card.Body>
        </Card>
    )
}

export default SearchCard