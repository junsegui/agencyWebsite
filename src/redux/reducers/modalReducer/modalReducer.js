import { TOGGLE_MODAL } from "./actionModal";

const INITIAL_STATE = {
    visible:false,
};

export const modalReducer = (state=INITIAL_STATE,action)=>{
    const {type,payload} = action;

    switch(type){
        case TOGGLE_MODAL:
            return{
                ...state,
                visible:!state.visible
            }
        default:
            return state;
    }
}