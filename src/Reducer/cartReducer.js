export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let exist = state.find(cart => cart.id === action.cart.id);
            if (!exist) {
                const cartItem =  {
                    id: action.cart.id,
                    title: action.cart.title,
                    price: action.cart.price,
                    qty: action.cart.qty,
                    size: action.cart.size,
                    color: action.cart.color,
                    image: action.cart.image,
                    
                }

                return [
                    ...state,
                    cartItem
                ];
            } else {
                return state.map(cart => {
                    if(cart.id === action.cart.id){
                        console.log(cart.qty ,'===',action.cart.qty);
                        cart.qty = cart.qty + action.cart.qty;
                        // return "Product Already added in cart"
                    }
                    console.log('final cart qty: ', cart.qty);
                    return cart;
                });
            }
        case 'REMOVE_FORM_CART':
            return state.filter(cart => cart.id !== action.id);
        default:
            return state;
    }
}