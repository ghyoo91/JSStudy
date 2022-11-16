/* https://github.com/devkodeio/the-dom-challenge
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
function Star(el, count, callback) {
    // write logic to create star rating utility.
    for(let i = 0; i < count; i++) {
        const tmp = document.createElement("i");
        tmp.setAttribute("class", "fa fa-star fa-5x");
        tmp.setAttribute("id", i + 1);

        tmp.addEventListener("mouseover", (e) => {
            const target = e.target;

            for (let i = 0; i< count; i++) {
                if (i < e.target.id) {
                    document.getElementById(i + 1).setAttribute("class", "fa fa-star fa-5x");
                } else {
                    document.getElementById(i + 1).setAttribute("class", "fa fa-star-o fa-5x");
                }
            }
        });
        tmp.addEventListener("click", (e) => {
            const target = e.target;

            callback(target.id);
        });
        document.querySelector(el).appendChild(tmp);
    }
}
