

import { CategoryActionDataArr } from "../types"

const initialStateEventFavor = {
    categoryData: [],
    


}





 export default (state = initialStateEventFavor, {type , payload}) => {
    switch(type){
        case CategoryActionDataArr : return {...state, categoryData: payload}

       
    
    }
    
    return state
 }