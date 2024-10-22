import { createStore, combineReducers } from "redux";
import userReduce from "./userReduce";
import userCategoryLayoutReducer from "./Reducer/userCategoryLayoutReducer";
import profilePageUpdateReducer from "./Reducer/profilePageUpdateReducer";
import favoredEventReducer from "./Reducer/favoredEventReducer";
import exploreEventDataReducer from "./Reducer/exploreEventDataReducer";
import menuNavigationReducer from "./Reducer/menuNavigationReducer";
import userLocationReducer from "./Reducer/userLocationReducer";
import categoryDataReducer from "./Reducer/categoryDataReducer";


const rootReducer = combineReducers({
    
    IconData : userReduce,
    OpenCategoryLayout: userCategoryLayoutReducer,
    ProfilePageUpdate: profilePageUpdateReducer,
    FavoredEvent: favoredEventReducer,
    ExploreEventData: exploreEventDataReducer,
    MenuNavigation: menuNavigationReducer,
    userLocationReduxStore: userLocationReducer,
    categoryData: categoryDataReducer
   
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>