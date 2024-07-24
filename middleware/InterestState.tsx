import React, { createContext, ReactNode, useContext, useState }  from "react";


interface GlobalLoginContent {
    interestApproved: boolean;
    setInterestApproved: (state: boolean) => void 
  }


  export const Interestcontext = createContext<GlobalLoginContent | undefined>(undefined)


  export const InterestState = ({children}: {children: ReactNode}) => {
    const [interestApproved, setInterestApproved] = useState<boolean>(false)

    
    return( 
        <Interestcontext.Provider value={{ interestApproved, setInterestApproved}}>
            {children}
        </Interestcontext.Provider>
    )
   
    
  }; 



  export const useInterest = (): GlobalLoginContent =>{
    const context = useContext(Interestcontext)
    if(context === undefined){
        throw new Error('Interest of Error on context ')
    }else{
      return context;

    }
  }


