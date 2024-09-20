import { FavoredEventDataReduc } from "../types"


const initialStateEventFavor = {
    eventData: "Profile",
    


}





 export default (state = initialStateEventFavor, {type , payload}) => {

    console.log("payload:", payload);
    switch(type){
        case FavoredEventDataReduc : return {...state, eventData: payload }

       
       

    }
    

    return state
 }