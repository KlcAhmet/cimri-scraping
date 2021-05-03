import { Const, EventBus } from '../../map/UtilsMap'
import store, { productFavoriteUpdate } from "../../store/index"

function ProductEvent() {
    EventBus.addListener(Const.events.productLike.type, ({ data }) => {
        if (store.getState().User.id) {
            store.dispatch(productFavoriteUpdate(data))
        }
        else {
            // event gelecek değişecek
        }

    })

    EventBus.addListener(Const.events.productUnlike.type, ({ data }) => {
        if (store.getState().User.id) {

        }
        else {
            // event gelecek değişecek
        }
    })
}

export { ProductEvent }