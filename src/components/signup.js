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

export default function SignUp(props) {

    const [name,setName]=useState(null)
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const [phone,setPhone] = useState('')
    const [token,setToken]=useState('')
    const [errors ,setErrors] = useState({name:'',email:'',phone:'',password:''})
    // const [userLogin,setuserLogin]=useState({
    //     email:"",
    //     password:""
    // }

    const {dispatch} = useContext(AuthContext)
    const history=useHistory();
    const submitHandler=(e)=>{
        e.preventDefault()
    }

    const  handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        
    
        switch (name) {
          case 'name': 
            errors.name = 
              value.length < 5
                ? 'Full Name must be 5 characters long!'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'password': 
            errors.password = 
              value.length < 6
                ? 'Password must be 6 characters long!'
                : '';
            break;
          default:
            break;
        }
    
        setErrors({errors, [name]: value});
      }

    const [openSnackbar, closeSnackbar] = useSnackbar(options);

    const [signup] = useMutation(SIGN_UP)
    const onSubmitform=async()=>{
        if(!name,!email,!phone,!password){
            openSnackbar(" Plase fill up all form")
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
                    openSnackbar(" Plase fill up all form")
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
                                 onChange={()=>handleChange()} 
                                 type="text" 
                                 placeholder="Enter Name"
                                 className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                                 required
                                 >
                                 </input>
                                 {errors.name.length < 5 && 
                                  <span className=''>{errors.name}</span>}
                            </div>
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Email</label>
                                <input
                                 name="email"
                                 value={email}
                                 onChange={()=>handleChange}  
                                 type="text" 
                                 placeholder="Enter Email"
                                 className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                                 required
                                 >
                                 </input>
                            </div>
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Phone No</label>
                                <input
                                 name="phone"
                                 value={phone}
                                 onChange={(e)=>setPhone(e.target.value)} 
                                 type="text" 
                                 placeholder="Enter Phone"
                                 className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                                 required
                                 >
                                 </input>
                            </div>
                            <div>
                                <label className="tw-text-xs tw-font-bold tw-text-gray-600 tw-block">Password</label>
                                <input 
                                 name="password"
                                 onChange={()=>handleChange}  
                                 value={password}
                                 type="text" 
                                 placeholder="password"
                                 className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-mt1"
                                 required
                                 ></input>
                            </div>

                            <div>
                                <button onClick={onSubmitform} className="tw-w-full tw-py-2 tw-px-4 tw-bg-blue-600 tw-rounded-md tw-text-white">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
