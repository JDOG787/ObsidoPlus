const axios = require("axios")
const cheerio = require("cheerio")

module.exports = async (url) => {
    async function fetchHTML(url) {
        const { data } = await axios.get(url)
        return cheerio.load(data)
    }

    const $ = await fetchHTML(`https://foxbusiness.com${url}`);
    let content = "";

    $('.article-body > p').each((i, e) => {
        content += $(e).text()
    })

    return content;
}