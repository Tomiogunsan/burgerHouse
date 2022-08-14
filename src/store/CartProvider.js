import CartContext from "./cart-context";
import {useReducer} from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0,
    
    
};

const CartReducer = (state, action) => {
        if (action.type === 'ADD'){
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
            const existingCartItem = state.items[existingCartItemIndex]
            
            let updatedItems;
            
           const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
            
            if (existingCartItem) {
              const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.item.quantity 
                
              };
              
               updatedItems = [...state.items];
              updatedItems[existingCartItemIndex] = updatedItem;
              
            } else {
              updatedItems = state.items.concat(action.item);
            }

            return{
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                };
        }

        if(action.type === 'REMOVE'){
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;

            let updatedItems;
            if(existingItem.amount === 1){
                updatedItems = state.items.filter((item) => item.id !== action.id)
            } else {
               const  updatedItem = {...existingItem, quantity: existingItem.quantity - 1};
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem
            }
            return{
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }

        if(action.type === 'CLEAR'){
            return defaultCartState;
        }
        return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer (CartReducer, defaultCartState)

    const addItemtoCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const clearCartHandler = () =>{
        dispatchCartAction({type: 'CLEAR'})
    }

   const cartContext ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        totalQuantity: cartState.totalQuantity,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart : clearCartHandler

    }

    

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;