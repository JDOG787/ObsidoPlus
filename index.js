const puppeteer = require('puppeteer');
const keywords = require("./keywords.json");

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://www.foxnews.com/search-results/search?q=hello");
    //   await page.screenshot({ path: 'example.png' });
    const data = await page.evaluate(() => {
        const articles = document.querySelectorAll(".article");

        const urls = Array.from(articles).map(v => v.classList)

        return urls;
    })

    console.log(await data)

    await browser.close();
})();