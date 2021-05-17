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
import axios from 'axios';
import '../App.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import {Collapse} from 'react-bootstrap';
import {useQuery,useMutation} from '@apollo/client';
import {LOAD_PARENT_CATEGORY} from '../GraphQL/Queries';


export default function Header() {
  
  //const data=JSON.parse(localStorage.getItem('user'))
  const {dispatch} = useContext(AuthContext)

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

  const cart=useCart();

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
        <div >
          {/* <Productprovider> */}
          <div className="md:tw--mt-3">
          <div className="tw-flex tw-flex-row tw-justify-between tw-p-2 tw-bg-black">
            <div className="tw-flex tw-flex-row tw-text-white md:tw-mt-5">
              <CgMail size={16}></CgMail>
              <h2 className="tw-text-xs">indigo@gmail.com</h2>
            </div>
            <div className="tw-flex tw-flex-row tw-justify-between md:tw-flex-wrap tw-display-block tw-space-x-2 md:tw-mt-4">
            <div className="tw-flex tw-flex-row">
            <BiHeadphone size={20} className="tw-text-white"></BiHeadphone>
            <h4 className="tw-text-white tw-text-xs">+60142652364</h4>
            </div>
            <div>
            <ul className="tw-flex tw-flex-row md:tw-flex-row tw-list-none tw-ml-auto tw-space-x-4">
            <li className="nav-item tw-text-white">
              <a className="tw-flex tw-items-center tw-text-xs  hover:tw-opacity-75">
                <button onClick={logout}>{data?'Logout':''}</button>
              </a>
            </li>
            
            <li className="nav-item tw-text-white">
              <a className="tw-flex tw-items-center tw-text-xs  hover:tw-opacity-75">
                {data?data.name:<Link to="/login">Login</Link>}
              </a>
            </li>
          </ul>
          </div>
      </div>
      </div>
      </div>
      {/* End of haeder top */}
      {/* start menu bar */}
      {/* tw-display-block md:tw-h-auto md:tw-w-40 lg:tw-h-auto lg:tw-w-52 xl:tw-w-full xs:tw-h-8 xs:tw-w-32 */}
       <div className="tw-flex tw-relative tw-bg-woa tw-px-2 tw-py-3 tw-max-w-full md:tw-space-x-8 tw-justify-between">
         <div className="md:tw-flex-none xs:tw-flex lg:tw-w-1/6 xs:tw-w-1/3 tw-h-auto tw-space-x-2">
            <button onClick={() => onClickNav()} className="md:tw-invisible tw-visible focus:tw-outline-none">
              <GiHamburgerMenu className="tw-mt-1">
              </GiHamburgerMenu>
            </button>

            <div className="xs:tw-w-full md:tw-w-full">
              <Link to="/">
                <img src="./imagesstatic/logoind.png" className=""></img>
              </Link>
            </div>
         </div>
         <div className="tw-flex-grow tw-invisible md:tw-visible md:tw-pl-14 xs:tw-pl-0 md:tw--mt-2">
         <nav
              className={`md:tw-relative tw-invisible xs:tw-absolute md:tw-visible lg:tw-mt-2 xl:tw-mt-4 xs:tw-ml-0 md:tw-ml-10 tw-flex`}
            >
              <ul className="tw-flex xl:tw-space-x-48 md:tw-space-x-24 xs:tw-space-x-1">

                <li className="tw-space-x-2">
                  <button onClick={onClickButton} className="tw-uppercase lg:tw-text-3xl md:tw-text-2xl tw-font-head tw-text-white tw-font-bold focus:tw-outline-none" >
                    Shop
           </button>
                  <nav
                    ref={dropdownRef}
                    className={`tw-z-20 tw-w-auto tw-absolute tw-flex xs:tw-flex-col md:tw-flex-col tw-border-green-600 tw-shadow-md tw-box-border tw-border tw-mt-0 tw-invisible tw-bg-white ${isActive ? "visible" : "tw-invisible"}`}
                  >
                    <div className="tw-grid tw-grid-cols-2">
                      {category && category.map((cate, index) => (
                        // (index % 2 === 0) ? (
                        <>
                          <div className="tw-p-2">
                            <h4 className="tw-text-sm tw-text-green-500 tw-font-bold text-uppercase">{cate.name}</h4>
                            <div>
                              {cate.children && cate.children.map(sub =>
                                (<li><Link to={`/category/${sub.slug}`}>{sub.name}</Link></li>)
                              )}
                            </div>
                          </div>
                          {/* //  ) : ( */}
                          {/* <div className="tw-p-2">
                   <h4 className="tw-text-sm tw-text-green-500 tw-font-bold text-uppercase">{cate.name}</h4>
                   <div>
                     {cate.children && cate.children.map(sub=>
                       (<li>{sub.name}</li>)
                     )}
                   </div>
                </div> */}
                        </>
                        //  )
                      ))}
                    </div>
                  </nav>
                </li>
                <li className="">
                  <button onClick={onClickButtonServices} className="tw-uppercase lg:tw-text-3xl md:tw-text-2xl tw-text-white tw-font-head tw-font-bold focus:tw-outline-none" >
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
                  <button className="tw-uppercase lg:tw-text-3xl md:tw-text-2xl tw-font-head tw-text-white tw-font-bold">
                    <Link to="/about-us" className="tw-transition tw-duration-1000 tw-ease-in-out hover:tw-text-gray-500" style={{ textDecoration: 'none' }}>About Us</Link>
                  </button>
                </li>
                <li className="">
                  <button className="tw-uppercase lg:tw-text-3xl md:tw-text-2xl tw-font-head tw-text-white tw-font-bold">
                    <Link to="/faq" className="tw-transition tw-duration-1000 tw-ease-in-out hover:tw-text-gray-500" style={{ textDecoration: 'none' }}>Faq</Link>
                  </button>
                </li>

              </ul>

            </nav>
         </div>
         <div className="tw-flex-none tw-w-20">
            <div className="tw-flex tw-flex-row tw-space-x-2">
              <div><BiSearch size={20} className="tw-absolute tw--ml-10 md:tw-mt-4 tw-text-white">
              </BiSearch></div>
              <div className="">
                <a href="#" className="tw-absolute xs:tw--mt-8 md:tw--mt-4 tw-text-white">
                  <Link to="/cart">
                    <span className={cart.length > 0 ? "tw-visible" : "tw-invisible"}>{cart.length}</span>   
                    {/* className={cart.length > 0 ? "tw-visible" : "tw-invisible"} */}
                    <RiShoppingBasketFill size={30} className="" />
                  </Link>
                </a>
              </div>
            </div>
         </div>
       </div>
       {/* end of menu section */}
       <Drawer open={isDrawer} onClose={onClickNav} direction='left' >
            <div className="tw-mt-5">
              <div className="tw-flex tw-justify-between tw-p-2" onClick={()=>shopsetSelected(!shopselected)}>
                <button className="tw-font-bold focus:tw-outline-none">Shop</button>
                <span>{shopselected===true?'-':'+'}</span>
              </div>
              {/* className={shopselected===true?'show':'tw-invisible'} */}
              <div className={shopselected===true?'visible':'tw-invisible tw--mt-5'}>
                <ul className="tw-list-none tw-inline-block tw-overflow-visible tw-h-full tw-w-full tw-bg-gray-100 tw-px-3">
                <div className="tw-grid tw-grid-rows-2">
                        {category && category.map((cate, index)=>(
                          // (index % 2 === 0) ? (
                            <>
                         <div className="tw-p-2" onClick={()=>setIsTshirt(!isTshirt)}>
                            <div className="tw-flex tw-text-sm tw-text-green-500 tw-font-bold tw-text-uppercase tw-justify-between">
                              <button className="tw-text-md tw-text-green-500 tw-font-bold tw-text-uppercase">{cate.name}</button> 
                              <span>{isTshirt===true?'-':'+'}</span>
                              </div>
                            <div>
                              {cate.children && cate.children.map(sub=>
                                (
                                  <ul className="">
                                    <li className={isTshirt===true?'visible tw-bg-white':'tw-invisible tw--mt-20'}>
                                      <Link to={`/category/${sub.slug}`} className="tw-space-y-2">{sub.name}
                                      </Link>
                                      </li>
                                  </ul>
                                
                              ))}
                            </div>
                         </div>
                        {/* //  ) : ( */}
                         {/* <div className="tw-p-2">
                            <h4 className="tw-text-sm tw-text-green-500 tw-font-bold text-uppercase">{cate.name}</h4>
                            <div>
                              {cate.children && cate.children.map(sub=>
                                (<li>{sub.name}</li>)
                              )}
                            </div>
                         </div> */}
                         </>
                        //  )
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


