function solution(word, pages) {
    let result = 0;
    let parsed = [];
    let score = [];

    pages.forEach((item) => {
        let match = item.match(new RegExp(word, "gi"));
        let extlinkmatch = item.match(new RegExp("a href=", "gi"));
        let extlinkarr = item.match(new RegExp("a href=\"https://", "gi"));
        let extlinkfinarr = [];

        extlinkarr.forEach((item) => {
            extlinkfinarr.push(item.substring(item.indexOf("https://")+8));
        });

        parsed.push({
            "url": item.substring(item.indexOf("content=\"https://")+17, item.indexOf("</head>")-4),
            "basicScore": (match) ? match.length : 0,
            "extlinkcnt" : extlinkmatch ? extlinkmatch.length : 0,
            "extlink" : extlinkfinarr
        });
    });

    for(let i=0;i<pages.length;i++){
        score[i] = parsed[i].basicScore;
        parsed[i].extlinkScore = parsed[i].basicScore/parsed[i].extlinkcnt;
    }

    console.log(parsed);

    for(let i=0;i<pages.length;i++){
        parsed[i].extlink.forEach((item) => {
            for(let j=0;j<pages.length;j++){
                if(item === parsed[j].url){
                    score[j] += parsed[i].extlinkScore;
                }
            }

        });
    }

    return score.indexOf(Math.max(...score));
}

(function(){
    let pages = ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://careers.kakao.com/interview/list\"/>\n</head>  \n<body>\n<a href=\"https://programmers.co.kr/learn/courses/4673\"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>",
        "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://www.kakaocorp.com\"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href=\"https://hashcode.co.kr/tos\"></a>\n\n\t^\n</body>\n</html>"];
    let word = "Muzi";
    // result
    // 0

    console.log(solution(word, pages));
})();
