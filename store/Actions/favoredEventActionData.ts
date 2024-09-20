import { FavoredEventDataReduc } from "../types"

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
    payload:  string // eventData[]
}


export const favoredEventActionData = (e: string) => {

  
  console.log(e);
  console.log(FavoredEventDataReduc);
    return {
      type: FavoredEventDataReduc,
      payload: e
    }
  }
