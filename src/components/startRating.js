import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa'

export default function StartRating() {
    const [rating, setrating]=useState(null)
    return (
        <div className="tw-flex tw-flex-row">
            {[...Array(5)].map((start, i)=>{
                const ratingValue= i+1;
                return (
                    <div className="" key={i}>
                        <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                className="d-none tw-h-5 tw-w-5 md:tw-h-10 md:tw-w-10" 
                                value={ratingValue}
                                onClick={()=>setrating(ratingValue)}
                                
                                >
                            </input>
                            <FaStar 
                              className="tw-cursor-pointer tw-transition-colors" 
                              color={ratingValue <= rating ? "#ffc107":"#e4e5e9"}
                              ></FaStar>
                        </label>
                        
                    </div>
                    
                );
            })}
            
        </div>
    )
}
