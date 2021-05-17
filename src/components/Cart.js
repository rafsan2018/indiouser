import React,{useContext} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {useCart} from '../components/context';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function Cart() {

   // const {cart,increase,reduction,removeProduct}=useContext(ProductContext);
   // const cart = JSON.parse(localStorage.getItem('products'));
    // const subtotalPrice= cart.reduce((a,c)=>a+c.price*c.quentity,0);
    // const shippingPrice= subtotalPrice > 1000 ? 0 : 20;
    // const totalPrice = subtotalPrice + shippingPrice;

    // useEffect(() => {
    //     // getTotal();
    //     // addtoCart();
    // },[])
   const cart = useCart();

    return (
        <div>
        {/* <Productprovider> */}
    <Header></Header>
    {cart.length > 0 ?
    <div className="tw-flex tw-flex-row tw-gap-x-32">
        <div className="tw-flex tw-flex-col">
        {cart && cart.map((items)=>(
        <div>
        <div className='tw-flex tw-flex-row p-5' key={items.id}>
        <div className="tw-flex tw-flex-col">
            <h2 className="tw-text-xl tw-text-green-500 tw-font-semibold">Product Photo</h2>
            <hr></hr>
            {items.images && items.images.map(item=>(
                <>
                {item.is_default === true &&
                    <img src={'http://182.160.118.196:82/' + item.image} alt={item.image} className="md:tw-h-20 md:tw-w-20 xs:tw-h-20 xs:tw-w-20"></img>}
                </>
            ))}
        </div>
        <div className="tw-pl-16">
            <h2 className="tw-text-xl tw-text-green-500 tw-font-semibold">Product Details</h2>
            <hr></hr>
            <h1 className="tw-text-md tw-text-green-500 tw-font-bold tw-uppercase tw-mt-4">Name: {items.title}</h1>
            <h1 className="tw-text-sm tw-mt-4">Color: {items.produtDescription}</h1>
            <h1 className="tw-text-sm tw-mt-4">Size: {items.produtDescription}</h1>
        </div>
        <div className="tw-flex tw-flex-col tw-pl-16">
                <h2 className="tw-text-xl tw-text-green-500 tw-font-semibold">Quantity</h2>
                <hr></hr>
                {/* <div className="tw-flex tw-flex-row mt-4">
                    <button onClick={()=>reduction(items._id)} className="tw-border-2 tw-border-green-500 focus:tw-outline-none tw-px-1">-</button>
                    <span className="tw-border-2 tw-border-green-500 tw-px-4">{items.quentity}</span>
                    <button onClick={()=>increase(items._id)} className="tw-border-2 tw-border-green-500 tw-px-1 focus:tw-outline-none">+</button>
                </div> */}
            </div>
            <div className="tw-flex tw-flex-col tw-pl-16">
                <h2 className="tw-text-xl tw-text-green-500 tw-font-semibold">Price</h2>
                <hr></hr>
                <p className="tw-text-md tw-text-green-500 tw-font-semibold tw-mt-4">
                    RM {items.price.toFixed(2)}
                </p>
            </div>
            {/* <div className="tw-flex tw-flex-col tw-pl-16">
                <h2 className="tw-text-xl tw-text-green-500 tw-font-semibold">Total</h2>
                <hr></hr>
                <p className="tw-text-md tw-text-green-500 tw-font-semibold tw-mt-4">
                    RM {(items.price*items.quentity).toFixed(2)}
                </p>
            </div>   */}
            {/* <button onClick={()=>removeProduct(items._id)} className="tw-flex tw-text-xl tw-text-green-500 tw-font-semibold tw-mt-5 tw-ml-10 focus:tw-outline-none">x</button>   */}
            
    </div>
    <hr className="lg:tw-w-full tw-bg-green-500 tw-h-px tw-ml-4"></hr>
    </div>
    ))}
       
        </div>
    
    {/* <div className="tw-flex tw-flex-col p-5 tw-justify-between tw-absolute tw-h-1/2 tw-right-24">
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
            <button className="tw-border-4 tw-rounded-full tw-border-green-500 focus:tw-outline-none tw-px-3 tw-py-1 tw-w-full tw-text-xl tw-font-extrabold">
                <Link to="/checkout">Check Out</Link>
                </button>
        </div>
    </div> */}
    </div>
   :<div><h2 className="tw-text-5xl tw-p-5 tw-text-green-500 tw-font-bold">Your Cart Is Emapty</h2></div>}
    <Footer></Footer>
    {/* </Productprovider> */}
    </div>
    )
}
