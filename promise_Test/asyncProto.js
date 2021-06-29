(async function() {
    const util = require("util");

    function Pool(options) {
        this.config = options.config;
        console.log("111");
        console.log(this === global);
    }

    Pool.prototype.query = function() {
        const query = 30;

        console.log("222");
        console.log(this === global);
        console.log(this);
        // this.asdf();

        return query;
    };

    Pool.prototype.asdf = function() {
        console.log("333");
        console.log(this === global);
    };

    const pooldata = new Pool({
        "config": {
            "txt": "there is no cow level",
        },
    });

    async function w1(pool) {
        console.log("-------11---------");
        pool.query = util.promisify(pool.query);

        await pool.query();
    }

    async function w2(pool) {
        console.log("---------22-------");
        const Apool = util.promisify(pool.query).bind(pool);

        await Apool();
    }

    try {
        await w2(pooldata);
        // await w1(pooldata);
    } catch (error) {
        console.log(error);
    }
})();
