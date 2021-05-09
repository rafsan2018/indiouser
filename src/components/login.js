import React, {useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../Context/userContext';
import {loginUser,logout} from '../Actions/userActions'

export default function Login(props) {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [token,setToken]=useState('')
    // const [userLogin,setuserLogin]=useState({
    //     email:"",
    //     password:""
    // }

    const {dispatch} = useContext(AuthContext)
    const history=useHistory();
    const submitHandler=(e)=>{
        e.preventDefault()
    }

    const onSubmitform=async(e)=>{
        // const payload={email,password}
        // try {
        //     let response = await loginUser(dispatch, payload) //loginUser action makes the request and handles all the neccessary state changes
        //     if (!response.user) return
        //     props.history.push('/checkout') //navigate to dashboard on success
        // } catch (error) {
        //     console.log(error)
        // }
        const submit={
            email:email,
            password:password
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'auth-token',
          }
        axios.post('https://kaderecommerceapi.herokuapp.com/api/user/login',submit,{headers:headers})
             .then(res=>{
                 //console.log(res.data.user)
                 setToken(res.data.token)
                 dispatch({type:'LOGIN',payload:res.data})
                 //console.log(dispatch);
                //  localStorage.setItem("user",token)
                 props.history.push('/checkout')
             })
    }

    return (
        <div>
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
                                    <a className="tw-font-medium tw-text-gray-600">Sign Up</a>
                                </div>
                            </div>
                            <div>
                                <button onClick={onSubmitform} className="tw-w-full tw-py-2 tw-px-4 tw-bg-blue-600 tw-rounded-md tw-text-white">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
