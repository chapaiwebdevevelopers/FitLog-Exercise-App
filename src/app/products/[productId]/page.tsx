
import React from "react";
// import data from "/public/data.json";
import Image from "next/image";
import { Iproducts } from "@/types/products.type";
import ButtonAction from "@/components/ButtonAction";


const getData =async()=> {
   const response = await fetch(`https://api.api-store.workers.dev/api/fitlog`);
   return response.json()
}
const SingleProductDetails = async ({ params }) => {
    const products = await getData()
    const { productId } = await params;
    // const products = data;
    const product = products.find(
        (product:Iproducts) => String(product.id) === String(productId),
    );
    const { id, name, image, muscleGroups, equipment, difficulty, duration, caloriesBurned, sets, reps, rating, description, instructions } = product

   

    return (
        <div>
            <div className="card space-x-10 lg:card-side bg-base-100  my-20">
                <figure>
                    <Image className="rounded-xl" src={image} width={600} height={600} alt={name}></Image>
                </figure>
                <div className="card-body space-y-4">
                    <h2 className="card-title text-5xl">
                        {name}
                    </h2>
                    <p>{description}</p>
                    <div className="tag">
                        {muscleGroups.map((tag: string, index: number) => <span className="badge badge-primary mx-1" key={index}>{tag}</span>)}
                    </div>
                    <div>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table">
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>equipment</td>
                                        <td>{equipment}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>difficulty</td>
                                        <td>{difficulty}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>sets</td>
                                        <td>{sets}</td>
                                        </tr>

                                    {/* row 4 */}
                                                                        
                                    
                                    <tr>
                                        <td>reps</td>
                                        <td>{reps}</td>
                                    </tr>


                                    {/* row 5 */}
                                    <tr>
                                        <td>duration</td>
                                        <td>{duration}</td>
                                    </tr>
                                    {/* row 6 */}
                                    <tr>
                                        <td>caloriesBurned</td>
                                        <td>{caloriesBurned}</td>
                                    </tr>


                                    {/* row 7 */}
                                    <tr>
                                        <td>rating</td>
                                        <td>{rating}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h3 className="uppercase text-3xl">Instruction</h3>
                        <ul className="mx-4">
                        {
                            instructions.map((single:string,index:number)=> <li className="list-decimal"  key={index}>{single}</li>)
                        }
                        </ul>

                    </div>
                        <ButtonAction product={product}></ButtonAction>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;
