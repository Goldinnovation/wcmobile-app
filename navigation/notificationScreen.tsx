import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import NotificationPageStructure from '../component/notification_Component/notificationPageStructure';

export default function NotificationScreen() {
  return (
    <View  style={styles.container}>
        <NotificationPageStructure/>

      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(35, 32, 32, 0.99)",
      // flex: 1,
      height: "100%",
      //   justifyContent: "center",
      paddingTop: 50,
    },
  
   
  });