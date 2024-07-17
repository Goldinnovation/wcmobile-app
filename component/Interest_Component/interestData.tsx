import { useState } from "react"
import { View, Text, StyleSheet, Pressable, FlatList,  TouchableOpacity, ScrollView} from "react-native"
import Checkbox from "expo-checkbox";
import UserInterestList from "../../assets/lnterestList/userInterestList";





export default function InterestDataList(){
    const [checkedItems, setInterestValueChecked] = useState(null);
    const [updateColor, setUpdateColor] = useState(null)
    const [pickedIntesrest, setPickedInterest] = useState<string[]>([])

    





    const toggleItem = (index: any) =>  {
        // console.log(index);
        // setInterestValueChecked(index === checkedItems ? null: index)

       
        setPickedInterest((prevSelectedInterest) => {
            if(prevSelectedInterest.includes(index)){
                return prevSelectedInterest.filter(i => i !== index )
            }else{
                return [...prevSelectedInterest, index]
                
            }
        })
       

      
        console.log(pickedIntesrest);
       
    }

   
    
  


    return(
        <View style={styles.container}>
           
            <View style={styles.selectLayer}>

                <View style={styles.selectHeader}>
                <Text style={styles.selectHeader_Text}>Choose your Interests</Text>
                </View> 
                <View style = {{ height: 400, justifyContent: "center", alignItems: "center"}}>

                
                <View style={styles.selectOptions}>
                <FlatList
                // style={styles.Selectlist}
                     data={UserInterestList}
                     numColumns={3}
                    contentContainerStyle={{ gap: 9}}
                     renderItem={({item, index}) =>(
                        <TouchableOpacity
                        key={ index.toString()}
                        onPress={() => toggleItem(item.name)}
                        
                        >
                            <View style={[styles.InterestItem,

                                { backgroundColor: pickedIntesrest.includes(item.name) ?  "rgb(255,99,71)": "rgba(255, 255, 255, 0.4)", 
                                    borderColor: pickedIntesrest.includes(item.name) ? ' borderColor: "rgb(255,99,71)"' : 'rgb(180, 180, 180)',
                                    borderWidth: 2,
                                    
                                },
                                
                            ]}>
                               
                                <Text style={{color: "white"}}> {item.name}</Text>
                               
                            </View>

                        </TouchableOpacity>
                    )
                    
                    }
                  
                    
                    />
                       


                {/* <Text style={styles.Interestproperty}>movie</Text> */}
                 
                 

                </View>

                </View>


                <View style={styles.selectvalueAndBtn}>
                <Text>11111</Text>
                </View>


            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "pink",
        // paddingTop: 40,
        justifyContent: "center"
       
       

    },
    selectLayer: {

        // backgroundColor: "yellow",
        width: "100%", 
        height: 600,
        // flexDirection: "row",
       

        

    }, 
    selectHeader: {
        // backgroundColor: "lightblue",
        width: "100%", 
        height:80,
        justifyContent: "center", 
        alignItems: "center"

    }, 
    selectHeader_Text: {
      color: "white", 
      fontWeight: "700",
      fontSize: 20

    }, 
    selectOptions: {
        // backgroundColor: "rgba(255, 255, 255, 0.1)",
        // backgroundColor: "green",

        width: "100%", 
        height: 400,
        // shadowColor: " rgba(0, 0, 0, 0.1)",
        // shadowRadius: 4,
        flex: 1,
        marginTop: 20,
      
        
       
       
       

       
     
        

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
    InterestItem:{
        backgroundColor: "rgba(255, 255, 255, 0.4)",
         width: 100, 
         height: 30,
         justifyContent: "center",
         alignItems:"center",
         borderWidth: 2,
         borderRadius: 50,
         margin: 11,
         borderColor: "rgb(180, 180, 180)",
        

    },
    InterestpropertyChecked: {
        backgroundColor: "rgb(73, 131, 0)",
        width:"30%", 
        height: 30,
        justifyContent: "center",
        alignItems:"center",
        borderWidth: 2,
        borderRadius: 50,
        borderColor: "rgb(73, 131, 0)"
    },
    selectvalueAndBtn: {
        // backgroundColor: "grey",
        width: "100%", 
        height:120
    }
})


