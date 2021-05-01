import { user } from '../map/ComponentMap'
import { Dropdown } from 'react-bootstrap';

const User = props => {

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <img src={user} alt="" />
                    <h6>User Name</h6>
                </Dropdown.Toggle>

                <Dropdown.Menu>
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