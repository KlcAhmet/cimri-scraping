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
        <Row className="ProductsPage" style={{ marginLeft: 7, marginRight: 7 }}>
            <Col className="subCategory" lg={2}>
                <aside>
                    <h6 className="subCategory-header">Alt Kategoriler</h6>
                    <ListGroup variant="flush">
                        {subCategories}
                    </ListGroup>
                </aside>
            </Col>
            <Col className="ProductsPage-main" xs={12} sm={12} lg={10}>
                <section>
                    <Row className="d-flex justify-content-center">
                        {cards}
                    </Row>
                </section>
                <section>
                    <Row className="ProductsPage-main-pageNumber d-flex justify-content-center">
                        {pagesNumber}
                    </Row>
                </section>
            </Col>
        </Row>
    )
}

export default ProductsPage