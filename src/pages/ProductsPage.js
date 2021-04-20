import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Row, Col, ListGroup } from 'react-bootstrap'
import { SearchCard, SearchSubCategories, SearchPagesNumber } from "../map/ComponentMap"

function ProductsPage() {
    const searchCimri = useSelector(state => state.searchCimri)
    const [cards, setCard] = useState([])
    const [subCategories, setSubCategory] = useState([])
    const [pagesNumber, setPagesNumber] = useState([])

    useEffect(() => {
        if (searchCimri) {
            try {
                const cardsArr = []
                const categoryArr = []
                searchCimri.productsData.forEach((item, index) => {
                    cardsArr.push(<SearchCard key={index} props={item} />)
                })
                searchCimri.productsCategory.forEach((item, index) => {
                    categoryArr.push(<SearchSubCategories key={index} props={item} />)
                })
                setSubCategory(categoryArr)
                setCard(cardsArr)
                setPagesNumber(<SearchPagesNumber key={0} props={searchCimri.productsPageCount} />)
            } catch (error) {

            }
        }
    }, [searchCimri])

    return (
        <Row style={{ marginLeft: 7, marginRight: 7 }}>
            <Col xs={2} style={{ backgroundColor: 'orange' }}>
                <h6>Alt Kategoriler</h6>
                <ListGroup variant="flush">
                    {subCategories}
                </ListGroup>
            </Col>
            <Col xs={10} style={{ backgroundColor: 'blue' }}>
                <Row>
                    {cards}
                </Row>
                <Row>
                    {pagesNumber}
                </Row>
            </Col>
        </Row>
    )
}

export default ProductsPage