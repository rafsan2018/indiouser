import React,{useContext, useEffect, useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {AuthContext} from '../Context/userContext'
import CheckOutSteps from './CheckOutSteps';
import {useHistory} from 'react-router-dom';
import {useMutation} from "@apollo/client";
import {CREATE_ORDERS} from "../GraphQL/Mutation";
import {CartContext} from '../Context/CartContext'
import { useParams,Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import {LOAD_ORDER} from '../GraphQL/Queries';

export default function CheckOut(props) {
    // const users = useContext(AuthContext)
    const user = JSON.parse(localStorage.getItem('user'))

    const [name, setName] = useState(user.name)
    const [phone, setPhone] = useState(user.mobile)
    const [email,setEmail] = useState(user.email)
    const [address,setAddress] = useState("")
    const [city,setCity] = useState("")
    const [postalcode,setPostalcode] = useState("")
    const [state,setState] = useState("")
    const [country,setCountry] = useState("")
    const [order,setOrder] = useState([])

    console.log(user)
    const history=useHistory();
    
    const {cart} = useContext(CartContext);
     

    // useEffect(() => {
    //     if (data) {
    //         setOrder(data.order)
    //         console.log('products',order)
    //         // localStorage.setItem('products',JSON.stringify(data.products))
    //     }
    // }, [data])

      
    const [createOrder] = useMutation(CREATE_ORDERS)

    console.log("products",cart)

    const onClcikHandler=(e)=>{
        e.preventDefault()
        createOrder({
            variables:{
                user_id: user.id,
                orderDetail: cart.map(c => {
                    return {
                        product_id: c.id,
                        title: c.title,
                        size: c.size,
                        color: c.color,
                        image: c.image,
                        price: parseFloat(c.price),
                        qty: c.qty
                    }
                }),
                shipping:
                {
                  name: name,
                  phone:phone,
                  email:email,
                  city:city,
                  state:state,
                  postal_code:postalcode,
                  address:address,
                }
            }
        }).then(res => {
            console.log("order",res.data.createOrder)
            props.history.push('/order/'+res.data.createOrder.id)
        })
    }
    return (
        <div>
            <Header></Header>
            <div>
                <CheckOutSteps step2 step3></CheckOutSteps>
            
            <div className="tw-flex tw-flex-col md:tw-justify-center xs:tw-justify-none xl:tw-px-72 xs:tw-px-3 tw-w-full tw-mt-10">
                <div className="">
                    <form className="tw-space-y-2">
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={e=>setName(e.target.value)}
                                    className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded"
                                >
                                </input>
                            </div>
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Phone</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter Phone"
                                    value={phone}
                                    onChange={(e)=>setPhone(e.target.value)}
                                    className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                                >
                                </input>
                            </div>
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Email</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                                >
                                </input>
                            </div>
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Address</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter Address"
                                    value={address}
                                    onChange={(e)=>setAddress(e.target.value)}
                                    className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                                    required
                                >
                                </input>
                            </div>
                            <div className="tw-flex tw-flex-row tw-justify-between xs:tw-space-x-1 lg:tw-space-x-0">
                                <div>
                                    <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">City</label>
                                    <input
                                        size={40}
                                        name="name"
                                        type="text"
                                        placeholder="Enter city"
                                        value={city}
                                        onChange={(e)=>setCity(e.target.value)}
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
                                        placeholder="Enter postal code"
                                        value={postalcode}
                                        onChange={(e)=>setPostalcode(e.target.value)}
                                        className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className="tw-flex tw-flex-row tw-justify-between">
                            <div className="tw-w-1/3">
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">State</label>
                                <select className="tw-rounded-md tw-border tw-border-gray-300 focus:tw-outline-none tw-w-full tw-h-10"
                                onChange={(e)=>setState(e.target.value)} value={state}>
                                    <option>Please Select </option>
                                    <option>Selangor</option>
                                    <option>Kuala Lumpur</option>
                                    <option>Melaka</option>
                                    <option>Johor Baru</option>
                                    <option>Pahang</option>
                                </select>
                            </div>

                            
                                {/* <div className="tw-mr-60">
                                    <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">County</label>
                                    <select className="tw-rounded-md tw-border tw-border-gray-300 focus:tw-outline-none tw-w-full"
                                     onChange={(e)=>setCountry(e.target.value)} value={country}>
                                    <option>Malaysia</option>
                                    <option>Indonesia</option>
                                    <option>Singapore</option>
                                </select>
                                </div> */}
                      </div>

                    
                    <button className="tw-mt-10 tw-float-right tw-leading-10 tw-bg-green-500 tw-text-white tw-uppercase tw-rounded-lg tw-border-green-500 
                       tw-px-5 tw-py-2 focus:tw-outline-none" 
                        onClick={onClcikHandler}>
                            Continiue</button>
                        
                    </form>
                </div>
            </div>
            </div>
            <Footer></Footer>

        </div>
    )
}
