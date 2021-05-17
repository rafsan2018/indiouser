import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { AiOutlinePrinter } from 'react-icons/ai';
import Footer from '../src/components/footer';
// import './assets/main.css';
import Header from '../src/components/header';
import './App.css'



function App() {
  
  const [index, setIndex] = useState(0);
  const [value, setValue]=useState("");

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  //const product=JSON.parse(localStorage.getItem('products'));
  const images = [
    "./imagesstatic/001.jpg",
    "./imagesstatic/002.jpg",
    "./imagesstatic/001.jpg"
  ]
  const slider=()=>{
    let sliderImage = document.getElementById("slideImg")
    let len = images.length;
    let i=0
    if(i>len-1){
      i=0;
    }
    sliderImage.src = images[i];
    i++;
    setTimeout('slider()',3000);
  }
  return (
    <div onLoad={()=>slider()}>
      {/* Start header Section */}
        <Header></Header>
        {/* End Header Section */}

        {/* start banner slider section */}
        <div className="banner_slide">
          <div className="slider_image">
            <img src="./imagesstatic/001.jpg" id="slideImg"></img>
          </div>
          <div className="overlay">
            <div className="content_slide tw-space-y-20">
              <h1 className="tw-text-lg tw-font-head tw-tracking-widest">GET YOUR WARDROBE READY FOR</h1>
              <div className="tw-rounded tw-border-8 tw-border-green-600 tw-m-32">
                <p className="tw-text-9xl tw-font-head tw-p-2 tw-font-bold">SUMMER</p>
                {/* <span className="tw-text-4xl tw-font-head tw-font-bold">Savings</span> */}
              </div>
              
            </div>
            <button type="button" className="slide_button">Shop Now</button>
          </div>
        </div>
        {/* <div className="tw-flex tw-flex-row">
          <Carousel>
            <Carousel.Item>
              <img src="./imagesstatic/001.jpg" className="xs:tw-w-auto xs:tw-h-auto sm:tw-w-auto sm:tw-h-auto lg:tw-w-screen lg:tw-h-96 xl:tw-h-screen"></img>
              <Carousel.Caption>
                <h1>Hello Boss</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./imagesstatic/002.jpg" className="xs:tw-w-auto xs:tw-h-auto sm:tw-w-auto sm:tw-h-auto lg:tw-w-screen lg:tw-h-96 xl:tw-h-screen"></img>
              <Carousel.Caption>
                <h1>Hello Boss</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./imagesstatic/003.jpg" className="xs:tw-w-auto xs:tw-h-auto sm:tw-w-auto sm:tw-h-auto lg:tw-w-screen lg:tw-h-96 xl:tw-h-screen"></img>
              <Carousel.Caption>
                <h1>Hello Boss</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div> */}

        <div className="tw-flex tw-flex-row tw-mt-10 tw-px-5">
          <div className="tw-bg-green-500 tw-h-1 tw-w-1/2 tw-mt-3"></div>
           <h1 className="lg:tw-text-4xl md:tw-text-2xl tw-text-md tw-uppercase tw-font-bold tw-w-1/3 tw-text-center tw-font-head tw-font-serif">Featured Product</h1>
           <div className="tw-bg-green-500 tw-h-1 tw-w-1/2 tw-mt-3"></div>
        </div>

        <div className="tw-flex tw-flex-row tw-px-5">
          <div className="tw-h-auto tw-bg-green-500 tw--mt-6 sm:tw--mt-2 lg:tw--mt-16 xl:tw--mt-7 tw--mb-3 tw-w-1"></div>

          <div className="tw-flex tw-flex-col">

          
          <div className="tw-grid xs:tw-grid-cols-2 tablet:tw-grid-cols-2 lg:tw-grid-cols-4 sm:tw-grid-cols-4 sm:tw-gap-x-20 md:tw-gap-x-10 2xl:tw-gap-x-52 xl:tw-gap-x-32 lg:tw-gap-x-5 tw-mt-5">

            <div className="">
            <img src="./imagesstatic/image-removebg-preview (3).png" className="tw-display-block tw-w-36 tw-h-32 md:tw-h-52 sm:tw-w-72 sm:tw-h-72"/>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold tw-mt-5">Keep Claim</h1>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold">RM20-RM50</h1>
            <div className="tw-grid tw-grid-cols-4 tw-mt-3 tw-font-semibold xl:tw-px-14 2xl:tw-px-24 md:tw-px-10 lg:tw-px-10 tw-px-5 tw-transform tw-scale-100 sm:tw-scale-150">
            <input type="radio" name="gender" value="male" className=""/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            </div>
            </div>

            <div className="">
            <img src="./imagesstatic/kids-parkour-urban-t-shirt-black-yellow-300x300.jpg" className="tw-display-block tw-w-36 tw-h-32 md:tw-h-52 sm:tw-w-72 sm:tw-h-72"/>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold tw-mt-5">Christmas Trees</h1>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold">RM20-RM50</h1>
            <div className="tw-grid tw-grid-cols-4 md:tw-grid-cols-4 md:tw-px-10 lg:tw-px-10 xl:tw-px-14 2xl:tw-px-24 tw-mt-3 tw-font-semibold tw-px-4 tw-transform tw-scale-100 sm:tw-scale-150">
            <input type="radio" name="gender" value="male" className=""/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            </div>
            </div>

            <div className="">
            <img src="./imagesstatic/kids-transformers-black-t-shirt-300x300.jpg" className="tw-display-block tw-w-36 tw-h-32 md:tw-h-52 sm:tw-w-72 sm:tw-h-72"/>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold tw-mt-5">Christmas Trees</h1>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold">RM20-RM50</h1>
            <div className="tw-grid tw-grid-cols-4 md:tw-grid-cols-4 md:tw-px-10 lg:tw-px-10 xl:tw-px-14 2xl:tw-px-24 tw-mt-3 tw-font-semibold tw-px-4 tw-transform tw-scale-100 sm:tw-scale-150">
            <input type="radio" name="gender" value="male" className=""/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            </div>
            </div>

            <div className="">
            <img src="./imagesstatic/kids_letters-black_with_yellow_print-300x300.jpg" className="tw-display-block tw-w-36 tw-h-32 md:tw-h-52 sm:tw-w-72 sm:tw-h-72"/>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold tw-mt-5">Christmas Trees</h1>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold">RM20-RM50</h1>
            <div className="tw-grid tw-grid-cols-4 md:tw-grid-cols-4 md:tw-px-10 lg:tw-px-10 xl:tw-px-14 2xl:tw-px-24 tw-mt-3 tw-font-semibold tw-px-4 tw-transform tw-scale-100 sm:tw-scale-150">
            <input type="radio" name="gender" value="male" className=""/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            </div>
            </div>

          </div>

          <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-4 tw-gap-x-20 tw-px-2 tw-mt-5 md:tw-gap-x-10 xl:tw-gap-x-32 2xl:tw-gap-x-52">

            <div className="">
            <img src="./imagesstatic/image-removebg-preview (3).png" className="tw-display-block tw-w-36 tw-h-32 sm:tw-w-72 sm:tw-h-72"/>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold tw-mt-5">Christmas Trees</h1>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold">RM20-RM50</h1>
            <div className="tw-grid tw-grid-cols-4 md:tw-grid-cols-4 md:tw-px-10 lg:tw-px-10 xl:tw-px-14 2xl:tw-px-24 tw-mt-3 tw-font-semibold tw-px-4 tw-transform tw-scale-100 sm:tw-scale-150">
            <input type="radio" name="gender" value="male" className=""/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            </div>
            </div>

            <div className="">
            <img src="./imagesstatic/kids-parkour-urban-t-shirt-black-yellow-300x300.jpg" className="tw-display-block tw-w-36 tw-h-32 sm:tw-w-72 sm:tw-h-72"/>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold tw-mt-5">Christmas Trees</h1>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold">RM20-RM50</h1>
            <div className="tw-grid tw-grid-cols-4 md:tw-grid-cols-4 md:tw-px-10 lg:tw-px-10 xl:tw-px-14 2xl:tw-px-24 tw-mt-3 tw-font-semibold tw-px-4 tw-transform tw-scale-100 sm:tw-scale-150">
            <input type="radio" name="gender" value="male" className=""/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            </div>
            </div>

            <div className="">
            <img src="./imagesstatic/kids-transformers-black-t-shirt-300x300.jpg" className="tw-display-block tw-w-36 tw-h-32 sm:tw-w-72 sm:tw-h-72"/>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold tw-mt-5">Christmas Trees</h1>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold">RM20-RM50</h1>
            <div className="tw-grid tw-grid-cols-4 md:tw-grid-cols-4 md:tw-px-10 xl:tw-px-14 lg:tw-px-10 2xl:tw-px-24 tw-mt-3 tw-font-semibold tw-px-4 tw-transform tw-scale-100 sm:tw-scale-150">
            <input type="radio" name="gender" value="male" className=""/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            </div>
            </div>

            <div className="">
            <img src="./imagesstatic/indigo2.jpeg" className="tw-display-block tw-w-36 tw-h-32 sm:tw-w-72 sm:tw-h-72"/>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold tw-mt-5">Christmas Trees</h1>
            <h1 className="tw-flex tw-justify-center tw-uppercase tw-text-xs xl:tw-text-xl tw-font-semibold">RM20-RM50</h1>
            <div className="tw-grid tw-grid-cols-4 md:tw-grid-cols-4 md:tw-px-10 lg:tw-px-10 xl:tw-px-14 2xl:tw-px-24 tw-mt-3 tw-font-semibold tw-px-4 tw-transform tw-scale-100 sm:tw-scale-150">
            <input type="radio" name="gender" value="male" className=""/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            <input type="radio" name="gender" value="male"/>
            </div>
            </div>

            </div>
          </div>

          <div className="tw-h-auto tw-bg-green-500 md:tw-ml-16 tw--mt-6 sm:tw--mt-2 md:tw--mt-6 xl:tw--mt-7 lg:tw--mt-16 tw--mb-3 tw-w-1 md:tw-w-1"></div>
        </div>
        
        
        <div className="tw-flex tw-flex-row tw-h-1 tw-bg-green-500 tw-mt-2 tw-m-5"></div>
        
         {/* our professional service */}
        <div className="tw-flex tw-flex-row tw-mt-14 tw-px-5">
          <div className="tw-bg-green-500 tw-h-1 tw-w-1/2 tw-mt-3"></div>
           <h1 className="md:tw-text-xl lg:tw-text-4xl tw-text-xs tw-font-bold tw-w-32 sm:tw-w-1/2 tw-text-center tw-font-head">OUR PROFESSIONAL SERVICES</h1>
           
           <div className="tw-bg-green-500 tw-h-1 tw-w-1/2 tw-mt-3"></div>
        </div>
         
        <div className="tw-flex tw-flex-row tw-px-5">
          <div className="tw-h-auto tw-bg-green-500 tw--mt-8 md:tw--mt-7 tw--mb-3 tw-w-2 md:tw-w-1.5 2xl:tw--mt-7 lg:tw--mt-16"></div>
          <div className="tw-flex tw-flex-col">

            <div>
                <p className="sm:tw-text-md tw-text-xs lg:tw-font-bold tw-text-justify tw-font-serif tw-p-5  md:tw-mt-5">
                WHATEVER YOUR CUSTOM APPAREL NEED, LOW QUANTITY, LARGE QUANITIY, FAST TURN-AROUND – WE’VE GOT
                YOU COVERED. LET’S FIND THE SERVICE THAT’S RIGHT FOR YOU.
              </p>
            </div>

          <div className="tw-grid md:tw-grid-cols-3 tw-gap-y-2 md:tw-gap-x-5 tw-px-5 tw-mt-5">

            <div className="tw-flex tw-flex-col tw-bg-woa tw-h-full tw-w-full tw-p-10 tw-space-y-10 md:tw-pb-20">
              <AiOutlinePrinter size={50}></AiOutlinePrinter>
              <h1 className="tw-text-xl tw-font-bold tw-font-head">SREEN PRINTING</h1>
              <p className="tw-text-sm tw-text-justify">
                Screen printing is our number one
                 specialty, and your solution for when you
                need any customized gear
                </p>
                <h1 className="md:tw-text-md tw-text-xs tw-font-bold">READ MORE &#8594;&#8594;</h1>
            </div>

            <div className="tw-flex tw-flex-col tw-bg-woa tw-h-full tw-w-full tw-p-10 tw-space-y-10 md:tw-pb-20">
              <AiOutlinePrinter className="tw-h-10 tw-w-10"></AiOutlinePrinter>
              <h1 className="tw-text-xl tw-font-bold tw-font-head">EMBROIDERY</h1>
              <p className="tw-text-sm">
                  Embroidery is long-lasting, durable, and
                  versatile.Our high-capacity embroidery studio
                  enables us to embroider almost …
                </p>
                <h1 className="tw-text-md tw-font-bold">READ MORE &#8594;&#8594;</h1>
            </div>

            <div className="tw-flex tw-flex-col tw-bg-woa tw-h-full tw-w-full tw-p-10 tw-space-y-10 md:tw-pb-20">
              <AiOutlinePrinter size={50}></AiOutlinePrinter>
              <h1 className="tw-text-xl tw-font-bold tw-font-head">HEAT TRANSFER</h1>
              <p className="tw-text-sm">
                  Heat transfer is an alternative printing
                  option that isn’t offered by many
                  other screen printers …
                </p>
                <h1 className="tw-text-md tw-font-bold">READ MORE &#8594;&#8594;</h1>
            </div>

          </div>

          <div className="tw-grid md:tw-grid-cols-3 tw-gap-y-2 md:tw-gap-x-5 tw-px-5 tw-z-40 md:tw-mt-5">

            <div className="tw-flex tw-flex-col tw-bg-woa tw-h-full tw-w-full tw-p-10 tw-space-y-10 md:tw-pb-20">
              <AiOutlinePrinter size={50}></AiOutlinePrinter>
              <h1 className="tw-text-xl tw-font-bold tw-font-head">VIRUSPRINT</h1>
              <p className="tw-text-sm">
                Virousprint is our number one
                specialty, and your solution for when you
                need any customized gear …
                </p>
                <h1 className="tw-text-md tw-font-bold">READ MORE &#8594;&#8594;</h1>
            </div>

            <div className="tw-flex tw-flex-col tw-bg-woa tw-h-full tw-w-full tw-p-10 tw-space-y-10 md:tw-pb-20">
              <AiOutlinePrinter size={50}></AiOutlinePrinter>
              <h1 className="tw-text-xl tw-font-bold tw-font-head">SUBLIMATION</h1>
              <p className="tw-text-sm">
                 Screen printing is our number one
                  specialty, and your solution for when you
                  need any customized gear …
                </p>
                <h1 className="tw-text-md tw-font-bold">READ MORE &#8594;&#8594;</h1>
            </div>

            <div className="tw-flex tw-flex-col tw-bg-woa tw-h-full tw-w-full tw-p-10 tw-space-y-10 md:tw-pb-20">
              <AiOutlinePrinter size={50}></AiOutlinePrinter>
              <h1 className="tw-text-xl tw-font-bold tw-font-head">DESIGN SERVICE</h1>
              <p className="tw-text-sm">
                Design Service is our number one
                specialty, and your solution for when you
                need any customized gear …
                </p>
                <h1 className="tw-text-md tw-font-bold">READ MORE &#8594;&#8594;</h1>
            </div>

          </div>
          </div>

          <div className="tw-h-auto tw-bg-green-500 tw--mt-8 md:tw--mt-7 tw--mb-3 tw-w-2 md:tw-w-1.5 2xl:tw--mt-7 lg:tw--mt-16"></div>
        </div>

        <div className="tw-flex tw-flex-row tw-h-1 tw-bg-green-500 tw-mt-2 tw-m-5"></div>

        {/* print method */}

        <div className="tw-flex tw-flex-row tw-mt-14 tw-px-5">
          <div className="tw-bg-green-500 tw-h-1 tw-w-1/2 tw-mt-3"></div>
           <h1 className="md:tw-text-2xl lg:tw-text-4xl tw-font-bold tw-w-32 md:tw-w-1/3 tw-text-center tw-font-head">SHOP BY CATEGORY</h1>
           <div className="tw-bg-green-500 tw-h-1 tw-w-1/2 tw-mt-3"></div>
        </div>
         
        <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-px-5 tw-px-10 md:tw-mb-8">
          <div className="tw-h-auto tw-bg-green-500 tw--mt-8 md:tw--mt-6 tw--mb-8 xl:tw--mt-7 tw-w-2 md:tw-w-1.5 lg:tw--mt-16"></div>

          <div className="tw-grid tw-grid-rows-2 md:tw-gap-x-5 md:tw-px-5 tw-w-full md:tw-h-auto md:tw-w-1/2 md:tw-mt-5 xs:tw-mt-20 tw-mt-14 tw-space-y-2 md:tw-space-y-5">

            <div className="tw-relative tw-flex tw-flex-col tw-bg-green-500 tw-h-64 md:tw-h-80 tw-p-10" style={{backgroundImage: "url(" + "./imagesstatic/9.jpg" + ")",backgroundSize:'cover',overflow:'hidden',backgroundRepeat:'no-repeat'}}>
            <div className="tw-absolute tw-bottom-2 tw-right-5 tw-flex-col">
              <h1 className="md:tw-text-2xl tw-text-sm tw-ml-20 sm:tw-ml-0 tw-text-white">TSHIRT FOR HIM</h1>
              <h1 className="md:tw-ml-16 tw-ml-24 md:tw-text-xl tw-text-xs tw-text-white">COLLECTION</h1>
              <button className="tw-ml-16 tw-px-4 md:tw-text-sm tw-text-white tw-border-2 tw-border-white">Shop Now &#8811;</button>
            </div> 
            </div>

            <div className="tw-relative tw-flex tw-flex-col tw-bg-green-500 tw-h-64 md:tw-h-80 md:tw-w-full md:tw-p-10 tw-space-y-10" style={{backgroundImage: "url(" + "./imagesstatic/Asset3.png" + ")",backgroundSize:'cover',overflow:'hidden',backgroundRepeat:'no-repeat'}}>
            <div className="tw-absolute tw-bottom-2 tw-right-5 tw-flex-col tw-justify">
              <h1 className="md:tw-text-2xl tw-text-sm tw-ml-20 sm:tw-ml-0 tw-text-white">DESIGN SERVICE</h1>
              <h1 className="md:tw-ml-16 tw-ml-24 md:tw-text-xl tw-text-xs tw-text-white">COLLECTION</h1>
           <button className="tw-ml-16 tw-px-4 md:tw-py-1 md:tw-text-sm tw-text-white tw-bg-woa focus:tw-outline-none">Shop Now &#8811;</button>
          </div>
            </div>
          </div>

          {/* <div className="tw-grid md:tw-grid-cols-1 tw-px-2 md:tw-h-full md:tw-w-auto md:tw-mt-5" > */}

            <div className="tw-relative tw-grid md:tw-grid-cols-1 tw-mt-5 tw-bg-green-500 tw-h-64 tw-w-full md:tw-h-auto md:tw-w-1/2 md:tw-space-y-10" style={{backgroundImage: "url(" + "./imagesstatic/Asset4.png" + ")",backgroundSize:'cover',overflow:'hidden',backgroundRepeat:'no-repeat'}}>
            <div className="tw-absolute tw-bottom-0 tw-flex-col tw-w-full tw-justify">
              {/* <h1 className="md:tw-text-2xl tw-text-sm tw-ml-20 sm:tw-ml-0 tw-text-white">TSHIRT FOR HIM</h1>
              <h1 className="md:tw-ml-16 tw-ml-24 md:tw-text-xl tw-text-xs tw-text-white">COLLECTION</h1> */}
           <button className="tw-ml-16 md:tw-ml-0 md:tw-w-full tw-py-2 tw-px-4 md:tw-text-sm tw-text-white tw-bg-woa">Shop Now &#8811;</button>
          </div>
            </div>

          {/* </div> */}

          <div className="tw-grid tw-grid-rows-2 md:tw-gap-x-5 md:tw-px-5 md:tw-h-auto md:tw-w-1/2 md:tw-mt-5 tw-mt-5 tw-space-y-2 md:tw-space-y-5">

            <div className="tw-relative tw-flex tw-flex-col tw-bg-green-500 tw-h-64 md:tw-h-80 md:tw-w-full tw-p-10 md:tw-space-y-10" style={{backgroundImage: "url(" + "./imagesstatic/Asset2.png" + ")",backgroundSize:'cover',overflow:'hidden',backgroundRepeat:'no-repeat'}}>
            <div className="tw-absolute tw-bottom-2 tw-right-5 tw-flex-col tw-justify">
              <h1 className="md:tw-text-2xl tw-text-sm tw-ml-20 sm:tw-ml-10 tw-text-white">VIRUS PRINT</h1>
              <h1 className="md:tw-ml-16 tw-ml-24 md:tw-text-xl tw-text-xs tw-text-white">COLLECTION</h1>
           <button className="tw-ml-16 tw-px-4 md:tw-text-sm tw-text-white tw-border-2 tw-border-white">Shop Now &#8811;</button>
          </div>
            </div>
            <div className="tw-relative tw-flex tw-flex-col tw-bg-green-500 tw-h-64 md:tw-h-80 tw-w-full xs:tw-p-0 tw-p-10 md:tw-space-y-10 md:tw-pb-20" style={{backgroundImage: "url(" + "./imagesstatic/Asset4.png" + ")",backgroundSize:'cover',overflow:'hidden',backgroundRepeat:'no-repeat'}}>
            
            <div className="tw-absolute tw-bottom-2 tw-right-5 tw-flex-col tw-justify">
              <h1 className="md:tw-text-2xl tw-text-sm tw-ml-20 sm:tw-ml-10 tw-text-woa">EMBROIDERY</h1>
              <h1 className="md:tw-ml-16 tw-ml-24 md:tw-text-xl tw-text-xs tw-text-woa">COLLECTION</h1>
           <button className="tw-ml-16 tw-px-4 md:tw-py-2 md:tw-text-sm tw-text-white tw-bg-woa">Shop Now &#8811;</button>
          </div>
            </div>

            </div>
  

          <div className="tw-h-auto tw-bg-green-500 tw--mt-8 md:tw--mt-6 tw--mb-8 tw-w-1.5 md:tw-w-1.5 xl:tw--mt-7 lg:tw--mt-16 xs:tw-mt-8"></div>
        </div>
        <div className="tw-flex tw-flex-row tw-h-1 tw-bg-green-500 tw-mt-14 tw-mx-5 md:tw-mt-2 md:tw-m-5  "></div>

        {/* end shop by category */}
        <div className="tw-flex tw-flex-col tw-h-auto md:tw-w-full lg:tw-w-full tw-mt-8 md:tw-mt-10 tw-space-y-20 tw-py-10 tw--mb-20" style={{backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTymdRQmYJy_gJ47NAzXjq5e__0XZMJO1Yi8w&usqp=CAU" + ")",backgroundSize:'cover',overflow:'hidden'}}>
          <h1 className="tw-text-center tw-text-white tw-text-4xl tw-font-bold">EMAIL SIGN UP</h1>
          <h1 className="tw-text-center tw-text-white  tw-text-xl tw-font-bold">NOT 100% SATISFIED? SEND IT BACK! WITHIN 30 DAYS</h1>
          <div className="tw-flex tw-flex-row tw-justify-center">
            <input type="text" className="tw-w-1/3 tw-p-2 tw-bg-gray-500 tw-border-2 tw-border-green-500 tw-text-white"></input>
            <button className="tw-py-2 tw-px-4 tw-border-2 tw-bg-gray-500 tw-border-green-500 tw-text-white">Submit</button>
          </div>
          <h1 className="tw-text-center tw-text-white tw-text-xl tw-font-bold">DISCOUNTS, SALES, NEWS, AND MORE - SUBSCRIBE TO OUR NEWSLETTER</h1>
        </div>
        {/* start footer section */}
        <Footer></Footer>

    </div>
  );
}

export default App;



{/* <div className="tw-flex tw-flex-row md:tw-w-full tw-h-full md:tw-flex-row tw-px-5">
<div className="tw-h-auto tw-bg-green-500 tw--mt-6 md:tw--mt-6 tw--mb-3 tw-w-2"></div>

 {/* <div className="tw-grid tw-grid-cols-2"> */}
 
  // <div className="tw-flex tw-flex-col tw-mt-5 tw-px-8 md:tw-mt-0 md:tw-px-10 tw-w-full md:tw-h-auto tw-space-y-10">
  
    {/* <div className="tw-relative tw-display-block tw-w-full md:tw-h-full md:tw-w-full md:tw-justify-items-end" style={{backgroundImage: "url(" + "./imagesstatic/indigo2.jpeg" + ")",backgroundSize:'cover',overflow:'hidden',backgroundRepeat:'no-repeat'}}> */}
    {/* style={{backgroundImage: "url(" + "./imagesstatic/indigo2.jpeg" + ")",backgroundSize:'cover',overflow:'hidden',backgroundRepeat:'no-repeat'}} */}
    {/* <img src="./imagesstatic/indigo2.jpeg" className="tw-display-block tw-w-full tw-h-full"/> */}
    {/* <div className="tw-absolute tw-bottom-2 tw-right-5 tw-flex-col tw-justify">
      <h1 className="md:tw-text-2xl tw-text-xs tw-text-white">TSHIRT FOR HIM</h1>
      <h1 className="tw-ml-16 md:tw-text-xl tw-text-white">COLLECTION</h1>
      <button className="tw-ml-16 tw-px-4 md:tw-text-sm tw-text-white tw-border-2 tw-border-white">Shop Now &#8811;</button>
    </div>
  </div> 

  <div className="tw-relative tw-display-block tw-h-52 md:tw-h-full md:tw-w-full md:tw-justify-items-end" style={{backgroundImage: "url(" + "./imagesstatic/indigo2.jpeg" + ")",backgroundSize:'cover',overflow:'hidden',backgroundRepeat:'no-repeat'}}>
    {/* <img src="./imagesstatic/indigo2.jpeg" className="tw-display-block tw-w-full tw-h-full"/> */}
    {/* <div className="tw-absolute tw-bottom-2 tw-right-5 tw-flex-col tw-justify">
      <h1 className="md:tw-text-2xl tw-text-xs tw-text-white">DESIGN SERVICES</h1>
      <h1 className="tw-ml-16 md:tw-text-xl tw-text-white">COLLECTION</h1>
      <button className="tw-ml-16 tw-px-4 md:tw-text-sm tw-text-white tw-border-2 tw-bg-green-400">Shop Now &#8811;</button>
    </div>
  </div>    
  </div> */} 
  {/* </div> */}

  {/* // <div>
  // <img src="./imagesstatic/indigo2.jpeg" className="tw-display-block tw-invisible md:tw-visible tw-h-36 md:tw-w-full md:tw-h-full"/>
  // </div>
  
//   <div className="tw-flex tw-flex-col md:tw-px-10 tw-w-full tw-h-auto  tw-space-y-10">
  
//   <div className="tw-relative tw-display-block md:tw-h-full md:tw-w-full md:tw-justify-items-end" style={{backgroundImage: "url(" + "./imagesstatic/indigo2.jpeg" + ")",backgroundSize:'cover',overflow:'hidden',backgroundRepeat:'no-repeat'}}>
//     {/* <img src="./imagesstatic/indigo2.jpeg" className="tw-display-block tw-w-full tw-h-full"/> */}
{/* //     <div className="tw-absolute tw-bottom-2 tw-right-5 tw-flex-col tw-justify">
//       <h1 className="md:tw-text-2xl tw-text-xs tw-text-white">DESIGN SERVICES</h1>
//       <h1 className="tw-ml-16 md:tw-text-xl tw-text-white">COLLECTION</h1>
//       <button className="tw-ml-16 tw-px-4 md:tw-text-sm tw-text-white tw-border-2 tw-bg-green-400">Shop Now &#8811;</button>
//     </div> 
//     </div>

//     <div className="tw-relative tw-display-block md:tw-h-full md:tw-w-full md:tw-justify-items-end" style={{backgroundImage: "url(" + "./imagesstatic/indigo2.jpeg" + ")",backgroundSize:'cover',overflow:'hidden',backgroundRepeat:'no-repeat'}}>
//     {/* <img src="./imagesstatic/indigo2.jpeg" className="tw-display-block tw-w-full tw-h-full"/> */}
{/* //     <div className="tw-absolute tw-bottom-2 tw-right-5 tw-flex-col tw-justify">
//       <h1 className="md:tw-text-2xl tw-text-xs tw-text-white">DESIGN SERVICES</h1>
//       <h1 className="tw-ml-16 md:tw-text-xl tw-text-white">COLLECTION</h1>
//       <button className="tw-ml-16 tw-px-4 md:tw-text-sm tw-text-white tw-border-2 tw-bg-green-400">Shop Now &#8811;</button>
//     </div> 
//     </div>   
// </div> */} 

{/* // <div className="tw-h-auto tw-bg-green-500 tw--mt-6 tw--mb-3 tw-w-2"></div>
// </div>
// <div className="tw-flex tw-flex-row tw-h-1 tw-bg-green-500 tw-mt-2 tw-m-5"></div> */}