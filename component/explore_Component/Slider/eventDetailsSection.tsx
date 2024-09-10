import { View, TouchableOpacity, Text, Image} from "react-native"
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


  interface eventDetailsProps{
    data: eventProps
    state: {
        eventDescription: boolean; 
        eventDetails: boolean; 
        eventSound: boolean; 
        eventOptionHeader: string; 
    }; 

  }
  


const EventDetailsSection: React.FC<eventDetailsProps> = ({data, state}) => {
    const item = data
    const redstate = state
    const { categoryLayoutState } = useSelector((state: RootState) => state.OpenCategoryLayout);

    return(
        
        <View style={{
                 

                  
                }}>
                  {/* Host Image */}
                   <View
                  style={{
                    // backgroundColor: "red",
                    height: 80,
                    // marginTop: 65,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    position:"relative",
                    top:  categoryLayoutState === item.eventId ? "-3%" : "-9%",
                    zIndex: 2
                  }}
                >
                  <Image
                    source={require("../../../assets/7.jpg")}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 100,
                      position:"absolute",
                      zIndex: 2
                    
                    }}
                  />
                  </View>
                  <View
                  style={{
                    //  backgroundColor: "orange",
                    height: 40,

                    //  flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position:"relative",
                    top:  categoryLayoutState === item.eventId ? "1%" : "-7%"
                  }}
                >
                  <View
                    style={{
                      // backgroundColor: "green",
                      marginLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 25,
                        // textAlign: "center"
                      }}
                    >
                      {item.eventHostName}
                    </Text>
                  </View>

                  <View
                    style={{
                      // backgroundColor: "purple",
                      position: "relative",
                      top: -40,
                      left: 46,
                      height: 15,
                      width: 30,
                      marginLeft: 5,
                      borderWidth: 1,
                      padding: "auto",
                      // borderBlockColor: "white",
                      borderColor: "lightgrey",
                      zIndex: 2
                    }}
                  >
                    <Text
                      style={{
                        color: "lightgrey",
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      Host
                    </Text>
                  </View>
                </View> 
                 <View
                style={{
                  // backgroundColor: "green",
                  height: 180,
                  position:"relative",
                  top:  categoryLayoutState === item.eventId ? "1%" : "-7%"
                }}
              >
                <View
                  style={{
                    // backgroundColor: "grey",
                    // justifyContent: "center",
                    padding: 4,
                    height: 28,
                  }}
                >
                  <View
                    style={{
                      // backgroundColor: "rgba(240,240,240,1)",

                      // borderRadius: 50,
                      // borderColor: "white",
                      width: "50%",
                      // overflow: "visible",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        // textAlign: "center",
                      }}
                    >
                      Event: {item.eventTitle}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    //  backgroundColor: "pink",
                    height: categoryLayoutState === item.eventId ?  90 : 140,
                    padding: 9,
                    margin: 5,
                    //  marginLeft: 1
                    //  borderTopWidth: 1,
                    //  borderTopColor: "rgba(255, 255, 255,0.9)"
                  }}
                >
                {redstate.eventDescription && (
                    <View
                      style={
                        {
                          //  backgroundColor: "green",
                          //  height: 130,
                        }
                      }
                    >
                      <View
                        style={{
                          //  backgroundColor: "skyblue",
                          //  overflow: "scroll",
                          height: 145,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                          }}
                        >
                          {item.eventDescriptionContent}
                        </Text>
                      </View>

                    
                    </View>
                  )}
                </View>
              
              </View>   
                </View>
        
    )
}

export default EventDetailsSection