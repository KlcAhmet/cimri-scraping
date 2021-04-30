import { ListGroup, Button } from 'react-bootstrap'
/* import Post from '../service/Post' */
import store, { searchCimriSubCategoryLink } from '../store/index'
import { postSearchSubCategory } from '../map/ServiceMap'

function SearchSubCategories({ props }) {

    return (
        <ListGroup.Item>
            <Button onClick={() => {
                store.dispatch(searchCimriSubCategoryLink(props.categoryLink))
                postSearchSubCategory(props.categoryLink)
            }}>
                {props.categoryName}
                <span>{props.categoryProductsCount}</span>
            </Button>
        </ListGroup.Item>
    )
}

export default SearchSubCategories