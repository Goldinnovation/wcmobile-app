import React from 'react'
import { View, StyleSheet} from 'react-native'
import { Modalize } from "react-native-modalize";
import type { Modalize as ModalizeType } from 'react-native-modalize'
import { useRef, forwardRef, useImperativeHandle} from 'react';


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

    //   export default handleModelUpdate(){ 
    //     modalizeRef.current?.open()
    // };
    useImperativeHandle(ref, () => ({
        handleModelUpdate(){
            modalizeRef.current?.open();
        }
    }))
   
   
  
    
   
  return (
    <View>
      <Modalize 
         ref={modalizeRef} 
         snapPoint={600}
         modalHeight={600} 
         modalTopOffset={130}
         rootStyle={styles.rootStyle}
         modalStyle={
            styles.ModalizeStyle
         }
        //  adjustToContentHeight={true}
         disableScrollIfPossible={true}
         >
        <View style={{ padding: 12, }}>
          <View>
                <View style={{
                    // backgroundColor: "pink",
                    height: 580,
                    borderWidth: 1, 
                    borderColor: "rgba(143,143,143,1)", 
                    borderRadius: 5


                }}></View>
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
      backgroundColor: "blue"
    },
    ModalizeStyle: {
      backgroundColor: "#282c35"
     }
       
  });
