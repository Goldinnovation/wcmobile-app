// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store/store";
// import { userCategoryLayoutAction } from "../../store/Actions/userLayoutAction";
// import { userCategoryReq } from "../../api/exploreScreen_Api/CategoryDataApi";
// import { categoryCallAction } from "../../store/Actions/categoryDataCallAction";
// import { View } from "react-native";



// interface eventProps {
//     eventId: string;
//     eventHost: string;
//      eventHostName: string,
//     eventTitle: string;
//     eventDate: string;
//     eventType: string;
//     eventDescriptionContent: string;
//     eventTime: string;
//     ImageCoverUpload: string;
//     eventInviteType: number;
//     eventAddress: string;
//     eventZipcode: string;
//     cityType: string;
//     selectedRangeofEvents: number;
// }


// const handleCategoryCall = async(selectedCategoryType: string, selectedEventId: string) => {
//     const {categoryLayoutState} = useSelector((state: RootState) => state.OpenCategoryLayout)
//     const dispatchCategoryIcon = useDispatch()
//     const dispatch = useDispatch()

//     try{
//         const storedToken = await AsyncStorage.getItem("token");
//         const token = storedToken ? JSON.parse(storedToken).token : null;
//         const userToken = token.token;
//         const userselected_Category = selectedCategoryType
//         const eventId = selectedEventId


//         // checks the condition of the layout, if is open it wills end a empy string to close the section,
//         //  if the category area is closed it will receive a id which will cause opening of category area 
//         const LayoutState = eventId === categoryLayoutState ? "" : eventId
//         console.log(LayoutState);
//         dispatchCategoryIcon(userCategoryLayoutAction(LayoutState))
  
        

//         // Filtering the events when the category section is opened 
//         if(LayoutState === eventId){
  
    
//           const CategoryData = await userCategoryReq(userToken, userselected_Category)
//           const filteredEvent = CategoryData.filter((prevEvent: eventProps) => prevEvent.eventId !== eventId)
          
//         //   setCategoryData(filteredEvent)
//         dispatch(categoryCallAction(filteredEvent))
     
        
//         }
  
//       }catch(error){
//         console.error('Error on hanleCategory Rey', error)
//       }

      
// }

// export default handleCategoryCall