import Breadcrumb from "./Breadcrumb.js";
import Nodes from "./Nodes.js";
import requests from "./api.js";
import Imageview from "./ImageView.js";
import Loading from "./Loading.js";

export default function App($app) {
    this.state = {
        isRoot: false,
        isLoading: false,
        nodes: [],
        depth: [],
        filePath: "",
    };

    const breadcrumb = new Breadcrumb({
        $app,
        initialState: this.state.depth,
    });
    const nodes = new Nodes({
        $app,
        initialState: {
            isRoot: this.state.isRoot,
            nodes: this.state.nodes,
        },
        onClick: async (node) => {
            if (node.type === "DIRECTORY") {
                const nextNodes = await this.requestsWithLoading(node.id);

                this.setState({
                    isRoot: false,
                    depth: [...this.state.depth, node],
                    nodes: nextNodes,
                    filePath: "",
                });
            } else if (node.type === "FILE") {
                this.setState({
                    ...this.state,
                    filePath: node.filePath,
                });
            }
        },
        onBackClick: async () => {
            const prevState = {...this.state};

            prevState.depth.pop();

            if (prevState.depth.length === 0) {
                const rootNodes = await this.requestsWithLoading();

                this.setState({
                    ...prevState,
                    isRoot: true,
                    nodes: rootNodes,
                    filePath: "",
                });
            } else {
                const prevNodes = await this.requestsWithLoading(prevState.depth[prevState.depth.length -1].id);

                this.setState({
                    ...prevState,
                    isRoot: false,
                    nodes: prevNodes,
                    filePath: "",
                });
            }
        },
    });
    const imageview = new Imageview({
        $app,
        initialState: {
            filePath: this.state.filePath,
        },
    });
    const loading = new Loading({
        $app,
        initialState: {
            isLoading: this.state.isLoading,
        }
    });

    this.requestsWithLoading = async id => {
        try {
            this.setState({
                ...this.state,
                filePath: "",
                isLoading: !this.state.isLoading,
            });

            const targetNodes = await requests(id);

            return targetNodes;
        } catch(e) {
            console.error(e);
        } finally {
            this.setState({
                ...this.state,
                filePath: "",
                isLoading: !this.state.isLoading,
            });
        }
    }

    this.setState = (nextState) => {
        this.state = nextState;
        breadcrumb.setState(this.state.depth);
        nodes.setState({
            isRoot: this.state.isRoot,
            nodes: this.state.nodes,
        });
        imageview.setState({
            filePath: this.state.filePath,
        });
        loading.setState({
            isLoading: this.state.isLoading,
        });
    }

    const init = async () => {
        const rootNodes = await this.requestsWithLoading();

        this.setState({
            ...this.state,
            isRoot: true,
            nodes: rootNodes,
        });
    };

    init();
}
