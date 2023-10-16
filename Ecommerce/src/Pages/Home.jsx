import React from "react";
import NavBar from "../Componentes/NavBar";
import SearchBar from "../Componentes/SearchBar";
import {GiShoppingBag} from "react-icons/gi"
import "./Home.css"
import SwiperBar from "../Componentes/SwiperBar";
import SwiperProducts from "../Componentes/SwiperProducts";
import SearchBarHome from "../Componentes/SearchBarHome";


function Home(){
  

    return(
    <div>
     <header className="Container" >
   
        <NavBar/>
     
   <SearchBarHome/>

        <GiShoppingBag className="shopbag"/>
       
     </header>
     <main>
    <SwiperBar/>
<h3 className="FeaturedPro">Featured Products</h3>
   <SwiperProducts/>
        
     </main>
     <footer>


    

     </footer>
     </div>
       
    )
}

export default Home ;