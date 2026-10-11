'use client'
import RowCard from '@/components/SavedPlanCard';
import { productContext } from '@/context/Context';
import { Iproducts } from '@/types/products.type';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const { addPlan,laterPlan } = React.useContext(productContext)
    console.log(addPlan)
    console.log(laterPlan)
    // const
    // const summaryDisplay= (products){
    //     {duration,caloriesBurned} = products
    // const totalExercise = products.length 
    // const totalTime = duration + totalTime
    // const  totalCalories = caloriesBurned +totalCalories
    // return {totalExercise,totalTime,totalCalories}
    // }



    return (
        <div>
            <h1 className='text-5xl uppercase'>My Plan</h1>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
            <div className="stats shadow flex my-8">
                <div className="stat">
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value">{}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Minutes</div>
                    <div className="stat-value">2</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Calories</div>
                    <div className="stat-value">2</div>
                </div>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border">
            <input type="radio" name="my_tabs_1" className="tab border border-2 border-gray-200 p-5" aria-label="Today's Plan" defaultChecked />

                <div className="tab-content bg-base-100 p-10 space-y-3">
                {
                    addPlan.map((product:Iproducts,index:number) =>
                        <RowCard   key={index} product={product} ></RowCard>
                    )
                }
                

                </div>
                <input id="Saved" type="radio" name="my_tabs_1" className="tab border border-2 border-gray-200 p-5" aria-label="Saved"  />
                
                <div className= " later tab-content bg-base-100 p-10 space-y-3">
                {
                    laterPlan.map((product:Iproducts,index:number) =>
                        <RowCard   key={index} product={product} ></RowCard>
                    )
                }
                

                </div>

            </div>

            {/* <p>{addPlan.map(product => <p>{product}</p>)}</p> */}
        </div>
    );
};

export default MyPlanPage;