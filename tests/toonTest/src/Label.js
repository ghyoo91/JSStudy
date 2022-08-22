export default function Label({$app, initialState}) {
    this.state = initialState;
    this.$target = document.createElement("div");
    this.$target.className = "labelarea";

    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.$target.innerHTML = `${this.state.radio.length === 0 ? "선택안함" : this.state.radio}`;
    }

    this.render();
}
