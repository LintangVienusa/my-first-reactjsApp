import * as counter from './constants';

let initState = {
    count: 0
}

const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case counter.INC:
            return {
                ...state,
                count: state.count + action.value
            }
        case counter.DEC:
            return {
                count: state.count - action.value
            }
    
        default:
            return state
    }
}

export default counterReducer;