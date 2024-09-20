import { createStore, combineReducers } from "redux";
import userReduce from "./userReduce";
import userCategoryLayoutReducer from "./Reducer/userCategoryLayoutReducer";
import profilePageUpdateReducer from "./Reducer/profilePageUpdateReducer";
import favoredEventReducer from "./Reducer/favoredEventReducer";

const rootReducer = combineReducers({
    
    IconData : userReduce,
    OpenCategoryLayout: userCategoryLayoutReducer,
    ProfilePageUpdate: profilePageUpdateReducer,
    FavoredEvent: favoredEventReducer,
   
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>