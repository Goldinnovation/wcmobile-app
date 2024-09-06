import { OpenCategoryLayout } from "../types"



interface props {
  type: string, 
  payload: boolean
}





export const userCategoryLayoutAction = (e: string) => {

    console.log("onActionside:", e);
  
    return {
      type: OpenCategoryLayout,
      payload: e
    }
  }