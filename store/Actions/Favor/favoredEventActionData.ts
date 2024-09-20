import { FavoredEventDataReduc } from "../../types"

interface eventData {
    eventId: string;
  eventHost: string;
  eventHostName: string;
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



interface EventAction {
    type: string, 
    payload: eventData[]
}

export const FavoredEventActionData = (events: eventData[])=> {
    console.log(events);
    return{
        type: FavoredEventDataReduc,
        payload: events

    }
}