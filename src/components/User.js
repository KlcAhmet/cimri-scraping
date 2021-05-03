import { Dropdown } from 'react-bootstrap'
import { Button, Icon, IconSize, Intent } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons";
import { history } from '../map/UtilsMap'
import { Link } from 'react-router-dom';

const User = props => {

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <h6><Icon icon={IconNames.PERSON} iconSize={IconSize.LARGE} intent={Intent.PRIMARY} />ttest</h6>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item >
                        <Button onClick={() => history.push('/login')} className="login-form-btn-giris buttons-btn bp3-button bp3-intent-success bp3-large bp3-fill" type="button">Giriş</Button>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item><Link className="login-forgotpassword" to="/uyelik/hesabim#hesap">Hesabım</Link></Dropdown.Item>
                    <Dropdown.Item><Link className="login-forgotpassword" to="/uyelik/hesabim#favori">Favorilerim</Link></Dropdown.Item>
                    <Dropdown.Item><Link className="login-forgotpassword" to="/uyelik/hesabim#fiyatalarm">Fiyat Alarmı</Link></Dropdown.Item>
                    <Dropdown.Item><Link className="login-forgotpassword" to="/cikis">Çıkış</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default User