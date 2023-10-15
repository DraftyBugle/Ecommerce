import React from "react";
import NavBar from "../Componentes/NavBar";
import SearchBar from "../Componentes/SearchBar";
import {GiShoppingBag} from "react-icons/gi"
import "./Home.css"
import SwiperBar from "../Componentes/SwiperBar";
import SwiperProducts from "../Componentes/SwiperProducts";


function Home(){
 



    return(
    <div>
     <header className="Container" >
   
        <NavBar/>
     
        <SearchBar handleSearch />

        <GiShoppingBag className="shopbag"/>
       
     </header>
     <main>
    <SwiperBar/>

  {/*
    {products.map((p)=>(
 <Products key={p.id} prod={p}/>
    ))}
    */}  <h3 className="FeaturedPro">Featured Products</h3>
   <SwiperProducts/>
        
     </main>
     <footer>
    
     </footer>
     </div>
       
    )
}

export default Home ;