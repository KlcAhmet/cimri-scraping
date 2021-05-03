import { Const, EventBus } from '../../map/UtilsMap'
import { postGetUserInfo, postAddUserInfo, postAddUserProducts, postGetUserProduct } from '../../map/ServiceMap'
import store from '../../store/index'

function LoginEvent() {
    EventBus.addListener(Const.events.loginSuccess.type, () => {
        const userID = store.getState().User.id
        postGetUserInfo(userID)
        postGetUserProduct(userID)
    })

    EventBus.addListener(Const.events.loginFirst.type, () => {
        const userID = store.getState().User.id
        postAddUserInfo(userID)
        postAddUserProducts(userID)
    })
}

export { LoginEvent }