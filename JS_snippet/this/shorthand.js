function hi() {
    console.log(this);
}

const a = {
    name: "HRE",
    say: function() {
        console.log(this);
    }
};

const b = {
    name: "ㅂㅂㅂ",
    say() {
        console.log(this);
    }
};

const c = {
    name: "qweert",
    say: hi
};

const d = {
    name: "arrow",
    say : () => {
        console.log(this);
    }
}

a.say();
b.say();
c.say();
hi();
d.say();
