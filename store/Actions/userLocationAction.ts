import React from "react"
import { userLocation } from "../types"

interface locationData{
    city: string | null,
    country: string | null,
    district: string | null,
    isoCountryCode: string | null,
    name: string | null,
    postalCode: string | null,
    region: string | null,
    street: string | null,
    streetNumber: string | null,
    subregion: string | null,
    timezone: string| null
  };

interface props {
 
  payloadData:  locationData[] | null
}





export const userLocationAction = (payloadData: locationData[]) => {

    return {
      type: userLocation,
      payload: payloadData
    }
  }