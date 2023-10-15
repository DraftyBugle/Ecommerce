import {initialProduct} from "../Service/initialProduct";
import {getAllProducts} from "../Service/productService";
import { createContext,useEffect,useState } from "react";
export const ProductsContext = createContext (initialProduct);




export const ProductsContextProvider = ({children})=> {
    const [products, setProducts] =useState ([]);
    const [isLoading, setIsLoading] =useState (true);
    const [error, setError] = useState (null);
    const [searchText,setSearchText] = useState("");
   
   

const fetchData = async ()=>{
    try {
        setError(null);
        setIsLoading(true);
        const data = await getAllProducts();
        setProducts (data);
    }
    catch(error){
        console.error(error);
        setError(error.message);
    }finally {
        setIsLoading(false);
    }
};
useEffect(()=>{
    fetchData();
},[]);

return (
    <ProductsContext.Provider
    value={{products,isLoading,error,searchText, setSearchText}}
    >
      {children}  
    </ProductsContext.Provider>
);



};