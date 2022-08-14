import React from 'react';
import classes from './BurgerItems.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';



const BurgerItems = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    
    const cartCtx = useContext(CartContext);
    
    const addToCartHandler  = (quantity) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            quantity: 1,
            price: props.price,
            
        })
    }





return(
    <li className={classes['burger-items']}>
        <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
            <button onClick ={addToCartHandler}>Add</button>
        </div>
    </li>
);
};

export default BurgerItems;