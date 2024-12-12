import { StoreExploreEventObj } from "../types"


export const BackgroundAction = (e: string) => {


  console.log("on BackgroundAction:",e);
    return {
      type: e,
      payload: e
    }
  }
