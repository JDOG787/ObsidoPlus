const puppeteer = require('puppeteer');

module.exports = async (url) => {
    const browser = await puppeteer.launch({ 
        headless: false, 
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("p")
    const text = await page.evaluate(() => {
        const paragraphs = document.getElementsByTagName("p");

        return "paragraphs";
        
        // const textArr = Array.from(paragraphs).map(p => p.textContent)

        // let text = "";
        // textArr.map(t => {
        //     text += t
        // })

        // return text;
    })
    console.log(text)
}