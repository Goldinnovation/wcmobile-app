import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import AddFriendsIcon from '../../icons/addFriendsIcon'
import PuzzleIcon from '../../icons/puzzleIcon'

export default function SearchpageStructure() {
    const [searchMenuToggle, setSearchMenuToggle] = useState(false)
    const [addUserToggle, setAddUserToggle] = useState(true)
    const [eventToggle, setEventToggle] = useState(false)


    const handleToggleSearchMenu = () => {
        setSearchMenuToggle(!searchMenuToggle)
    }

    const handleEventToggle = () => {
        setAddUserToggle(false)
        setEventToggle(true)
    }

    const handleUserToggle = () => {
        
        setEventToggle(false)
        setAddUserToggle(true)
    }
  return (
    <View style={styles.container}>

        <View style={{
            height: "15%",
            // backgroundColor: "orange",
            alignItems: "center",
            padding: 5,
            flexDirection: "row",
            gap: 10



        }}>
            <View style={{
                width: "80%",
                height: "50%", 
                backgroundColor: "rgba(255, 255, 255,0.1)",
                borderRadius: 7,
                borderWidth: 1, 
                borderColor: "rgba(255, 255, 255,0.5)"

            }}>
                <Text>Hello</Text>
            </View>

            <TouchableOpacity style={{
                width: "15%",
                height: "50%", 
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(70,70,70,0.3)",
                borderRadius: 5,
                borderWidth: 1, 
                borderColor: "rgba(255, 255, 255,0.1)",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 1,

            }}
            
            onPress={() => handleToggleSearchMenu()}
            >
                {
                    eventToggle 
                    
                    ? <PuzzleIcon width={'29'} height={'21'} />

                    : <AddFriendsIcon width={'21'} height={'21'} />

                }
            

            </TouchableOpacity>


            { searchMenuToggle  &&
            (
                <View style={{
                    position: "absolute", 
                    top: "100%",
                    left: "85%",
                    zIndex: 3,
                    width: "14%",
                    height: "180%",
                    backgroundColor: "rgba(255, 255, 255,0.1)",
                    borderRadius: 50,
                    borderWidth: 1, 
                    borderColor: "rgba(255, 255, 255,0.5)",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    // gap: 20
    
    
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: addUserToggle ? "rgba(70,70,70,0.4)" : "rgba(0,0,0,0)",
                        width: "100%",
                        height: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        borderBottomWidth: 1,
                        borderBottomColor: "rgba(255, 255, 255,0.5)"
                    }}
                    onPress={() => handleUserToggle()}
                    >
                    <AddFriendsIcon width={'21'} height={'21'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: eventToggle ? "rgba(70,70,70,0.4)" : "rgba(0,0,0,0)",
                        width: "100%",
                        height: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50
                    }}

                    onPress={() => handleEventToggle()}
                    >
                    <PuzzleIcon width={'29'} height={'21'} />
                    </TouchableOpacity>
                    
    
                </View>
            )}
           
        </View>
        
      
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
    //   backgroundColor: "red",
    //   flex: 1,
     height: "100%",
    //   justifyContent: "center",
    //   paddingTop: 50,

    },
 
 

})