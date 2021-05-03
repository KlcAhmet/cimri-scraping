import { Card } from 'react-bootstrap';

function FirsatlarCard({ props }) {

    return (
        <Card className="FirsatlarCard" style={{ width: '18rem' }} >
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