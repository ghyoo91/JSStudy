// https://velog.io/@jay/implement-promise-all

Promise.myall = (arr) => {
    return new Promise((resolve, reject) => {
        let cnt = arr.length;
        const result = [];

        arr.forEach((ps, index) => {
            Promise.resolve(ps)
                .then((value) => {
                    result[index] = value;
                    --cnt;
                    !cnt && resolve(result);
                })
                .catch(reject);
        });
    });
}

Promise.myRace = (arr) => {
    return new Promise((resolve, reject) => {
        let cnt = false;

        arr.forEach((ps, index) => {
            Promise.resolve(ps)
                .then((value) => {
                    !cnt && resolve(value);
                })
                .catch(reject);
        });
    });
}

Promise.mySettled = (arr) => {
    return new Promise((resolveFunc, reject) => {
        let cnt = arr.length;
        const result = [];

        arr.forEach((ps, index) => {
            Promise.resolve(ps)
                .then((value) => {
                    result[index] = {status: "fulfilled", value};
                    --cnt;
                })
                .catch(e => {
                    result[index] = {status: "rejected", reason: e};
                    --cnt;
                })
                .finally(() => !cnt && resolveFunc(result));
        });
    });
}

async function executePromise() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P1 Resolve!! 3000");
        }, 3000);
    }).catch("p1 rejected");

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P2 Resolve too! 2000");
        }, 2000);
    }).catch("p2 rejected");

    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("P3 Rejected... 1000");
        }, 1000);
    }).catch("p3 rejected");

    try {
        //const result = await Promise.myall([p1, p2, p3]);
        //const result = await Promise.myRace([p1, p2, p3]);
        const result = await Promise.mySettled([p1, p2, p3]);

        console.log(result);
    } catch (e) {}
}

executePromise();
