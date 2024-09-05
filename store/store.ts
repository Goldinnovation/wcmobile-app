import { createStore, combineReducers } from "redux";
import userReduce from "./userReduce";
import userCategoryLayoutReducer from "./Reducer/userCategoryLayoutReducer";

const rootReducer = combineReducers({
    
    IconData : userReduce,
    OpenCategoryLayout: userCategoryLayoutReducer

})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>