// import Counter from "./pembahasan/Counter";
// import Effect from "./pembahasan/Effect";

import { useState } from "react";
import { useToggle } from "./pembahasan/hook/useToggle";

const Hooks = () => {

    let [label, setLabel] = useState('ON');
    let [switches, setSwitches] = useToggle();

    const style = {
        background: switches ? 'yellow' : 'black',
        textAlign: 'center',
        height: '400px'
    }

    const handleSwitches = () => {
        setSwitches(!switches);
        setLabel(e => {
            if(e === 'ON'){
                return 'OFF'
            }else{
                return 'ON'
            }
        })

    }

    return(
        <div style={style}>
            <button onClick={handleSwitches}> {label} </button>
        </div>
    )
}

export default Hooks;