import { View, Text, Image, TouchableOpacity } from "react-native"
import ConnectContentSection from "./connectContent"
import InvitationContentSection from "./invitationContentSection"


interface NotificationContentSectionProps{

    connectToggle: boolean
    eventToggle: boolean
}




const NotificationContentSection: React.FC<NotificationContentSectionProps> =  ({
    connectToggle,
    eventToggle

}) => {


    return(
        <View style={{
            // backgroundColor: "grey", 
            width: "100%",
            height:"82%", 
            padding: 5

        }}>
            { connectToggle ? 
            (
                <View style={{
                    height:"100%", 
                    width: "100%", 
                    // backgroundColor: "pink",
                    padding: 5


                }}> 

                <ConnectContentSection/>
                
                </View>
            ): <View 
            
            style={{
                height:"100%", 
                width: "100%", 
                // backgroundColor: "green",


            }}>

                    <InvitationContentSection/>
            </View>
            
            }

        </View>
    )
}

export default NotificationContentSection