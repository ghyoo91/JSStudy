export default function ImageView({$app, initialState}) {
    this.state = initialState;

    this.$target = document.createElement("div");
    this.$target.className = "Modal ImageViewer";
    this.$target.style.display = "none";
    this.$sub = document.createElement("div");
    this.$sub.className = "content";

    this.$target.appendChild(this.$sub);
    $app.appendChild(this.$target);

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        if (this.state.filePath) {
            this.$sub.innerHTML = `<img src="https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${this.state.filePath}">`;
            this.$target.style.display = "block";

            this.$target.addEventListener("click", (e) => {
                if (!this.$sub.contains(e.target)) {
                    this.$target.style.display = "none";
                }
            });

            window.addEventListener("keyup", (e) => {
                if (e.key === "Escape" || e.key === "Esc") {
                    this.$target.style.display = "none";
                }
            });
        } else {
            this.$target.style.display = "none";
        }
    };

    this.render();
}
