import { View, TouchableOpacity, Image } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"


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
    data: eventProps
} 


const EventDetailsMenuBar: React.FC<MenuBarProps>  = ({data, handleEventInfo}) => {
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
           <Image
              source={require("../../../assets/ii1.png")}
              style={{
                width: categoryLayoutState === item.eventId ? 355 : 20,
                // height: 490,

                height: categoryLayoutState === item.eventId ? 20 : 20,
                
               
                //  paddingRight: 30,
              }}/>
           </TouchableOpacity>



           <TouchableOpacity
           onPress={ () => handleEventInfo("Event Details")}
           >
           <Image
              source={require("../../../assets/pin1.png")}
              style={{
                width: categoryLayoutState === item.eventId ? 355 : 25,
                // height: 490,

                height: categoryLayoutState === item.eventId ? 20 : 25,
                
               
                //  paddingRight: 30,
              }}/>
           </TouchableOpacity>


           <TouchableOpacity 
            onPress={ () => handleEventInfo("EventSound")}
           >
           <Image
              source={require("../../../assets/fr1.png")}
              style={{
                width: categoryLayoutState === item.eventId ? 355 : 20,
                // height: 490,

                height: categoryLayoutState === item.eventId ? 20 : 20,
                
               
                //  paddingRight: 30,
              }}/>
           </TouchableOpacity>


          </View>
    )
}

export default EventDetailsMenuBar