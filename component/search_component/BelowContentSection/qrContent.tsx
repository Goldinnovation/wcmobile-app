import { View, Text, Button, TouchableOpacity,} from "react-native"
import { CameraView, CameraType, useCameraPermissions, Camera} from 'expo-camera';
import { forwardRef, useImperativeHandle } from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { CameraView, Camera } from "expo-camera/next";
// import { CameraView, useCameraPermissions } from 'expo-camera/next'


interface qrocdeProps{

  handleUserisFound: ({type, data}: any ) => void

}


const QrCodeContent =  forwardRef<any,qrocdeProps >(({handleUserisFound},ref) => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);


 

      useImperativeHandle(ref, () =>({

        handleAkivateScann(){
          console.log('set Scann through to false ');
          setScanned(false)
        }
      }))




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
              justifyContent: "center"
              // alignItems:"center"

          }}>
              <Text style={{
                  color: "white", 
                  textAlign: "center"
              }}>Scan your friends QR code</Text>
          </View>
            
           </View>

        }
        
          </View> 

    )})

export default QrCodeContent