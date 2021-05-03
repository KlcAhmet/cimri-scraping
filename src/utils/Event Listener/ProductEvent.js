import { Const, EventBus } from '../../map/UtilsMap'
import store, { productFavoriteAdd, productFavoriteRemove } from "../../store/index"

function ProductEvent() {
    EventBus.addListener(Const.events.productLike.type, ({ data }) => {
        if (store.getState().User.id) {
            store.dispatch(productFavoriteAdd(data))
        }
        else {
            // event gelecek değişecek
        }

    })

    EventBus.addListener(Const.events.productUnlike.type, ({ data }) => {
        if (store.getState().User.id) {
            const productArr = []
            for (let i = 0; i < store.getState().UserProducts.favorite.length; i++) {
                if (data.productTitle === store.getState().UserProducts.favorite[i].productTitle) { }
                else {
                    productArr.push(store.getState().UserProducts.favorite[i])
                }
            }
            store.dispatch(productFavoriteRemove(productArr))
        }
        else {
            // event gelecek değişecek
        }
    })
}

export { ProductEvent }