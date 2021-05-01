
import { EventBus, Const } from '../../map/UtilsMap'

export function Events(event) {
    /* Search Not Found */
    if (event === Const.events.wrongpassword.type) EventBus.emit(Const.events.wrongpassword.type);
    else if (event === Const.events.allreadymail.type) EventBus.emit(Const.events.allreadymail.type);
    else if (event === Const.events.registerSuccess.type) EventBus.emit(Const.events.registerSuccess.type);
    else if (event === Const.events.loginSuccess.type) EventBus.emit(Const.events.loginSuccess.type);
    else if (event === Const.events.loginUnsuccess.type) EventBus.emit(Const.events.loginUnsuccess.type);
}