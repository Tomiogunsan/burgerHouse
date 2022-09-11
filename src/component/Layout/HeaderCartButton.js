import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { useContext } from "react";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
    const cartctx = useContext(CartContext);
    const numberOfCartItems = cartctx.items.reduce((curNumber, item) => { return curNumber + item.quantity  }, 0);
    

    return(
            <button className={classes.button}  onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
    );
};

export default HeaderCartButton;
