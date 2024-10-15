import { userLocation } from "../types";



const initialStateLayout = {
    userLocationState: [],
    


}





 export default (state =  initialStateLayout, {type , payload}) => {

    // console.log("payload:", payload);
    switch(type){
        case userLocation : return {...state, userLocationState: payload }

       
       

    }
    

    return state
 }