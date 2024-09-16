import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { Modalize } from "react-native-modalize";
import type { Modalize as ModalizeType } from 'react-native-modalize'
import { useRef, forwardRef, useImperativeHandle} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MoreEventsArrow from '../../../icons/moreEventsArrow';
import { useScroll } from 'framer-motion';
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
         snapPoint={600}
         modalHeight={600} 
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
            // background: "Transparent",
            // flex: 1,
            height: 900,
            width: "100%"
          }}>
              
                        <View style={{
                            height: 900,
                            backgroundColor: "Transparent",
                            flexDirection: "column",
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            // paddingTop: "40%"

                        }}>

                            <View style={{
                                // backgroundColor: "skyblue",
                                width: 40, 
                                height: 250,
                                position: "absolute",
                                top: "1%",
                                left: "88%", 
                                zIndex: 3, 
                                alignItems: "center", 
                                gap: 40
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
                                <InfoEventIcon  width={"22"} height={"22"} />
                            </View>

                            <View>
                                <MapEventIcon  width={"25"} height={"25"} />
                            </View>
                            <View>
                                <SoundIcon  width={"25"} height={"25"} />
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
                                                height: showMoreEventsState ? 500 : 650,
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
