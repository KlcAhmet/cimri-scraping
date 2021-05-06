import { Const, EventBus, history } from '../../map/UtilsMap'
import store from '../../store/index'
import { saveState } from '../../localStorage'

function LocalStorageEvent() {
    EventBus.addListener(Const.events.loginSuccess.type, () => {
        const user = { User: store.getState().User }
        saveState(user)
    })
    EventBus.addListener(Const.events.productInfo.type, () => {
        const product = { UserProducts: store.getState().UserProducts }
        saveState(product)
    })
    EventBus.addListener(Const.events.changeproducts.type, () => {
        const product = { UserProducts: store.getState().UserProducts }
        saveState(product)
    })
    EventBus.addListener(Const.events.userInfo.type, () => {
        const info = { UserInfo: store.getState().UserInfo }
        saveState(info)
    })
    EventBus.addListener(Const.events.changeUserInfo.type, () => {
        const info = { UserInfo: store.getState().UserInfo }
        saveState(info)
    })
    EventBus.addListener(Const.events.changePassword.type, () => {
        localStorage.clear()
        setTimeout(function () {
            history.push('/')
            window.location.reload();
        }, 1800);
    })
    EventBus.addListener(Const.events.exitAccount.type, () => {
        localStorage.clear()
        setTimeout(function () {
            history.push('/')
            window.location.reload();
        }, 1800);
    })
}

export { LocalStorageEvent }