import { View, Text, TouchableOpacity } from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userFavoredEvent } from "../../../api/exploreScreen_Api/userFavoredEvent";
import HearthFrequenz from "../../../icons/hearthFrequenz";
import FavorIcon from "../../../icons/favorIcon";
import CommentIcon from "../../../icons/commentIcon";


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
    const [IconHearthClick, setIconHearthCick] = useState(false);

    const { IconHeartState } = useSelector((state: RootState) => state.IconData);
    const { categoryLayoutState } = useSelector((state: RootState) => state.OpenCategoryLayout);

    const [commentToggle, setCommentToggle] = useState(false)
      const dispatchIcon = useDispatch();



      const handleHearthIconClick = (e:string) => {
        console.log(e);
        setIconHearthCick(!IconHearthClick)
        // const paylaodState = IconHeartState === false ? true : false;
    
        // dispatchIcon(userActions(paylaodState));
      };

      const handleCommentIcon = () => { 
          setCommentToggle(!commentToggle)
      }
    
    
  
      const handleFavorPress = async (eventId: string, item: eventProps) => {
        console.log(eventId);
        setIconFavorClick(!IconFavorClick);
        const storedToken = await AsyncStorage.getItem("token");
        const token = storedToken ? JSON.parse(storedToken).token : null;
        const userToken = token.token;
        if (userToken && eventId) {
          const sendUserFavorDataResult = await userFavoredEvent(
            userToken,
            eventId, 
            item
          );
          // console.log(sendUserFavorDataResult);
        }
      };


    return(
       
             <View
          style={{
            //  backgroundColor: "rgba(204,204,204,0.4)",
            height: categoryLayoutState === item.eventId ? 50 : 50,
            width: categoryLayoutState === item.eventId ? 150 : 180,
            alignItems: "center",
            flexDirection: categoryLayoutState === item.eventId ? "row" : "row",
            justifyContent:
              categoryLayoutState === item.eventId
                ? "center"
                : "center",
            gap:categoryLayoutState === item.eventId ? 39 : 35,
            left: categoryLayoutState === item.eventId ? "-80%" : "-88%",
            position: "relative",
            top: categoryLayoutState === item.eventId ? "3%" : "-9%",
          }}
        >
           {/* <TouchableOpacity
            style={{
              // backgroundColor: "green",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              width: 30,
              display: categoryLayoutState === item.eventId  ? "none" : "flex"
            }}
            onPress={() => handleCommentIcon()}
          >
            {commentToggle ? (
              <View>
                <CommentIcon
                width={"29"}
                height={"29"}
                lineColor="#2775e2"
                />

                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    textAlign: "center",
                    fontWeight: "500",
                    position: "absolute", 
                    top: 34,
                    left: 7
                    // marginTop: categoryLayoutState === item.eventId ? 4 : 3,
                  }}
                >
                  22
                </Text>
              </View>
            ) : (
              <View>
                <CommentIcon
                width={"29"}
                height={"29"}
                 lineColor="#ffffff"
                />

                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    textAlign: "center",
                    fontWeight: "500",
                    position: "absolute", 
                    top: 34,
                    left: 7
                    // marginTop: categoryLayoutState === item.eventId ? 4 : 3,
                  }}
                >
                  22
                </Text>
              </View>
            )}
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              // backgroundColor: "green",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              width: 30
            }}
            onPress={() => handleHearthIconClick(item.eventId)}
          >
            {IconHearthClick ? (
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
                    position: "absolute", 
                    top: 31.6,
                    left: 3
                    // marginTop: categoryLayoutState === item.eventId ? 8 : 8,
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
                    position: "absolute", 
                    top: 31.6,
                    left: 3
                    // maginTop: categoryLayoutState === item.eventId ? 4 : 3,
                  }}
                >
                  222
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              // backgroundColor: "green",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              width: 30
            }}
            onPress={() => handleFavorPress(item.eventId, item)}
          >
            {IconFavorClick ? (
              <View>
             
                <FavorIcon height={"29"} width={"29"} lineColor={"#FBFF00"} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    textAlign: "center",
                    fontWeight: "500",
                    position: "absolute", 
                    top: 32.9,
                    left: 2
                    // marginTop: categoryLayoutState === item.eventId ? 6 : 6,
                  }}
                >
                  113
                </Text>
              </View>
            ) : (
              <View>
             
                <FavorIcon height={"29"} width={"29"} lineColor={"#ffffff"} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    textAlign: "center",
                    fontWeight: "500",
                    position: "absolute", 
                    top: 32.9,
                    left: 2
                    // marginTop: categoryLayoutState === item.eventId ? 6 : 6,
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