import { Provider } from "react-redux";
import store from "../../App/Store";
import Counter from "./Pembahasan/Counter";

const Redux = () => {
    return (
        <div>
            <Provider store={store} >
                <Counter />
            </Provider>
        </div>
    )
}

export default Redux;