import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Row, Col } from 'react-bootstrap'
import { SearchCard, SearchSubCategories } from "../map/ComponentMap"

function ProductsPage() {
    const seachCimri = useSelector(state => state.searchCimri)
    const [cards, setCard] = useState([])
    const [subCategories, setSubCategory] = useState([])

    useEffect(() => {
        if (seachCimri) {
            try {
                const cardsArr = []
                seachCimri.productsData.forEach((item, index) => {
                    cardsArr.push(<SearchCard key={index} props={item} />)
                })
                setCard(cardsArr)
            } catch (error) {

            }
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