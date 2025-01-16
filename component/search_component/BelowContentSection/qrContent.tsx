import { View, Text, Button, TouchableOpacity,} from "react-native"
import { CameraView, CameraType, useCameraPermissions, Camera} from 'expo-camera';
import { forwardRef, useImperativeHandle } from "react";
import { useState } from "react";
import { useEffect } from "react";
import AddFriendsIcon from "../../../icons/addFriendsIcon";
import OutlineScanIcon from "../../../icons/outlineScanIcon";
import PuzzleIcon from "../../../icons/puzzleIcon";
import SmileIcon from "../../../icons/smileIcon";
import { scale } from "react-native-size-matters";
// import { CameraView, Camera } from "expo-camera/next";
// import { CameraView, useCameraPermissions } from 'expo-camera/next'


interface qrocdeProps{

  handleUserisFound: ({type, data}: any ) => void
  userFollowState: boolean; 
  userData: any


}


const QrCodeContent =  forwardRef<any,qrocdeProps >(({handleUserisFound, userFollowState, userData},ref, ) => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [eventToggle, setEventToggle] = useState(true)
    const [friendsToggle, setFriendToggle] = useState(false)
    const [toggleState, setToggleState] = useState("Event")


 

      useImperativeHandle(ref, () =>({

        handleAkivateScann(){
          console.log('set Scann through to false ');
          setScanned(false)
        }
      }))


      const handleEventToggle = () => {
        setFriendToggle(false)
        setEventToggle(true)
        setToggleState("Events")

      }


      const handleFriendToggle = () => {
        setEventToggle(false)
        setFriendToggle(true)
        setToggleState("Friends")
      }

    const handleBarcodeScanned =  async({ type, data }: any) => {
      setScanned(true);
      console.log(type);
    

      const userisFounded = await handleUserisFound({type, data})

      setScanned

      // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
      }


    
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <Text style={{
             textAlign: 'center',
             paddingBottom: 10,
        }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

 
    return(
        <View style={{
            // backgroundColor: "pink",
            width: "100%", 
            height: "100%",
            borderRadius: 4,
            display: "flex", 
            // justifyContent: "center"
            // alignItems:"center"

        }}>

        {
          !scanned 
          &&
          // Scan section
           <View>
              <CameraView style={{
                  width: "100%",
                  height: "80%", 
                  // borderRadius: 40

              }}
              onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
              barcodeScannerSettings={{
                barcodeTypes: ["qr", "pdf417"],
              }}
              // barcodeScannerSettings={{}} 
              facing={facing}>
              <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  backgroundColor: 'transparent',
                  margin: 64,
              }}>
                  {/* Area to add content on the screen of the camera  */}
              {/* <TouchableOpacity
              style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
              }}
              //  onPress={}
              >
                  <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'white',
                  }}>Flip Camera</Text>
              </TouchableOpacity> */}
              </View>
          </CameraView>
          <View style={{
              width: "100%",
              height: "20%",
              display: "flex", 
              justifyContent: "center",
              alignItems:"center", 
              gap: 15,
              paddingTop: 15,
              // backgroundColor: "orange",


          }}>
           
          


                 <Text style={{
                  color: "white", 
                  textAlign: "center",
                  fontSize: 15, 
                  fontWeight: "bold", 
                  opacity: 0.4

              }}>Scan your friends QR code</Text>

          </View>
            
           </View>

        }

            {userFollowState && (
              <View style={{
                // backgroundColor: "skyblue", 
                height: "100%", 
                width: "100%", 
                display: "flex" , 
                flexDirection: "row", 
                justifyContent: "center", 
                alignItems: "center", 
                position: "relative"



              }}>
                <View style={{
                  height: "11%", 
                  width: "90%", 
                  borderWidth: 1, 
                  backgroundColor:"rgba(149,149,149,0.3)",
                  borderColor: "rgba(255, 255, 255,0.5)",
                  borderRadius: 7,
                  display: "flex" , 
                  flexDirection: "row", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  position: "relative", 
                  top: "-5%"
                }}>
                <Text style={{
                  color: "white"
                }}>You have successfully followed {userData?.userName}!</Text>
                </View>
               
              </View>
            )}
        
          </View> 

    )})

export default QrCodeContent