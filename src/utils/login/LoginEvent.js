import { Const, EventBus } from '../../map/UtilsMap'
import { postGetUserInfo } from '../../map/ServiceMap'
import store from '../../store/index'

function LoginEvent() {
    EventBus.addListener(Const.events.loginSuccess.type, () => {
        const userID = store.getState().User.id
        postGetUserInfo(userID)
    })

    EventBus.addListener(Const.events.loginFirst.type, () => {
        const userID = store.getState().User.id
        //
    })
}

export { LoginEvent }