import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Pressable, FlatList,  TouchableOpacity, ScrollView} from "react-native"
import Checkbox from "expo-checkbox";
import UserInterestList from "../../assets/lnterestList/userInterestList";
import { LinearGradient } from "expo-linear-gradient";







export default function InterestDataList(){
   
    const [pickedIntesrest, setPickedInterest] = useState<string[]>([])
    const [selectedInterest,setSelectedInterest] = useState<number>(0)
    const [totallenofInterest, setTotallenofInterest] = useState<number>(0)

    





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

   useEffect(() => {

    if(pickedIntesrest){
        // console.log(pickedIntesrest.length);

        const pickedInterestbyUserlen = pickedIntesrest.length
       setSelectedInterest(pickedInterestbyUserlen)
        
       
        
        const totalInterestoptionlen = Object.keys(UserInterestList).length
        setTotallenofInterest(totalInterestoptionlen)
        // console.log(Object.keys(UserInterestList).length);
    }

   }, [pickedIntesrest])

//    useEffect(() => {

//    })

//    if(selectedInterest === 5){
//     console.log("r");
//    }

    // console.log(selectedInterest);

   
    
  


    return(
        <View style={styles.container}>
           
            <View style={styles.selectLayer}>

                <View style={styles.selectHeader}>
                <Text style={styles.selectHeader_Text}>Choose your Interests</Text>
                </View> 
                <View style = {{ height: 350, justifyContent: "center", alignItems: "center"}}>

                
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

                                { backgroundColor: pickedIntesrest.includes(item.name) ?  "rgb(117, 0, 4)": "rgba(255, 255, 255, 0.4)", 
                                    borderColor: pickedIntesrest.includes(item.name) ? ' borderColor: "rgb(117, 0, 4)"' : 'rgb(180, 180, 180)',
                                    borderWidth: 2,
                                    
                                },
                                
                            ]}>
                               
                                <Text style={{color: pickedIntesrest.includes(item.name) ?  "white": "black",
                                    
                                    fontWeight: 700}}> {item.name}</Text>
                               
                            </View>

                        </TouchableOpacity>
                    )
                    
                    }
                  
                    
                    />
                       


                 
                 

                </View>

                </View>


                <View style={styles.selectvalueAndBtn}>
               
                <View style={styles.pickedInterestText}>
                    <Text style={{color: "white", fontWeight: 700}}>Select minimum 5 different Interests: {selectedInterest}  </Text>

                </View>
                <View style={styles.pickedInterestSubText}>
                    <Text style={{color: "white", fontWeight: 200, fontSize: 12, }}>The interest options can be modified at any time through the app's settings menu</Text>

                </View>
                <View style={styles.InterestBtnLayer}>
                
                    <TouchableOpacity style={selectedInterest >= 5 ? styles.readyToGobtn : styles.InterestBtn }>
                        <Text style={{
                            color: selectedInterest >=5 ? "white": "black",
                            fontWeight: selectedInterest >= 5 ? "700": "400",

                            
                            }}>Ready To Go</Text>
                    </TouchableOpacity>
                    


                </View>
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
    },
    pickedInterestText: {
        // backgroundColor: "orange",
        // backgroundColor: "rgba(255, 255, 255, 0.1)",
        alignItems: "center",
        width: "100%",
        height: 30,
        justifyContent: "center"
    }, 
    pickedInterestSubText: {
        // backgroundColor: "orange",
        alignItems: "center",
        width: "100%",
        height: 40,
        justifyContent: "center",
        flexWrap: "wrap",
        padding: 5,
        paddingLeft: 20

    },
    InterestBtnLayer: {
        // backgroundColor: "orange",
        width: "100%",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10

    }, 
    InterestBtn: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        width: "70%",
        height: 50, 
        borderWidth: 2,
        borderRadius:7,
        alignItems: "center", 
        justifyContent: "center",
        borderColor: "rgba(255, 255, 255, 0.2)"


    }, 
    readyToGobtn: {
        backgroundColor: "rgba(24,116,205, 0.7)",
        width: "70%",
        height: 50, 
        borderWidth: 2,
        borderRadius:7,
        alignItems: "center", 
        justifyContent: "center",
        borderColor: "rgba(2, 35, 214, 0.2)"

    }, 
    linearGradient: {
        flex: 1,
    }


})


