const fetchHTML = require("./fetchHTML");

module.exports = async (url) => {
    const $ = await fetchHTML(`https://foxbusiness.com${url}`);
    let content = "";

    $('.article-body > p').each((i, e) => {
        content += $(e).text()
    })

    return content;
}