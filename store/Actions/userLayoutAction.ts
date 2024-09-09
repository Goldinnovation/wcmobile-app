import { OpenCategoryLayout } from "../types"



interface props {
  type: string, 
  payload: boolean
}





export const userCategoryLayoutAction = (e: string) => {

  
    return {
      type: OpenCategoryLayout,
      payload: e
    }
  }