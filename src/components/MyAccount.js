import { Button, FormGroup, InputGroup } from "@blueprintjs/core"
import { Row, Col, Form } from 'react-bootstrap'

const MyAccount = () => {

    return (
        <Row>
            <Col xs={6}>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    console.dir(e.target[0].value);
                    console.dir(e.target[1].value);
                    for (let i = 4; i < 7; i++) {
                        if (e.target[i].checked) {
                            console.dir(e.target[i].id);
                        }
                    }
                    console.dir(e.target[7].value);
                    console.dir(e.target[8].value);
                    console.dir(e.target[9].value);
                }}>
                    <FormGroup className="login-form-group" label="Adınız:" labelFor="text-name">
                        <InputGroup type="text" id="text-name" defaultValue="Ahmet Batuhan" required />
                    </FormGroup>
                    <FormGroup className="login-form-group" label="Soyadınız:" labelFor="text-surname">
                        <InputGroup type="text" id="text-surname" defaultValue="Kılıç" required />
                    </FormGroup>
                    <FormGroup className="login-form-group" label="E-posta:" labelFor="text-mail">
                        <InputGroup type="mail" id="text-mail" defaultValue="ahmetbatukilic@gmail.com" disabled />
                    </FormGroup>
                    <fieldset>
                        <FormGroup className="login-form-group" label="Cinsiyet:" labelFor="text-gender">
                            <Form.Check inline label="Erkek" type='radio' id='Erkek' name="genderRadios" />
                            <Form.Check inline label="Kadın" type='radio' id='Kadın' name="genderRadios" />
                            <Form.Check inline defaultChecked label="Belirtmek istemiyorum" type='radio' id='None' name="genderRadios" />
                        </FormGroup>

                    </fieldset>
                    <FormGroup className="login-form-group" label="Doğum Tarihi:" labelFor="date-birth">
                        <Form.Control type="date" name='date_of_birth' id='date-birth' />
                    </FormGroup>
                    <Form.Group controlId="citySelect">
                        <Form.Label>İl:</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="addressArea">
                        <Form.Label>Adres:</Form.Label>
                        <Form.Control as="textarea" rows={2} />
                    </Form.Group>
                    <div className="login-form-btn">
                        <Button className="login-form-btn-giris buttons-btn bp3-button bp3-intent-success bp3-large bp3-fill" type="submit">Giriş</Button>
                    </div>
                </Form>
            </Col>
            <Col xs={6}>
                {/*        <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <FormGroup className="login-form-group" label="Email" labelFor="text-email" labelInfo="(Zorunlu)">
                        <InputGroup type="email" id="text-email" placeholder="deneme@deneme.com" defaultValue="deneme@deneme.com" required />
                    </FormGroup>
                    <FormGroup className="login-form-group" label="Şifre" labelFor="text-password" labelInfo="(Zorunlu)">
                        <InputGroup type="password" id="text-password" placeholder="*******" defaultValue="123456" required />
                    </FormGroup>
                    <div className="login-form-btn">
                        <Button className="login-form-btn-giris buttons-btn bp3-button bp3-intent-success bp3-large bp3-fill" type="submit">Giriş</Button>
                    </div>
                </form> */}
            </Col>
        </Row>
    )
}

export default MyAccount