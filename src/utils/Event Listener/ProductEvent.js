import { Const, EventBus } from '../../map/UtilsMap'
import store, { productFavoriteAdd, productFavoriteRemove, productAlarmAdd, productAlarmRemove } from "../../store/index"
import { UserProductsModel } from '../../map/ModelMap'
import { postUserProductUpdate } from '../../map/ServiceMap'

function ProductEvent() {
    EventBus.addListener(Const.events.productLike.type, ({ data }) => {
        if (store.getState().User.id) {
            store.dispatch(productFavoriteAdd(data))
            const body = {
                favorite: store.getState().UserProducts.favorite,
                priceAlarm: store.getState().UserProducts.priceAlarm,
            }
            postUserProductUpdate(body)
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
            const body = {
                favorite: store.getState().UserProducts.favorite,
                priceAlarm: store.getState().UserProducts.priceAlarm,
            }
            postUserProductUpdate(body)
        }
        else {
            // event gelecek değişecek
        }
    })

    EventBus.addListener(Const.events.productAlarmLike.type, ({ data }) => {
        if (store.getState().User.id) {
            UserProductsModel.priceAlarm = {
                productLink: data.productLink,
                productImageSrc: data.productImageSrc,
                productTitle: data.productTitle,
                productPrice: data.productTopOffers[0].offerPrice,
            }
            store.dispatch(productAlarmAdd(UserProductsModel.priceAlarm))
            const body = {
                favorite: store.getState().UserProducts.favorite,
                priceAlarm: store.getState().UserProducts.priceAlarm,
            }
            postUserProductUpdate(body)
        }
        else {
            // event gelecek değişecek
        }

    })

    EventBus.addListener(Const.events.productAlarmUnlike.type, ({ data }) => {
        if (store.getState().User.id) {
            const productArr = []
            for (let i = 0; i < store.getState().UserProducts.priceAlarm.length; i++) {
                if (data.productTitle === store.getState().UserProducts.priceAlarm[i].productTitle) { }
                else {
                    productArr.push(store.getState().UserProducts.priceAlarm[i])
                }
            }
            store.dispatch(productAlarmRemove(productArr))
            const body = {
                favorite: store.getState().UserProducts.favorite,
                priceAlarm: store.getState().UserProducts.priceAlarm,
            }
            postUserProductUpdate(body)
        }
        else {
            // event gelecek değişecek
        }

    })
}

export { ProductEvent }