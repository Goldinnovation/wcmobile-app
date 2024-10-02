
import React from "react";
import { View } from "react-native-reanimated/lib/typescript/Animated";

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

  



const handleExploreData  = (data: eventProps[] ) => {

    const orginalData = data 
    const modifiedArr = []
    let sum = 0
    if(orginalData){
      for(const x of orginalData){
        // console.log(x)
        while( sum < 20){
          sum++
          modifiedArr.push(x)
        }
        //  const newSUm = sum+=1
        // if(newSUm < 21){
        //   modifiedArr.push(x)
        // }
      }

    }

    // console.log(modifiedArr);
    return modifiedArr.length
  
}


export default handleExploreData