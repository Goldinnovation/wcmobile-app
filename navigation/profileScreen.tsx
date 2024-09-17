import { View, Text, FlatList } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import React, {useState, useEffect} from "react"
import FavorData from "../component/profile_Component/favorpageStructure"
import ProfilePageStructure from "../component/profile_Component/Profile/profilePageStructure"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"


export default function ProfileScreen() {
    const {profileState} = useSelector((state: RootState) => state.ProfilePageUpdate )


        console.log("On Profile Navigator:", profileState);


    return(

        <View style={{ flex: 1 }}>
           
           { profileState === "Profile" && (
            <View style={{ flex: 1 }}>
                <ProfilePageStructure/>
            </View>

           )}
           { profileState === "Favor" && (
            <View style={{ flex: 1 }}>
                 <FavorData/>
            </View>

           )}

          

          
          
           
           
            
        </View>

        
    )
}