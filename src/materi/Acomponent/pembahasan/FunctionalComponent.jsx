import { useState } from "react";

const FunctionalComponent = (props) => {
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue (value + 1)
    }

    const handleMinus = () => {
        if (value > 0) {
            setValue (value - 1);
        }
    }

    return (
        <div>
            <h2>Komponen ini dibuat dengan Functional Component{props.value}</h2>
            <button onClick={handleMinus}>-</button>
            <span>{' '} {value} {' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}
export default FunctionalComponent;