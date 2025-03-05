import { View, Text, TouchableOpacity } from "react-native"
import UploadProfilePicIcon from "../../../icons/uploadProfilePicIcon"



const EventCoverLayer = () => {


  return (
    <View
        style={{
          // backgroundColor: "green",
          height: "30%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            // backgroundColor: "blue",
            height: "20%",
            width: "98%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: 200,
            }}
          >
            Upload an event cover
          </Text>

          <View></View>
        </View>

        <View
          style={{
            // backgroundColor: "grey",
            width: "98%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              //  backgroundColor: "yellow",
              height: "80%",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 7,
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <UploadProfilePicIcon height="80" width="45" />
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default EventCoverLayer
