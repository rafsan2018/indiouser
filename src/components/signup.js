import React, {useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../Context/userContext';
import {loginUser,logout} from '../Actions/userActions';
import Header from '../components/header';
import Footer from '../components/footer';
import {useMutation} from "@apollo/client";
import {SIGN_UP} from "../GraphQL/Mutation";
import { useSnackbar } from 'react-simple-snackbar';

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

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const initilaState ={name:'',email:'',phone:'',password:'',naError:'',emailError:'',errorPhone:'',errorPassword:''}


export default function SignUp(props) {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhone] = useState('')
    const [token,setToken]=useState('')
    const [naError,setNameError] = useState('')
    const [emailError,setEmailError] = useState('')
    const [errorPhone,setErrorPhone] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errors ,setErrors] = useState()
    // const [userLogin,setuserLogin]=useState({
    //     email:"",
    //     password:""
    // }

    const {dispatch} = useContext(AuthContext)
    const history=useHistory();
    const  validate = () => {
     
        let nameError = "";
        let emailError= "";
        let phoneError = "";
        let passError = ""
         
        if(name.length < 5 ){
            nameError = "name should be atleast 5 character";
        }
        if(nameError){
            setNameError(nameError);
            return false
        }
        if(!email.includes('@')){
            emailError="Invalid Email";
        }
        if(emailError){
             setEmailError(emailError)
            return false
        }
        if(phone.length < 10){
            phoneError="Phone Should be 10 character"
        }
        if(phoneError){
             setErrorPhone(phoneError)
            return false
        }
        if(password.length < 8){
            passError="Password Should be 8 character"
        }
        if(passError){
            setErrorPassword(passError)
            return false 
        }
        
         return true;
      }
     
      const submitHandler=(e)=>{
        e.preventDefault()
    }
    const [openSnackbar, closeSnackbar] = useSnackbar(options);

    const [signup] = useMutation(SIGN_UP)
    const onSubmitform=async(e)=>{
        e.preventDefault()
       // const isValid = validate()
       const isValid = validate()
       if(!isValid){  
          console.log(emailError)
       }else{
            await signup({
                variables:{
                    name: name,
                    mobile: phone,
                    email: email,
                    password: password
                }
            }).then(res=>{
                console.log(res.data)
                if(res.data.signup !== null){
                    history.push("./login")
                }else{
                    openSnackbar("Plase fill up all form")
                }
                return openSnackbar("Registration Successfully")
            })
            
        }

        
    }

    return (
        <div>
            <Header></Header>
            <div className="tw-flex tw-flex-col tw-min-h-screen tw-justify-center">
                <div className="tw-max-w-md tw-w-full tw-mx-auto">
                    <div className="tw-text-center tw-font-medium tw-text-xl">
                        Sign Up
                    </div>
                    <div className="tw-max-w-md tw-w-full tw-mx-auto tw-mt-4 tw-p-8 tw-border tw-border-gray-300">
                        <form onSubmit={submitHandler} className="tw-space-y-6">
                        <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Name</label>
                                <input
                                 name="name"
                                 value={name}
                                 onChange={(e)=>setName(e.target.value)} 
                                 type="text" 
                                 placeholder="Enter Name"
                                 className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded focus:tw-outline-none focus:tw-ring focus:tw-border-blue-300"
                                 
                                 >
                                 </input>
                                <span className='tw-text-red-500'>{naError}</span>
                            </div>
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block focus:tw-outline-none focus:tw-ring focus:tw-border-blue-300">Email</label>
                                <input
                                 name="email"
                                 value={email}
                                 onChange={(e)=>setEmail(e.target.value)}  
                                 type="text" 
                                 placeholder="Enter Email"
                                 className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded focus:tw-outline-none focus:tw-ring focus:tw-border-blue-300"
                                 >
                                 </input>
                                 <span className='tw-text-red-500'>{emailError}</span>
                            </div>
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block focus:tw-outline-none focus:tw-ring focus:tw-border-blue-300">Phone No</label>
                                <input
                                 
                                 value={phone}
                                 onChange={(e)=>setPhone(e.target.value)} 
                                 type="text" 
                                 placeholder="Enter Phone"
                                 className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded focus:tw-outline-none focus:tw-ring focus:tw-border-blue-300"
                                 >
                                 </input>
                                 <span className='tw-text-red-500'>{errorPhone}</span>
                            </div>
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Password</label>
                                <input 
                                 name="password" 
                                 value={password}
                                 type="password" 
                                 onChange={(e)=>setPassword(e.target.value)} 
                                 placeholder="password"
                                 className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded focus:tw-outline-none focus:tw-ring focus:tw-border-blue-300"
                                 ></input>
                                 <span className='tw-text-red-500'>{errorPassword}</span>
                            </div>

                            <div>
                                <button onClick={onSubmitform} className="tw-w-full tw-py-2 tw-px-4 tw-bg-blue-600 tw-rounded-md tw-text-white focus:tw-outline-none">SIGN UP</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
