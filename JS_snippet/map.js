const data = ["2345-34r", "2e345-211", "543-67i4", "346-598"];
const re = /[a-z A-Z]/;

let cleanedData = data.map((elem) => {
	return elem.replace(re, "");
});

console.log(cleanedData);
console.log(typeof(re));
