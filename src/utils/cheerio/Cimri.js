import cheerio from 'cheerio'
import { Events, Const } from '../../map/UtilsMap'

// eslint-disable-next-line
export default {
    async firsatlarCimri(data) {
        const $products = cheerio.load(data);
        const productsData = []
        for (let i = 0; i < $products('.jnSyqP').length; i++) {
            const dataObject = {
                productImageSrc: null,     // ürün resmi
                productLink: null,         // ürün linki
                productTitle: null,        // ürün başlığı
                productDiscount: null,     // ürün indirim %'desi
                productLastPrice: null,    // ürün eski fiyatı
                productNewPrice: null,     // ürün yeni fiyatı
                productCompanyLogo: null,  // ürün logo
            }
            // eslint-disable-next-line
            if ($products('.jCiUCb > a >img')[i].attribs['data-src'] == 'undefined' || $products('.jCiUCb > a >img')[i].attribs['data-src'] == null) {
                dataObject.productImageSrc = $products('.jCiUCb > a >img')[i].attribs['src']
            }
            else {
                dataObject.productImageSrc = $products('.jCiUCb > a >img')[i].attribs['data-src']
            }
            dataObject.productLink = $products('.btxVWM')[i].attribs['href']
            dataObject.productTitle = $products('.ibdBUM')[i].attribs['title']
            dataObject.productDiscount = $products('.kaEwfN')[i].firstChild.data
            dataObject.productLastPrice = $products('.fFnjMz')[i].firstChild.data
            dataObject.productNewPrice = $products('.cRSgrJ')[i].firstChild.data
            dataObject.productCompanyLogo = ($products('.gQDKzE ')[i].attribs['src'])

            productsData.push(dataObject)
        }
        return productsData
    },
    async searchCimri(data, link) {
        const $products = cheerio.load(data);
        const productsData = []
        const productsCategory = []
        const productsPageCount = []
        if ($products('.iRuHoK', data).length === 0) {
            Events(Const.events.SearchNotFound.type)
            return false
        }
        else {
            for (let i = 0; i < $products('.gKwibs > li').length; i++) {
                const category = {
                    categoryLink: null,
                    categoryName: null,
                    categoryProductsCount: null,
                }
                category.categoryLink = $products('.jQFKcv')[i].attribs.href
                category.categoryName = $products('.gsTRet')[i].firstChild.data
                category.categoryProductsCount = $products('.cHSmlu')[i].children[2].data
                productsCategory.push(category)
            }
            for (let i = 0; i < $products('.ggOMjb').length; i++) {
                const products = {
                    productLink: null,
                    productImageSrc: null,
                    productTitle: null,
                    productTopOffers: [],
                }
                products.productLink = `https://www.cimri.com${$products('.ggOMjb > article > a')[i].attribs.href}`
                products.productImageSrc = $products('.iHtcZy')[i].firstChild.attribs['data-src']
                products.productTitle = $products('.ggOMjb > article > h3')[i].attribs.title
                $products('.top-offers')[i].children.forEach((item, index) => {
                    const offer = {
                        offerLink: null,
                        offerName: null,
                        offerPrice: null,
                    }
                    offer.offerLink = item.attribs.href
                    offer.offerName = item.firstChild.firstChild.data
                    offer.offerPrice = item.children[1].data
                    products.productTopOffers.push(offer)
                })
                productsData.push(products)
            }
        }

        for (let i = 0; i < $products('.kxoiYk > a').length; i++) {
            const pageNumber = {
                link: null,
                number: null,
            }
            //  console.dir($products('.kxoiYk > a')[i])
            if ($products('.kxoiYk > a')[i].attribs.href) {
                const linksub = $products('.kxoiYk > a')[i].attribs.href
                pageNumber.link = linksub.substring(1, linksub.length)
                // eslint-disable-next-line
                if ($products('.kxoiYk > a')[i].firstChild.data == 'undefined' || $products('.kxoiYk > a')[i].firstChild.data == null) { }
                else pageNumber.number = $products('.kxoiYk > a')[i].firstChild.data
            }
            else {
                pageNumber.link = null
            }
            productsPageCount.push(pageNumber)
        }

        let returnData = {}
        returnData = { productsCategory: productsCategory }
        returnData = { ...returnData, productsData: productsData }
        returnData = { ...returnData, productsPageCount: productsPageCount }
        returnData = { ...returnData, link: link.substring(22, link.length) }
        return returnData
    }
}