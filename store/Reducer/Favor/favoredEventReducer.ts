import { FavoredEventDataReduc } from "../../types";


const initialState = {
    favoredEventDataState: []
}


export default (state = initialState, {type, payload}) => {

    console.log('payload on getFavoredEvent:', payload);
    switch(type){
        case FavoredEventDataReduc: return {...state, favoredEventDataState: payload}
        
    }

    return state
}
    
