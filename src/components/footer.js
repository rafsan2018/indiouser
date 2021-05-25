import React from 'react';
import {BiHeadphone,BiGift} from 'react-icons/bi';
import {SiWechat, SiFacebook, SiInstagram,SiYoutube, SiTiktok} from 'react-icons/si';
import {HiOutlineMail,HiOutlineLocationMarker} from 'react-icons/hi';
import { CgTwitter } from 'react-icons/cg';

export default function Footer() {
    return (
        <div>
            <div className="tw-flex tw-flex-grow tw-display-block tw-max-h-10 tw-w-auto tw-mt-20">
                <hr width="100%" className="lg:tw-w-full tw-bg-green-500 tw-h-10"></hr>
            </div>

            <div className="tw-grid xl:tw-grid-cols-5 xs:tw-grid-cols-2 tw-p-5 tw-gap-x-2 tw-gap-y-5">

            
                    <div className="tw-space-y-2 md:tw-space-y-5">
                    <h6 className="md:tw-text-xl tw-text-md tw-uppercase tw-text-black-500 tw-font-bold">GET IN TOUCH</h6>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <BiHeadphone className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></BiHeadphone>
                        <h2 className="tw-text-sm tw-font-semibold">Live Chat Now</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <SiWechat className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></SiWechat>
                        <h2 className="tw-text-sm tw-font-semibold">Live Chat Now</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <HiOutlineMail className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></HiOutlineMail>
                        <h2 className="tw-text-sm tw-font-semibold">Send Us An Email</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <HiOutlineLocationMarker className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></HiOutlineLocationMarker>
                        <h2 className="tw-text-sm tw-font-semibold">Store Locator</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <BiGift className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></BiGift>
                        <h2 className="tw-text-sm tw-font-semibold">Gift Service</h2>
                    </div>

                </div>


                <div className="">
                <div className="tw-flex tw-flex-col tw-space-y-2 md:tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase md:tw-text-2xl tw-text-md tw-font-bold">About Indigo</h4>
                        <ul className="tw-list-none tw-mt-2  md:tw-space-y-3">
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;WHo We Are</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Our Stores</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Indigo News</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Indigo Global Brand</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Ambassadors</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Corporate Information</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Group Companies</a></li>
                        </ul>
                        </div>
                </div>

                <div className="">
                <div className="tw-flex tw-flex-col tw-space-y-2 md:tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase md:tw-text-2xl tw-text-md tw-font-bold">Help</h4>
                        <ul className="tw-list-none tw-mt-2 md:tw-space-y-5">
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;FAQ</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Shipping</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Return</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Order Status</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Gift Card Balance</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Subcribe</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Conact Us</a></li>
                        </ul>
                        </div>
                </div>

                <div className="">
                <div className="tw-flex tw-flex-col md:tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase md:tw-text-2xl tw-text-md tw-font-bold">Follow Us</h4>

                        <ul className="tw-flex tw-flex-row tw-list-none tw-mt-2 tw-space-x-5">
                            <li className=""><a href="#" className="tw-text-green-500"><SiFacebook className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></SiFacebook></a></li>
                            <li className=""><a href="#" className="tw-text-green-500"><CgTwitter className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></CgTwitter></a></li>
                            <li className=""><a href="#" className="tw-text-green-500 tw-font-semibold"><SiInstagram className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></SiInstagram></a></li>
                            <li className=""><a href="#" className="tw-text-green-500 tw-font-semibold"><SiYoutube className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></SiYoutube></a></li>
                        </ul>
                        
                      </div>
                </div>
                <div className="">
                <div className="tw-flex tw-flex-col tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase tw-text-md md:tw-text-2xl tw-font-bold">Sign Up For Email</h4>
                        <h3 className="tw-text-sm tw-font-semibold">Plus, get special welcome offer <br/> within 24 hourse</h3>
                            <input type="email" placeholder="your email address" className="tw-border-2 tw-border-green-500 focus:tw-outline-none tw-py-1"></input>&nbsp;
                            <button className="tw-bg-green-500 tw-font-semibold tw-text-white tw-uppercase tw-border-green-500 tw-py-2 focus:tw-outline-none">
                                Sign Up
                            </button>
                            <h4 className="tw-text-sm tw-font-semibold">Privacy Policy</h4>
                        </div>
                </div>

            </div>
            


            <div className="tw-flex tw-flex-grow md:tw-flex-row tw-justify-between tw-space-x-5 tw-mb-10 tw-px-5">
                <h4 className="md:tw-text-2xl tw-text-sm tw-text-green-500 tw-font-bold">We Are Use Payment</h4>
                <div className="tw-flex tw-flex-row tw-space-x-2">
                <img src="./imagesstatic/visa.png" className="md:tw--mt-5 tw-w-10 tw-h-10 md:tw-w-16 md:tw-h-16"></img>
                <img src="./imagesstatic/mastercard.png" className="md:tw--mt-5 tw-w-10 tw-h-10 md:tw-w-16 md:tw-h-16"></img>
                <img src="./imagesstatic/fpx.png" className="md:tw--mt-5 tw-w-10 tw-h-10 md:tw-w-16 md:tw-h-16"></img>
                </div>
            </div>

            <div className="tw-bg-black tw-text-center tw-h-10">
                <h2 className="tw-text-white tw-p-2">Copyright@indigo.my</h2>
            </div>

        </div>
    )
}



