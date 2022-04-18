interface Human {
    name: string;
    age: number;
    gender: string;
}

class SuperHuman {
    public name: string;
    public age: number;
    public gender: string;

    // constructor
}

const person = {
    name: "holy shit",
    gender: "male",
    age: 22
};
const name = "honggil_dong";
const age = 24;
const gender = "male";

const sayHi = (person: Human):void => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};

sayHi(person);

export {};
