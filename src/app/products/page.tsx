import SingleCardDetails from '@/components/SingleCard';
import { Iproducts } from '@/types/products.type';
import data from "/public/data.json";
import React from 'react';

const ProductsPage = () => {
      const products: Iproducts[] = data;
    return (
        <div className="my-20">
        <h1 className="uppercase text-5xl">All Types of Gym</h1>
        <p>Twelve carefully selected lifts target every major muscle group, including the chest, back, shoulders, arms, legs and core. Each exercise is designed to build strength, increase muscle mass, improve endurance and enhance muscle definition, helping you achieve balanced full-body development and long-term fitness results through consistent, effective training.</p>

        <div className="Cards my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <SingleCardDetails
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    );
};

export default ProductsPage;