import React,{createContext,useReducer, useContext, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import {useQuery,useMutation} from '@apollo/client';
import {LOAD_PRODUCTS,LOAD_PRODUCTS_CATEGORY} from '../GraphQL/Queries';
import { useParams } from "react-router-dom";

const CartStateContext = createContext();
const CartDispatchContext = createContext();


const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEMS":
        const check = action.item.find(p=>p.id===action.id);
        if(check){
          return state
        }else{
          return [...state, action.item]
        }
        // return [...state, action.item];
      case "REMOVE":
        const newArr = [...state];
        newArr.splice(action.index, 1);
        return newArr;
      default:
        throw new Error(`unknown action ${action.type}`);
    }
  };

  export function Productprovider(props) {
      const [state, dispatch] =useReducer(reducer,[])
      return (
          <div>
              <CartDispatchContext.Provider value={dispatch}>
                  <CartStateContext.Provider value={state}>
                   {props.children}
                  </CartStateContext.Provider>
              </CartDispatchContext.Provider>
          </div>
      )
  }

   export const useCart = () => useContext(CartStateContext);
   export const useDispatchCart = () => useContext(CartDispatchContext);


// export function Productprovider(props) {

//     // const [products,setProducts]=useState([])
//     // const [catpro,setCatpro]=useState({})
    
//     // const {loading,data} = useQuery(LOAD_PRODUCTS)


//     // useEffect(()=>{
//     //     if(data){
//     //         setProducts(data.products)
//     //         console.log(products)
//     //        // localStorage.setItem('products',JSON.stringify(data.products))
//     //     }
//     // },[data])

//     const [products, setProducts] = useState([])
 

//     const [cart, setCart]=useState([]);

//     const addtoCart=(id)=>{
//         const check=cart.every(item=>{
//             return item.id !== id
//         })
//         if(check){
//             const data=products.filter(product=>{
//                 return product.id===id
//             })
//             console.log(data)
//             setCart(cart=>([...cart,...data]));
//         }
//         else {
//             alert("Product Already Added")
//         }
//     }
    
//     const reduction=(id)=>{
//         //alert("decrese")
//         cart.forEach(item=>{
//             if(item.id===id) {
//                 item.quentity===1 ? item.quentity=1:item.quentity-=1;
//             }
            
//         })
//         setCart([...cart])
//     }

//     const increase=(id)=>{
//         //alert("increase")
//         cart.forEach(item=>{
//             if(item.id===id) {
//                 item.quentity+=1 
//             }
//         })
//         setCart([...cart])
//     }

//     const removeProduct=(id)=>{
//         if(window.confirm("Do want to delete this product")){
//             cart.forEach((item,i)=>{
//                 if(item.id===id){
//                     cart.splice(i,1)
//                 }
//             })
//             setCart([...cart])
//         }
//     }

//     return (
//         <div>
//             <ProductContext.Provider value={{products,addtoCart, cart, setCart,increase,reduction, removeProduct}}>
//                 {props.children}
//             </ProductContext.Provider>
//         </div>
//     )
// }
