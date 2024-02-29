import {INCREASE, DECREASE, RESET} from "../actions/actionTypes";

const initialState = 0;

const counterReducer = (state=initialState,action) => {
    console.log("Counter reducer is executed", state,action);

    switch(action.type){
        case INCREASE :
            return state + action.value;
        case DECREASE :
            return state - 1;
        case RESET :
            return 0
        default : 
          return state;
    }
}

export default counterReducer;

// store => rootReducer => counterReducer( valueFrom Store.count, action)
// store => rootReducer => songReducer( valuefromStore.song, action)

// counterReducer()


// counterReducer(100, {type: INCREASE})
// counterReducer(100, {type: DECREASE})
// counterReducer(100, {type: RESET})