{/* <div className="tw-flex tw-flex-col lg:tw-flex-row md:tw-flex-col tw-w-full tw-p-5 tw-mt-2 tw-mb-5 2xl:tw-space-x-52 xl:tw-space-x-40 lg:tw-space-x-5 md:tw-space-x-40 md:tw-space-y-1 tw-space-y-5">
                <div className="tw-flex tw-flex-row md:tw-space-x-12 2xl:tw-space-x-52 xl:tw-space-x-24 tw-justify-between">
                    <div className="tw-flex tw-flex-col tw-space-y-2 md:tw-space-y-5">
                    <h6 className="md:tw-text-2xl tw-text-md tw-uppercase tw-text-black-500 tw-font-bold">GET IN TOUCH</h6>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <BiHeadphone className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></BiHeadphone>
                        <h2 className="tw-text-sm tw-font-semibold">Live Chat Now</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <SiWechat className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></SiWechat>
                        <h2 className="tw-text-sm tw-font-semibold">Live Chat Now</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <HiOutlineMail className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></HiOutlineMail>
                        <h2 className="tw-text-sm tw-font-semibold">Send Us An Email</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <HiOutlineLocationMarker className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></HiOutlineLocationMarker>
                        <h2 className="tw-text-sm tw-font-semibold">Store Locator</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <BiGift className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></BiGift>
                        <h2 className="tw-text-sm tw-font-semibold">Gift Service</h2>
                    </div>
                </div>

                    <div className="tw-flex tw-flex-row">
                    <div className="tw-flex tw-flex-col tw-space-y-2 md:tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase md:tw-text-2xl tw-text-md tw-font-bold">About Indigo</h4>
                        <ul className="tw-list-none tw-mt-2  md:tw-space-y-3">
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;WHo We Are</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Our Stores</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Indigo News</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Indigo Global Brand</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Ambassadors</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Corporate Information</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Group Companies</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="tw-flex tw-flex-row tw-space-x-10 md:tw-space-x-32 tw-justify-between xl:tw-space-x-32 2xl:tw-space-x-52">
                    <div>
                    <div className="tw-flex tw-flex-col tw-space-y-2 md:tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase md:tw-text-2xl tw-text-md tw-font-bold">Help</h4>
                        <ul className="tw-list-none tw-mt-2 md:tw-space-y-5">
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;FAQ</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Shipping</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Return</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Order Status</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Gift Card Balance</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Subcribe</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Conact Us</a></li>
                        </ul>
                        </div>
                    </div>
                    <div>
                      <div className="tw-flex tw-flex-col md:tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase md:tw-text-2xl tw-text-md tw-font-bold">Follow Us</h4>

                        <ul className="tw-flex tw-flex-row tw-list-none tw-mt-2 tw-space-x-5">
                            <li className=""><a href="#" className="tw-text-green-500"><SiFacebook className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></SiFacebook></a></li>
                            <li className=""><a href="#" className="tw-text-green-500"><CgTwitter className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></CgTwitter></a></li>
                            <li className=""><a href="#" className="tw-text-green-500 tw-font-semibold"><SiInstagram className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></SiInstagram></a></li>
                            <li className=""><a href="#" className="tw-text-green-500 tw-font-semibold"><SiYoutube className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></SiYoutube></a></li>
                        </ul>
                        </div>
                      </div>
                  </div>

                    <div>
                     <div className="tw-flex tw-flex-col tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase tw-text-md md:tw-text-2xl tw-font-bold">Sign Up For Email</h4>
                        <h3 className="tw-text-sm tw-font-semibold">Plus, get special welcome offer <br/> within 24 hourse</h3>
                            <input type="email" placeholder="your email address" className="tw-border-2 tw-border-green-500 focus:tw-outline-none tw-py-1"></input>&nbsp;
                            <button className="tw-bg-green-500 tw-font-semibold tw-text-white tw-uppercase tw-border-green-500 tw-py-2 focus:tw-outline-none">
                                Sign Up
                            </button>
                            <h4 className="tw-text-sm tw-font-semibold">Privacy Policy</h4>
                        </div>
                    </div>
                 </div> */}


            {/* <div className="tw-flex tw-flex-coll lg:tw-flex-row md:tw-flex-row tw-w-full tw-p-5 tw-mt-2 tw-mb-5 lg:tw-space-x-52 md:tw-space-x-40 md:tw-space-y-1 tw-space-y-5">
                <div className="tw-flex tw-flex-row md:tw-space-x-32 tw-justify-between">
                    <div className="tw-flex tw-flex-col tw-space-y-2 md:tw-space-y-5">
                    <h6 className="md:tw-text-2xl tw-text-md tw-uppercase tw-text-black-500 tw-font-bold">GET IN TOUCH</h6>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <BiHeadphone className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></BiHeadphone>
                        <h2 className="tw-text-sm lg:tw-text-xl tw-font-semibold">Live Chat Now</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <SiWechat className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></SiWechat>
                        <h2 className="tw-text-sm tw-font-semibold">Live Chat Now</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <HiOutlineMail className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></HiOutlineMail>
                        <h2 className="tw-text-sm tw-font-semibold">Send Us An Email</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <HiOutlineLocationMarker className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></HiOutlineLocationMarker>
                        <h2 className="tw-text-sm tw-font-semibold">Store Locator</h2>
                    </div>
                    <div className="tw-flex tw-flex-row tw-space-x-5">
                        <BiGift className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-1"></BiGift>
                        <h2 className="tw-text-sm tw-font-semibold">Gift Service</h2>
                    </div>
                </div>

                    <div className="tw-flex tw-flex-row">
                    <div className="tw-flex tw-flex-col tw-space-y-2 md:tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase md:tw-text-2xl tw-text-md tw-font-bold">About Indigo</h4>
                        <ul className="tw-list-none tw-mt-2  md:tw-space-y-3">
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;WHo We Are</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Our Stores</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Indigo News</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Indigo Global Brand</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Ambassadors</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Corporate Information</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Group Companies</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="tw-flex tw-flex-row tw-space-x-10 md:tw-space-x-32 tw-justify-between">
                    <div>
                    <div className="tw-flex tw-flex-col tw-space-y-2 md:tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase md:tw-text-2xl tw-text-md tw-font-bold">Help</h4>
                        <ul className="tw-list-none tw-mt-2 md:tw-space-y-5">
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;FAQ</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Shipping</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Return</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Order Status</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Gift Card Balance</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Subcribe</a></li>
                            <li className=""><a href="#" className="tw-text-sm tw-font-semibold">&#10095;&nbsp;Conact Us</a></li>
                        </ul>
                        </div>
                    </div>
                    <div>
                      <div className="tw-flex tw-flex-col md:tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase md:tw-text-2xl tw-text-md tw-font-bold">Follow Us</h4>

                        <ul className="tw-flex tw-flex-row tw-list-none tw-mt-2 tw-space-x-5">
                            <li className=""><a href="#" className="tw-text-green-500"><SiFacebook className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></SiFacebook></a></li>
                            <li className=""><a href="#" className="tw-text-green-500"><CgTwitter className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></CgTwitter></a></li>
                            <li className=""><a href="#" className="tw-text-green-500 tw-font-semibold"><SiInstagram className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></SiInstagram></a></li>
                            <li className=""><a href="#" className="tw-text-green-500 tw-font-semibold"><SiYoutube className="tw-text-green-500 tw-h-5 tw-w-5 md:tw--mt-2"></SiYoutube></a></li>
                        </ul>
                        </div>
                      </div>
                  </div>

                    <div>
                     <div className="tw-flex tw-flex-col tw-space-y-5">
                        <h4 className="tw-text-black-500 tw-uppercase tw-text-md md:tw-text-2xl tw-font-bold">Sign Up For Email</h4>
                        <h3 className="tw-text-sm tw-font-semibold">Plus, get special welcome offer <br/> within 24 hourse</h3>
                            <input type="email" placeholder="your email address" className="tw-border-2 tw-border-green-500 focus:tw-outline-none tw-py-1"></input>&nbsp;
                            <button className="tw-bg-green-500 tw-font-semibold tw-text-white tw-uppercase tw-border-green-500 tw-py-2 focus:tw-outline-none">
                                Sign Up
                            </button>
                            <h4 className="tw-text-sm tw-font-semibold">Privacy Policy</h4>
                        </div>
                    </div>
                 </div> */}