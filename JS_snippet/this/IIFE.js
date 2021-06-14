const a = (function(){
    const b = ["A", "B", "C", "D"];

    return {
        getB1 : function(i){
            console.log(this === typeof window);
            console.log(b);
            console.log(i);
            console.log(this);
            return this.b[i];
        },
        // same as
        // getB2: x => {
        getB2(i) {
            console.log(this === typeof window);
            console.log(b);
            console.log(i);
            // return this.b[i];
        },
        getThis: function() {
            return this;
        },
        setB1 : function(i, value){
            this.b[i] = value;
        }
    };
})();

const b = ["ㄱ", "ㄴ", "ㄷ", "ㄹ"];

console.log(a.getB1(2)); // 9
// console.log(a.getB2(2));
// a.setB1(2, 22);
//console.log(a.getB1(2));
//console.log(a.getB2(2)); // 22

