import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import UserInterestList from "../../assets/lnterestList/userInterestList";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";











export default function InterestDataList() {
  const [pickedIntesrest, setPickedInterest] = useState<string[]>([]);
  const [selectedInterest, setSelectedInterest] = useState<number>(0);
  const [totallenofInterest, setTotallenofInterest] = useState<number>(0);

  const navigation = useNavigation()



  

  const toggleItem = (item: any) => {

    setPickedInterest((prevSelectedInterest) => {
      if (prevSelectedInterest.includes(item)) {
        return prevSelectedInterest.filter((i) => i !== item);
      } else {
        return [...prevSelectedInterest, item];
      }
    });

  };

  useEffect(() => {
    if (pickedIntesrest) {
      // console.log(pickedIntesrest.length);

      const pickedInterestbyUserlen = pickedIntesrest.length;
      setSelectedInterest(pickedInterestbyUserlen);

      const totalInterestoptionlen = Object.keys(UserInterestList).length;
      setTotallenofInterest(totalInterestoptionlen);
      // console.log(Object.keys(UserInterestList).length);
    }
  }, [pickedIntesrest]);

  const handleInterestData = async() => {

 try{
      console.log("inside request call");
      const storedToken = await AsyncStorage.getItem('token')   
      const token = storedToken ? JSON.parse(storedToken).token : null;
      const API_URL = process.env.EXPO_PUBLIC_API_URL

      const res = await fetch(`${API_URL}/api/userInterest`, {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          'Authorization': `Bearer ${token.token}`


      }, 
      body: JSON.stringify({
          token,
          pickedIntesrest
      })
      })

      const data = await res.json()
      if(data?.message === "Interest are successfully stored"){
        navigation.navigate('UserExploreScreen' as never)
      }else{
        console.log('Error on respond data of handleInterestData ')
        navigation.navigate('Login' as never)

      }
      console.log(data);

 }catch(error){
     console.error('Error on Request api handler handleInterestData', error)
 }



  }
  console.log(pickedIntesrest);

  

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#000000", "#000000bb", "#000000", "#000000"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={styles.selectLayer}>
        {/* <View style={styles.selectfield}> */}
          <View style={styles.selectHeader}>
            <Text style={styles.selectHeader_Text}>Choose your Interests</Text>
            <View style={styles.pickedInterestSubText_header}>
              <Text style={{ color: "white", fontWeight: 200, fontSize: 12 }}>
              To discover unique events that suits your dreams
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 350,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.selectOptions}>
              <FlatList
                // style={styles.Selectlist}
                data={UserInterestList}
                numColumns={3}
                contentContainerStyle={{ gap: 9 }}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    key={index.toString()}
                    onPress={() => toggleItem(item.name)}
                  >
                    <View
                      style={[
                        styles.InterestItem,

                        {
                          backgroundColor: pickedIntesrest.includes(item.name)
                            ? "rgb(117, 0, 4)"
                            : "rgba(255, 255, 255, 0.4)",
                          borderColor: pickedIntesrest.includes(item.name)
                            ? ' borderColor: "rgb(117, 0, 4)"'
                            : "rgb(180, 180, 180)",
                          borderWidth: 2,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color: pickedIntesrest.includes(item.name)
                            ? "white"
                            : "black",

                          fontWeight: 700,
                        }}
                      >
                        {" "}
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>

          <View style={styles.selectvalueAndBtn}>
            <View style={styles.pickedInterestText}>
              <Text style={{ color: "white", fontWeight: 700 }}>
                Select minimum 5 different Interests: {selectedInterest}{" "}
              </Text>
            </View>
            <View style={styles.pickedInterestSubText}>
              <Text style={{ color: "white", fontWeight: 200, fontSize: 12 }}>
                The interest options can be modified at any time through the
                app's settings menu
              </Text>
            </View>
            <View style={styles.InterestBtnLayer}>
              <TouchableOpacity
                style={
                  selectedInterest >= 5
                    ? styles.readyToGobtn
                    : styles.InterestBtn
                }
                onPress={handleInterestData}
              >
                <Text
                  style={{
                    color: selectedInterest >= 5 ? "white" : "black",
                    fontWeight: selectedInterest >= 5 ? "700" : "400",
                  }}
                >
                  Ready To Go
                </Text>
              </TouchableOpacity>
            </View>
          {/* </View> */}
        </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink",
    // paddingTop: 40,
    justifyContent: "center",
    position: "relative",
  },
  gradient: {
      ...StyleSheet.absoluteFillObject,

  },
  selectLayer: {
    // backgroundColor: "yellow",
    width: "100%",
    // height: 300,
    flex: 1,
    paddingBottom: 40,

    justifyContent: "center",

    // flexDirection: "row"
  },
  selectHeader: {
    // backgroundColor: "lightblue",
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  selectHeader_Text: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
  selectOptions: {
    // backgroundColor: "rgba(255, 255, 255, 0.1)",
    // backgroundColor: "green",

    width: "100%",
    height: 400,
    // shadowColor: " rgba(0, 0, 0, 0.1)",
    // shadowRadius: 4,
    flex: 1,
    marginTop: 15,
  },
  // Selectlist:{
  // backgroundColor: "pink",
  // flexDirection: 'row',
  // width: "100%",
  // height: 200,
  // flexWrap: "wrap",
  // marginTop: 25,

  // justifyContent: "center"

  // },
  InterestItem: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 50,
    margin: 11,
    borderColor: "rgb(180, 180, 180)",
  },
  InterestpropertyChecked: {
    backgroundColor: "rgb(73, 131, 0)",
    width: "30%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "rgb(73, 131, 0)",
  },
  selectvalueAndBtn: {
    // backgroundColor: "grey",
    width: "100%",
    height: 120,
  },
  pickedInterestText: {
    // backgroundColor: "orange",
    // backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    width: "100%",
    height: 30,
    justifyContent: "center",
  },
  pickedInterestSubText: {
    // backgroundColor: "orange",
    alignItems: "center",
    width: "100%",
    height: 40,
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 5,
    paddingLeft: 20,
  },
  pickedInterestSubText_header: {
      paddingTop: 10,
      // backgroundColor: "orange",

  },
  InterestBtnLayer: {
    // backgroundColor: "orange",
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  InterestBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: "70%",
    height: 50,
    borderWidth: 2,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  readyToGobtn: {
    backgroundColor: "rgba(24,116,205, 0.7)",
    width: "70%",
    height: 50,
    borderWidth: 2,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(2, 35, 214, 0.2)",
  },
  linearGradient: {
    flex: 1,
  },
});
