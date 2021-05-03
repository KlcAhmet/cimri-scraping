import { Container, Row, Tabs, Tab, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Button, FormGroup, InputGroup } from "@blueprintjs/core"
import { equalpasswords, Events, Const, EventBus } from '../map/UtilsMap'
import { postRegister, postLogin } from '../map/ServiceMap'


const Login = props => {

    return (
        <Container>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="giris" id="uncontrolled-tab-example">
                        <Tab eventKey="giris" title="Giriş Yap">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                postLogin(e.target[0].value, e.target[1].value)
                            }}>
                                <FormGroup className="login-form-group" label="Email" labelFor="text-email" labelInfo="(Zorunlu)">
                                    <InputGroup type="email" id="text-email" placeholder="deneme@deneme.com" autoComplete="username" defaultValue="deneme@deneme.com" required />
                                </FormGroup>
                                <FormGroup className="login-form-group" label="Şifre" labelFor="text-password" labelInfo="(Zorunlu)">
                                    <InputGroup type="password" id="text-password" placeholder="*******" autoComplete="current-password" defaultValue="123456" required />
                                </FormGroup>
                                <div className="login-form-btn">
                                    <Button className="login-form-btn-giris buttons-btn bp3-button bp3-intent-success bp3-large bp3-fill" type="submit">Giriş</Button>
                                </div>
                            </form>
                            <Link className="login-forgotpassword" to="/forgotpassword">Şifremi unuttum</Link>
                        </Tab>
                        <Tab eventKey="uyeol" title="Üye ol">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                if (equalpasswords(e.target[1].value, e.target[2].value)) {
                                    postRegister(e.target[0].value, e.target[1].value)
                                }
                                else {
                                    Events(Const.events.wrongpassword.type)
                                }

                            }}>
                                <FormGroup className="login-form-group" label="Email" labelFor="text-email-register" labelInfo="(Zorunlu)">
                                    <InputGroup type="email" id="text-email-register" placeholder="deneme@ornek.com" autoComplete="username" required />
                                </FormGroup>
                                <FormGroup className="login-form-group" label="Şifre" labelFor="text-password-register" labelInfo="(Zorunlu)">
                                    <InputGroup type="password" id="text-password-register" pattern=".{6,}" placeholder="*******" autoComplete="new-password" required />
                                    <div class="bp3-form-helper-text">Şifreniz en az 6 karakter uzunluğunda olmalı.</div>
                                </FormGroup>
                                <FormGroup className="login-form-group" label="Şifre Tekrar" labelFor="text-password-register2" labelInfo="(Zorunlu)">
                                    <InputGroup type="password" id="text-password-register2" pattern=".{6,}" placeholder="*******" autoComplete="new-password" required />
                                    <div class="bp3-form-helper-text">Şifreniz en az 6 karakter uzunluğunda olmalı.</div>
                                </FormGroup>
                                <div className="login-form-btn">
                                    <Button className="login-form-btn-kaydol buttons-btn bp3-button bp3-intent-primary bp3-large bp3-fill" type="submit">Kaydol</Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </Col>

            </Row>
        </Container>
    )
}


EventBus.addListener(Const.events.registerSuccess.type, () => {
    setTimeout(function () {
        window.location.reload()
    }, 2800);
})

export default Login