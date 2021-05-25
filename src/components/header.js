import React, {useState,useRef,useContext,useEffect} from 'react';
import {BiHeadphone,BiSearch} from 'react-icons/bi';
import {SiWechat, SiFacebook, SiInstagram,SiYoutube, SiTiktok} from 'react-icons/si';
import {RiShoppingBasketFill, RiVisaLine, RiMastercardLine} from "react-icons/ri";
import {CgMail} from "react-icons/cg";
import {GiHamburgerMenu} from 'react-icons/gi'
import {useHistory, Link} from 'react-router-dom';
import {useDetectOutsideClick, useDetectOutsideClick2,useDetectOutsideClick3} from './useDetectOutsideClick';
import {useCart} from './context';
import {AuthContext} from '../Context/userContext';
import {CartContext} from '../Context/CartContext';
import axios from 'axios';
import '../App.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import {Collapse} from 'react-bootstrap';
import {useQuery,useMutation} from '@apollo/client';
import {LOAD_PARENT_CATEGORY} from '../GraphQL/Queries';


export default function Header() {
  
  const logindata=JSON.parse(localStorage.getItem('user'))
  const {dispatch} = useContext(AuthContext)
  const {cart} = useContext(CartContext)

  const logout=()=>{
    dispatch({type:'LOGOUT'})
  }
  
  const [category, setCategory]=useState([])


  const {loading,data} = useQuery(LOAD_PARENT_CATEGORY)


  useEffect(()=>{
      if(data){
        const categories = data.categories.filter(cat => cat.is_parent === true);
        setCategory(categories)
        console.log('category', category)
       //console.log(category.name)
      }
  },[data])

  //const cart=useCart();

  const [isDrawer, setIsDrawer] = React.useState(false)
  const toggleDrawer = () => {
    setIsDrawer((prevState) => !prevState)
  }

    const dropdownRef = useRef(null);
    const dropdownRefservice = useRef(null);
    const navDownopen = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClickButton = () => setIsActive(!isActive);
    const [isOpen, setIsOpen] = useDetectOutsideClick2(dropdownRefservice, false);
    const onClickButtonServices = () => setIsOpen(!isOpen);
    const [navOpen,setNavOpen]=useDetectOutsideClick3(navDownopen, false);
    const onClickNav = ()=>{
      setNavOpen(!navOpen);
      // setIsDrawer(!isDrawer);
      setIsDrawer((prevState) => !prevState)
    };

    const [shopselected, shopsetSelected] = useState(false)
    const [services, setServices] =useState(false)
    const [isTshirt,setIsTshirt]=useState(false)
    const [isHeatpres,setisHeatpres]=useState(false)
    const [isSublimation,setIsSublimation]=useState(false)
    const [isMachines,setIsMachines]=useState(false)
    const [isHeatTransfer,setIsHeatTransfer]=useState(false)
    const [isSubOpen,setIsSubOpen]=useState(false)
    const [isVirusPrint,setIsVirusPrint]=useState(false)

    return (
        <div className="tw-sticky tw-top-0 tw-z-50">
          {/* <Productprovider> */}
          <div className="">
          <div className="tw-flex tw-flex-row sm:tw-justify-between xs:tw-justify-none tw-p-2 tw-bg-black">
            <div className="tw-flex tw-flex-row tw-text-white md:tw-mt-5 tw-relative ">
              <CgMail size={16} className="xs:tw-invisible md:tw-visible"></CgMail>
              <h2 className="tw-text-xs xs:tw--ml-3 md:tw--ml-0">indigo@gmail.com</h2>
            </div>

            <div className="tw-visible xs:tw-ml-2 md:tw-ml-0 tw-flex tw-bg-white tw-px-1 xs:tw-mt-0 sm:tw-mt-3 tw-relative tw-rounded-2xl tw-border-green-500 
            xl:tw-border-4 xs:tw-border-0">
              <input type="text" placeholder="Search Here" className="tw-rounded-2xl tw-px-2 tw-text-black xs:tw-w-16 sm:tw-w-full
              focus:tw-outline-none"/>
              <BiSearch className="tw-mt-1 tw-cursor-pointer"/>
            </div>

            <div className="tw-flex tw-flex-row xl:tw-justify-between xs:tw-justify-none md:tw-flex-wrap tw-display-block tw-space-x-2 md:tw-mt-4">
            <div className="tw-flex tw-flex-row xs:tw--ml-2 md:tw--ml-0">
            <BiHeadphone size={20} className="tw-text-white xs:tw-invisible md:tw-visible"></BiHeadphone>
            <h4 className="tw-text-white tw-text-xs">+60142652364</h4>
            </div>
            <div>
            <ul className="tw-flex tw-flex-row md:tw-flex-row tw-list-none tw-ml-auto tw-space-x-4">
            <li className="nav-item tw-text-white">
              <a className="tw-flex tw-items-center tw-text-xs  hover:tw-opacity-75">
                <button onClick={logout}>{logindata?'Logout':''}</button>
              </a>
            </li>
            
            <li className="nav-item tw-text-white">
              <a className="tw-flex tw-items-center tw-text-xs hover:tw-opacity-75">
                {logindata?logindata.name:<Link to="/login">Login</Link>}
              </a>
            </li>
          </ul>
          </div>
      </div>
      </div>
      </div>
      {/* End of haeder top */}
      {/* start menu bar ./imagesstatic/logoind.png */}
      {/* tw-display-block md:tw-h-auto md:tw-w-40 lg:tw-h-auto lg:tw-w-52 xl:tw-w-full xs:tw-h-8 xs:tw-w-32 */}
       <div className="tw-flex tw-relative tw-bg-menubar xs:tw-pl-2 xl:tw-pl-0 2xl:tw-pl-12 md:tw-px-5 lg:tw-py-4 xl:tw-py-8 
       xs:tw-py-2 2xl:tw-space-x-14 xs:tw-space-x-2 lg:tw-overflow-visible xs:tw-overflow-hidden md:tw-h-auto xs:tw-h-14">

         <div className="tw-flex xs:tw-w-1/2 sm:tw-w-2/12 xl:tw-w-2/12 tw-h-auto tw-space-x-2">
            <button onClick={() => onClickNav()} className="lg:tw-invisible tw-visible focus:tw-outline-none">
              <GiHamburgerMenu className="tw-mt-1">
              </GiHamburgerMenu>
            </button>

            <div className="xs:tw-w-full md:tw-w-full">
              <Link to="/">
                <img src="./imagesstatic/logoind.png" className="xs:tw-ml-5 sm:tw-ml-0"></img>
              </Link>
            </div>
         </div>

         <div className="tw-flex-grow tw-invisible lg:tw-visible sm:tw-w-4/12 xs:tw-w-0">
           <nav>
             <ul className="tw-flex xs:tw-space-x-1 sm:tw-space-x-10 md:tw-space-x-12 xl:tw-space-x-20 2xl:tw-space-x-24 xl:tw-mt-2">
               <li className="xl:tw-text-3xl sm:tw-text-xl tw-font-head tw-text-white tw-font-bold">
                 <Link to="/" className="tw-transition tw-duration-1000 tw-ease-in-out tw-px-5 hover:tw-text-white hover:tw-bg-gray-400" style={{ textDecoration: 'none' }}
                 >HOME</Link>
                 </li>
                 <li className="xl:tw-text-3xl sm:tw-text-xl tw-font-head tw-text-white tw-font-bold tw-cursor-pointer tw-overflow-visible" onClick={onClickButton}>
                  SHOP
                   <nav
                    ref={dropdownRef}
                    className={`tw-z-20 tw-w-1/4 tw-absolute tw-flex xs:tw-flex-col md:tw-flex-col tw-border-green-600 tw-shadow-md tw-box-border tw-border tw-mt-0 tw-invisible tw-bg-white ${isActive ? "visible" : "tw-invisible"}`}
                  >
                    <div className="tw-grid tw-grid-cols-2">
                      {category && category.map((cate, index) => (

                        <>
                          <div className="tw-p-2" key={index.id}>
                            <h4 className="tw-text-sm tw-text-woa tw-font-bold text-uppercase">{cate.name}</h4>
                            <div>
                              {cate.children && cate.children.map((sub,i) =>
                                (<li key={i.id}><Link to={`/category/${sub.slug}`}  className="tw-text-gray-600 tw-text-sm tw-font-serif tw-no-underline hover:tw-bg-gray-400" style={{ textDecoration: 'none' }}>
                                  {sub.name}</Link></li>)
                              )}
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </nav>
                 </li>
                 <li className="xl:tw-text-3xl sm:tw-text-xl tw-font-head tw-text-white tw-font-bold tw-cursor-pointer" onClick={onClickButtonServices}>
                   SERVICES
                   <nav
                    ref={dropdownRefservice}
                    className={`tw-z-20 tw-absolute tw-flex xs:tw-flex-col xl:tw-flex-row lg:tw-flex-row tw-border-green-600 tw-shadow-md tw-box-border tw-border tw-w-max-xs tw-mt-0 tw-invisible tw-bg-white ${isOpen ? "visible" : "tw-invisible"}`}
                  >
                    <div className="tw-p-2">
                      <h4 className="tw-text-sm tw-text-green-500 tw-font-bold">HEAT TRANSFER</h4>
                      <ui className="tw-flex xs:tw-flex-col lg:tw-flex-col tw-justify-between tw-w-full tw-ml-auto tw-list-none tw-text-sm tw-font-semibold">
                        <li className="tw-text-gray-600">Print & cut</li>
                      </ui>
                      <h4 className="tw-text-sm tw-text-green-500 tw-font-bold tw-pt-1">SUBLIMATION</h4>
                      <ui className="tw-flex xs:tw-flex-col lg:tw-flex-col tw-justify-between tw-w-full tw-ml-auto tw-list-none tw-cursor-default tw-text-sm tw-font-semibold">
                        <li className="tw-text-gray-600"><a>Full sublimation</a></li>
                        <li className="tw-text-gray-600"><a>Front & back sublimation</a></li>
                      </ui>
                      <h4 className="tw-text-sm tw-text-green-500 tw-font-bold tw-pt-1">GET A QUOTE</h4>
                    </div>
                    <div className="md:tw-ml-10 tw-p-2">
                      <h4 className="tw-text-sm tw-text-green-500 tw-font-bold">VIRUSPRINT</h4>
                      <ui className="tw-flex xs:tw-flex-col lg:tw-flex-col tw-justify-between tw-w-full tw-ml-auto tw-list-none tw-text-sm tw-font-semibold">
                        <li className="tw-text-gray-600"><a>VirusPrint</a></li>
                        <li className="tw-text-gray-600"><a>VirusEco</a></li>
                        <li className="tw-text-gray-600"><a>VirusClear</a></li>
                        <li className="tw-text-gray-600"><a>VirusISO</a></li>
                      </ui>
                    </div>
                  </nav>
                 </li>
                 <li className="xl:tw-text-3xl sm:tw-text-xl tw-font-head tw-text-white tw-font-bold">
                 <Link to="/about-us" className="tw-transition tw-duration-1000 tw-ease-in-out tw-px-5 hover:tw-text-white hover:tw-bg-gray-400" style={{ textDecoration: 'none' }}
                 >ABOUT US</Link>
                 </li>
                 <li className="xl:tw-text-3xl sm:tw-text-xl tw-font-head tw-text-white tw-font-bold">
                 <Link to="/faq" className="tw-transition tw-duration-1000 tw-ease-in-out tw-px-5 hover:tw-text-white hover:tw-bg-gray-400" style={{ textDecoration: 'none' }}
                 >FAQ</Link>
                 </li>
             </ul>
           </nav>
         </div>

         <div className="lg:tw-w-2/12 xl:tw-w-1/12 xs:tw-w-1/2">
            {/* <div className="tw-flex tw-flex-row lg:tw-space-x-20 xs:tw-space-x-10 xs:tw-ml-10 lg:tw-ml-0"> */}
              {/* <div><BiSearch size={20} className="tw-absolute md:tw-mt-4 xs:tw-mt-2 tw-text-white">
              </BiSearch></div> */}
              <div className="">
                  <Link to="/cart" className="tw-absolute xs:tw--mt-6 md:tw--mt-4 tw-bg-fixed tw-text-white" style={{textDecoration:'none'}}>
                    <span className={cart.length > 0 ? 
                      "tw-visible xs:tw-mt-6 md:tw-mt-0 xl:tw-ml-6 xs:tw-ml-28 tw-bg-red-600 xl:tw-w-6 xs:tw-w-4 xl:tw-h-6 xs:tw-h-4 xl:tw-text-sm xl:tw-text-xs tw-rounded-full tw-flex tw-items-center tw-justify-center" 
                      : "tw-invisible"}>{cart.length}</span>   
                    <RiShoppingBasketFill size={30} className="xs:tw-ml-20 md:tw-ml-0 xs:tw--mt-0 md:tw--mt-2 xl:tw--mt-0"/>
                  </Link>
                
              </div>
            {/* </div> */}
         </div>
       </div>
       {/* end of menu section */}
       <Drawer open={isDrawer} onClose={onClickNav} direction='left' >
            <div className="tw-mt-5">
            <div className="tw-p-2">
                 <span className="tw-font-bold focus:tw-outline-none"><Link to="/">Home</Link></span>
               </div>
              <div className="tw-flex tw-justify-between tw-p-2" onClick={()=>shopsetSelected(!shopselected)}>
                <button className="tw-font-bold focus:tw-outline-none">Shop</button>
                <span>{shopselected===true?'-':'+'}</span>
              </div>
              {/* className={shopselected===true?'show':'tw-invisible'} */}
              <div className={shopselected===true?'visible':'tw-invisible tw--mt-5'}>
                <ul className="tw-list-none tw-inline-block tw-overflow-visible tw-h-full tw-w-full tw-bg-gray-100 tw-px-5">
                <div className="">
                        {category && category.map((cate, index)=>(

                            <>
                         <div className="tw-p-2" onClick={()=>setIsTshirt(!isTshirt)} key={index.id}>
                            <div className="tw-flex tw-text-sm  tw-font-bold tw-justify-between">
                              <button className="tw-font-bold tw--mt-8 tw-py-5">{cate.name}</button> 
                              <span className="tw--mt-4">{isTshirt===true?'-':'+ '}</span>
                              </div>
                            <div>
                              {cate.children && cate.children.map((sub,i)=>
                                (
                                  
                                    <li className={isTshirt===true?'visible tw-bg-white':'tw-invisible tw--mt-20'} key={i.id}>
                                      <Link to={`/category/${sub.slug}`} className="tw-space-y-2">{sub.name}
                                      </Link>
                                      </li>
                                  
                                
                              ))}
                            </div>
                         </div>

                         </>
                        
                        ))}
                      </div>
                  </ul>
                </div>
                <div className="tw-flex tw-justify-between tw-p-2" onClick={()=>setServices(!services)}>
                  <button className="tw-font-bold focus:tw-outline-none">Services</button>
                  <span>{services===true?'-':'+'}</span>
               </div>
               <div className={services===true?'tw-visible':'tw-invisible tw--mt-20'}>
                  <ul className="tw-list-none tw-inline-block tw-overflow-visible tw-h-full tw-w-full tw-bg-gray-100 tw-px-3">
                      <li className="tw-flex tw-justify-between" onClick={()=>setIsHeatTransfer(!isHeatTransfer)}>                
                          <button>Heat Transfer</button>
                          <span>{isHeatTransfer===true?'-':'+'}</span>
                        </li>
                        <div className={isHeatTransfer===true?'visible tw-bg-white':'tw-invisible tw--mt-4'}>
                            <ul>
                              <li>Print & cut</li>
                            </ul>
                          </div>
                        <li className="tw-flex tw-justify-between" onClick={()=>setIsSubOpen(!isSubOpen)}>                
                          <button>Sublimation</button>
                          <span>{isSubOpen===true?'-':'+'}</span>
                        </li>
                        <div className={isSubOpen===true?'visible tw-bg-white':'tw-invisible tw--mt-10'}>
                            <ul>
                              <li>Full sublimation</li>
                              <li>Front & back sublimation</li>
                            </ul>
                          </div>
                        <li className="tw-flex tw-justify-between" onClick={()=>setIsVirusPrint(!isVirusPrint)}>                
                          <button>Virus Print</button>
                          <span>{isVirusPrint===true?'-':'+'}</span>
                        </li>
                        <div className={isVirusPrint===true?'visible tw-bg-white':'tw-invisible tw--mt-24'}>
                            <ul>
                              <li>VirusPrint</li>
                              <li>VirusEco</li>
                              <li>VirusClear</li>
                              <li>VirusISO</li>
                            </ul>
                          </div>
                        <li className="tw-mt-1">                
                          <button>Get a quote</button>
                        </li>
                      </ul>
               </div>
               <div className="tw-p-2">
                 <span className="tw-font-bold focus:tw-outline-none"><Link to="/about-us">About Us</Link></span>
               </div>
               <div className="tw-p-2 tw-mt-5">
                 <span className="tw-font-bold focus:tw-outline-none"><Link to="/faq">Faq</Link></span>
               </div>

            </div>
          </Drawer>
      </div>
    )
}



{/* <div className="tw-flex-grow tw-invisible lg:tw-visible md:tw-pl-5 xs:tw-pl-0 md:tw--mt-2">
<nav
     className={`md:tw-relative tw-invisible xs:tw-absolute lg:tw-visible lg:tw-mt-2 xl:tw-mt-4 xs:tw-ml-0 xl:tw-ml-10 tw-flex`}
   >
     <ul className="tw-flex xl:tw-space-x-20 md:tw-space-x-24 xs:tw-space-x-1">
     <li className="">
         <button className="tw-uppercase md:tw-text-xl xl:tw-text-3xl tw-font-head tw-text-white tw-font-bold">
           <Link to="/" className="tw-transition tw-duration-1000 tw-ease-in-out tw-px-5 hover:tw-text-white hover:tw-bg-gray-400" style={{ textDecoration: 'none' }}>HOME</Link>
         </button>
       </li>
       <li className="tw-space-x-2">
         <button onClick={onClickButton} className="tw-uppercase tw-px-5 md:tw-text-xl xl:tw-text-3xl tw-font-head tw-text-white tw-font-bold focus:tw-outline-none" >
           Shop
  </button>
         <nav
           ref={dropdownRef}
           className={`tw-z-20 tw-w-auto tw-absolute tw-flex xs:tw-flex-col md:tw-flex-col tw-border-green-600 tw-shadow-md tw-box-border tw-border tw-mt-0 tw-invisible tw-bg-white ${isActive ? "visible" : "tw-invisible"}`}
         >
           <div className="tw-grid tw-grid-cols-2">
             {category && category.map((cate, index) => (
               
               <>
                 <div className="tw-p-2" key={index}>
                   <h4 className="tw-text-sm tw-text-green-500 tw-font-bold text-uppercase">{cate.name}</h4>
                   <div>
                     {cate.children && cate.children.map(sub =>
                       (<li><Link to={`/category/${sub.slug}`}>{sub.name}</Link></li>)
                     )}
                   </div>
                 </div>
               </>
             ))}
           </div>
         </nav>
       </li>
       <li className="">
         <button onClick={onClickButtonServices} className="tw-uppercase tw-px-5 md:tw-text-xl xl:tw-text-3xl tw-text-white tw-font-head tw-font-bold focus:tw-outline-none" >
           Services
  </button>
         <nav
           ref={dropdownRefservice}
           className={`tw-z-20 tw-absolute tw-flex xs:tw-flex-col xl:tw-flex-row lg:tw-flex-row tw-border-green-600 tw-shadow-md tw-box-border tw-border tw-w-max-xs tw-mt-0 tw-invisible tw-bg-white ${isOpen ? "visible" : "tw-invisible"}`}
         >
           <div className="tw-p-2">
             <h4 className="tw-text-sm tw-text-green-500 tw-font-bold">HEAT TRANSFER</h4>
             <ui className="tw-flex xs:tw-flex-col lg:tw-flex-col tw-justify-between tw-w-full tw-ml-auto tw-list-none tw-text-sm tw-font-semibold">
               <li><a>Print & cut</a></li>
             </ui>
             <h4 className="tw-text-sm tw-text-green-500 tw-font-bold tw-pt-1">SUBLIMATION</h4>
             <ui className="tw-flex xs:tw-flex-col lg:tw-flex-col tw-justify-between tw-w-full tw-ml-auto tw-list-none tw-cursor-default tw-text-sm tw-font-semibold">
               <li><a>Full sublimation</a></li>
               <li><a>Front & back sublimation</a></li>
             </ui>
             <h4 className="tw-text-sm tw-text-green-500 tw-font-bold tw-pt-1">GET A QUOTE</h4>
           </div>
           <div className="md:tw-ml-10 tw-p-2">
             <h4 className="tw-text-sm tw-text-green-500 tw-font-bold">VIRUSPRINT</h4>
             <ui className="tw-flex xs:tw-flex-col lg:tw-flex-col tw-justify-between tw-w-full tw-ml-auto tw-list-none tw-text-sm tw-font-semibold">
               <li><a>VirusPrint</a></li>
               <li><a>VirusEco</a></li>
               <li><a>VirusClear</a></li>
               <li><a>VirusISO</a></li>
             </ui>
           </div>
         </nav>
       </li>
       <li className="">
         <button className="tw-uppercase md:tw-text-xl xl:tw-text-3xl tw-font-head tw-text-white tw-font-bold">
           <Link to="/about-us" className="tw-transition tw-px-5 tw-duration-1000 tw-ease-in-out hover:tw-text-gray-500" style={{ textDecoration: 'none' }}>About Us</Link>
         </button>
       </li>
       <li className="">
         <button className="tw-uppercase md:tw-text-xl xl:tw-text-3xl tw-font-head tw-text-white tw-font-bold">
           <Link to="/faq" className="tw-transition tw-px-5 tw-duration-1000 tw-ease-in-out hover:tw-text-gray-500" style={{ textDecoration: 'none' }}>Faq</Link>
         </button>
       </li>

     </ul>

   </nav>
</div> */}



                         // (index % 2 === 0) ? (
                        {/* //  ) : ( */}
                         {/* <div className="tw-p-2">
                            <h4 className="tw-text-sm tw-text-green-500 tw-font-bold text-uppercase">{cate.name}</h4>
                            <div>
                              {cate.children && cate.children.map(sub=>
                                (<li>{sub.name}</li>)
                              )}
                            </div>
                         </div> */}
                         //  )
                                                 //  )