import  { createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{myName:"vinod",surName:"kumar"}}>{ children }</AppContext.Provider>
};

const useProductContext = () =>{
    return useContext(AppContext);
}
export { AppContext, AppProvider, useProductContext }; 