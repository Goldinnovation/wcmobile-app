import React from "react";
import { View,Text } from "react-native"
import QRCode from 'react-native-qrcode-svg';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



interface userProps {
    userData: any
}


const QrcodePageStructure: React.FC<userProps> = ({userData}) => {


    const data = userData
    const userId = data?.userId
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const userEndpoint = String(`${apiUrl}/api/userQRRequest?Id=${encodeURIComponent(btoa(userId.toString()))}`);




    return(
        <View style={{
            height: "80%", 
            width:"100%",
            display:"flex", 
            justifyContent: "center",
            alignItems: "center"
        }}>
            <QRCode
            value={userEndpoint}
            size={290}
            
            />
        </View>
    )
}
export default QrcodePageStructure