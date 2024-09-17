import { createStore, combineReducers } from "redux";
import userReduce from "./userReduce";
import userCategoryLayoutReducer from "./Reducer/userCategoryLayoutReducer";
import profilePageUpdateReducer from "./Reducer/profilePageUpdateReducer";

const rootReducer = combineReducers({
    
    IconData : userReduce,
    OpenCategoryLayout: userCategoryLayoutReducer,
    ProfilePageUpdate: profilePageUpdateReducer

})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>