import { CLICKED_SONG } from "../actions/actionTypes";

const initialState = null;

const songReducer = (state=initialState,action) => {
   console.log("Song Reducer is executed", action);
   if(action.type === CLICKED_SONG){
    return action.payload
   }
   else if(action.type === "RESET"){
    return initialState
   }else{
    return state;
   }
}

export default songReducer;