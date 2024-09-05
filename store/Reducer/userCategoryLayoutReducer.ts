import { OpenCategoryLayout } from "../types";



const initialStateLayout = {
    categoryLayoutState: false
}





 export default (state =  initialStateLayout, {type , payload}) => {

    // console.log(payload);
    console.log("payloadIcon:", payload);
    switch(type){
        case OpenCategoryLayout : return {...state, categoryLayoutState: payload }

    }
    

    return state
 }