import { Row, Col, Image } from 'react-bootstrap'
import { github, google, instagram, linkedin } from '../map/ComponentMap'

const Footer = props => {

    return (
        <Row className="footer d-flex align-items-center">
            <Col xs={12} sm={12} md={4} lg={4}>
                <p className="footer-title">Designed and built by Ahmet Batuhan Kılıç</p>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
                <p className="footer-desc">Bu web sitesinin kaynak kodlarına <a href="https://github.com/KlcAhmet/cimri-scraping" target="_blank" rel="noreferrer">buradan</a> ulaşabilirsiniz.</p>
            </Col>
            <Col className="footer-social" xs={12} sm={12} md={4} lg={4}>
                <a className="footer-social-github" href="https://github.com/KlcAhmet" target="_blank" rel="noreferrer"><Image src={github} fluid /></a>
                <a className="footer-social-linkedin" href="https://www.linkedin.com/in/ahmet-batuhan-kilic/" target="_blank" rel="noreferrer"><Image src={linkedin} fluid /></a>
                <a className="footer-social-google" href="https://www.google.com/maps/place/Ahmet+Batuhan+Kılıç/@36.5692907,35.5493182,5z/data=!4m5!3m4!1s0x0:0xd8e9952d1a6a1b73!8m2!3d41.6771297!4d26.5557145" target="_blank" rel="noreferrer"><Image src={google} fluid /></a>
                <a className="footer-social-instagram" href="https://www.instagram.com/ahmetbatukilic/" target="_blank" rel="noreferrer"><Image src={instagram} fluid /></a>
            </Col>
        </Row>
    )
}

export default Footer