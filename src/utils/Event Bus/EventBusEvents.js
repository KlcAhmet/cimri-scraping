
import { EventBus, Const } from '../../map/UtilsMap'

export function Events(event, data) {
    if (event === Const.events.wrongpassword.type) EventBus.emit(Const.events.wrongpassword.type);
    else if (event === Const.events.allreadymail.type) EventBus.emit(Const.events.allreadymail.type);
    else if (event === Const.events.registerSuccess.type) EventBus.emit(Const.events.registerSuccess.type);
    else if (event === Const.events.loginSuccess.type) EventBus.emit(Const.events.loginSuccess.type);
    else if (event === Const.events.loginUnsuccess.type) EventBus.emit(Const.events.loginUnsuccess.type);
    else if (event === Const.events.loginFirst.type) EventBus.emit(Const.events.loginFirst.type);
    else if (event === Const.events.changeUserInfo.type) EventBus.emit(Const.events.changeUserInfo.type);
    else if (event === Const.events.changePassword.type) EventBus.emit(Const.events.changePassword.type);
    else if (event === Const.events.productInfo.type) EventBus.emit(Const.events.productInfo.type);
    else if (event === Const.events.userInfo.type) EventBus.emit(Const.events.userInfo.type);
    else if (event === Const.events.changeproducts.type) EventBus.emit(Const.events.changeproducts.type);
    else if (event === Const.events.exitAccount.type) EventBus.emit(Const.events.exitAccount.type);

    else if (event === Const.events.productLike.type) EventBus.emit(Const.events.productLike.type, { data: data });
    else if (event === Const.events.productUnlike.type) EventBus.emit(Const.events.productUnlike.type, { data: data });
    else if (event === Const.events.productAlarmLike.type) EventBus.emit(Const.events.productAlarmLike.type, { data: data });
    else if (event === Const.events.productAlarmUnlike.type) EventBus.emit(Const.events.productAlarmUnlike.type, { data: data });
    else if (event === Const.events.productAlarm.type) EventBus.emit(Const.events.productAlarm.type, { data: data });

    else if (event === Const.events.systemError.type) EventBus.emit(Const.events.systemError.type);
}