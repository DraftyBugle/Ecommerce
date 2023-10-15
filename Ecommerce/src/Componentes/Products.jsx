import "./Products.css";

const Products=({prod})=>{
   
    return (
        <div key={prod.id} className="Card">
           
            
   
         <img src={prod.image} alt="" />
    
         <h3> {prod.title}</h3>
         <p className="Category">{prod.category}</p>
         <h2>${prod.price}</h2>
         <button>AddToCard</button>
    
   
       
       </div>
        
    )
}


export default Products;