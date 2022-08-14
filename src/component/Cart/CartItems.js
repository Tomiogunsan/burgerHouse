import React from 'react';

import classes from './CartItems.module.css';



const CartItems = (props) => {
     
   
    const price = `$${props.price.toFixed(2)}`;
    
    return(
        <li className={classes['cart-item']}>
            <div>
            <h3>{props.name}</h3>
            <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.quantity}>x {props.quantity}</span>  
            </div>
            </div>
            
            <div className={classes.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
            
            </li>
           
            
       
    );
};

export default CartItems;