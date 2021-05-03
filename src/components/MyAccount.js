import { Button, FormGroup, InputGroup } from "@blueprintjs/core"
import { Row, Col, Form } from 'react-bootstrap'
import { UserInfoModel } from '../map/ModelMap'
import { postUserInfoUpdate } from '../map/ServiceMap'
import { useSelector } from "react-redux"
import store, { UserInfo } from "../store/index"
import { useEffect, useState } from "react"
import { City } from "../map/UtilsMap"

const MyAccount = () => {
    const userInfo = useSelector(state => state.UserInfo)
    const userMail = useSelector(state => state.User.userMail)
    const userBirth = useSelector(state => state.UserInfo.birth)
    // eslint-disable-next-line
    const [leftForm, setLeftForm] = useState(userInfo)
    const [cityItem, setCityItem] = useState([])

    useEffect(() => {
        const cityArr = []
        City.forEach((item, index) => {
            if (leftForm.city === item) {
                cityArr.unshift(<option key={index}>{item}</option>)
            }
            else {
                cityArr.push(<option key={index}>{item}</option>)
            }
        })
        setCityItem(
            <Form.Control as="select">
                {cityArr}
            </Form.Control>
        )
        document.getElementById(userInfo.gender).checked = true
    }, [leftForm])

    return (
        <Row>
            <Col xs={6}>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    let gender = ""
                    for (let i = 4; i < 7; i++) {
                        if (e.target[i].checked) {
                            gender = e.target[i].id
                        }
                    }
                    const model = UserInfoModel.UserInfoUpdate = {
                        name: e.target[0].value,
                        surname: e.target[1].value,
                        gender: gender,
                        birth: e.target[7].value,
                        city: e.target[8].value,
                        address: e.target[9].value
                    }
                    postUserInfoUpdate(model)
                    model['id'] = userInfo.id
                    model['userID'] = userInfo.userID
                    store.dispatch(UserInfo(model))
                }}>
                    <FormGroup className="login-form-group" label="Adınız:" labelFor="text-name">
                        <InputGroup type="text" id="text-name" defaultValue={((leftForm.name === 'null') ? "" : leftForm.name)} required />
                    </FormGroup>
                    <FormGroup className="login-form-group" label="Soyadınız:" labelFor="text-surname">
                        <InputGroup type="text" id="text-surname" defaultValue={((leftForm.name === 'null') ? "" : leftForm.surname)} required />
                    </FormGroup>
                    <FormGroup className="login-form-group" label="E-posta:" labelFor="text-mail">
                        <InputGroup type="mail" id="text-mail" defaultValue={userMail} disabled />
                    </FormGroup>
                    <fieldset>
                        <FormGroup className="login-form-group" label="Cinsiyet:" labelFor="genderRadios">
                            <Form.Check inline label="Erkek" type='radio' id='Erkek' name="genderRadios" />
                            <Form.Check inline label="Kadın" type='radio' id='Kadın' name="genderRadios" />
                            <Form.Check inline label="Belirtmek istemiyorum" type='radio' id='None' name="genderRadios" />
                        </FormGroup>
                    </fieldset>
                    <FormGroup className="login-form-group" label="Doğum Tarihi:" labelFor="date-birth">
                        <Form.Control type="date" name='date_of_birth' id='date-birth' defaultValue={((leftForm.name === 'null') ? "dd-MM-yyyy" : userBirth)} required />
                    </FormGroup>
                    <Form.Group controlId="citySelect">
                        <Form.Label>İl:</Form.Label>
                        {cityItem}
                    </Form.Group>
                    <Form.Group controlId="addressArea">
                        <Form.Label>Adres:</Form.Label>
                        <Form.Control as="textarea" rows={2} defaultValue={((leftForm.name === 'null') ? "" : leftForm.address)} required />
                    </Form.Group>
                    <div className="login-form-btn">
                        <Button className="login-form-btn-giris buttons-btn bp3-button bp3-intent-success bp3-large bp3-fill" type="submit">Kayıt et</Button>
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