const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://foxbusiness.com/markets')
  .then(response => {
    const $ = cheerio.load("<h1>hello</h1>");

    const links = $("h1");

    console.log(links.text())
  })
  .catch(e => {
    console.log(e);
  })