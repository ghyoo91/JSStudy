// CommonJS
const getData = require("./getData.js");
// ES6
// import getData from "./getData.js";

function getId(data) {
    setTimeout(() => {
        return data.map(eachData => {
            return eachData.id;
        });
    }, 1000);
}

async function asyncTest() {
    const stream = await getData();
    const result = [];

    stream.map((val, idx) => {
        result.push(`${val.min} -- ${idx}`);
    });

    console.log("this is result");
    console.log(result);
}

asyncTest();
