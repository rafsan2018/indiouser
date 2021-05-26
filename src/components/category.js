import React, { useEffect, useState,useContext } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import StartRating from '../components/startRating';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Pagination } from 'react-bootstrap';
import { SpinnerCircular } from 'spinners-react';
import { useParams } from "react-router-dom";
import { LOAD_PRODUCTS, LOAD_PRODUCTS_CATEGORY } from '../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import {ProductContext, Productprovider} from '../components/context';

export default function Category() {
     const [products, setProducts] = useState([])
    // const {products}=useContext(ProductContext);
        const [catpro, setCatpro] = useState({})
        let { slug } = useParams();

        console.log("slug",slug);

        const { loading, data } = useQuery(LOAD_PRODUCTS_CATEGORY, {
            variables: {slug: slug },
        })

        useEffect(() => {
            if (data) {
                setProducts(data.category)
                console.log('products',products.products)
                // localStorage.setItem('products',JSON.stringify(data.products))
            }
        }, [data])

       let sizes = products.products && products.products.reduce((acc,cv)=>{
           acc = acc.concat(cv.sizes.id)
           return acc;
       },[]);
       //const uniqueSizes = [...new Set(sizes)]
       const sizemap = sizes
       console.log(sizemap)

       if(loading){
           <div>Loading...</div>
       }


    return (
        <div>
            <Header></Header>
            <div className="tw-px-5">
                <h1 className="md:tw-text-5xl tw-flex-md tw-uppercase tw-font-bold">{products.name}</h1>

                <div className="tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-mt-8 md:tw-px-20 tw-space-y-5 tw-space-x-10">

                    {/* <div className="tw-flex tw-h-auto tw-border tw-border-green-500 tw-mx-10"></div> */}
                    <div className="tw-grid xl:tw-grid-cols-4 md:tw-grid-cols-3 xs:tw-grid-cols-2 tw-gap-y-2 tw-gap-x-1 xl:tw-gap-x-8 2xl:tw-gap-x-14 tw-h-full">

                        {products.products && products.products.map((product, idx) => (
                            <>
                            
                            <div key={idx} className="tw-rounded-lg tw-shadow-md tw-border-gray-100 tw-border-2 
                            tw-space-y-2 md:tw-mt-10 hover:tw-opacity-75">
                                {product.images && product.images.map((item,i)=>(
                                item.is_default === true &&                                
                                <Link  to={`/product/${ product.slug }`} style={{textDecoration:'none'}} key={i}>
                                  <img src={'http://182.160.118.196:82/'+item.image}  alt={item.image} className="tw-h-2/3 tw-w-full"></img>
                                  </Link>                                                                                       
                                 ))}
                                
                                <h4 className="tw-pt-2 tw-text-xs md:tw-text-xl tw-text-green-500 tw-font-bold">RM {product.price}</h4>
                                <h2 className="tw-mt-0 tw-text-xs md:tw-text-xl tw-text-black tw-font-bold">{product.title}</h2>
                                <div className="tw-flex tw-flex-row tw-justify-between">
                                    <span className="tw-text-md"><StartRating></StartRating></span>
                                    <span><FcLike className="tw-h-3 tw-w-3 md:tw-h-5 md:tw-w-5"></FcLike></span>
                                </div>

                            </div>
                            
                            </>
                            

                        ))}
                    </div>


                    <div className="tw-flex tw-flex-col tw-mt-8 tw-space-y-10">

                        <div className="tw-bg-green-500 tw-w-full">
                            <h2 className="tw-text-xl tw-font-bold">SEARCH FILTER</h2>
                        </div>
                        <div className="tw-pt-5">
                            <select className="tw-rounded-md tw-border-2 tw-border-green-500 focus:tw-outline-none tw-px-3 tw-py-1">
                                <option>Sort by popularity</option>
                                <option>Sort by average rating</option>
                                <option>Sort by newness</option>
                                <option>Sort by price: low to high</option>
                                <option>Sort by price: high to low</option>
                            </select>
                        </div>

                        <h2 className="tw-bg-green-500 tw-w-ful tw-text-xl tw-font-bold">FILTER BY PRICE</h2>
                        <input type="range" min="1" max="100" value="0" className="tw-text-green-500" />

                        <div className="tw-flex tw-space-x-2 tw-mt-5">
                            <input type="text" placeholder="RM MIN" className="tw-border-2 tw-border-opacity-50 tw-rounded-md tw-border-green-500 focus:tw-outline-none tw-px-2 tw-w-20 tw-h-8"></input><br></br>
                            <hr className="lg:tw-w-full tw-bg-green-500 tw-opacity-50 tw-h-0.5 tw-mt-3"></hr>
                            <input type="text" placeholder="RM MAX" className="tw-border-2 tw-border-opacity-50 tw-rounded-md tw-border-green-500 focus:tw-outline-none tw-px-2 tw-w-20 tw-h-8"></input>
                        </div>
                        <button className="tw-text-left focus:tw-outline-none">FILTER</button>


                        <h2 className="tw-bg-green-500 tw-w-full tw-text-xl tw-font-bold">FILTER BY COLOR</h2>
                        <div className="tw-flex tw-flex-row tw-space-x-3">
                            <div className="tw-rounded-full tw-h-5 tw-w-5 tw-flex items-center tw-justify-center tw-bg-green-500"></div>
                            <h2>Green</h2>
                        </div>
                        <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300"></div>

                        <div className="tw-flex tw-flex-row tw-space-x-3">
                            <div className="tw-rounded-full tw-h-5 tw-w-5 tw-flex items-center tw-justify-center tw-bg-pink-500"></div>
                            <h2>Pink</h2>
                        </div>
                        <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300"></div>

                        <div className="tw-flex tw-flex-row tw-space-x-3">
                            <div className="tw-rounded-full tw-h-5 tw-w-5 tw-flex items-center tw-justify-center tw-bg-purple-500"></div>
                            <h2>Purple</h2>
                        </div>
                        <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300"></div>

                        <div className="tw-flex tw-flex-row tw-space-x-3">
                            <div className="tw-rounded-full tw-h-5 tw-w-5 tw-flex items-center tw-justify-center tw-bg-red-500"></div>
                            <h2>Red</h2>
                        </div>
                        <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300"></div>

                        <div className="tw-flex tw-flex-row tw-space-x-3">
                            <div className="tw-rounded-full tw-h-5 tw-w-5 tw-flex items-center tw-justify-center tw-bg-blue-50"></div>
                            <h2>White</h2>
                        </div>
                        <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300"></div>

                        <h2 className="tw-bg-green-500 tw-w-full tw-text-xl tw-font-bold">FILTER BY SIZE</h2>
                        <div className="tw-flex tw-flex-col">
                            <h1 className="tw-text-xl tw-font-bold">L</h1>
                            <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300 tw-mt-2"></div>
                        </div>
                        <div className="tw-flex tw-flex-col">
                            <h1 className="tw-text-xl tw-font-bold">M</h1>
                            <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300 tw-mt-2"></div>
                        </div>
                        <div className="tw-flex tw-flex-col">
                            <h1 className="tw-text-xl tw-font-bold">S</h1>
                            <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300 tw-mt-2"></div>
                        </div>
                        <div className="tw-flex tw-flex-col">
                            <h1 className="tw-text-xl tw-font-bold">XL</h1>
                            <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300 tw-mt-2"></div>
                        </div>

                        <h2 className="tw-bg-green-500 tw-w-full tw-text-xl">TOP RATED PRODUCTS</h2>
                        <div className="tw-flex tw-flex-row tw-space-x-5">
                            <img src="./imagesstatic/indigo2.jpeg" width="150px" height="10px" className="tw-max-h-32"></img>
                            <div className="tw-flex tw-flex-col tw-space-y-2">
                                <h1 className="tw-w-full tw-mx-2 tw-pt-10">Keep Claim</h1>
                                <h1 className="tw-w-full tw-mx-2">RM 22</h1>
                            </div>
                        </div>
                        <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300 tw-mt-2"></div>

                        <div className="tw-flex tw-flex-row tw-space-x-5">
                            <img src="./imagesstatic/indigo2.jpeg" width="150px" height="10px" className="tw-max-h-32"></img>
                            <div className="tw-flex tw-flex-col tw-space-y-2">
                                <h1 className="tw-w-full tw-mx-2 tw-pt-10">Keep Claim</h1>
                                <h1 className="tw-w-full tw-mx-2">RM 22</h1>
                            </div>
                        </div>
                        <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300 tw-mt-2"></div>

                        <div className="tw-flex tw-flex-row tw-space-x-5">
                            <img src="./imagesstatic/indigo2.jpeg" width="150px" height="10px" className="tw-max-h-32"></img>
                            <div className="tw-flex tw-flex-col tw-space-y-2">
                                <h1 className="tw-w-full tw-mx-2 tw-pt-10">Keep Claim</h1>
                                <h1 className="tw-w-full tw-mx-2">RM 22</h1>
                            </div>
                        </div>
                        <div className="tw-flex tw-flex-row tw-h-1 tw-bg-gray-300 tw-mt-2"></div>


                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

// import React from 'react'

// export default function Category() {
//     return (
//         <div>
//             <h4>category</h4>
//         </div>
//     )
// }
