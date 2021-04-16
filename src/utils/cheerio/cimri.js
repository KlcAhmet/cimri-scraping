import cheerio from 'cheerio'

// eslint-disable-next-line
export default {
    async firsatlarCimri(data) {
        const $products = cheerio.load(data);
        const productsData = []
        for (let i = 0; i < $products('.jnSyqP', data).length; i++) {
            const dataObject = {
                productImageSrc: null,     // ürün resmi
                productLink: null,         // ürün linki
                productTitle: null,        // ürün başlığı
                productDiscount: null,     // ürün indirim %'desi
                productLastPrice: null,    // ürün eski fiyatı
                productNewPrice: null,     // ürün yeni fiyatı
                productCompanyLogo: null,
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
    }
}