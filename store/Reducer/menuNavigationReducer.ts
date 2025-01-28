import { FavoredEventDataReduc } from "../types"


const initialStateEventFavor = {
    eventDescription: true,
    eventDetails: false,
    eventSound: false,
    eventOptionHeader: "Description"
    


}





 export default (state = initialStateEventFavor, {type , payload}: any) => {

    // console.log("payload:", payload);
    switch (type) {
        case "info":
          return {...state, eventDescription: true, eventDetails: false, eventSound: false, eventOptionHeader: "Description"  };
        case "Event Details":
          return {...state, eventDescription: false, eventDetails: true, eventSound: false, eventOptionHeader: "Event Details" };
        case 'EventSound':
          return {...state,eventDescription: false, eventDetails: false, eventSound: true, eventOptionHeader: "Event Sound" };
        default:
          return {...state, eventDescription: true, eventDetails: false, eventSound: false, eventOptionHeader: "Description" };
      }
      

    return state
 }