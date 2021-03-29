const scrape = require("./scrapeArticle");
const fetchHTML = require("./fetchHTML");
const analyze = require("./textAnalysis");
const schedule = require("node-schedule");

async function checkNewArticles() {
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
    });
    list.map(async l => {
        const text = await scrape(l.url);
        console.log(`Article from: ${l.url}: ${analyze(text, l.time).isRelevant}`);
    });
}

// run checkNewArticles every few minutes

const job = schedule.scheduleJob('42 * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
});