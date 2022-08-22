// 1. 일반 함수 내부에서의 this는 글로벌 객체
console.log(this);

a = 30;

console.log(this);

function x() {
    return this;
}
console.log(x());
console.log("--------------------------------------------------------");
// 2. 메서드 내부에서의 this는 메서드를 호출한 객체
const b = {
    first: "메서드",
    second: "재미없어",
    sayit: function(x) {
        console.log(this);
        console.log(x);
    }
}
b.sayit("x를 찾아라");
// 2-a. 메서드 shorthand: this
const c = {
    first: "메소드",
    sec: "재미있어",
    sayhello(x) {
        console.log(this);
        console.log(x);
    }
}
c.sayhello("x는 무엇인가");
// 2-b. 메서드의 내부함수
const c1 = {
    fir : "쏘드!",
    sec: "꺅!",
    say(x) {
        const pp = function() {
            return this;
        }
        const qq = () => {
            return this;
        }
        console.log(pp());
        console.log(qq());
        console.log(x);
    }
}
c1.say("끼야아악");
// 2-c. 메소드로 화살표함수
const c2 = {
    fir: "ㅇㅇ",
    sec: "dd",
    say: (x) => {
        console.log(this);
    }
}
c2.say();
console.log("--------------------------------------------------------");
// 3. 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스
class d {
    constructor(val) {
        this.fir = val;
        this.sec = "재미재미";
        this.sayd = function(x) {
            console.log(this);
            console.log(x);
        };
    }

    get getFir() {
        return this.fir;
    }
    set setFir(val) {
        this.fir = val;
    }
}

const d_instance = new d(3);
const d_instance2 = new d(4);
d_instance.sayd(5);
d_instance2.sayd(6);
console.log("--------------------------------------------------------");

