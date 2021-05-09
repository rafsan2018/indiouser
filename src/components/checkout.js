import React,{useContext} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {AuthContext} from '../Context/userContext'
import CheckOutSteps from './CheckOutSteps';
import {useHistory} from 'react-router-dom'


export default function CheckOut(props) {
    const users = useContext(AuthContext)
    const data=JSON.parse(localStorage.getItem('user')) 
    console.log(data)
    const history=useHistory();
    const onClcikHandler=(e)=>{
        e.preventDefault()
        props.history.push('/placeorder')
    }
    return (
        <div>
            <Header></Header>
            <div>
                <CheckOutSteps step1 step2></CheckOutSteps>
            
            <div className="tw-flex tw-flex-col tw-justify-center tw-px-72 tw-w-full tw-mt-10">
                <div className="">
                    <form>
                    <div>
                        <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Name</label>
                        <input
                        name="name"
                        type="text" 
                        placeholder="Enter Email"
                        className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                        >
                        </input>
                    </div>
                    <div>
                        <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Phone</label>
                        <input
                        name="name"
                        type="text" 
                        placeholder="Enter Email"
                        className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                        >
                        </input>
                    </div>
                    <div>
                        <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Name</label>
                        <input
                        name="name"
                        type="text" 
                        placeholder="Enter Email"
                        className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                        >
                        </input>
                    </div>
                    <div>
                        <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Address</label>
                        <input
                        name="name"
                        type="text" 
                        placeholder="Enter Email"
                        className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                        >
                        </input>
                    </div>
                    <div className="tw-flex tw-flex-row tw-justify-between">
                        <div>
                        <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">City</label>
                        <input
                        size={40}
                        name="name"
                        type="text" 
                        placeholder="Enter Email"
                        className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                        >
                        </input>
                        </div>
                        <div>
                        <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Postal Code</label>
                        <input
                        size={40}
                        name="name"
                        type="text" 
                        placeholder="Enter Email"
                        className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                        >
                        </input>
                        </div>
                    </div>
                    <div className="tw-flex tw-flex-row tw-justify-between">
                        <div>
                        <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">County</label>
                        <input
                        size={40}
                        name="name"
                        type="text" 
                        placeholder="Enter Email"
                        className="tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt-1"
                        >
                        </input>
                        </div>
                        
                        <div>
                        <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">State</label>
                        <input
                        size={40}
                        name="name"
                        type="text" 
                        placeholder="Enter Email"
                        className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt-1"
                        >
                        </input>
                        </div>
                    </div>
                    <button className="tw-mt-10 tw-float-right tw-leading-10 tw-bg-green-500 tw-text-white tw-uppercase tw-rounded-lg tw-border-green-500 tw-px-5 tw-py-2 focus:tw-outline-none" onClick={onClcikHandler}>Continiue</button>
                    </form>
                </div>
            </div>
            </div>
            <Footer></Footer>

        </div>
    )
}
