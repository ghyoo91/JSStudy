async function forEachTest() {
    const a = [];
    const b = [];
    const d = [];

    // 2097150 is the 2^21 - 2
    for(let i=0;i<2097150;i++) {
        a.push(i);
        b.push(i);
    }

    const c = a.map((val, idx) => {
        if (val !== b[idx]) {
            d.push(val);
        }
    });

    await Promise.all(c);

    console.log(d);
}

forEachTest();
