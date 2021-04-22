import Post from '../service/Post'

// eslint-disable-next-line
export default {
    async searchGoogle(link) {
        const linkSplit = link.split(' ')
        let postLink = ["/search?q="]
        linkSplit.forEach(item => {
            if (item !== "") {
                // eslint-disable-next-line
                if (postLink[1] === 'undefined' || postLink[1] == null) {
                    postLink.push(item)
                }
                else postLink.push(`+${item}`)
            }
        })
        postLink.push('&hl=tr&biw=935&bih=799&tbm=shop&ei=')
        Post.postGoogleSearcher(postLink.join(''))
    }
}