import { StoreExploreEventObj } from "../types"

const initialStateEventFavor = {
    StoredExploreEventData: [],
    


}





 export default (state = initialStateEventFavor, {type , payload}) => {
    switch(type){
        case StoreExploreEventObj : return {...state, StoredExploreEventData: payload}

       
    
    }
    
    return state
 }