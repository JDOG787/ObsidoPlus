const axios = require("axios")
const cheerio = require("cheerio")
const scrape = require("./scrapeArticle");

async function fetchHTML(url) {
  const { data } = await axios.get(url)
  return cheerio.load(data)
}

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
    list.map(l => {
        scrape(l.url)
    })
})()