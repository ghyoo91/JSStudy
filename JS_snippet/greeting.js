const greeting = message => name => `${message}, ${name}!`;
const koreanGreeting = greeting("안녕");
const englishGreeting = greeting("Hello");

console.log(koreanGreeting("세계")); // 안녕, 세계!
console.log(englishGreeting("world")); // Hello, world!
