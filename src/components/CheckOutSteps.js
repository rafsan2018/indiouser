import React from 'react'

export default function CheckOutSteps(props) {
    return (
        <div className="tw-flex tw-flex-row tw-justify-between tw-px-72 tw-w-full tw-m-1">
            <div className={props.step1 ? 'visible tw-text-green-400 ':''}>Sign In</div>
            <div className={props.step2 ? 'visible tw-text-green-400':''}>Shipping</div>
            <div className={props.step3 ? 'visible tw-text-green-400':''}>Place Order</div>
        </div>
    )
}
