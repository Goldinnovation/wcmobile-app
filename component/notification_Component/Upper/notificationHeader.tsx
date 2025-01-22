import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import ArrowIcon from "../../../icons/arrowIcon";
// import ArrowIcon from "../../../icons/arrowIcon";


const NotificationHeader = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();


    return(
        <View
        style={{
          // height: 50,
          height: "6.5%",
          // backgroundColor: "green",
          display: "flex",
          // justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: "10%",
            left: "3%",
            zIndex: 3,
            width: "10%",
            height: 40,
            // backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          {/* <Image
        source={require("../assets/arr1.png")}
        style={{height: 25, width: 25,}}
        /> */}
          <ArrowIcon width={"20"} height={"20"} />
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            height: 50,
          //   backgroundColor: "blue",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
          //   paddingRight: 20,
          }}
        >
          <TouchableOpacity
            style={{
              // backgroundColor: "rgba(68,68,68,1)",
              height: "100%",
              width: "40%",
              // borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              // opacity: 0.8,
            }}
            // onPress={() => handlesetting()}
            onPress={() => navigation.goBack()}
          >
            {/* <FavorIcon width={"30"} height={"25"} lineColor="white" /> */}
            <Text style={{
              color: "white", 
              fontSize: 18
            }}>Notification</Text>
          </TouchableOpacity>
        </View>
    </View>
    )
}

export default NotificationHeader