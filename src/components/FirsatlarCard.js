import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { likered, likeblack } from '../map/ComponentMap'
import { Events, Const } from "../map/UtilsMap"

function FirsatlarCard({ props }) {
    const [like, setlike] = useState({
        id: "black",
        img: likeblack
    })

    return (
        <Card className="FirsatlarCard" style={{ width: '18rem' }} >
            <div>
                <Button variant="outline-primary" type="button" onClick={(e) => {
                    setlike(((like.id === 'black') ? { id: 'red', img: likered } : { id: 'black', img: likeblack }))
                    // event eklenecek
                    if (like.id === 'red') Events(Const.events.productLike.type, props)
                    else Events(Const.events.productUnlike.type, props)

                }}><img style={{ width: 20, zIndex: 2 }} src={like.img} alt="like" /></Button>
            </div>
            <Card.Img className="FirsatlarCard-topImg" variant="top" src={props.productImageSrc} />
            <Card.Body className="FirsatlarCard-body">
                <Card.Title className="FirsatlarCard-title">{props.productTitle}</Card.Title>
                <div className="FirsatlarCard-priceBody">
                    <span className="FirsatlarCard-priceBody-discount">{`%${props.productDiscount}`}</span>
                    <span className="FirsatlarCard-priceBody-lastPrice">{props.productLastPrice}</span>
                    <span className="FirsatlarCard-priceBody-newPrice">{props.productNewPrice}</span>
                </div>
            </Card.Body>
            <Card.Img className="FirsatlarCard-bottomImg" variant="center" src={props.productCompanyLogo} onClick={() => { window.location.href = props.productLink }} />
        </Card>
    )
}

export default FirsatlarCard