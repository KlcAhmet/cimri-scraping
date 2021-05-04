import { Dropdown } from 'react-bootstrap'
import { Icon, IconSize, Intent } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons";
import { history } from '../map/UtilsMap'

const User = props => {

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <h6><Icon icon={IconNames.PERSON} iconSize={IconSize.LARGE} intent={Intent.PRIMARY} />ttest</h6>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => history.push('/login')} >Giriş
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => history.push('/uyelik/hesabim#hesap')}>Hesabım</Dropdown.Item>
                    <Dropdown.Item onClick={() => history.push('/uyelik/hesabim#favori')}>Favorilerim</Dropdown.Item>
                    <Dropdown.Item onClick={() => history.push('/uyelik/hesabim#fiyatalarm')}>Fiyat Alarmı</Dropdown.Item>
                    <Dropdown.Item onClick={() => history.push('/cikis')}>Çıkış</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default User