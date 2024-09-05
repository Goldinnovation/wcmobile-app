import { IconHeartUpdate } from "./types";




const initialState = {
    IconHeartState: false
}




 export default (state =  initialState, {type , payload}) => {


    
    switch(type){
        case IconHeartUpdate : return {...state, IconHeartState: payload }

    }
    

    return state
 }