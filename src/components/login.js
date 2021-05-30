import React, {useState,useContext, useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../Context/userContext';
import {loginUser,logout} from '../Actions/userActions';
import { useSnackbar } from 'react-simple-snackbar';
import Header from '../components/header';
import Footer from '../components/footer';
import {useMutation} from '@apollo/client'
import {LOGIN} from "../GraphQL/Mutation";
import {CartContext} from '../Context/CartContext'

const options = {
    position: 'bottom-center',
    style: {
        backgroundColor: '#1e6f5c',
        color: '#ffffff',
        fontFamily: 'sans-serif',
        fontSize: '16px',
        textAlign: 'left',
    },
    closeStyle: {
        color: '#ffffff',
        fontSize: '12px',
    },
};

export default function Login(props) {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [token,setToken]=useState('')
    // const [userLogin,setuserLogin]=useState({
    //     email:"",
    //     password:""
    // }

    const {cart} = useContext(CartContext);

    const history=useHistory();
    const submitHandler=(e)=>{
        e.preventDefault()
    }
   
    const [openSnackbar, closeSnackbar] = useSnackbar(options);
    // const products = JSON.parse(localStorage.getItem('cart'))

    const [login] = useMutation(LOGIN)
    const onSubmitform=()=>{
        const submit = {
            email: email,
            password: password
        }
        login({
            variables:{
                email: submit.email,
                password: submit.password
            }
        }).then(res => {
            if (res.data.login !== null) {
                console.log('user loged in', res.data);
                localStorage.setItem("user",JSON.stringify(res.data.login));
                if(cart.length > 0){
                    history.push('./checkout')
                }else{
                    history.push('./')
                }
                return openSnackbar("Login Successfull")
            } else {
                return openSnackbar("Invalid User name and password")
            }
        }).catch(e => {
            alert('Invalid user');
        });
    }


    return (
        <div>
            <Header></Header>
            <div className="tw-flex tw-flex-col tw-min-h-screen tw-justify-center">
                <div className="tw-max-w-md tw-w-full tw-mx-auto">
                    <div className="tw-text-center tw-font-medium tw-text-xl">
                        Sign In
                    </div>
                    <div className="tw-max-w-md tw-w-full tw-mx-auto tw-mt-4 tw-p-8 tw-border tw-border-gray-300">
                        <form onSubmit={submitHandler} className="tw-space-y-6">
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Email</label>
                                <input
                                 name="email"
                                 value={email}
                                 onChange={(e)=>setEmail(e.target.value)} 
                                 type="text" 
                                 placeholder="Enter Email"
                                 className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                                 >
                                 </input>
                            </div>
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Password</label>
                                <input 
                                 name="password"
                                 onChange={(e)=>setPassword(e.target.value)} 
                                 value={password}
                                 type="text" 
                                 placeholder="password"
                                 className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                                 ></input>
                            </div>
                            <div className="tw-flex tw-items-center tw-justify-between">
                                <div className="tw-flex tw-items-center">
                                    <input type="checkbox" className="tw-h-4 tw-w-4 tw-text-blue-300 tw-rounded"></input>
                                    <label className="tw-ml-2 tw-text-sm tw-text-gray-600">Remember me</label>
                                </div>
                                <div>
                                    <a className="tw-font-medium tw-text-gray-600">Forget password</a>
                                </div>
                            </div>
                            <div className="tw-flex tw-items-center tw-justify-between">
                                <div className="tw-flex tw-items-center">
                                    <label className="tw-ml-2 tw-text-sm tw-text-gray-600">If You Are New User</label>
                                </div>
                                <div>
                                    <Link to="/signup" className="tw-font-medium tw-text-gray-600">Sign Up</Link>
                                </div>
                            </div>
                            <div>
                                <button onClick={onSubmitform} className="tw-w-full tw-py-2 tw-px-4 tw-bg-blue-600 tw-rounded-md tw-text-white
                                focus:tw-outline-none">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
