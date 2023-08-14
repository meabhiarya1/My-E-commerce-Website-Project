import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer from '../reducer/productReducer';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const API = "https://api.pujakaitem.com/api/products";

    const initialState = {
        isError: false,
        isLoading: false,
        products: [],
        featureProducts: [],
        singleProduct: {},
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url) => {

        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    const getSingleProduct = async (url) =>{

        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });           
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    useEffect(() => {
        getProducts(API);
    }, [])

    return <AppContext.Provider value={{ ...state, getSingleProduct}}>{children}</AppContext.Provider>
};

const useProductContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useProductContext }; 