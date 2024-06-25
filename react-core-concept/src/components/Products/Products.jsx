import React from 'react'

export const Products = (prob) => {
    const productStyle={
        border:'1px solid gray',
        borderRadius:'5px',
        backgroundColor:'lightgray',
        height:'200px',
        width:'200px',
        float:'left',

    }
    const ProductsList=[
        {name:'Laptop',price:'78000'},
        {name:'Mouse',price:'800'},
        {name:'Desktop',price:'10800'},
        {name:'Mobile',price:'25000'},
        {name:'Monitor',price:'8000'},

    ];

const {name,price}=prob.ProductList;
  return (
    <div style={productStyle}>
        <h1>{name}</h1>
        <p>{price}</p>
        <button>Buy Now</button>
    </div>
  )
}
