import React,{useState,useContext} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {useCart} from '../components/context';
import {CartContext} from '../Context/CartContext'
import { useEffect } from 'react';
import {Link,useHistory} from 'react-router-dom';

export default function Cart() {

    let [quantity, setQuantity] = useState(1);

   const {cart,dispatch} = useContext(CartContext);

    const subtotalPrice= cart.reduce((a,c)=>a+c.price*c.qty,0);
    //const shippingPrice= subtotalPrice > 1000 ? 0 : 20;
    const shippingPrice = 0;
    const totalPrice = subtotalPrice + shippingPrice;

    const user = JSON.parse(localStorage.getItem('user'))

    const history=useHistory();
    const onClickCheckout =()=>{
        if(user === null){
            return history.push("/login")
        }else{
            return history.push("/checkout")
        }
    }

    return (
        <div>
        {/* <Productprovider> */}
    <Header></Header>
    {cart.length > 0 ?
    <div className="tw-flex xl:tw-flex-row xs:tw-flex-col xl:tw-space-x-24 xs:tw-space-y-5">
        <div className="tw-flex tw-flex-col">
        {cart && cart.map((items)=>(
        <div>
        <div className='tw-flex xl:tw-flex-row xs:tw-flex-col p-5 xl:tw-space-x-10 xs:tw-space-x-0 xs:tw-space-y-2 xl:tw-space-y-0' key={items.id}>
        <div className="tw-flex xl:tw-flex-col xs:tw-flex-row tw-space-x-2">
            <h2 className="tw-text-xl tw-text-green-500 tw-font-semibold">Product Photo</h2>
            <hr></hr>

            <img src={'http://182.160.118.196:82/' + items.image} alt={items.image} className="md:tw-h-20 md:tw-w-20 xs:tw-h-20 xs:tw-w-20 xl:tw-mt-2 xs:tw-mt-0"></img>

        </div>
        <div>
            <h2 className="tw-text-xl tw-text-green-500 tw-font-semibold">Product Details</h2>
            <hr></hr>
            <div className="tw-space-y-5 tw-pt-2">
            <h1 className="tw-text-md tw-text-green-500 tw-font-bold tw-uppercase ">Name: {items.title}</h1>
            <h1 className="tw-text-sm  tw-text-green-500 tw-font-bold tw-uppercase">Color: {items.color}</h1>
            <h1 className="tw-text-sm  tw-text-green-500 tw-font-bold tw-uppercase">Size: {items.size}</h1>
            </div>
        </div>
        <div className="tw-flex xl:tw-flex-col xs:tw-flex-row tw-text-green-500 tw-font-bold tw-uppercase tw-pt-2">
                <h2 className="">Quantity</h2>
                <hr></hr>
                <div className="tw-flex tw-flex-row xl:tw-mt-4 xs:tw-mt-0 ">
                     <button className="tw-border-2 tw-border-green-500 focus:tw-outline-none tw-px-1 tw-ml-4"
                            onClick={() =>
                                (quantity < 1) ? setQuantity(1) : setQuantity(items.qty-=1)
                            }>
                            -
                        </button>
                    <span className="tw-border-2 tw-border-green-500 tw-px-4">{items.qty}</span>
                    {/* <button onClick={()=>increase(items.id)} className="tw-border-2 tw-border-green-500 tw-px-1 focus:tw-outline-none">+</button> */}
                    <button
                        className="tw-border-2 tw-border-green-500 tw-px-1 focus:tw-outline-none"
                        onClick={() => setQuantity(items.qty += 1)}>
                        +
                    </button>
                </div>
            </div>
            <div className="tw-flex xl:tw-flex-col xs:tw-flex-row tw-space-x-2 tw-text-green-500 tw-font-bold tw-uppercase tw-text-md tw-pt-2">
                <h2 className="">Price</h2>
                <hr></hr>
                <p className="xl:tw-mt-4 xs:tw--mt-0.5">
                    RM {items.price.toFixed(2)}
                </p>
            </div>
            <div className="tw-flex xl:tw-flex-col xs:tw-flex-row tw-space-x-2 tw-text-green-500 tw-font-bold tw-uppercase tw-text-md tw-pt-2">
                <h2 className="">Total</h2>
                <hr></hr>
                <p className="xl:tw-mt-4 xs:tw--mt-0.5">
                    RM {(items.price*items.qty).toFixed(2)}
                </p>
            </div>  
            <button onClick={() => dispatch({ type: 'REMOVE_FORM_CART', id: items.id })} 
              className="tw-flex tw-text-xl tw-text-green-500 tw-font-semibold tw-mt-5 tw-ml-10 focus:tw-outline-none">x</button>  
            
    </div>
    <hr className="tw-w-full tw-bg-green-500 tw-h-px tw-ml-4"></hr>
    </div>
    ))}
       
        </div>
    
    <div className="tw-flex tw-flex-col p-5 tw-h-1/2 tw-space-y-5 tw-rounded-lg tw-shadow-md tw-border-gray-100 
    tw-border-2 md:tw-mt-5 xs:tw-mt-0">
        <div className="tw-flex tw-flex-row tw-justify-between">
          <span className="tw-text-xl tw-font-semibold">Sub Total</span>
          <span className="tw-ml-10 tw-text-xl tw-font-semibold">RM{subtotalPrice.toFixed(2)}</span>
        </div>
        <div className="tw-flex tw-flex-row tw-justify-between">
          <span className="tw-text-xl tw-font-semibold">Shipping Price</span>
          <span className="tw-ml-10 tw-text-xl tw-font-semibold">RM{shippingPrice.toFixed(2)}</span>
        </div>
        <hr className="lg:tw-w-full tw-bg-green-500 tw-h-1"></hr>
        <div className="tw-flex tw-flex-row tw-justify-between">
          <span className="tw-text-xl tw-font-semibold">Total Price</span>
          <span className="tw-text-xl tw-font-semibold">RM{totalPrice.toFixed(2)}</span>
        </div>
        <hr className="lg:tw-w-full tw-bg-green-500 tw-h-1"></hr>
        <div className="">
            <button className="tw-border-4 tw-rounded-full tw-border-green-500 tw-bg-green-600 focus:tw-outline-none tw-px-3 tw-py-1 tw-w-full tw-text-md 
            tw-font-extrabold hover:tw-bg-gray-400 tw-transition tw-duration-1000 tw-ease-in-out hover:tw-text-white" style={{ textDecoration: 'none' }}
             onClick={onClickCheckout}>
                {/* <Link to="/checkout">Process to Checkout</Link> */}
                 Process to Checkout
                </button>
        </div>
    </div>
    </div>
   :<div><h2 className="tw-text-5xl tw-p-5 tw-text-green-500 tw-font-bold">Your Cart Is Emapty</h2></div>}
    <Footer></Footer>
    {/* </Productprovider> */}
    </div>
    )
}
