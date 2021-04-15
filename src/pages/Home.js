import Post from "../service/Post"

const Home = props => {
    Post.postCimri()
    return (
        <p>home page</p>
    )
}

export default Home