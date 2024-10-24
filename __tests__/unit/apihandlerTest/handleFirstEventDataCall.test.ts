import { describe, test, expect} from "vitest";
import handleFirstEventDataCall from "../../../handler/Explore/apihandler/handleFirstEventDataCall";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {vi} from "vitest"
import { getEventData } from "../../../api/exploreScreen_Api/exploreDataApi";
import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

// Mocking AsyncStorage

vi.mock("@react-native-async-storage/async-storage", async() => {
    
    const mockToken = JSON.stringify({token: {token: "fakeToken"}})
    return {
        default: {
            getItem: vi.fn().mockResolvedValue(mockToken)
        }
    }
  
})


// Mocking getEventData Module 
vi.mock("../../../api/exploreScreen_Api/pagination/updateEventData", async() => {
 

    const actual = await vi.importActual<typeof import("../../../api/exploreScreen_Api/pagination/updateEventData")>("../../../api/exploreScreen_Api/pagination/updateEventData");
    const  eventData = [{
        eventId: "212",
        eventHost: "dsd",
        eventHostName: "dsdssd",
        eventTitle: "dsdfdsf",
        eventDate:  expect.any(String),
        eventType: "dsfdd",
        eventDescriptionContent: "dsdfsdfdf",
        eventTime: "Dsfsdff",
        ImageCoverUpload: "sfedsfds",
        eventInviteType: 1,
        eventAddress: "sdfsddsf",
        eventZipcode: "dsfsdfsdfdsf",
        cityType: "DSfsddf",
        selectedRangeofEvents: 43,
        createdAt:  expect.any(String),
      }]
    return{
        ...actual,
        default:   {
            // updateEventData: vi.fn().mockResolvedValue({mock: true})
            updateEventData: vi.fn().mockResolvedValue({eventData})



        }
    }

})

// Mocking Axios Module 
vi.mock('axios', async() => {
    const actual = await vi.importActual<typeof import("axios")>("axios");
    const  eventData = [{
        eventId: "212",
        eventHost: "dsd",
        eventHostName: "dsdssd",
        eventTitle: "dsdfdsf",
        eventDate:  expect.any(String),
        eventType: "dsfdd",
        eventDescriptionContent: "dsdfsdfdf",
        eventTime: "Dsfsdff",
        ImageCoverUpload: "sfedsfds",
        eventInviteType: 1,
        eventAddress: "sdfsddsf",
        eventZipcode: "dsfsdfsdfdsf",
        cityType: "DSfsddf",
        selectedRangeofEvents: 43,
        createdAt:  expect.any(String),
      }]
    return{
        ...actual,
        default:   {
            get: vi.fn().mockResolvedValue({data: {eventData}}),
            


        }
    }

});





export  const  eventData = [{
    eventId: "212",
    eventHost: "dsd",
    eventHostName: "dsdssd",
    eventTitle: "dsdfdsf",
    eventDate:  expect.any(String),
    eventType: "dsfdd",
    eventDescriptionContent: "dsdfsdfdf",
    eventTime: "Dsfsdff",
    ImageCoverUpload: "sfedsfds",
    eventInviteType: 1,
    eventAddress: "sdfsddsf",
    eventZipcode: "dsfsdfsdfdsf",
    cityType: "DSfsddf",
    selectedRangeofEvents: 43,
    createdAt:  expect.any(String),
  }]



describe('functione executes a get an array with event objects', () => {


    
    
    test('should call the function and return an array with objects', async() => {
              const returnValue = await handleFirstEventDataCall()
        expect(returnValue).toEqual({eventData});
    })

  
    

 


  
})



// describe('Testing the api call inside the handleFirstEventData', () => {
//     test('should check if the input for the api call is correct and returns the expected output ', async() => {
//         const mockdata =["event1", "event2", "event3"]

//         const token = "fakeToken"

//         const result = await updateEventData(token, mockdata);
//         expect(result).toEqual({eventData});
//     })
    
// })
