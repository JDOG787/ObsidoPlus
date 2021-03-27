const scrape = require("./scrapeArticle");
const fetchHTML = require("./fetchHTML");

(async () => {
    const $ = await fetchHTML("https://foxbusiness.com/markets");
    let list = [];
    $('.info-header').each((i, e) => {
        const time = $(e).find(".meta > .time").text();
        const link = $(e).find(".title > a").attr("href");
        if (!link.startsWith("https://")) {
            list.push({
                url: link,
                time
            });
        }   
    })
    list.map(async l => {
        console.log(await scrape(l.url))
    })
})()