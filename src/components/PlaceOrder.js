import React from 'react'
import CheckOutSteps from './CheckOutSteps'
import Footer from './footer'
import Header from './header'
import {Link} from 'react-router-dom'

export default function PlaceOrder() {
    return (
        <div>
            <Header></Header>
            <CheckOutSteps step1 step2 step3></CheckOutSteps>
            <div className="tw-flex tw-flex-col tw-px-72 tw-justify-center">
            <div className="tw-flex tw-flex-row">
             <span className="tw-text-xl tw-font-semibold">Quantity:</span>
             <span className="tw-ml-10 tw-text-xl tw-font-semibold">2</span>
            </div>
        <div className="tw-flex tw-flex-row">
          <span className="tw-text-xl tw-font-semibold">Sub Total:</span>
          <span className="tw-ml-10 tw-text-xl tw-font-semibold">RM 200</span>
        </div>

        <div className="tw-flex tw-flex-row">
          <span className="tw-text-xl tw-font-semibold">Shipping Price:</span>
          <span className="tw-ml-10 tw-text-xl tw-font-semibold">RM 20</span>
        </div>

        <div className="tw-flex tw-flex-row">
          <span className="tw-text-xl tw-font-semibold">Total Price:</span>
          <span className="tw-text-xl tw-font-semibold">RM 220</span>
        </div>
        <div className="">
            <button className="tw-mt-10 tw-float-center tw-leading-10 tw-bg-green-500 tw-text-white tw-uppercase tw-rounded-lg tw-border-green-500 tw-px-5 tw-py-2 focus:tw-outline-none">
                <Link to="/completeorder">Place Order</Link>
            </button>
         </div>
        </div>
            <Footer></Footer>
        </div>
    )
}
