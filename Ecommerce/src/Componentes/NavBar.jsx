import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./NavBar.css"
import Home from "../Pages/Home";

function NavBar(){
    return(
        <nav>
<NavLink to={"/"} className=" Nav Home">Home</NavLink>
 <NavLink to={"/Men"} className="Nav Men">Men</NavLink>
 <NavLink to={"/Woman"} className="Nav Woman">Woman</NavLink>
 <NavLink to={"/Accesory"} className="Nav Accesory">Accesory</NavLink>
 </nav> 

 
  
    );

}
export default NavBar;