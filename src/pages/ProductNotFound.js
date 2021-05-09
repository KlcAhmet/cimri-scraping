import { Icon, IconSize, Intent } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons"
import { Row, Col } from 'react-bootstrap';

const ProductNotFound = () => {
    return (
        <Row  >
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} xs={11} sm={11} md={11} lg={11}>
                <h6 style={{ textAlign: 'center', fontSize: 40, color: 'red', margin: 50 }}>Ürün bulanamadı.</h6>
                <Icon icon={IconNames.ZOOM_OUT} iconSize={100} intent={Intent.PRIMARY} />
            </Col>
        </Row>
    )
}

export default ProductNotFound