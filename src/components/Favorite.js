import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Row, Col, ListGroup } from 'react-bootstrap'
import { SearchCard } from "../map/ComponentMap"

const Favorite = props => {
    const favorite = useSelector(state => state.UserProducts.favorite)
    const [cards, setCard] = useState([])


    useEffect(() => {
        try {
            setCard(() => {
                const cardsArr = []
                favorite.forEach((item, index) => {
                    cardsArr.push(<SearchCard key={index} props={item} isLike={true} />)
                })
                return cardsArr
            })
        } catch (error) {

        }
    }, [favorite])

    return (
        <Row>

            {cards}

        </Row>
    )
}

export default Favorite