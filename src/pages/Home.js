import Post from "../service/Post"

const Home = props => {
    Post.postaa()
    return (
        <p>home page</p>
    )
}

export default Home