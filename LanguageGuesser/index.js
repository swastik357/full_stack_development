const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
    console.log("SORRY! COULDN'T FIGURE IT OUT. TRY AGAIN WITH ANOTHER SAMPLE TEXT!".red);
}
else {
    const language = langs.where("3", langCode);
    if (language) {
        console.log(`OUR BEST GUESS IS LANGUAGE: ${language.name.toUpperCase()}`.green);
    }
    else {
        console.log(`SORRY! COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`.red);
    }

}