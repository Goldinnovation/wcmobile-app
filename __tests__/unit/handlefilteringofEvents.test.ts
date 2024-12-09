import { describe, expect, test } from "vitest";
import handleFilteringofEvents from "../../handler/Explore/handleFilteringofEvents";



export const mockStoredEventData = (count = 24) => {
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
        eventId: `event${index +6}`
      }))

}



export const mockStoredEventData2 = (count = 24) => {
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

export const mockEventData2 = (count = 24) => {
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


describe('checks if the page data does not match the stored redux data, return the data that does not match', () => {
  



    test('should return the length of the objects that are not in the stored event list', () => {


        const storedEventData = mockStoredEventData(8)
        const prevEventDatA = mockEventData(8)
      
        const returnValue = handleFilteringofEvents(storedEventData,prevEventDatA)

 
        // 5 objects of the redux store data that are not Equal to the list on the page
        expect(returnValue).toHaveLength(5)


    })

    
    test('should show the structure of the data that is returned ', () => {


        const storedEventData = mockStoredEventData(8)
        const prevEventDatA = mockEventData(8)
      
    const returnValue = handleFilteringofEvents(storedEventData,prevEventDatA)

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


describe('checks if the page data matchs with the stored redux data, returns an empty array if true', () => {
  



    test('should return the length of 0', () => {


        const storedEventData = mockStoredEventData2(8)
        const prevEventDatA = mockEventData2(8)
      
    const returnValue = handleFilteringofEvents(storedEventData,prevEventDatA)

 

        expect(returnValue).toHaveLength(0)


    })


})

