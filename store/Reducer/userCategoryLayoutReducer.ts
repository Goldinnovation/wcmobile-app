import { OpenCategoryLayout } from "../types";



const initialStateLayout = {
    categoryLayoutState: ""
}





 export default (state =  initialStateLayout, {type , payload}) => {

    // console.log("Category payload:", payload);
    switch(type){
        case OpenCategoryLayout : return {...state, categoryLayoutState: payload }

    }
    

    return state
 }