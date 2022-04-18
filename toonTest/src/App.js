import Form from "./Form.js";
import Label from "./Label.js";

export default function App($app) {
    this.state = {
        isLoading: false,
        radio: [],
    };

    const form = new Form({
        $app,
        initialState: this.state,
        onClick: async (val) => {
            try {
                this.setState({
                    ...this.state,
                    radio: [...this.state.radio, val],
                });
            } catch(e) {
                console.error(e);
            }
        }
    });

    const label = new Label({
        $app,
        initialState: this.state,
    });

    this.setState = (nextState) => {
        this.state = nextState;
        label.setState({
            ...this.state,
        });
    };
}
