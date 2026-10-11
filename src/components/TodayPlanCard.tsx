import { productContext } from '@/context/Context';
import { Iproducts } from '@/types/products.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegClock, FaRegStar } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { ImPower } from 'react-icons/im';
import { RxCross1 } from 'react-icons/rx';
import { Bounce, toast } from 'react-toastify';


const TodayPlanCard = ({product}:{product:Iproducts}) => {

    const {id,name,image,muscleGroups,equipment,description,duration,caloriesBurned,rating} = product;
        // remove item from the Plan
        const { addPlan,setAddPlan, laterPlan } = React.useContext(productContext);
    const handleRemoveProduct = ()=>{
          const restPlan = addPlan.filter((single:Iproducts)=> single.id !== product.id)
          setAddPlan(restPlan);
          toast.success('Removed item from Today Plan', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    const handleMarkDone = ()=>{
        const restPlan = addPlan.filter((single:Iproducts)=> single.id !== product.id)
          setAddPlan(restPlan);
          toast.success('Mark as Done', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    // console.log(product);
    return (
        <div className='border border-gray-300 rounded-xl p-3 flex justify-between items-center'>
            <div className='flex gap-10'>
                <Image className='rounded-xl' src={image} height={100} width={100} alt={name}></Image>
                <div>
                    <h3 className='text-3xl'>{name}</h3>
                    <p className='text-md'>{equipment}</p>
                        <div className="card-actions flex  gap-8  py-3 ">
                            <span className='flex gap-1 items-center '><FaRegClock></FaRegClock> {duration} min</span>
                            <span className='flex gap-1 items-center '><ImPower></ImPower> {caloriesBurned} kcal </span>
                            <span className='flex gap-1 items-center '><FaRegStar></FaRegStar> {rating} </span>
                        </div>
                </div>
            </div>
            <div className='mx-3 space-x-4'>
                <Link href={`/products/${id}`}><button className="btn rounded-xl">View Details</button></Link>
   

              
                <button className="btn rounded-xl" onClick={()=>handleMarkDone()}> <GiCheckMark />Mark as Done</button>
                <button className='btn' onClick={()=>handleRemoveProduct()}><RxCross1 /></button>
            </div>
           

        </div>
    );
};

export default TodayPlanCard;