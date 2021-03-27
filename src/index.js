const scrape = require("./scrapeArticle");
const fetchHTML = require("./fetchHTML");
const analyze = require("./textAnalysis");

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
        const text = await scrape(l.url)
        console.log(`Article from: ${l.time}: ${analyze(text, l.time)}`)
    })
})()