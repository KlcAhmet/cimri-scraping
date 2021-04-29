function searchCimri(link) {
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
    const returnlink = postLink.join('')
    return returnlink.toString()
}

module.exports = { searchCimri }