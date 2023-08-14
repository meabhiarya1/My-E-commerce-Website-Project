import  { createContext, useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const API = "https://api.pujakaitem.com/api/products";

    const getProducts = async (url) => {
        const res = await axios.get(url);
        const products =  await res.data;
    }

    useEffect(()=>{
        getProducts(API);
    },[])

    return <AppContext.Provider value={{myName:"vinod",surName:"kumar"}}>{ children }</AppContext.Provider>
};

const useProductContext = () =>{
    return useContext(AppContext);
}
export { AppContext, AppProvider, useProductContext }; 