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


  interface eventSoundProps{
    data: eventProps
    state: {
        eventDescription: boolean; 
        eventDetails: boolean; 
        eventSound: boolean; 
        eventOptionHeader: string; 
    }; 

  }
  


const EventSoundSection: React.FC<eventSoundProps> = ({data, state}) => {
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
            top:  categoryLayoutState === item.eventId ? "1%" : "15%",
            zIndex: 2
          }}
        >
          <Image
            source={require("../../../assets/profileImg/2.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              position:"absolute",
              zIndex: 2
            
            }}
          />
          </View>

          {/* Username Area - eventSound */}
          <View
          style={{
            //  backgroundColor: "orange",
            height: 40,

            //  flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position:"relative",
            top:  categoryLayoutState === item.eventId ? "1%" : "18%"
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
        
      
        </View> 
        {/* Artist Deatils Section - eventSound */}
         <View
        style={{
          // backgroundColor: "green",
          height: 135,
          position:"relative",
          top:  categoryLayoutState === item.eventId ? "1%" : "-7%"
        }}
      >
        <View
          style={{
            // backgroundColor: "grey",
            // justifyContent: "center",
            padding: 4,
            height: 38,
          }}
        >
          <View
            style={{
              // backgroundColor: "rgba(240,240,240,1)",

              // borderRadius: 50,
              // borderColor: "white",
              width: "12%",
              // flexDirection: "row",
              alignItems: "center",
              gap: 30,
              justifyContent: "center",
              position: "relative", 
              top:categoryLayoutState === item.eventId ? "1%" : "-208%",
              left: categoryLayoutState === item.eventId ? "1%" : "86%"


            
              // overflow: "visible",
            }}
          >
                  <Image
              source={require("../../../assets/sc1.png")}
              style={{
                width: 25,
                height: 25,
                // borderRadius: 100,
              }}
            />
              <Image
              source={require("../../../assets/ig1.png")}
              style={{
                width: 25,
                height: 25,
                // borderRadius: 100,
              }}
            />

              <Image
              source={require("../../../assets/ti1.png")}
              style={{
                width: 25,
                height: 25,
                // borderRadius: 100,
              }}
            />
           
          </View>
        </View>

        <View
          style={{
            //  backgroundColor: "pink",
            height: categoryLayoutState === item.eventId ?  90 : 98,
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
                  height: 115,
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

        {/* Artist selection Area - eventSound */}
        <View style={{
          // backgroundColor: "orange",
            position:"relative",
                top:  categoryLayoutState === item.eventId ? "1%" : "-7%",
              borderTopWidth: 1, 
              borderTopColor: "white"
        }}>
        <View
            style={{
              flexDirection: "row",
              height: 30,
              // backgroundColor: "rgba(203,203,203,0.5)",
              alignItems: "center",
              padding: 3,
             
              // borderBottomWidth: 1,
              // borderBottomColor: "white",
            }}
          >
            <Image
              source={require("../../../assets/dj1.png")}
              style={{
                width: 15,
                height: 15,
                // borderRadius: 100,
              }}
            />
            <Text
              style={{
                color: "white",
              }}
            >
              {"  "}
              DJ:
            </Text>
           
          </View>

          <View style={{
            // backgroundColor: "red",
            height: 65,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            // flexWrap: "wrap"
          }}>
            <View>
              <Image
                  source={require("../../../assets/profileImg/1.jpg")}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                   
                  }}
                />
                <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Planner</Text>
                </View>
            <View>
            <Image
                  source={require("../../../assets/profileImg/2.jpg")}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                   
                  }}
                />
              <Text style={{color:"white",textAlign: "center", fontSize: 8,marginTop: 5 }}>Music</Text>

            </View>
            <View>
            <Image
                  source={require("../../../assets/profileImg/3.jpg")}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                   
                  }}
                />
               <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Light</Text>

            </View>
            
            <View>
            <Image
                  source={require("../../../assets/profileImg/5.jpg")}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                   
                  }}
                />
              <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Sound</Text>

            </View>
            <View>
            <Image
                  source={require("../../../assets/profileImg/6.jpg")}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                   
                  }}
                />
             <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Planner</Text>
            </View>


          </View>

         
        </View>
      </View>
       
        
    )
}

export default EventSoundSection