const a = {
    "mo": 1,
    "mu": "thereisnocowlevel",
    "ot": function() {
        this.mo++;
    },
    "pr": function() {
        console.log(this.mo);
    }
};

const b = 108;
require("./module.js")(a, b);
console.log("ccccc");
a.ot();
console.log(a.mo);
a.pr();
