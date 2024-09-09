import { View, Text, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import WorldIcon from "../../../icons/worldIcon";

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

interface eventCoverProps {
  data: eventProps;
}

const EventCoverSlide: React.FC<eventCoverProps> = ({ data }) => {
  const item = data;
  const { categoryLayoutState } = useSelector(
    (state: RootState) => state.OpenCategoryLayout
  );
  const dispatch = useDispatch();

  return (
    <View
      style={
        {
          // backgroundColor: "skyblue",
          // height: isOpen === item.eventId ? 200 : 490,
        }
      }
    >
      {/* event host information(name and Img)  */}
      {/*first event slide   */}
      <View
        style={{
          // backgroundColor: "rgba(18, 114, 50, 0.7)",
          flexDirection: "row",
          gap: 7,
          width: "40%",
          position: "absolute",
          zIndex: 1,
          // display: isOpen === item.eventId ? "flex" : "none",
          top: categoryLayoutState === item.eventId ? "87%" : "90%",
          left: categoryLayoutState === item.eventId ? "2%" : "2%",
        }}
      >
        <Image
          source={require("../../../assets/7.jpg")}
          style={{
            width: 30,
            height: 35,
            borderRadius: 100,
            // marginLeft: 20,
            // position: "relative",
            // top: isOpen === item.eventId ? "-30%" : "-30%",
            marginTop: 1,
          }}
        />
        <View
          style={{
            marginTop: 10,
            // position: "relative",
            // display: isOpen === item.eventId ? "flex" : "none",
            // top: isOpen === item.eventId ? "-35%" : "-34%",
            // left: isOpen === item.eventId ? "14%" : "14%",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 13,
              fontWeight: "600",
            }}
          >
            PrincessNokia
          </Text>
        </View>
      </View>

      {/*Event invitation type  */}
      <View
        style={{
          backgroundColor:
            categoryLayoutState === item.eventId
              ? "rgba(0, 0, 0,0.4)"
              : "rgba(0, 0, 0,0.7)",
          borderRadius: 4,
          alignItems: "center",
          display: categoryLayoutState === item.eventId ? "none" : "flex",
          //  display: isOpen === item.eventId ? "flex" : "none",
          height: 20,
          width: categoryLayoutState ? 98 : 98,
          flexDirection: "row",
          position: "absolute",
          padding: 1,
          gap: 5,
          borderWidth: categoryLayoutState === item.eventId ? 0 : 1,
          borderColor:
            categoryLayoutState === item.eventId
              ? "rgba(255, 255, 250,0.2)"
              : "rgba(255, 255, 250,0.3)",
          top: categoryLayoutState === item.eventId ? "0%" : "3.4%",
          left: categoryLayoutState === item.eventId ? "11%" : "71%",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <WorldIcon width={"12"} height={"12"} />
        <Text style={{ color: "white" }}>WorldWide</Text>
      </View>

      <View
        style={{
          // backgroundColor: "yellow",
          width: "20%",
          flexDirection: "row",
          // justifyContent: "flex-end",
          gap: 7,
          // marginRight: "1%",
          display: categoryLayoutState === item.eventId ? "none" : "flex",
          marginTop: 4,
          left: categoryLayoutState === item.eventId ? "83%" : "83%",
          top: categoryLayoutState === item.eventId ? "91%" : "92.3%",
          // display: "none",
          position: "absolute",
          zIndex: 1,
        }}
      >
        <View
          style={{
            width: 7,
            height: 7,
            borderRadius: 100,
            borderWidth: 0.5,
            borderColor: "white",
            backgroundColor: "white",
          }}
        ></View>
        <View
          style={{
            width: 7,
            height: 7,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: "white",
          }}
        ></View>
        <View
          style={{
            width: 7,
            height: 7,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: "white",
          }}
        ></View>
        <View
          style={{
            width: 7,
            height: 7,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: "white",
          }}
        ></View>
      </View>

      <Image
        source={{ uri: item.ImageCoverUpload }}
        style={{
          width: categoryLayoutState === item.eventId ? 355 : 367,
          // height: 490,

          // height: isOpen === item.eventId ? 350 : 490,
          height: categoryLayoutState === item.eventId ? 340 : 500,

          borderRadius: 9,
          //  paddingRight: 30,
        }}
      />
    </View>
  );
};

export default EventCoverSlide;
