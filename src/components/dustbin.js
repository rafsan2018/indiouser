import React from 'react'

export default function dustbin() {
    return (
        <div>
                      <div className="tw-relative tw-flex tw-flex-row tw-bg-woa tw-h-16 xl:tw-h-28 lg:tw-h-24 md:tw-h-20 tw-p-5 xs:tw-w-full tw-w-full xl:tw-px-5 lg:tw-px-5 md:tw-space-x-8 xs:tw-space-x-10 xl:tw-space-x-14">
            
            
            {/* <button onClick={onClickNav} className="md:tw-invisible tw-visible focus:tw-outline-none">
             <GiHamburgerMenu className="tw-mt-1">
              </GiHamburgerMenu>
            </button> */}
          
            <div className="">
            <Link to="/">
            <img src="./imagesstatic/logoind.png" className="tw-display-block md:tw-h-auto md:tw-w-40 lg:tw-h-auto lg:tw-w-52 xl:tw-w-full xs:tw-h-8 xs:tw-w-32"></img>
            </Link>
            </div>
          <nav
           className={`md:tw-relative tw-invisible xs:tw-absolute md:tw-visible lg:tw-mt-2 xl:tw-mt-4 tw-ml-10 tw-flex tw-flex-row tw-w-max-full`}
           >
            <ul className="tw-flex xl:tw-space-x-8 2xl:tw-space-x-52 lg:tw-space-x-12 md:tw-space-x-8 tw-flex-col md:tw-flex-row md:tw-ml-12 xl:tw--ml-4 md:tw-ml--16 tw-list-none md:tw-bg-transparent xs:tw-bg-green-400">
            
              <li className="tw-space-x-5">
                 <button onClick={onClickButton} className="tw-uppercase lg:tw-text-3xl md:tw-text-2xl tw-font-head tw-text-white tw-font-bold focus:tw-outline-none" > 
                  Shop
                </button>
                <nav
                  ref={dropdownRef}
                  className={`tw-z-20 tw-absolute tw-flex xs:tw-flex-col md:tw-flex-row tw-border-green-600 tw-shadow-md tw-box-border tw-border tw-mt-0 tw-invisible tw-bg-white ${isActive ? "visible" : "tw-invisible"}`}
                >
                <div className="tw-p-2">
                <h4 className="tw-text-sm tw-text-green-500 tw-font-bold">TSHIRT</h4>
                {category && category.map(cate=>(
                  <div>
                  <ui className="tw-flex lg:tw-flex-col tw-justify-between tw-w-full tw-ml-auto tw-list-none tw-cursor-default tw-text-sm tw-font-semibold">
                      <li><Link to="/products">{cate.name}</Link></li>
                      </ui>
                      </div>
                    ))}                    
                  
                  <h4 className="tw-text-sm tw-text-green-500 tw-font-bold tw-pt-1">HEATPRESS</h4>
                  <ui className="tw-flex xs:tw-flex-col lg:tw-flex-col tw-justify-between tw-w-full tw-ml-auto tw-list-none tw-text-sm tw-font-semibold">
                    <li><a>Heat transfer viny</a></li>
                    <li><a>Heat transfer paper</a></li>
                  </ui>
                </div>
                <div className="md:tw-ml-10 tw-p-2 md:tw-px-8">
                <h4 className="tw-text-sm tw-text-green-500 tw-font-bold">SUBLIMATION</h4>
                  <ui className="tw-flex xs:tw-flex-col lg:tw-flex-col tw-justify-between tw-w-full tw-ml-auto tw-list-none tw-text-sm tw-font-semibold">
                    <li><a>Sublimation supply</a></li>
                    <li><a>Machines</a></li>
                  </ui>
                  <h4 className="tw-text-sm tw-text-green-500 tw-font-bold tw-pt-1">MEACHINES</h4>
                  <ui className="tw-flex xs:tw-flex-col lg:tw-flex-col tw-justify-between tw-w-full tw-ml-auto tw-list-none tw-text-sm tw-font-semibold">
                    <li><a>Heat transfe</a></li>
                    <li><a>Plotter & accessories</a></li>
                    <li><a>Printer</a></li>
                  </ui>
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
                 <button className="tw-uppercase lg:tw-text-3xl md:tw-text-2xl tw-font-head tw-text-white tw-font-bold focus:tw-outline-none focus:tw-bg-gray-100">
                 <Link to="/about-us" className="" style={{textDecoration:'none'}}>About Us</Link>
                 </button>
                </li>
              <li className="">
                <button className="tw-uppercase lg:tw-text-3xl md:tw-text-2xl tw-font-head tw-text-white tw-font-bold focus:tw-outline-none focus:tw-bg-gray-200">
                  <Link to="/faq" className="tw-transition tw-duration-1000 tw-ease-in-out" style={{textDecoration:'none'}}>Faq</Link>
                </button>
              </li>

            </ul>

          </nav>

          <Drawer open={isDrawer} onClose={onClickNav} direction='left' >
            <div className="tw-mt-5">
              <div className="tw-flex tw-justify-between tw-p-2" onClick={()=>shopsetSelected(!shopselected)}>
                <button className="tw-font-bold focus:tw-outline-none">Shop</button>
                <span>{shopselected===true?'-':'+'}</span>
              </div>
              {/* className={shopselected===true?'show':'tw-invisible'} */}
              <div className={shopselected===true?'visible':'tw-invisible tw--mt-20'}>
                <ul className="tw-list-none tw-inline-block tw-overflow-visible tw-h-full tw-w-full tw-bg-gray-100 tw-px-3">
                        <li className="tw-flex tw-justify-between" onClick={()=>setIsTshirt(!isTshirt)}>                
                          <button>Tshirt</button>
                          <span>{isTshirt===true?'-':'+'}</span>
                        </li>
                          <div className={isTshirt===true?'visible tw-bg-white':'tw-invisible tw--mt-36'}>
                           {category && category.map(cate=>(
                             <div>
                              <ui className="">
                              <li>
                                <Link to="/products">{cate.name}</Link>
                                <span className="tw-bg-red-400 tw-w-full tw-h-1"></span>
                                </li>
                              </ui>
                              </div>
                             ))}  
                          </div>

                          <li className="tw-flex tw-justify-between" onClick={()=>setisHeatpres(!isHeatpres)}>                
                            <button>Heatpress</button>
                            <span>{isHeatpres===true?'-':'+'}</span>
                          </li>
                          <div className={isHeatpres===true?'visible tw-bg-white':'tw-invisible tw--mt-12'}>
                            <ul>
                              <li>Heat transfer viny</li>
                              <li>Heat transfer paper</li>
                            </ul>
                          </div>
                          <li className="tw-flex tw-justify-between" onClick={()=>setIsSublimation(!isSublimation)}>                
                            <button>Sublimation</button>
                            <span>{isSublimation===true?'-':'+'}</span>
                           </li>
                           <div className={isSublimation===true?'visible tw-bg-white':'tw-invisible tw--mt-12'}>
                            <ul>
                              <li>Sublimation supply</li>
                              <li>Machines</li>
                            </ul>
                          </div>
                           <li className="tw-flex tw-justify-between" onClick={()=>setIsMachines(!isMachines)}>                
                            <button>Meachines</button>
                            <span>{isMachines===true?'-':'+'}</span>
                          </li>
                          <div className={isMachines===true?'visible tw-bg-white':'tw-invisible tw--mt-16'}>
                            <ul>
                              <li>Heat transfer</li>
                              <li>Plotter & accessories</li>
                              <li>Printer</li>
                            </ul>
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

          <div className="tw-flex tw-flex-row xl:tw-space-x-32 lg:tw-space-x-20">
          <div><BiSearch size={20} className="tw-absolute tw-mt-3 xs:tw-mt-1 xl:tw-mt-7 lg:tw-mt-4 xs:tw--ml-8 tw--ml-12 lg:tw-ml-10 xl:tw-ml-20 md:tw-ml-5 tw-text-white"></BiSearch></div>
              <div className="">
                <a href="#" className="tw-absolute tw--ml-8 xs:tw--ml-0 lg:tw-ml-8 xl:tw-ml-20 xl:tw--mt-2 xs:tw--mt-7 lg:tw--mt-4 tw--mt-6 md:tw-ml-14 tw-text-white">
                <Link to="/cart">
                <span className={cart.length>0?"tw-visible":"tw-invisible"}>{cart.length}</span>
                <RiShoppingBasketFill size={30} className=""/>
                </Link>
                </a>
                </div>
              </div>
        </div>
        </div>
    )
}
