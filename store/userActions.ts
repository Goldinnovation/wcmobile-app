import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { IconHeartUpdate } from './types'

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

