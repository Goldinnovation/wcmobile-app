

import { CategoryActionDataArr } from "../types"

const initialStateEventFavor = {
   backgroundColorMask: {
    color1: "black",
    color2: "grey",
    color3: "#000059",
    color4: "black",
}

    


}





 export default (state = initialStateEventFavor, {type , payload}: any) => {
    console.log('type', type);
    console.log('payload', payload);
    switch(type){
        case "Infinity" : 
            return {...state, backgroundColorMask: {
                color1: "black",
                color2: "#000000",
                color3: "#000000",
                color4: "#000000",
                }}; 

        case "Bubble" : 
        return {...state, backgroundColorMask: {
            color1: "black",
            color2: "silver",
            color3: "purple",
            color4: "green",
            }};
        case "Nitro" : 
        return {...state, backgroundColorMask: {
            color1: "black",
            color2: "grey",
            color3: "#000059",
            color4: "black",
            }};
        case "Moon" : 
        return {...state, backgroundColorMask: {
            color1: "#000000",
            color2: "#000000bb",
            color3: "'rgba(35, 32, 32, 0.447)'",
            color4: "#000000",
            }};
        case "newOne" : 
        return {...state, backgroundColorMask: {
            color1: "pink",
            color2: "green",
            color3: "orange",
            color4: "black",
            }}



        
    
    }
    
    return state
 }