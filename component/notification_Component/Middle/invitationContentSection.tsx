

import React, { useEffect, useState } from 'react'
import { View, Text, FlatList} from 'react-native'
import handleFirstEventDataCall from '../../../handler/Explore/apihandler/handleFirstEventDataCall'
import InvitationContent from './invitationContent'
import { useRef } from 'react'


const InvitationContentSection = () => {
    const [invitationData, setInvitationData] = useState(null)
    //   const flatListRef = useRef<FlatList<eventProps>>(null);
      



     useEffect(() => {
        const notificationCall = async() => {
            const exploreFetchedData = await handleFirstEventDataCall();
            setInvitationData(exploreFetchedData)
        }

        notificationCall()
     },[])
  return (
    <View style={{
        height:"100%", 
        width: "100%", 
        // backgroundColor: "pink",
        // padding: 5
    }}>
            <View style={{
                height:"100%", 
                width: "100%", 
                // backgroundColor: "orange",
                // padding: 5, 
                
                // display: "flex", 
                // flexDirection: "row"
            }}>
                {
                    invitationData ? (
                    <FlatList
                    data={invitationData}
                    // keyExtractor={(item) => item.eventId} 
                    renderItem={({ item, index }) => (
                      <InvitationContent
                        item={item}
                        index={index}
                      
                      />
                    )}
                    
                    />
                    ): 
                    (
                     <View>
                         <Text>Loading</Text>
                     </View>

                    )
                }

              


            </View>
    </View>
  )
}

export default InvitationContentSection
