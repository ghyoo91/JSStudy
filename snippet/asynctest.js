const data = [
    {
        id: 0,
        max: 0,
        min: 0,
    },
    {
        id: 1,
        max: 1,
        min: 1,
    },
    {
        id: 2,
        max: 2,
        min: 2,
    },
    {
        id: 3,
        max: 3,
        min: 3,
    },
    {
        id: 4,
        max: 4,
        min: 4,
    }
];
function getId(data) {
    setTimeout(() => {
        return data.map(eachData => {
            return eachData.id;
        });
    }, 1000);
}

async function asyncTest() {
    const id = await getId(data);
    const result = [];

    console.log(id);

    id.map(async (i, j) => {
        result.push(`${i} -- ${j}`);
    });

    console.log(result);
}

asyncTest();
