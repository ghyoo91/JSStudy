export default function Test($app) {
    this.$target = document.createElement("div");
    this.$target.className = "form";

    $app.appendChild(this.$target);

    this.render = () => {
        this.$target.innerHTML = `
        <form class="mainform">
            <label>
                <input type="radio" name="single-input" value="">AAA</input>
                <input type="radio" name="single-input" value="">BBB</input>
                <input type="radio" name="single-input" value="">CCC</input>
                <input type="radio" name="single-input" value="">DDD</input>
                <input type="radio" name="single-input" value="">EEE</input>
            </label>
        </form>
        `;
    };
}
