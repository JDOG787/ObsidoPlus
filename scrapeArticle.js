const puppeteer = require('puppeteer');

module.exports = async (url) => {
    const browser = await puppeteer.launch({ 
        headless: false, 
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("body")
    const text = await page.evaluate(() => {
        const paragraphs = document.querySelector(".article-body");
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(paragraphs.innerHTML, 'text/html');
        let text = "";
        
        Array.from(htmlDoc.getElementsByTagName("p")).map(p => text += p.textContent)

        return text;
    })
    return text;
}