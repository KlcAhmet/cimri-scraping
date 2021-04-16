import Post from "../service/Post"
import { useEffect } from "react"

const Home = props => {
    useEffect(() => {
        Post.postCimriFirsatlar()
    }, [])
    return (
        <p>home page</p>
    )
}

export default Home