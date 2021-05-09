import React from 'react'
import Footer from './footer'
import Header from './header'

export default function OrderComplete() {
    return (
        <div>
            <Header></Header>
            <div className="tw-flex tw-justify-center">
             <h2 className="tw-text-4xl">Thanks For Your Order</h2>
            </div>

            <div className="tw-flex tw-justify-center">
               <h2 className="tw-text-xl">Products will be shipping to your address within 7 days</h2>
            </div>
            
            <Footer></Footer>
        </div>
    )
}
