import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { Modalize } from "react-native-modalize";
import type { Modalize as ModalizeType } from 'react-native-modalize'
import { useRef, forwardRef, useImperativeHandle} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MoreEventsArrow from '../../../icons/moreEventsArrow';
import { useScroll } from 'framer-motion';
import MenuBarBurgerIcon from '../../../icons/menuBarBurgerIcon';


interface eventFavorData {
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


 interface modelStateProps {
    eventData: eventFavorData | null
    ref: any
 }
const SelectedEventModel: React.FC<modelStateProps> = forwardRef(({eventData}, ref) => {
    const modalizeRef = useRef<ModalizeType>(null);
    const [showMoreEventsState, setShowMoreEventsState] = useState(false)

    //   export default handleModelUpdate(){ 
    //     modalizeRef.current?.open()
    // };
    useImperativeHandle(ref, () => ({
        handleModelUpdate(){
            modalizeRef.current?.open();

        }
    }))
   

    const handleShowMoreEvents = () => {
        setShowMoreEventsState(!showMoreEventsState)

    }
   
  
    
   
  return (
    <View>
      <Modalize 
         ref={modalizeRef} 
         snapPoint={600}
         modalHeight={600} 
         modalTopOffset={130}
        //  panGestureEnabled={false}
         rootStyle={styles.rootStyle}
         modalStyle={
            styles.ModalizeStyle
         }
         scrollViewProps={{
            scrollEnabled: false,  // Disable scroll inside the modal
          }}
        //  adjustToContentHeight={true}
         disableScrollIfPossible={false}
         >
        <View style={{  }}>
          <View style={{
            backgroundColor: "rgba(96,96,96,1)",
            height: 600
          }}>
                     <LinearGradient
                    colors={['black', "#575757", '#000000bb', 'black']}
                    // colors={['black', 'purple', 'black']}

                    // colors={['black','orange','silver', 'purple', 'green']}

                    // colors={['#000000', '#000000bb', 'rgba(35, 32, 32, 0.447)', '#000000']}
                    style={styles.gradient}
                    start={{ x: 0, y: 1}}
                    end={{ x: 0, y: 0 }}
                    >
                        <View style={{
                            height: 470,
                            // backgroundColor: "pink",
                            flexDirection: "column",
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5

                        }}>
                             <TouchableOpacity style={{
                                        position: "absolute",
                                        top: "3%",
                                        left: showMoreEventsState ? "90%" : "89%",
                                        zIndex: 5
                                    }}
                                    onPress={() => handleShowMoreEvents()}
                                    >
                                        {
                                            showMoreEventsState 
                                            ?  <MoreEventsArrow width={"20"} height={"20"}/>
                                            : <MenuBarBurgerIcon  width={"30"} height={"30"} />

                                        }
                                        
                                    </TouchableOpacity>
                          
                            <View style={{
                                // backgroundColor: "orange",
                                flexDirection: "row",
                                height: 470
                            }}>
                                <View style={{
                                    // backgroundColor: "grey",
                                    width: showMoreEventsState ? "80%" : "100%",
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5
                                }}>
                                   
                                    <Image
                                            source={{ uri: eventData?.ImageCoverUpload }}
                                            style={{
                                                height: 470,
                                                width: showMoreEventsState ? 300 : 380,
                                                opacity: 0.9,
                                                borderTopLeftRadius: 5,
                                                borderTopRightRadius: 5
                                                // borderRadius: 5,
                                        
                                                //  paddingRight: 30,
                                    }}/>
                                </View>
                                {
                                    showMoreEventsState && (
                                        <View style={{
                                            // backgroundColor: "red",
                                             width:showMoreEventsState ? "20%" : "0%"
                                        }}>
                                            <Text>3</Text>
                                        </View>
                                    )
                                }
                                

                            </View>

                        </View>
                        <View
                        style={{
                            height: 130,
                            // backgroundColor: "green"
                        }}
                        
                        >
                            <View style={{
                                backgroundColor:"rgba(187,187,187,0.5)", 
                                borderWidth: 1, 
                                borderColor: "white", 
                                borderRadius: 100,
                                position: "absolute",
                                height: 125, 
                                width: 125,
                                zIndex:3,
                                top: "1%",
                                left: "32.9%"
                            }}></View>
                            <View style={{
                                // backgroundColor: "red",
                                height: 65,
                                flexDirection: "row",
                                justifyContent: "center",
                                paddingTop: 1

                            }}> 
                            <View style={{
                                // backgroundColor: "skyblue",
                                width: 70,
                                justifyContent:"center", 
                                alignItems:"center",
                                borderRightWidth: 1, 
                                borderRightColor: "white"
                            }}
                            > 
                            <Text>2</Text>
                            </View>
                            <View style={{
                                width: 70, 
                                // backgroundColor: "purple",
                                justifyContent:"center", 
                                alignItems:"center",
                             
                                

                            }}
                            >
                                <Text>3</Text>
                            </View>
                            
                            </View>
                            <View style={{
                                // backgroundColor: "orange",
                                height: 65,
                                  flexDirection: "row",
                                justifyContent: "center",
                                paddingBottom: 4

                            }}>
                                <View style={{
                                // backgroundColor: "yellow",
                                width: 70,
                                justifyContent:"center", 
                                alignItems:"center",
                                borderRightWidth: 1, 
                                borderRightColor: "white",
                                   borderTopWidth: 1,
                                borderTopColor: "white"

                            }}
                            > 
                            <Text>2</Text>
                            </View>
                            <View style={{
                                width: 70, 
                                // backgroundColor: "blue",
                                justifyContent:"center", 
                                alignItems:"center",
                                borderTopWidth: 1,
                                borderTopColor: "white"
                            }}
                            >
                                <Text>3</Text>
                            </View>
                            </View>
                        </View>
                    </LinearGradient>
            <View>
                
            </View>
          </View>
        </View>
        </Modalize>
    </View>
  )
})

export default SelectedEventModel


const styles = StyleSheet.create({
  
    rootStyle: {
    //   backgroundColor: "blue"
    },
    ModalizeStyle: {
    //   backgroundColor: "blue"
     },
      gradient: {
        ...StyleSheet.absoluteFillObject,
      },
       
  });
