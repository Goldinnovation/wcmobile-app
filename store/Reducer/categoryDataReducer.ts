

import { CategoryActionDataArr } from "../types"

const initialStateEventFavor = {
    categoryData: [],
    


}





 export default (state = initialStateEventFavor, {type , payload}: any) => {
    switch(type){
        case CategoryActionDataArr : return {...state, categoryData: payload}

       
    
    }
    
    return state
 }