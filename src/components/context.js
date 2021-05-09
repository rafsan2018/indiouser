import React,{createContext, useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import {useQuery,useMutation} from '@apollo/client';
import {LOAD_PRODUCTS,LOAD_PRODUCTS_CATEGORY} from '../GraphQL/Queries';
import { useParams } from "react-router-dom";

export const ProductContext = createContext();

export function Productprovider(props) {

    // const [products,setProducts]=useState([])
    // const [catpro,setCatpro]=useState({})
    
    // const {loading,data} = useQuery(LOAD_PRODUCTS)


    // useEffect(()=>{
    //     if(data){
    //         setProducts(data.products)
    //         console.log(products)
    //        // localStorage.setItem('products',JSON.stringify(data.products))
    //     }
    // },[data])

    const [products, setProducts] = useState([])
 

    const [cart, setCart]=useState([]);

    const addtoCart=(id)=>{
        const check=cart.every(item=>{
            return item.id !== id
        })
        if(check){
            const data=products.filter(product=>{
                return product.id===id
            })
            console.log(data)
            setCart(cart=>([...cart,...data]));
        }
        else {
            alert("Product Already Added")
        }
    }
    
    const reduction=(id)=>{
        //alert("decrese")
        cart.forEach(item=>{
            if(item.id===id) {
                item.quentity===1 ? item.quentity=1:item.quentity-=1;
            }
            
        })
        setCart([...cart])
    }

    const increase=(id)=>{
        //alert("increase")
        cart.forEach(item=>{
            if(item.id===id) {
                item.quentity+=1 
            }
        })
        setCart([...cart])
    }

    const removeProduct=(id)=>{
        if(window.confirm("Do want to delete this product")){
            cart.forEach((item,i)=>{
                if(item.id===id){
                    cart.splice(i,1)
                }
            })
            setCart([...cart])
        }
    }

    return (
        <div>
            <ProductContext.Provider value={{products,addtoCart, cart, setCart,increase,reduction, removeProduct}}>
                {props.children}
            </ProductContext.Provider>
        </div>
    )
}
