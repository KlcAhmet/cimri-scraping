import cheerio from 'cheerio'

// eslint-disable-next-line
export default {
    firsatlarCimri(data) {
        const $asd = cheerio.load(data);
        console.log($asd('.jnSyqP', data));

    }
}