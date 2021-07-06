const fs = require("fs");

for (let i=0;i<300;i++) {
    fs.writeFile(`./No.${i}.txt`, `${i}th file`, "utf8", () => {});
}
