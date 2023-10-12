import React, { createContext, useContext, useState } from 'react';
const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };
export const ContextProvider = ({children}) =>{
const [activeMenu, setActiveMenu] = useState(true);
return(
<StateContext.Provider 
value={{
    activeMenu,
    setActiveMenu
}}
>

{children}
    
</StateContext.Provider>

)

}
//custom hook to be use in whole app where we call in any 
// componenets through  StateContext which we create above
export const useStateContext = () => useContext(StateContext) ;
