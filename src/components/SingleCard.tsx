import { Iproducts } from '@/types/products.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';
import { FaRegClock, FaRegStar } from 'react-icons/fa';
import { ImPower } from 'react-icons/im';




const SingleCardDetails = ({product}:{product:Iproducts}) => {
    // console.log("here go",product)
    const {id,name,image,muscleGroups,equipment,description,duration,caloriesBurned,rating} = product;
    // console.log(equipment)
    
    return (
        <Link href={`products/${id}`}>
                <div className="card bg-base-100 shadow-sm">

  <figure>
    <Image src={image} alt={name} width={600} height={300}></Image>
  </figure>
  <div className="card-body">
    <div className='flex gap-3'>
         {muscleGroups.map((a:string,index:number)=><span className="badge badge-primary" key={index}>{a}</span>)}
    </div>
    <h2 className="card-title text-3xl">
      {name}
    </h2>
    <p className='text-sm'>{equipment}</p>
    <p>{description}</p>
    <div className="card-actions flex  gap-8 border-t-1  py-3  border-gray-200">
        <span className='flex gap-1 items-center '><FaRegClock></FaRegClock> {duration} min</span>
        <span className='flex gap-1 items-center '><ImPower></ImPower> {caloriesBurned} kcal </span>
        <span className='flex gap-1 items-center '><FaRegStar></FaRegStar> {rating} </span>
    </div>
  </div>
</div>
        
        </Link>

    );
};

export default SingleCardDetails;