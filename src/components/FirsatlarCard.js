import { Card, Image } from 'react-bootstrap';
import { yuzde, etiket } from '../map/ComponentMap'

function FirsatlarCard({ props }) {

    return (
        <article>
            <Card className="firsatlarCard">
                <Card.Img className="firsatlarCard-headerImg" variant="top" src={props.productImageSrc} />
                <Card.Body className="firsatlarCard-body">
                    <Card.Title className="firsatlarCard-body-title"><Image className="firsatlarCard-body-title-Img" src={etiket} fluid />{props.productTitle}</Card.Title>
                    <div className="firsatlarCard-price">
                        <span className="firsatlarCard-price-discount"><Image src={yuzde} fluid />{props.productDiscount}</span>
                        <span className="firsatlarCard-price-lastPrice">{props.productLastPrice}</span>
                        <span className="firsatlarCard-price-newPrice">{props.productNewPrice}</span>
                    </div>
                    <Card.Img className="firsatlarCard-body-footerImg" variant="center" src={props.productCompanyLogo} onClick={() => { window.location.href = props.productLink }} />
                </Card.Body>
            </Card>
        </article>
    )
}

export default FirsatlarCard