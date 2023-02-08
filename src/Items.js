import React, { useState } from "react";
import './App.css'
function Items(props){ 
    
    
    function adddata(el){
      
        // alert("Item Added In The Cart")
     
        var productdata=props.product;

        if(productdata.some((product)=>product.id === el.id)){
            alert('The product has already been added to the cart');
        }else{
            props.setproduct([...productdata,el]);
          
        }
    }
    
    return(
        <>
      
            <div className="cart p-2 mb-4">
                <img src={props.img} className="mx-auto"  width="180px" height="250px"/>
                <div className="text-center">
                    <span>{props.name}</span><br/>
                    <b>&#8377;{props.price}/-</b>
              
                </div>
                <button   onClick={()=>adddata(props)} className="btn btn-info mb-2">Add to Cart</button>
            </div>
    

        </>
    )
}
export default Items;