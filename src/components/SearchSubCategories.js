import { ListGroup, Button } from 'react-bootstrap'
import Post from '../service/Post'
import store, { searchCimriSubCategoryLink } from '../store/index'

function SearchSubCategories({ props }) {
    console.dir(props)
    return (
        <ListGroup.Item>
            <Button onClick={() => {
                store.dispatch(searchCimriSubCategoryLink(`https://www.cimri.com${props.categoryLink}`))
                Post.postCimriSearcherSubCategory(`https://www.cimri.com${props.categoryLink}`)
            }}>
                {props.categoryName}
                <span>{props.categoryProductsCount}</span>
            </Button>
        </ListGroup.Item>
    )
}

export default SearchSubCategories