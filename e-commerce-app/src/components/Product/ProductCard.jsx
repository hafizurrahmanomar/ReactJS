import PropTypes from 'prop-types';

import logo from '../../logo.svg'
import './ProductCard.css'

function ProductCard({productName,productPrice}) {

  return (
    <div className='productCard'>
        <div><img src={logo} alt="productImage" width= "200px"/>
        </div>
    <p>{productName}</p>
    <p>{`$${productPrice}`}</p>
    <button className='btn'>Ad to Cart</button></div>
  )
}

ProductCard.prototype={
  productName:PropTypes.string.isRequired,
  productPrice:PropTypes.string.isRequired,

}


export { ProductCard }