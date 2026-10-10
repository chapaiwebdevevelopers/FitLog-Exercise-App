'use client'
import RowCard from '@/components/RowCard';
import { productContext } from '@/context/Context';
import { Iproducts } from '@/types/products.type';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const { addPlan } = React.useContext(productContext)
    // console.log(addPlan)

    return (
        <div>
            <h1 className='text-5xl uppercase'>My Plan</h1>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
            <div className="stats shadow flex my-8">
                <div className="stat">
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value">{addPlan.length}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value">2</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value">2</div>
                </div>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border">
            <input type="radio" name="my_tabs_1" className="tab border border-2 border-gray-200 p-5" aria-label="Tab 1" defaultChecked />
                <div className="tab-content bg-base-100 p-10 space-y-3">
                {
                    addPlan.map((product:Iproducts,index:number) =>
                        <RowCard key={index} product={product} ></RowCard>
                    )
                }
                

                </div>

            </div>

            {/* <p>{addPlan.map(product => <p>{product}</p>)}</p> */}
        </div>
    );
};

export default MyPlanPage;