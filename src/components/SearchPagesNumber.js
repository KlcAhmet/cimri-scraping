import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
import { postSearch } from '../map/ServiceMap'

function SearchPagesNumber({ props }) {
    const pageArr = []
    let firstArrow = null
    let secondArrow = null

    if (props[0].link === null) firstArrow = <Button type="button">{`<`}</Button>
    else firstArrow = <Button onClick={() => { postSearch(props[0].link) }}>{`<`}</Button>

    for (let i = 1; i < props.length - 1; i++) {
        if (props[i].link === null) pageArr.push(<Button key={i}>...</Button>)
        else pageArr.push(<Button key={i} onClick={() => { postSearch(props[i].link) }}>{props[i].number}</Button>)
    }

    if (props[props.length - 1].link === null) secondArrow = <Button type="button">{`>`}</Button>
    else secondArrow = <Button onClick={() => { postSearch(props[props.length - 1].link) }}>{`>`}</Button>


    return (
        <ButtonToolbar aria-label="Toolbar with button groups">

            <ButtonGroup className="mr-2" aria-label="First group">
                {firstArrow}
            </ButtonGroup>

            <ButtonGroup className="mr-2" aria-label="Second group">
                {pageArr}
            </ButtonGroup>

            <ButtonGroup aria-label="Third group">
                {secondArrow}
            </ButtonGroup>

        </ButtonToolbar>
    )
}

export default SearchPagesNumber