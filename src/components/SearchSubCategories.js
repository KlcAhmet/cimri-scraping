import { ListGroup } from 'react-bootstrap'

function SearchSubCategories({ props }) {

    return <ListGroup.Item><a href={`https://www.cimri.com${props.categoryLink}`} target="_blank" rel="noreferrer">{props.categoryName} <span>{props.categoryProductsCount}</span></a></ListGroup.Item>
}

export default SearchSubCategories