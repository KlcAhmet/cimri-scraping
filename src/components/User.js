import { Dropdown } from 'react-bootstrap'
import { Icon, IconSize, Intent } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons";
import { history, Events, Const } from '../map/UtilsMap'
import { useSelector } from "react-redux"
import { useEffect, useState } from 'react';

const User = props => {
    const userName = useSelector(state => state.UserInfo.name)
    const userID = useSelector(state => state.User.id)
    const [id, setId] = useState('Hesabım')
    const [loginButtonDisplay, setDisplay] = useState('block')

    useEffect(() => {
        if (userName && userName !== 'null') {
            setId(userName)
        }
        if (userID) {
            setDisplay('none')
        }
        // eslint-disable-next-line
    }, [userName])

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span><Icon icon={IconNames.PERSON} iconSize={IconSize.LARGE} intent={Intent.PRIMARY} /> {id}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item style={{ display: loginButtonDisplay }} onClick={() => history.push('/login')} >Giriş</Dropdown.Item>
                <Dropdown.Divider style={{ display: loginButtonDisplay }} />
                <Dropdown.Item onClick={() => history.push('/uyelik/hesabim#hesap')}>Hesabım</Dropdown.Item>
                <Dropdown.Item onClick={() => history.push('/uyelik/hesabim#favori')}>Favorilerim</Dropdown.Item>
                <Dropdown.Item onClick={() => history.push('/uyelik/hesabim#fiyatalarm')}>Fiyat Alarmı</Dropdown.Item>
                <Dropdown.Item style={{ display: ((loginButtonDisplay !== 'none' ? 'none' : 'block')) }} onClick={() => { Events(Const.events.exitAccount.type) }}>Çıkış</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default User