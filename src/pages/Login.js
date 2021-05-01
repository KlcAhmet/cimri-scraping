import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";


const Login = props => {



    return (
        <Container>
            <Row>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <FormGroup className="login-form-group" label="Email" labelFor="text-email" labelInfo="(Zorunlu)">
                        <InputGroup type="email" id="text-email" placeholder="deneme@deneme.com" defaultValue="semihcetin34@gmail.com" />
                    </FormGroup>
                    <FormGroup className="login-form-group" label="Şifre" labelFor="text-password" labelInfo="(Zorunlu)">
                        <InputGroup type="password" id="text-password" placeholder="*******" defaultValue="1" />
                    </FormGroup>
                    <div className="login-form-btn">
                        <Button className="login-form-btn-giris buttons-btn bp3-button bp3-intent-success bp3-large bp3-fill" type="submit">Giriş</Button>
                        <Link to="/register"><Button className="login-form-btn-kaydol buttons-btn bp3-button bp3-intent-primary bp3-large bp3-fill" type="button">Kaydol</Button></Link>
                    </div>
                </form>
                <Link className="login-forgotpassword" to="/forgotpassword">Şifremi unuttum</Link>
            </Row>
        </Container>
    )
}

export default Login