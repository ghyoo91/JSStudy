async function forEachTest() {
    const a = [];

    // 2097150 is the 2^21 - 2
    for(let i=0;i<20;i++) {
        a.push(i);
    }

    const c = a.map((val, idx) => {
        return new Promise((resolve, reject) => {
            if (idx === 10) {
                reject();

                return 3;
            } else {
                resolve();

                return 1;
            }
        });
    });

    const b = await Promise.all(c).catch(err => console.log(`ddd : ${err}`));

    console.log(b);
}

forEachTest();
