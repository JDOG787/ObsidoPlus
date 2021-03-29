const keywords = require("./keywords.json");
const stocks = require("./stocks.json");

// ===================================
// 1. check for keywords in article
// 2. [probably] create a score based on how many keywords there are
// 3. if score is above a certain mark then it passes
// 4. [later] figure out wether stock might increase or decrease
// 5. determine which stock might be influenced
// 6. [later] improve algo
// ===================================

module.exports = (text, t) => {
    let isRelevant = false;
    let score = 0;
    keywords.map(k => {
        if (text.includes(k)) {
            score !== 10 ? score += 1 : score = 10
        }
    })

    if (score >= 5) isRelevant = true;
    return {
        isRelevant,
        score: `${score}/10`
    }
}