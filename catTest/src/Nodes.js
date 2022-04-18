export default function Nodes({$app, initialState, onClick, onBackClick}) {
    this.state = initialState;
    this.onClick = onClick;
    this.onBackClick = onBackClick;
    this.$target = document.createElement("div");
    this.$target.style = "display: flex; flex-wrap: wrap;"
    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        if (this.state.nodes) {
            const nodesHTML = this.state.nodes.map(node => {
                const img = (node.type) === "FILE" ? "../assets/file.png" : "../assets/directory.png";

                return `
                <div class="Node" data-node-id="${node.id}">
                    <img src="${img}" />
                    <div>${node.name}</div>
                </div>`;
            }).join("");

            this.$target.innerHTML = !this.state.isRoot ? `<div class="Node"><img src="../assets/prev.png"></div>${nodesHTML}` : nodesHTML;
        }
    };

    this.$target.addEventListener("click", (e) => {
        const $node = e.target.closest(".Node");

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
