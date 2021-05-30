import React, { useState,useEffect } from 'react'
import CheckOutSteps from './CheckOutSteps'
import Footer from './footer'
import Header from './header'
import { useParams,Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import {LOAD_ORDER} from '../GraphQL/Queries';

export default function PlaceOrder() {
   const [order,setOrder] = useState([])
   const shippingPrice = 0;
   
   let { id } = useParams();

   console.log("id",id);

   const { loading, data } = useQuery(LOAD_ORDER, {
       variables: {id: id },
   });
  
   const user = JSON.parse(localStorage.getItem('user'))

   useEffect(() => {
       if (data) {
           console.log("order",data)
       }
   }, [data]);

    return (
        <div>
            <Header></Header>
            <CheckOutSteps step2 step3></CheckOutSteps>
            <div className="tw-flex xs:tw-flex-col xl:tw-flex-row tw-mt-10 lg:tw-space-x-20 xs:tw-space-x-0">
                <div className="tw-space-y-12">
                <div className="tw-flex tw-flex-col tw-rounded-lg tw-border-2 tw-border-green-500 tw-shadow-md tw-mx-5">

                        {data && data.order.orderDetails.map((items) => (
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
                                            <span className="tw-border-2 tw-border-green-500 tw-px-4">{items.qty}</span>
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
                                            RM {(items.price * items.qty).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                <hr className="tw-w-full tw-bg-green-500 tw-h-px"></hr>
                            </div>
                        ))}

                    </div>

                    <div className="tw-rounded-lg tw-border-2 tw-border-green-500 tw-shadow-md hover:tw-opacity-75 tw-px-5 tw-space-y-5 tw-mx-5">
                        <h1 className="tw-text-center tw-text-2xl tw-text-green-500 tw-font-bold">Shipping Information</h1>
                        <h1 className="tw-text-xl tw-font-bold">Name: {data && data.order.shipping.name}</h1>
                        <h2 className="tw-text-xl tw-font-bold"> Phone: {data && data.order.shipping.phone}</h2>
                        <h2 className="tw-text-xl tw-font-bold">Addrees: {data && data.order.shipping.address}</h2>
                        <h2 className="tw-text-xl tw-font-bold">City: {data && data.order.shipping.city}</h2>
                        <h2 className="tw-text-xl tw-font-bold">State: {data && data.order.shipping.state}</h2>
                    </div>
                </div>

            <div className="tw-mt-20 tw-rounded-lg tw-border-gray-100 tw-shadow-md tw-h-1/3 lg:tw-w-1/3 xs:tw-w-full tw-px-5 xs:tw-mx-5 lg:tw-mx-0 tw-space-y-5">

                <h2 className="tw-text-center tw-text-xl tw-font-bold">Payment Details</h2>
                <hr className="tw-text-xs tw-bg-green-500 tw-h-0.5"></hr>
               {/* {data && data.order.orderDetails.map((e,i)=>( */}
                <div className="tw-flex tw-flex-row tw-space-x-5">
                <span className="tw-text-xl tw-font-semibold">Quantity:</span>
                <span className="tw-text-xl tw-font-semibold">{data && (data.order.orderDetails.reduce((a, b) => a + ((b['qty']) || 0), 0)) }</span>
               </div>
              
              
            {/* ))} */}

        <div className="tw-flex tw-flex-row tw-space-x-3">
          <span className="tw-text-xl tw-font-semibold">Sub Total:</span>
          <span className="tw-text-xl tw-font-semibold">RM {data && data.order.orderDetails.reduce((a, b) => a + ((b['price']) || 0), 0)}</span>
        </div>

        <div className="tw-flex tw-flex-row tw-space-x-3">
          <span className="tw-text-xl tw-font-semibold">Shipping Price:</span>
          <span className="tw-text-xl tw-font-semibold">RM {shippingPrice}</span>
        </div>

        <div className="tw-flex tw-flex-row tw-space-x-2">
          <span className="tw-text-xl tw-font-semibold">Total Price:</span>
          <span className="tw-text-xl tw-font-semibold">RM {data && data.order.orderDetails.reduce((a, b) => a + ((b['price']) || 0), 0) + shippingPrice}</span>
        </div>
        
        <form method="post" action="http://indigo.my/payment/billplzpost.php" className="tw-flex tw-flex-col tw-pb-4">
            <input type="hidden" name='name' required value={user.name}/>
            <input type="hidden" name='email' required value={user.email}/>
            <input type="hidden" name="mobile" value={user.mobile}/>
            <input type="hidden" name="amount" value ={data && (data.order.orderDetails.reduce((a, b) => a + ((b['price']) || 0), 0) + shippingPrice) * 100}/>
            <input type="hidden" name="reference_1_label" value=""/>
            <input type="hidden" name="reference_1" value="7"/>
            <input type="hidden" name="reference_2_label" value=""/>
            <input type="hidden" name="reference_2" value="7"/>
            <input type="hidden" name="description" value ="apa2"/>
            <input type="hidden" name="collection_id" value ={data && data.order.id}/>
            <input type="submit" value="payment" className="tw-mt-10 tw-text-xl tw-leading-10 tw-bg-green-500 tw-text-white tw-uppercase tw-rounded-lg tw-border-green-500 tw-px-5 tw-py-2 tw-font-bold focus:tw-outline-none"/>
        </form>

        {/* <div className="">
            <button className="tw-mt-10 tw-float-center tw-leading-10 tw-bg-green-500 tw-text-white tw-uppercase tw-rounded-lg tw-border-green-500 tw-px-5 tw-py-2 focus:tw-outline-none">
                <Link to="/completeorder">Place Order</Link>
            </button>
         </div> */}

         </div>

        </div>
            <Footer></Footer>
        </div>
    )
}
