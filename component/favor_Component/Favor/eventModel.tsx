import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { Modalize } from "react-native-modalize";
import type { Modalize as ModalizeType } from 'react-native-modalize'
import { useRef, forwardRef, useImperativeHandle} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MoreEventsArrow from '../../../icons/moreEventsArrow';
// import { useScroll } from 'framer-motion';
import MenuBarBurgerIcon from '../../../icons/menuBarBurgerIcon';
import InfoEventIcon from '../../../icons/InfoIcon';
import SoundIcon from '../../../icons/soundIcon';
import MapEventIcon from '../../../icons/mapIcon';

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
         snapPoint={620}
         modalHeight={620} 
         modalTopOffset={150}
        //  panGestureEnabled={false}
         rootStyle={styles.rootStyle}
         modalStyle={
            styles.ModalizeStyle
         }
         scrollViewProps={{
            scrollEnabled: false,  // Disable scroll inside the modal
          }}
         adjustToContentHeight={false}
         disableScrollIfPossible={false}
         >
        <View style={{  }}>
          <View style={{
            // backgroundColor: "pink",
            // flex: 1,
            height: 700,
            width: "100%"
          }}>
              
                        <View style={{
                            height: 710,
                            // backgroundColor: "green",
                            flexDirection: "column",
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            // paddingTop: "40%"

                        }}>

                            <View style={{
                                        // marginLeft: 5
                                        backgroundColor: "rgba(13,13,13,0)",
                                        alignItems: "center", 
                                        width: "100%",
                                        height: 50,
                                        justifyContent: "center",
                                        position: "absolute", 
                                        top: "0%",
                                        left: "0%", 
                                        zIndex: 3
                                    }}>
                                        <Text style={{
                                            fontSize: 14, 
                                            fontWeight: 600, 
                                            color: "white",
                                            // textAlign: "center",
                                            opacity: 0.8
                                        }}>{eventData?.eventTitle}</Text>
                            </View>
                                {/* MenuBar for model */}
                            <View style={{
                                // backgroundColor: "skyblue",
                                width: 40, 
                                height: 250,
                                position: "absolute",
                                top: "47%",
                                left: "86%", 
                                zIndex: 3, 
                                alignItems: "center", 
                                gap: 40,
                                flexDirection: "column-reverse"
                                // flexDirection: "column",
                                // justifyContent:"space-between"

                            }}>
                            <TouchableOpacity style={{

                                
                                
                                }}
                                onPress={() => handleShowMoreEvents()}
                                >
                                {
                                    showMoreEventsState 
                                    ?  <MoreEventsArrow width={"20"} height={"20"}/>
                                    : <MenuBarBurgerIcon  width={"30"} height={"30"} />

                                }

                            </TouchableOpacity>
                            <View>
                                <InfoEventIcon  width={"22"} height={"22"}  color={"white"}/>
                            </View>

                            <View>
                                <MapEventIcon  width={"25"} height={"25"} color={"white"} />
                            </View>
                            <View>
                            <SoundIcon  width={"20"} height={"20"} color={"white"} />
                            </View>

                            </View>
                             
                          
                            <View style={{
                                // backgroundColor: "orange",
                                flexDirection: "column",
                                // height: 900, //470
                                flex: 1, 
                                // padding: 2
                            }}>
                                <View style={{
                                    // backgroundColor: "grey",
                                    width:  "100%",
                                    borderTopLeftRadius: 9,
                                    borderTopRightRadius: 9
                                }}>
                                   
                                    <Image
                                            source={{ uri: eventData?.ImageCoverUpload }}
                                            style={{
                                                height: showMoreEventsState ? 539 : 620,
                                                // flex: 1,
                                                width: "100%",
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
      backgroundColor: "Transparent"
    },
    ModalizeStyle: {
      backgroundColor: "rgba(32,32,32,0.99)"
     },
      gradient: {
        ...StyleSheet.absoluteFillObject,
      },
       
  });
