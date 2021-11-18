const a = {
    bb: [1,2,3,4,5],
    cc: [7,8,9,10,11],
};

function computedProperty(input) {
    const b = {
        [`${input}.${input}`]: [2],
    };

    console.log(b);
}

computedProperty("bb");
