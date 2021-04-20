
import { EventBus, Const } from '../../map/UtilsMap'

export function Events(event) {
    /* Search Not Found */
    if (event === Const.events.SearchNotFound.type) EventBus.emit(Const.events.SearchNotFound.type, Const.events.SearchNotFound.message);

}