import React from "react";
import { View,Text } from "react-native"
import QRCode from 'react-native-qrcode-svg';



interface userProps {
    userData: any
}


const QrcodePageStructure: React.FC<userProps> = ({userData}) => {


    const data = userData
    const userEmail = data?.userEmail

    
    const API_URL = process.env.EXPO_PUBLIC_API_URL;

    const qrCodeValue = String(`${API_URL}/api/${userEmail}`);
    return(
        <View>
            <QRCode
            value={qrCodeValue}
            size={290}
            
            />
        </View>
    )
}
export default QrcodePageStructure