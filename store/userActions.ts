
import { IconHeartUpdate } from './types'
import { OpenCategoryLayout } from './types'

interface props {
  type: string, 
  payload: boolean
}



export const userActions  = (e: boolean) => {
 

   
  return {
     type : IconHeartUpdate,
     payload: e 
  }
    
}



export const userCategoryLayoutAction = (e: boolean) => {

  console.log("onActionside:", e);

  return {
    type: OpenCategoryLayout,
    paylaod: true
  }
}