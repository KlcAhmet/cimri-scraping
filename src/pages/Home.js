/* import Post from "../service/Post" */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { FirsatlarCard } from "../map/ComponentMap"
import { Row } from 'react-bootstrap';

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
            // Post.postCimriFirsatlar()       değişecek
        }
    }, [CimriFirsatlar])

    return (
        <div>
            <p>home page</p>
            <Row>
                {cards}
            </Row>
        </div>
    )
}

export default Home