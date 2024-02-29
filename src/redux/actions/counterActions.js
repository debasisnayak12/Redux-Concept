import { INCREASE, DECREASE, RESET }  from "./actionTypes";

// in real use => actions are object 

// action creator 
export const increase = (value=1) => {
    return {
        type: INCREASE,
        value: value
    }
}

export const decrease = () => {
    return {
        type: DECREASE
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

