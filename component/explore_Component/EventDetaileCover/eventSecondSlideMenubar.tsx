import { View, TouchableOpacity, Image } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import InfoEventIcon from "../../../icons/InfoIcon";
import MapEventIcon from "../../../icons/mapIcon";
import SoundIcon from "../../../icons/soundIcon";


interface eventProps {
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
  


interface MenuBarProps {
    handleEventInfo: (e: string) => void
    data: eventProps, 
    state: {
      eventDescription: boolean;
      eventDetails: boolean;
      eventSound: boolean;
      eventOptionHeader: string;
    };
  
} 


const EventSecondSlideMenuBar: React.FC<MenuBarProps>  = ({data, handleEventInfo, state}) => {
    const item = data

    const { categoryLayoutState } = useSelector((state: RootState) => state.OpenCategoryLayout);

    return(
        <View style={{
            // backgroundColor: "rgba(145,145,145,0.3)",
            backgroundColor: "rgba(149,149,149,0.3)",

            width: 220, 
            height: 35,
            borderRadius: 100,
            justifyContent: "space-around",
            // gap: 10,''
            alignItems: "center",
            flexDirection: "row",
            borderWidth: 1, 
          borderColor: "rgba(255, 255, 255,0.5)",

            

          }}>

            {/* Btn of Menu bar */}
           <TouchableOpacity
           
          
           onPress={ () => handleEventInfo("info")}
           >
          
             {
              state.eventDescription 
              ? <InfoEventIcon  width={"20"} height={"20"} color={"white"}/>
              :  <InfoEventIcon  width={"20"} height={"20"} color={"white"}/>
             }

           </TouchableOpacity>



           <TouchableOpacity
           onPress={ () => handleEventInfo("Event Details")}
           >
            {
              state.eventDetails 
              ? <MapEventIcon  width={"25"} height={"25"}  color={"green"}/>
              : <MapEventIcon  width={"25"} height={"25"}  color={"white"}/>

             }
           
           </TouchableOpacity>


           <TouchableOpacity 
            onPress={ () => handleEventInfo("EventSound")}
           >
              {
              state.eventSound 
              ?  <SoundIcon  width={"20"} height={"20"} color={"#366ebe"} />
              : <SoundIcon  width={"20"} height={"20"} color={"white"} />

             }
           </TouchableOpacity>


          </View>
    )
}

export default EventSecondSlideMenuBar