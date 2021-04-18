import Post from '../service/Post'

// eslint-disable-next-line
export default {
    async searchCimri(link) {
        const linkSplit = link.split(' ')
        let postLink = ["arama?q="]
        linkSplit.forEach(item => {
            if (item !== "") {
                // eslint-disable-next-line
                if (postLink[1] === 'undefined' || postLink[1] == null) {
                    postLink.push(item)
                }
                else postLink.push(`%20${item}`)
            }
        })
        Post.postCimriSearcher(postLink.join(''))
    }
}