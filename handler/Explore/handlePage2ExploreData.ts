


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

  

// Receives a list of events and returns 20 events as the minimum amout for the page to render
// Pure Function 

const handlePage2ExploreData  = (data: eventProps[] ) => {

    const orginalData = data 
    const modifiedArr = []
    let sum = 0
    if(orginalData){
      for(const x of orginalData){
        if(sum < 10){
          sum++
          modifiedArr.push(x)
        }
      
      }

    }
    return modifiedArr
  
}


export default handlePage2ExploreData