import { Card } from 'react-bootstrap';

function SearchCard({ props }) {
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
        <Card className="SeachCard" style={{ width: '18rem' }} onClick={() => { window.location.href = props.productLink }}>
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