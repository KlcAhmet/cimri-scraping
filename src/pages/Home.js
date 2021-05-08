import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { FirsatlarCard } from "../map/ComponentMap"
import { Container, Row } from 'react-bootstrap'
import { postFirsatlar } from "../map/ServiceMap"

const Home = props => {
    const CimriFirsatlar = useSelector(state => state.CimriFirsatlar)
    const [cards, setCard] = useState([])

    useEffect(() => {
        if (CimriFirsatlar.length) {
            CimriFirsatlar.forEach((item, index) => {
                setCard(prevArray => [...prevArray, <FirsatlarCard key={index} props={item} />])
            })
        }
        else {
            postFirsatlar()
        }
    }, [CimriFirsatlar])

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                {cards}
            </Row>
        </Container>
    )
}

export default Home