// import { useReducer } from "react"
// import { RootState } from "../store/store"
// import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux"
// import { menuNavigationAction } from "../store/Actions/menuNaviagtionAction"

// const initialState = {
//     eventDescription: true,
//     eventDetails: false,
//     eventSound: false,
//     eventOptionHeader: "Description"
//   }
  



// const handleEventMenuNavigation = (e: string) => {
//     const dispathMenu = useDispatch()
//     const {eventDescription, eventDetails, eventSound} = useSelector((state: RootState) => state.MenuNavigation)


//     dispathMenu(menuNavigationAction(e))

//     console.log("eventDescription",eventDescription)
//     console.log('eventDetails', eventDetails);
//     console.log('eventSound', eventSound);
// }



// export default handleEventMenuNavigation