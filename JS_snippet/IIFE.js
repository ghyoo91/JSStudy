var a = (function(){
    var b = 9;
    return {
        getB : function(){
            return b;
        },
        setB : function(value){
            b = value;
        }
    };
})();

console.log(a.getB());
a.setB(22);
console.log(a.getB());
