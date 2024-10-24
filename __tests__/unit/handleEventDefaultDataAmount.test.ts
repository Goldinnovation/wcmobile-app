import {test, describe, expect, it} from "vitest"
import handleEventDataAmount from "../../handler/Explore/handleEventdefaultDataAmount"




interface eventProps {
    eventId: string;
    eventHost: string;
     eventHostName: string,
    eventTitle: string;
    eventDate: string;
    eventType: string;
    eventDescriptionContent: string;
    eventTime: string;
    ImageCoverUpload: string;
    eventInviteType: number;
    eventAddress: string;
    eventZipcode: string;
    cityType: string;
    selectedRangeofEvents: number;
  }


// Mocking the Amount of events in an Array
export const mockEventData = (count = 24) => {
    const eventData = {
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
      }
     
      return Array.from({length: count}, (_,index) => ({
        ...eventData, 
        eventId: `event${index +1}`
      }))

}

describe('Receives a list of events and returns 8 events as the page amount  ', () => {
   
  
    test('should return a array with a specified length of events ', async() => {

        const eventData: eventProps[] | undefined = mockEventData(24)
        const  returnValue  = await handleEventDataAmount(eventData)

        // checks the amount of Events that are returned
        expect(returnValue).toHaveLength(8)
    })

    test("Should return an empty array if the input is an empty array ", () => {

       
        expect(handleEventDataAmount([])).toEqual([])
    })

    test('should return the same input and output structure ', async() => {
        const eventData = mockEventData(24)
        const  returnValue  = await handleEventDataAmount(eventData)

        // Expected Return Structure 
        expect(returnValue).toEqual(expect.arrayContaining([  

            expect.objectContaining({
              eventId: expect.any(String),
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
            createdAt: expect.any(String),
            })
          ]))
      
    })
    



    
})
