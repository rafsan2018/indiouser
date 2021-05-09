import React, {useContext, useState, useEffect,Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import StartRating from "../components/startRating";
import {FcLike} from 'react-icons/fc';
import {SiFacebook,SiInstagram,SiWhatsapp,SiMessenger} from 'react-icons/si';
import {ProductContext, Productprovider} from '../components/context';
import { LOAD_PRODUCT } from '../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";

export default function ProductDetailsPage(props) {
    const [product, setProduct] = useState([]);
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");
   // const {dispatch} = useContext(ProductContext)
    // const {products}=useContext(ProductContext);

    let { slug } = useParams();

    console.log("slug",slug);

    const { loading, data } = useQuery(LOAD_PRODUCT, {
        variables: {slug: slug },
    });

    useEffect(() => {
        if (data) {
            setProduct(data.product)
        }
    }, [data]);

    console.log(product);

    const shoppingCart =()=>{
        //dispatch({type:'LOGIN',payload:res.data})
    }
    
    // const {productdetails} = product;
    // console.log(productdetails)

    return (
            <div>
                {/* <Productprovider> */}
            <Header></Header>
            {/* {products && products.map(items=>( */}
            <div className='tw-flex tw-flex-row tw-p-5'>
                <div className="tw-flex tw-flex-col">
                    {product.images && product.images.map(item=>(
                        <>
                        <div className="tw-grid tw-grid-cols-2 tw-space-x-3">

                            <div>
                            {item.is_default === true && 
                            <img src={'http://182.160.118.196:82/'+item.image} alt={item.image} className="tw-h-52 tw-w-52"></img>}
                            </div>

                            <div>
                            {item.is_default === false && 
                            <img src={'http://182.160.118.196:82/'+item.image} alt={item.image} className="tw-h-14 tw-w-14"></img>}
                            </div>
                        </div>
                        </>
                    ))}
                    {/* <img src={items.images} alt={items.title} className="md:tw-w-96 md:tw-h-96 xs:tw-w-32 xs:tw-h-32"></img> */}
                    <div className="tw-flex md:tw-flex-row xs:tw-flex-col tw-mt-10 tw-justify-between">
                        <div className="tw-flex tw-flex-row">
                            <span>4.9</span>
                            <StartRating></StartRating>
                        </div>
                        <div className="tw-flex md:tw-h-8 xs:tw-h-1 tw-bg-green-500 tw-border tw-border-green-500 tw-mx-2"></div>
                        <span>98 Ratings</span>
                        <div className="tw-flex md:tw-h-8 xs:tw-h-1 tw-bg-green-500 tw-border tw-border-green-500 tw-mx-2"></div>
                         <span>76 Sold</span>
                    </div>
                    <div className="tw-flex tw-flex-row tw-mt-2">
                    <FcLike size={25}></FcLike> 
                     <span className="">Favorite(350)</span>
                    </div>
                    <h2 className="tw-mt-2">Share:</h2>
                    <div className="tw-flex tw-flex-grow tw-gap-x-2 tw-mt-1">
                        <SiFacebook size={20} className="tw-text-green-500"></SiFacebook>
                        <SiInstagram size={20} className="tw-text-green-500"></SiInstagram>
                        <SiWhatsapp size={20} className="tw-text-green-500"></SiWhatsapp>
                        <SiMessenger size={20} className="tw-text-green-500"></SiMessenger>
                    </div>
                    <div className="tw-flex tw-flex-row tw-mt-10 tw-gap-x-4">
                        <button className="tw-border-2 tw-bg-green-500 tw-rounded tw-border-green-500 focus:tw-outline-none md:tw-px-3 md:tw-py-1 tw-w-1/2  md:tw-text-xl xs:tw-text-ex tw-font-extrabold">Buy Now</button>
                         <button onClick={shoppingCart} className="tw-border-2 tw-bg-green-200 tw-rounded tw-border-green-500 focus:tw-outline-none md:tw-px-3 tw-py-1 md:tw-text-xl xs:tw-text-ex tw-font-extrabold">
                             Add To Cart
                             </button>
                    </div>
                    
                </div>
                <div className="md:tw-pl-16 xs:tw-pl-5">
                    <h1 className="md:tw-text-4xl xs:tw-text-sm tw-text-green-500 tw-font-bold tw-uppercase">{product.title}</h1>
                    <h4 className="md:tw-text-xl xs:tw-text-sm tw-text-black-50 tw-font-semibold">Products Specification</h4>
                    <p className="md:tw-text-xl xs:tw-text-sm tw-pt-4 tw-text-black-50 tw-font-semibold">
                        {product.description}
                        </p>
                    <div className="tw-flex tw-flex-row tw-pt-14">
                        <h2 className="md:tw-text-2xl xs:tw-text-sm tw-text-black-50 tw-font-semibold">Colour</h2>
                        <p className="tw-ml-8 tw-px-1 md:tw-text-2xl xs:tw-text-sm tw-border-2 tw-rounded tw-border-green-500 tw-text-green-500 tw-font-semibold">
                            {product.colors && product.colors.map(item=>(
                                <button onClick={()=>setColor(item.color)}>{item.color}</button>
                            ))}
                        </p>
                    </div>
                    <div className="tw-flex tw-flex-row tw-pt-4">
                        <h2 className="md:tw-text-2xl xs:tw-text-sm tw-text-black-50 tw-font-semibold">Size</h2>
                        <p className="md:tw-ml-16 xs:tw-ml-8 tw-px-1 md:tw-text-2xl xs:tw-text-sm tw-border-2 tw-rounded tw-border-green-500 tw-text-green-500 tw-font-semibold">
                            {product.sizes && product.sizes.map(item=>(
                                <button onClick={()=>setSize(item.size)}>{item.size}</button>
                            ))}
                        </p>
                    </div>
                    <div className="tw-flex tw-flex-row tw-pt-4">
                        <h2 className="md:tw-text-2xl xs:tw-text-sm tw-text-black-50 tw-font-semibold">Quantity</h2>
                        <button className="tw-border-2 tw-border-green-500 focus:tw-outline-none tw-px-1 tw-ml-4">-</button>
                        <span className="tw-border-2 tw-border-green-500 tw-px-4">1</span>
                        <button className="tw-border-2 tw-border-green-500 tw-px-1 focus:tw-outline-none">+</button>
                    </div>
                </div>
            </div>
             {/* //))} */}
            <Footer></Footer>
            {/* </Productprovider> */}
            </div>
    )
}


// export default class ProductDetailsPage extends Component {
//     static contextType=ProductContext;
//     state={
//         product:[]
//     }
//      getProduct=()=>{
//         if(this.props.match.params.id){
//             const res=this.context.products;
//             const data= res.filter(p=>{
//                 return p.id === this.props.match.params.id
//             })
//             this.setState({product:data})
//         }
//     }
    
    

//     componentDidMount(){
//         this.getProduct();
//     }
    

//     render() {
//         console.log(this.state.product)
//         const {product} = this.state
//         return (
//             <div>
//                 {product.map(items=>(
//                     <div key={items.id}>
//                         <h2>{items.name}</h2>
//                     </div>
                    
//                 ))}
//             </div>
//         )
//     }
// }
