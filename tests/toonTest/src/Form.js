export default function Form({$app, initialState, onClick}) {
    this.state = initialState;
    this.onClick = onClick;
    this.$target = document.createElement("form");
    this.$target.className = "mainform";

    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.$target.innerHTML =
        `<label>
            <input type="radio" class="radioinput" name="single-input" value="aaa">AAA</input>
            <input type="radio" class="radioinput" name="single-input" value="bbb">BBB</input>
            <input type="radio" class="radioinput" name="single-input" value="ccc">CCC</input>
            <input type="radio" class="radioinput" name="single-input" value="ddd">DDD</input>
            <input type="radio" class="radioinput" name="single-input" value="eee">EEE</input>
        </label>`;

        const radios = this.$target.getElementsByClassName("radioinput");

        for (let $node of radios) {
            $node.addEventListener("click", (e) => {
                console.log(e.target);
                if (e.target.checked) {
                    this.onClick(e.target.value);
                }
            });
        }
    }
    this.render();
}
