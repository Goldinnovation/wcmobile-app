import { View, Text, TouchableOpacity } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'
import PlusIcon from "../../../icons/plusIcon"
import LockerIcon from "../../../icons/lockerIcon"


const FriendsPageStructure = () => {

    return(
    <View style={{
        // backgroundColor: "green", 
        width: "100%", 
        height: "100%",
     //    padding: 5
    }}>
        <View style={{
             height: "10%",
             backgroundColor:"rgba(149,149,149,0.3)",
            //  borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             marginTop: "3%",
             width: "100%",
          //    paddingRight: "2%",
             display: "flex",
             flexDirection: "row",

             alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,

        }}>
            <Text style={{
            color: "white", 
            fontWeight: "500"
        }}> Overview</Text>
        

            
        
        </View>
     
        <View style={{
          //   backgroundColor: "pink", 
            width: "100%", 
            height: "100%",
            marginTop: "3%",
            gap: 22,
            padding: 5


        }}>
        <View style={{
             width: "100%", 
             height: "60%",
          //    backgroundColor: "orange", 
             gap: 15

        }}>

     

            {/* Follower Section */}
             {/* <View style={{
             height: "2%",
             backgroundColor:"rgba(149,149,149,0.3)",
             borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "100%",
             paddingLeft: "2%",
            //  alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
            
        
        </View> */}
        {/* <View style={{
             height: "18%",
             width: "100%",
             display: "flex",
             flexDirection: "row",
            //  backgroundColor:"green",
               // justifyContent: "space-between",
            //    gap: 20,
               alignItems: "center",



        }}>    */}
         {/* Label Section */}
        {/* <View style={{
             height: "90%",
             backgroundColor:"rgba(149,149,149,0.3)",
            //  borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "100%",
          //    paddingRight: "2%",
             display: "flex",
             flexDirection: "row",

             alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,

        }}>
            <Text style={{
            color: "white", 
            fontWeight: "500"
        }}> Overview</Text>
        

            
        
        </View> */}
        {/* <View style={{
             height: "90%",
             backgroundColor:"rgba(149,149,149,0.3)",
             borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "2%",
             paddingLeft: "2%",
            //  alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
            
        
        </View> */}
        
        {/* Add Section  */}
        {/* <View style={{
             height: "90%",
             backgroundColor:"rgba(149,149,149,0.3)",
             borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "12%",
            //  paddingLeft: "2%",
             alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
               
           
        <PlusIcon width="17" height="18"/>

        
        
        </View> */}
          {/* <View style={{
             height: "90%",
             backgroundColor:"rgba(149,149,149,0.3)",
            //  borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "12%",
            //  paddingLeft: "2%",
             alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
               
            
                <LockerIcon width="20" height="20" />

        
        
        </View> */}

{/* 
        <View style={{
             height: "90%",
             backgroundColor:"rgba(149,149,149,0.3)",
             borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "2%",
             paddingLeft: "2%",
            //  alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
            
        
        </View> */}
       

      
        {/* </View> */}
               
        <View style={{
             height: "2%",
             backgroundColor:"rgba(149,149,149,0.3)",
             borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "100%",
             paddingLeft: "2%",
            //  alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
            
        
        </View>
       
        <View style={{
             height: "15%",
            //  backgroundColor:"rgba(149,149,149,0.3)",
            //  borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "100%",
            //  paddingLeft: "2%",
             alignItems: "center",
             justifyContent: "space-between",
             opacity: 0.8,
             display: "flex",
             flexDirection: "row",
             gap: 10

             

        }}>
              <View style={{
             height: "100%",
             backgroundColor:"rgba(149,149,149,0.3)",
            // backgroundColor:"red",
          //    borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "30%",
            //  paddingLeft: "2%",
             alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
             <Text style={{
            color: "white"
        }}> Followers: </Text>
        


        </View>
        <TouchableOpacity style={{
             height: "100%",
             backgroundColor:"rgba(149,149,149,0.3)",
          //   backgroundColor:"red",
             borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "20%",
            //  paddingLeft: "2%",
               display: "flex", 
              flexDirection: "row",
             alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
          <View style={{
               width: "70%",
               height: "100%", 
               // backgroundColor:"green",
               display: "flex", 
               alignItems: "center", 
               justifyContent: "center", 
               flexDirection: "row"


          }}>
          <Text style={{
            color: "white", 
            fontWeight: "500"
        }}> 2930 </Text>
          </View>

          <View style={{
                width: "30%",
                height: "100%", 
               //  backgroundColor:"orange",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                flexDirection: "row"

 
          }}> 
                     <View style={{
                         // backgroundColor: "red", 
                         borderColor: "rgba(255, 255, 255,0.5)",
                         borderWidth: 1,
                         height: "30%",
                         width: "50%", 
                         borderRadius: 50


                     }}> 

                    </View>
          </View>
            
        


        </TouchableOpacity>
           
        </View>


        {/* Following Section  */}
        <View style={{
             height: "2%",
             backgroundColor:"rgba(149,149,149,0.3)",
             borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "100%",
             paddingLeft: "2%",
            //  alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
            
        
        </View>
        <View style={{
             height: "15%",
          //    backgroundColor:"rgba(149,149,149,0.3)",
            //  borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "100%",
            //  paddingLeft: "2%",
             alignItems: "center",
             justifyContent: "space-between",
             opacity: 0.8,
             display: "flex",
             flexDirection: "row",
             gap: 10

             

        }}>
          {/* Following Label   */}
          <View style={{
             height: "100%",
             backgroundColor:"rgba(149,149,149,0.3)",
            // backgroundColor:"red",
          //    borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "30%",
            //  paddingLeft: "2%",
             alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
             <Text style={{
            color: "white"
        }}> Following: </Text>
        


        </View>

        
        {/* Following Number */}
        <TouchableOpacity style={{
             height: "100%",
             backgroundColor:"rgba(149,149,149,0.3)",
          //   backgroundColor:"red",
             borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "20%",
            //  paddingLeft: "2%",
             alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
          flexDirection: "row"
             

        }}>
           
         <View style={{
               width: "70%",
               height: "100%", 
               // backgroundColor:"green",
               display: "flex", 
               alignItems: "center", 
               justifyContent: "center", 
               flexDirection: "row"


          }}>
          <Text style={{
            color: "white", 
            fontWeight: "500"
        }}> 559 </Text>
          </View>

          <View style={{
                width: "30%",
                height: "100%", 
               //  backgroundColor:"orange",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                flexDirection: "row"

 
          }}> 
                     <View style={{
                         // backgroundColor: "red", 
                         borderColor: "rgba(255, 255, 255,0.5)",
                         borderWidth: 1,
                         height: "30%",
                         width: "50%", 
                         borderRadius: 50


                     }}> 

                    </View>
          </View>
        


        </TouchableOpacity>
           
        </View>

     
        {/* Friends Section */}
        <View style={{
             height: "2%",
             backgroundColor:"rgba(149,149,149,0.3)",
             borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "100%",
             paddingLeft: "2%",
            //  alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
            
        
        </View>
        
        <View style={{
             height: "15%",
          //    backgroundColor:"rgba(149,149,149,0.3)",

            //  borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "100%",
            //  paddingLeft: "2%",
             alignItems: "center",
             justifyContent: "space-between",
             opacity: 0.8,
             display: "flex",
             flexDirection: "row",
             gap: 10

             

        }}>

          {/* Friends Label */}
          <View style={{
             height: "100%",
             backgroundColor:"rgba(149,149,149,0.3)",
            // backgroundColor:"red",
          //    borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "30%",
            //  paddingLeft: "2%",
             alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             

        }}>
             <Text style={{
            color: "white"
        }}> Friends: </Text>
        


          </View>

        {/* Friends Number */}
          <TouchableOpacity style={{
             height: "100%",
             backgroundColor:"rgba(149,149,149,0.3)",
            // backgroundColor:"red",
             borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "20%",
            //  paddingLeft: "2%",
             alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,
             flexDirection: "row"
             

        }}>
            
          <View style={{
               width: "70%",
               height: "100%", 
               // backgroundColor:"green",
               display: "flex", 
               alignItems: "center", 
               justifyContent: "center", 
               flexDirection: "row"


          }}>
          <Text style={{
            color: "white", 
            fontWeight: "500"
        }}> 120 </Text>
          </View>

          <View style={{
                width: "30%",
                height: "100%", 
               //  backgroundColor:"orange",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                flexDirection: "row"

 
          }}> 
                     <View style={{
                         // backgroundColor: "red", 
                         borderColor: "rgba(255, 255, 255,0.5)",
                         borderWidth: 1,
                         height: "30%",
                         width: "50%", 
                         borderRadius: 50


                     }}> 

                    </View>
          </View>
        


          </TouchableOpacity>
           
        </View>
        </View>


        {/* Friends View */}
        {/* <View style={{
             height: "27%",
            //  backgroundColor:"red",
            backgroundColor:"rgba(149,149,149,0.3)",

             borderColor: "rgba(255, 255, 255,0.5)",
             borderWidth: 1,
             borderRadius: 7,
             width: "100%",
             display: "flex",
             flexDirection: "column",
             gap: 5,




            //  paddingLeft: "2%",
             alignItems: "center",
            //  justifyContent: "s",
             opacity: 0.8,
             

        }}> */}

        {/* Menu Room Section */}
        {/* <View style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            // backgroundColor:"pink",
            alignItems: "center",
             justifyContent: "center",
             opacity: 0.8,

        }}>
              <Text style={{
            color: "white", 
            fontWeight: "500"
        }}> In process </Text>
        </View> */}

       
               
            
        
        {/* </View> */}

        </View>
       


    </View>
    )
}

export default FriendsPageStructure