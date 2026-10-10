'use client'
import { productContext } from '@/context/Context';
import { Iproducts } from '@/types/products.type';
import React, { useContext } from 'react';

const ButtonAction = ({product}:{product:Iproducts}) => {
    const {addPlan,setAddPlan}= useContext(productContext)
    const handleTodayPlan = ()=>{
        // console.log(product, addPlan,setAddPlan)
         setAddPlan ([...addPlan,product]);
        
    }
//    console.log(addPlan)
    return (
        <div>
                                <div className="card-actions ">
                        <button onClick={()=>handleTodayPlan()} className="btn btn-primary">
                            Add to todays plan
                        </button>
                        <button className="btn btn-secondary">
                            Save for later
                        </button>
                    </div>
        </div>
    );
};

export default ButtonAction;