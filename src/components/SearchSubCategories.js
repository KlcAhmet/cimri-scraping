import { ListGroup } from 'react-bootstrap'
import store, { searchCimriSubCategoryLink } from '../store/index'
import { postSearchSubCategory } from '../map/ServiceMap'

function SearchSubCategories({ props }) {

    return (
        <ListGroup.Item className="subCategory-list">
            <span onClick={() => {
                store.dispatch(searchCimriSubCategoryLink(props.categoryLink))
                postSearchSubCategory(props.categoryLink)
            }}>
                {props.categoryName} ({props.categoryProductsCount})</span>
        </ListGroup.Item>
    )
}

export default SearchSubCategories