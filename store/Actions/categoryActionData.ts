import { CategoryActionDataArr } from "../types"

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


export const CategoryActionData = (e: eventData[]) => {


//   console.log(e);
    return {
      type: CategoryActionDataArr,
      payload: e
    }
  }
