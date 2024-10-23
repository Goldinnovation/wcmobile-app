


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

  

  // The function handles the amount of event data on a pag that does not match with the current events list on a page 
const  handleFilteringofEvents = (StoredExploreEventData: eventProps[],  data: eventProps[]) => {

   
    const filteringEventData = StoredExploreEventData.filter(
      (prev: eventProps) =>
        !data.some((event: eventProps) => event.eventId === prev.eventId)
    );


    return filteringEventData
  
}


export default handleFilteringofEvents