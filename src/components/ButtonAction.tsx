'use client'
import { productContext } from '@/context/Context';
import { Iproducts } from '@/types/products.type';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const ButtonAction = ({product}:{product:Iproducts}) => {
    const {addPlan,setAddPlan,laterPlan,setLaterPlan}= useContext(productContext) as {
        addPlan: Iproducts[];
        setAddPlan: React.Dispatch<React.SetStateAction<Iproducts[]>>;
        laterPlan: Iproducts[];
        setLaterPlan: React.Dispatch<React.SetStateAction<Iproducts[]>>;
    }
    const handleTodayPlan = ()=>{
        if (!addPlan.some((single) => single.id === product.id)) {
            setAddPlan([...addPlan, product]);
            toast.success('Added to Your Today Plan', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        }
        else {
            toast.error('Already in Your Plan', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        }
    }
    const handleSaveLater = ()=>{
        if (!laterPlan.some((single) => single.id === product.id)) {
            setLaterPlan([...laterPlan,product])
            toast.success('Added in Your Save List', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        }
        else {
            toast.error('Already Saved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        }
    }

//    console.log(laterPlan)
    return (
        <div>
                                <div className="card-actions ">
                        <button onClick={()=>handleTodayPlan()} className="btn btn-primary">
                            Add to todays plan
                        </button>
                        <button onClick={()=>handleSaveLater()} className="btn btn-secondary">
                            Save for later
                        </button>
                    </div>
        </div>
    );
};

export default ButtonAction;