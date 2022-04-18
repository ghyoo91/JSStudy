export default function Breadcrumb({$app, initialState}) {
    this.state = initialState;

    this.$target = document.createElement("nav");
    this.$target.className = "Breadcrumb";

    $app.appendChild(this.$target);

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target.innerHTML = `<div>root</div>${
            this.state.map(
                (node, idx) => `<div data-index="${idx}">${node.name}</div>`
            ).join("")
        }`;
    };

    this.$target.addEventListener("click", (e) => {
        const $node = e.target.closest(""); // 여기서부터 시작할것

        if ($node) {
            const {nodeId} = $node.dataset;
            const selectedNode = this.state.nodes.find(node => node.id === nodeId);

            if (!nodeId) {
                this.onBackClick();
            }

            if (selectedNode) {
                this.onClick(selectedNode);
            }
        }

    });

    this.render();
}
