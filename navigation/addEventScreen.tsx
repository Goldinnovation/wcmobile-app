import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { FlipInEasyX } from "react-native-reanimated";

const AddEventScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View
      style={{
        height: "100%",
        // flex: 1,
        backgroundColor: "black",
        // paddingTop: 40,
        borderTopWidth: 1,
        borderColor: "rgba(179,179,179,1)",
        borderRadius: 11,
      }}
    >
      <View
        style={{
          height: "5%",
          width: "100%",
          // backgroundColor: "skyblue",
          // position: "absolute",
          // top: "1%",
          // left: "80%",
          // zIndex: 3,
          marginTop: 10,
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            height: "100%",
            width: "15%",
            // backgroundColor: "orange",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
          // onPress={handleQCloseEvent}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              color: "red",
              fontSize: 23,
              fontWeight: "bold",
            }}
          >
            X
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: "8%",
          // backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 25, textAlign: "center" }}>
          Create your Event
        </Text>
      </View>

      {/* Image Upload or Create Image Section */}
      <View
        style={{
          height: "15%",
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <View style={{
          height: 70,
          width: "40%",
          backgroundColor: "white",
          borderRadius: 7,
          justifyContent: "center",
          alignItems: "center",
          margin: 10
        }}><Text>1</Text></View>


        <View style={{
          height: 70,
          width: "40%",
          backgroundColor: "white",
          borderRadius: 7,
          justifyContent: "center",
          alignItems: "center",
          margin: 10
        }}><Text>2</Text></View>
        
      </View>

      
      
        
      
      
    </View>
  );
};

export default AddEventScreen;
