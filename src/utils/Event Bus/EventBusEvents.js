
import { EventBus, Const } from '../../map/UtilsMap'

export function Events(event) {
    /* Search Not Found */
    if (event === Const.events.wrongpassword.type) EventBus.emit(Const.events.wrongpassword.type);

}