(() => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = arr.length;

    function printArr (i) {
        setTimeout(() => {
            console.log(arr[i]);
        }, 1000);
    }

    for(let i=0;i<len;i++){
        //printArr(i);
        setTimeout(() => {
            console.log(arr[i]);
        }, 1000);
    }
})();
