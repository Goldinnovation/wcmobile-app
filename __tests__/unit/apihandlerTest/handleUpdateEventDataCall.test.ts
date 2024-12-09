import { describe, test, expect} from "vitest";
import handleUpdateEventData from "../../../handler/Explore/apihandler/handleUpdateEventDataCall";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {vi} from "vitest"
import { updateEventData } from "../../../api/exploreScreen_Api/pagination/updateEventData";
import axios from "axios";


// Mocking AsyncStorage

vi.mock("@react-native-async-storage/async-storage", async() => {
    
    const mockToken = JSON.stringify({token: {token: "fakeToken"}})
    return {
        default: {
            getItem: vi.fn().mockResolvedValue(mockToken)
        }
    }
  
})



// Mocking updateEventData Module 
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
            post: vi.fn().mockResolvedValue({data: {eventData}})


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



describe('function receives a list of strings and sends through api to the backend and return a list of objects', () => {


    
    
    test('should check if the input and output is correct, which contains an array with strings for the handler function and as output an array with objects', async() => {
        const mockdata =["event1", "event2", "event3"]

        const returnValue = await handleUpdateEventData(mockdata)
    
        expect(returnValue).toEqual({eventData});
    })

    test('should return an empty array if the input is an empty array', async() => {
        const mockdata: string[] | [] = []

        const returnValue = await handleUpdateEventData(mockdata)
    
        expect(returnValue).toEqual([]);
      
    })
    


  
    


  
})

