import { View, Text, TouchableOpacity } from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userFavoredExploredEvent } from "../../../api/explore/userFavoredEvent";
import HearthFrequenz from "../../../icons/hearthFrequenz";
import FavorIcon from "../../../icons/favorIcon";


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
  

  interface HeartFavorProps {
    item: eventProps;
  }
  


  
const HeartFavorBtn: React.FC<HeartFavorProps> = ({item}) => {
   
   
    const [IconFavorClick, setIconFavorClick] = useState(false);
    const { IconHeartState } = useSelector((state: RootState) => state.IconData);
    const { categoryLayoutState } = useSelector((state: RootState) => state.OpenCategoryLayout
      );
      const dispatchIcon = useDispatch();



      const handleHearthIconClick = () => {
        const paylaodState = IconHeartState === false ? true : false;
    
        dispatchIcon(userActions(paylaodState));
      };
    
    
    
      const handleFavorPress = async (eventId: string) => {
        console.log(eventId);
        setIconFavorClick(!IconFavorClick);
        const storedToken = await AsyncStorage.getItem("token");
        const token = storedToken ? JSON.parse(storedToken).token : null;
        const userToken = token.token;
        if (userToken && eventId) {
          const sendUserFavorDataResult = await userFavoredExploredEvent(
            userToken,
            eventId
          );
          console.log(sendUserFavorDataResult);
        }
      };


    return(
       
             <View
          style={{
            //  backgroundColor:  "pink", //"rgba(204,204,204,0.4
            height: categoryLayoutState === item.eventId ? 50 : 40,
            width: categoryLayoutState === item.eventId ? 100 : 130,
            
            flexDirection: categoryLayoutState === item.eventId ? "row" : "row",
            justifyContent:
              categoryLayoutState === item.eventId
                ? "space-around"
                : "space-around",
            gap: -2.5,
            left: categoryLayoutState === item.eventId ? "-40%" : "-70%",
            position: "relative",
            top: categoryLayoutState === item.eventId ? "20%" : "6%",
          }}
        >
          <TouchableOpacity
            style={{
              // backgroundColor: "green",
              position: "relative",
              height: 40,
            }}
            onPress={() => handleHearthIconClick()}
          >
            {IconHeartState ? (
              <View>
                <HearthFrequenz
                  height={"25"}
                  width={"25"}
                  lineColor={"#ff0000"}
                />

                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    textAlign: "center",
                    fontWeight: "500",
                    marginTop: categoryLayoutState === item.eventId ? 4 : 3,
                  }}
                >
                  223
                </Text>
              </View>
            ) : (
              <View>
                <HearthFrequenz
                  height={"25"}
                  width={"25"}
                  lineColor={"#ffffff"}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    textAlign: "center",
                    fontWeight: "500",
                    marginTop: categoryLayoutState === item.eventId ? 4 : 3,
                  }}
                >
                  222
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              // backgroundColor: "blue",
              borderRadius: 4,
              alignItems: "center",
              height: 40,
              // marginRight:  isOpen === item.eventId ? -2 : 4,

              justifyContent: "center",
            }}
            onPress={() => handleFavorPress(item.eventId)}
          >
            {IconFavorClick ? (
              <View>
             
                <FavorIcon height={"25"} width={"25"} lineColor={"#FBFF00"} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    textAlign: "center",
                    fontWeight: "500",
                    marginTop: categoryLayoutState === item.eventId ? 3 : 3,
                  }}
                >
                  113
                </Text>
              </View>
            ) : (
              <View>
             
                <FavorIcon height={"25"} width={"25"} lineColor={"#ffffff"} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    textAlign: "center",
                    fontWeight: "500",
                    marginTop: categoryLayoutState === item.eventId ? 3 : 3,
                  }}
                >
                  112
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>


        
    )
}


export default HeartFavorBtn