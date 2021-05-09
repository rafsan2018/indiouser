import React,{useState}from 'react';
import '../App.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default function FaQ() {
    const [selected, setSelected] = useState(null)
     const toggle =(i)=>{
         if(selected==i){
             return setSelected(null)
         }

         setSelected(i)
     }
    return (
        <div>
            <Header></Header>
             <div className="tw-px-5 md:tw-text-5xl xs:tw-text-xl tw-mt-8 tw-font-bold">
                 <h1>FREQUENTLY ASKED QUESTIONS</h1>
             </div>
             <div className="tw-flex tw-flex-col tw-justify-between tw-px-5 tw-mt-5">
                 {data.map((item ,i)=>(
                     <div>
                     <div className="tw-flex tw-flex-row tw-justify-between tw-cursor-pointer md:tw-text-2xl xs:tw-text-sm tw-font-bold" onClick={()=>toggle(i)}>
                         <h2 className="tw-py-5">{item.header}</h2>
                         <span className="tw-text-green-500 xs:tw-mt-4 md:tw-mt-0">{selected==i?'-':'+'}</span>
                      </div>
                     <div className={selected===i?'content1-show':'content1'}>
                         <p className="tw-text-green-500 tw-font-semibold tw-text-lg tw-max-w-24">{item.content1}</p>
                         <p className="tw-text-green-500 tw-font-semibold tw-text-lg tw-max-w-4xl">{item.content2}</p>
                         <p className="tw-text-green-500 tw-font-semibold tw-text-lg">{item.content3}</p>
                         <p className="tw-text-green-500 tw-font-semibold tw-text-lg">{item.content4}</p>
                         <p className="tw-text-green-500 tw-font-semibold tw-text-lg">{item.content5}</p>
                         <p className="tw-text-green-500 tw-font-semibold tw-text-lg">{item.content6}</p>
                    </div>

                     </div>
                 ))}               
             </div>
            <Footer></Footer>
        </div>
    )
}

const data = [
    {
        header:'What Shipping Methods Are Available?',
        content1:'We ship most items with this method via reliable delivery services like GDEX, J&T and Pos Laju',
    },
    {
        header:'How Long Will it Take To Get My Package?',
        content2:'We ask that you allow 3-5 business days (not including weekends and holidays) for processing.'
        +'This gives us time to make sure your items are picked and packed with care!',
    },
    {
        header:'How Do I Track My Order?',
        content3: 'Tracking details will be sent through registered email account',
    },
    {
        header:'How Do I Place an Order?',
        content4:'1. Add to Cart. To add an item to your cart, select on the product page.'
        +'2. Review Shopping Cart.'
        +'3. Proceed to Checkout.`'
        +'4. Account Login.'
        +'5. Enter a Billing Address.'
        +'6. Enter a Shipping Address.'
        +'7. Payment Information'
    },
    {
        header:'How Should I to Contact if I Have Any Queries?',
        content5:'Email us at info@indigotshirtfactory.com',
    },
    {
        header:'Do I Need an Account to Place an Order?',
        content6:'Yes, you will need to create an account when placing an order with Indigo.'
    }
]