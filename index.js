const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ 
        headless: false, 
    });
    const page = await browser.newPage();
    await page.goto("https://foxbusiness.com/markets");
    await page.waitForSelector("body")
    const articles = await page.evaluate(() => {
        const links = document.querySelectorAll(".title");
        const dateEle = document.querySelectorAll(".meta > .time");

        const times = Array.from(dateEle).map(t => t.textContent)

        const articles = Array.from(links).map((v, i) => (
            {
                url: v.childNodes["0"].href,
                time: times[i]
            }
        ))

        return articles;
    })

    await browser.close();

    

    await require('./scrapeArticle')(articles[0].url)
})();