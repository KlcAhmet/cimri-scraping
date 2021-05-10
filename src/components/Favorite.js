import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Row } from 'react-bootstrap'
import { SearchCard } from "../map/ComponentMap"

const Favorite = props => {
    const favorite = useSelector(state => state.UserProducts.favorite)
    const [cards, setCard] = useState([])


    useEffect(() => {
        if (favorite) {
            try {
                favorite.forEach((item, index) => {
                    setCard(prevArray => [...prevArray, <SearchCard classname="favorite" key={index} props={item} isLike={true} />])
                })
            } catch (error) {

            }
        }
    }, [favorite])

    return (
        <Row className="d-flex justify-content-center">
            {cards}
        </Row>
    )
}

export default Favorite