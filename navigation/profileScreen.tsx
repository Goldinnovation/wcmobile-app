import { View } from "react-native";
import React from "react";
import ProfilePageStructure from "../component/profile_Component/Profile/profilePageStructure";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function ProfileScreen() {
  const { profileState } = useSelector(
    (state: RootState) => state.ProfilePageUpdate
  );


  return (
    <View style={{ flex: 1 }}>
      <ProfilePageStructure />
    </View>
  );
}
