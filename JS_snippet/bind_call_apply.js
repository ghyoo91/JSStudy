var a = {
    pi: 3,
    area :  function(r){
        return this.pi*r*r;
    }
};

var b = a.area.bind({pi:3.141});

console.log(a.area(2));
//console.log(a.area.call({pi:3.14}, 2));
//console.log(a.area.apply({pi:3.14}, [2]));
console.log(b(2));
