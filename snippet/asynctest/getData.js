// CommonJS
const fs = require("fs").promises;
// ES6
// import fs from "fs";

// ES6
// export default function getData() {
async function getData() {
    const stream = fs.readFile("./data.json");

    console.log("this is getData");
    console.log(stream);

    return stream;
}

module.exports = getData;
