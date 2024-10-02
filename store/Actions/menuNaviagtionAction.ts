import { FavoredEventDataReduc } from "../types"




export const menuNavigationAction = (e: string) => {


  console.log("menuNavigationAction",e);
    return {
      type: e,
    }
  }
