
'use client';

import SavedPlanCard from '@/components/SavedPlanCard';
import TodayPlanCard from '@/components/TodayPlanCard';
import { productContext } from '@/context/Context';
import { Iproducts } from '@/types/products.type';
import Link from 'next/link';
import React, { Suspense, useEffect, useState } from 'react';

const MyPlanPage = () => {
    const { addPlan, laterPlan } = React.useContext(productContext);

    const [summary, setSummary] = useState({
        totalExercise: 0,
        totalDuration: 0,
        totalCalory: 0,
    });

    // Calculate the summary of the selected plan
    const handleTodayPlanSummary = (products: Iproducts[]) => {
        const totalExercise = products.length;
        let totalDuration = 0;
        let totalCalory = 0;

        products.forEach((product) => {
            totalDuration += product.duration;
            totalCalory += product.caloriesBurned;
        });

        setSummary({
            totalExercise,
            totalDuration,
            totalCalory,
        });
    };

    // Automatically calculate addPlan when the page loads
    useEffect(() => {
        handleTodayPlanSummary(addPlan);
    }, [addPlan]);

 const noProductNotice = <>
                            <div className="card bg-base-100 shadow-sm mt-20">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">NOTHING HERE YET</h2>
                                    <p>Browse the library and add a lift to get today moving.</p>
                                    <div className="card-actions">
                                    <Link href="./"> <button className="btn btn-primary">Go to workouts</button> </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                            
 


   
    return (
        
        <div>
            <h1 className="text-5xl uppercase">My Plan</h1>

            <p>Cap of five lifts for today. Finish them, then load more.</p>

            {/* Workout Summary */}
            <div className="stats shadow flex my-8">
                <div className="stat">
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value">
                        {summary.totalExercise}
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Minutes</div>
                    <div className="stat-value">
                        {summary.totalDuration}
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Calories</div>
                    <div className="stat-value">
                        {summary.totalCalory}
                    </div>
                </div>
            </div>

            {/* Plan Tabs */}
            <div className="tabs tabs-border">

                {/* Today's Plan Tab */}
                <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab border border-2 border-gray-200 p-5"
                    aria-label="Today's Plan"
                    defaultChecked
                    onChange={() => handleTodayPlanSummary(addPlan)}
                />

                <div className="tab-content bg-base-100 p-10 space-y-3">
                    <Suspense fallback="<p>Loading workouts…</p>">
                    {
                        addPlan.length >0 ? (
                        addPlan.map((product: Iproducts) => (
                            <TodayPlanCard
                             key={product.id}
                                product={product}
                            />
                        ))) : 
                            noProductNotice
                        
                    }
                        

                    </Suspense>

                </div>

                {/* Saved Tab */}
                <input
                    id="Saved"
                    type="radio"
                    name="my_tabs_1"
                    className="tab border border-2 border-gray-200 p-5"
                    aria-label="Saved"
                    onChange={() => handleTodayPlanSummary(laterPlan)}
                />

                <div className="tab-content bg-base-100 p-10 space-y-3">

                    <Suspense fallback="<p>Loading workouts…</p>">
                    
                        { laterPlan.length >0 ? laterPlan.map((product: Iproducts) => (
                            <SavedPlanCard
                            key={product.id}
                            product={product}
                            />
                        )):noProductNotice}
                    </Suspense>

                </div>

            </div>
        </div>
    );
};

export default MyPlanPage;
