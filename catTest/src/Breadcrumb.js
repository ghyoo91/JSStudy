export default function Breadcrumb({$app, initialState, onClick}) {
    this.state = initialState;
    this.onClick = onClick;

    this.$target = document.createElement("nav");
    this.$target.className = "Breadcrumb";

    $app.appendChild(this.$target);

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target.innerHTML = `<div class="nav-item">root</div>${
            this.state.map(
                (node, idx) => `<div class="nav-item" data-index="${idx}">${node.name}</div>`
            ).join("")
        }`;
    };

    this.$target.addEventListener("click", (e) => {
        const $navItem = e.target.closest(".nav-item"); // 여기서부터 시작할것

        if ($navItem) {
            const {index} = $navItem.dataset;

            this.onClick(index ? index * 1 : null);
        }
    });

    this.render();
}
