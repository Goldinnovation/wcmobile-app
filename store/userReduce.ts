import { IconHeartUpdate } from "./types";




const initialState = {
    IconHeartState: false
}




 export default (state =  initialState, {type , payload}) => {

    // console.log(payload);

    switch(type){
        case IconHeartUpdate : return {...state, IconHeartState: payload }

    }
    

    console.log(state);
    return state
 }