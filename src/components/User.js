import { Dropdown } from 'react-bootstrap'
import { Button, Icon, IconSize, Intent } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons";
import { history } from '../map/UtilsMap'

const User = props => {

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div>
                        <h6><Icon icon={IconNames.PERSON} iconSize={IconSize.LARGE} intent={Intent.PRIMARY} />ttest</h6>
                    </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item >
                        <Button onClick={() => history.push('/login')} className="login-form-btn-giris buttons-btn bp3-button bp3-intent-success bp3-large bp3-fill" type="button">Giriş</Button>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="uyelik/hesabım">Hesabım</Dropdown.Item>
                    <Dropdown.Item href="uyelik/favorilerim">Favorilerim</Dropdown.Item>
                    <Dropdown.Item href="uyelik/fiyatalarm">Fiyat Alarmı</Dropdown.Item>
                    <Dropdown.Item href="/cikis">Çıkış</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default User