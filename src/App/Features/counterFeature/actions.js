import * as counter from './constants';

export const increment = (value) => {
    return {
        type: counter.INC,
        value: value
    }

}

export const decrement = (value) => {
    return {
        type: counter.DEC,
        value: value
    }
}

export const decrementValidation = (value) => {
    return (dispatch, getstate) => {
        if(getstate().counter.count > 0) {
            dispatch(decrement(value));
        }
    }
}