import { createStore, combineReducers } from "redux";
import userReduce from "./userReduce";


const rootReducer = combineReducers({
    
    IconData : userReduce

})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>