import { ProfileLayoutUpdate } from "../types";



const initialStateLayout = {
    profileState: "Profile",
    


}





 export default (state =  initialStateLayout, {type , payload}) => {

    // console.log("payload:", payload);
    switch(type){
        case ProfileLayoutUpdate : return {...state, profileState: payload }
       

    }
    

    return state
 }