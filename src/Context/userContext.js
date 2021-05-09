import React,{createContext,useReducer} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CheckOut from '../components/checkout';
import Login from '../components/login';
import App from '../App';
//import {AuthReducer,initialState} from '../Reducer/userReducer'

//export const AuthContext = createContext();

//const [user, dispatch] = useReducer(AuthReducer, initialState);

// export const AuthProvider = (props) => {
//   const [user, dispatch] = useReducer(AuthReducer, initialState);
//   //const value={user,dispatch}
 
//   return (
//     <AuthContext.Provider value={{user,dispatch}}>
//         {props.children}
//             {/* <div>
//              <div className="App">{!user.isAuthenticated ? <Login /> : <CheckOut />}</div>
//              <Footer></Footer>
//             </div>  */}
//     </AuthContext.Provider>
//   );
// };

const initialState ={
    isAuthiticated:false,
    user:null,
    token:null
}

export const AuthContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token
        };
      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          user: null
        };
      default:
        return state;
    }
  };

export function AuthProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    // const [email,setEmail]=useState('')
    // const [password,setPassword]=useState('')

    //const value={state,dispatch}

    return (
      
        <AuthContext.Provider value={{state,dispatch}}>
            {props.children}
            {/* <div>
            <div className="App">{!state.isAuthenticated ? <Login /> : <CheckOut />}</div>
            <Footer></Footer>
            </div> */}
        </AuthContext.Provider>
       

    )
}
