import React from "react";
import NavBar from "../Componentes/NavBar";
import SearchBar from "../Componentes/SearchBar";
import {GiShoppingBag} from "react-icons/gi"
import Products from "../Componentes/Products";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";

import { useParams } from 'react-router-dom';


 
function Search(){
    const {products}= useContext(ProductsContext);
   const {  setSearchText } = useContext(ProductsContext);

    return(
        
        
        <div>
             <header className="Container" >
   
   <NavBar/>

   <SearchBar searchText={setSearchText}/>

   <GiShoppingBag className="shopbag"/>
  
</header>
           <main>

         <div className="CardMen">
           {products.map((p)=>(
 <Products key={p.id} prod={p}/>
    ))}
    </div>

  

           </main>
        </div>









    
    )
}

export default Search;





