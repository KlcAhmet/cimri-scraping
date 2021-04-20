import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Row, Col } from 'react-bootstrap'
import { SearchCard } from "../map/ComponentMap"

function ProductsPage() {
    const seachCimri = useSelector(state => state.searchCimri)
    const [cards, setCard] = useState([])

    useEffect(() => {
        if (seachCimri) {
            const cardsArr = []
            seachCimri.productsData.forEach((item, index) => {
                cardsArr.push(<SearchCard key={index} props={item} />)
            })
            setCard(cardsArr)
        }
    }, [seachCimri])

    return (
        <Row style={{ marginLeft: 7, marginRight: 7 }}>
            <Col xs={2} style={{ backgroundColor: 'orange' }}>
                Alt Kategoriler
            </Col>
            <Col xs={10} style={{ backgroundColor: 'blue' }}>
                Cartlar
                <Row>
                    {cards}
                </Row>
            </Col>
        </Row>
    )
}

export default ProductsPage