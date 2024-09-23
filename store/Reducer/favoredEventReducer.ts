import { FavoredEventDataReduc } from "../types"


const initialStateEventFavor = {
    eventData: [],
    


}





 export default (state = initialStateEventFavor, {type , payload}) => {

    // console.log("payload:", payload);
    switch(type){
        case FavoredEventDataReduc : return {...state, eventData: payload }

       
       

    }
    

    return state
 }