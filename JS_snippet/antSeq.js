//Came from
//https://engineering.huiseoul.com/%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D-%EC%A2%80-%EB%8D%94-%EA%B9%8A%EC%9D%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-5bd16027e1e0

const ant = n => {
    const lookAndSay = number =>
        number.match(/(\d)\1*/g).reduce((acc, e) => acc + `${e.length}${e[0]}`, "");

    const lookAndSayIter = (i, number) => {
        if (i == n) return;

        console.log(number);

        lookAndSayIter(i + 1, lookAndSay(number));
    };

    lookAndSayIter(0, "1");
};
