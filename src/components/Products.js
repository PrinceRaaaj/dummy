import React, { useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async()=>{
        const response = await fetch("https://dummyjson.com/products");
        const products = await response.json();
        setProducts();
        console.log(products)
    }

       
    
  return (
    <div>
        {
            products.map((Product,index)=> {
            
            return  <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
        })
        }
      
    </div>
  )
}

export default Products
