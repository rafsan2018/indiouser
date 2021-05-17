<div className="tw-flex tw-bg-woa tw-px-5 tw-py-5">

<div className="tw-flex xs:tw-w-24 md:tw-w-1/4 xs:tw-space-x-2 xs:tw-h-auto md:tw-h-14">

   <button onClick={()=>onClickNav()} className="md:tw-invisible tw-visible focus:tw-outline-none">
    <GiHamburgerMenu className="tw-mt-1">
     </GiHamburgerMenu>
   </button>

   <div className="xs:tw-w-full xs:tw-h-5 md:tw-w-full">
      <Link to="/">
       <img src="./imagesstatic/logoind.png" className=""></img>
       </Link>
   </div>

   </div>

<div className="tw-flex tw-invisible md:tw-visible md:tw-w-3/4">
   <nav
     className={`md:tw-relative tw-invisible xs:tw-absolute md:tw-visible lg:tw-mt-2 xl:tw-mt-4 tw-ml-10 tw-flex`}
     >
       <ul className="tw-flex xl:tw-space-x-40 md:tw-space-x-16 xs:tw-space-x-1">
       
         <li className="tw-space-x-2">
           <button onClick={onClickButton} className="tw-uppercase lg:tw-text-3xl md:tw-text-2xl tw-font-head tw-text-white tw-font-bold focus:tw-outline-none" > 
             Shop
           </button>
           <nav
             ref={dropdownRef}
             className={`tw-z-20 tw-w-auto tw-absolute tw-flex xs:tw-flex-col md:tw-flex-col tw-border-green-600 tw-shadow-md tw-box-border tw-border tw-mt-0 tw-invisible tw-bg-white ${isActive ? "visible" : "tw-invisible"}`}
           >
             <div className="tw-grid tw-grid-cols-2">
               {category && category.map((cate, index)=>(
                 // (index % 2 === 0) ? (
                   <>
                <div className="tw-p-2">
                   <h4 className="tw-text-sm tw-text-green-500 tw-font-bold text-uppercase">{cate.name}</h4>
                   <div>
                     {cate.children && cate.children.map(sub=>
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
           <Link to="/about-us" className="tw-transition tw-duration-1000 tw-ease-in-out hover:tw-text-gray-500" style={{textDecoration:'none'}}>About Us</Link>
           </button>
           </li>
         <li className="">
           <button className="tw-uppercase lg:tw-text-3xl md:tw-text-2xl tw-font-head tw-text-white tw-font-bold">
             <Link to="/faq" className="tw-transition tw-duration-1000 tw-ease-in-out hover:tw-text-gray-500" style={{textDecoration:'none'}}>Faq</Link>
           </button>
         </li>

       </ul>

     </nav>
</div>

<div className="tw-w-1/2">
  <div className="tw-flex tw-flex-row tw-space-x-10">
   <div><BiSearch size={20} className=" tw-mt-3 xs:tw-mt-1 xl:tw-mt-7 lg:tw-mt-4 xs:tw--ml-8 tw--ml-12 lg:tw-ml-10 xl:tw-ml-20 md:tw-ml-5 tw-text-white">
     </BiSearch></div>
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