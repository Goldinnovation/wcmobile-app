import * as Location from "expo-location"



const handleUserLocation = async() => {
    
    console.log('Location EXPLORE TRIGGER call triggert');
    let {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== "granted"){
          console.log('Please Grant Location Permission');
          return
      }

    const currentLocation = await Location.getCurrentPositionAsync();
    // setLocation(currentLocation)
    // console.log(currentLocation);
    if(currentLocation){

      const {latitude, longitude} = currentLocation.coords
      const reverseGeoCedAdresse = await Location.reverseGeocodeAsync({
        longitude,
        latitude
      })
     
      return reverseGeoCedAdresse
    }

     

}


export default handleUserLocation