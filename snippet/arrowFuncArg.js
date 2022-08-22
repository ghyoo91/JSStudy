// Arror functions don't have an arguments binding
const myFunc = {
    show() {
        console.log(arguments);
    },
    arrowShow : () => {
        // console.log(arguments);
    }
};

myFunc.show(1,2,3,4);
myFunc.arrowShow(1,2,3,4);
