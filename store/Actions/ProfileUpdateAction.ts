import { ProfileLayoutUpdate } from "../types"


interface props {
  type: string, 
  payload: boolean
}





export const profileLayoutUpdatePageAction = (e: string) => {

  
  
    return {
      type: ProfileLayoutUpdate,
      payload: e
    }
  }