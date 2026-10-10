'use client'
import { Iproducts } from '@/types/products.type';
import React, { useState } from 'react';
import { createContext, Dispatch, SetStateAction } from "react";

interface ProductContextType {
  addPlan: Iproducts[];
  setAddPlan: Dispatch<SetStateAction<Iproducts[]>>;
  laterPlan: Iproducts[];
  setLaterPlan: Dispatch<SetStateAction<Iproducts[]>>;
}

export const productContext = createContext<ProductContextType>({
  addPlan: [],
  setAddPlan: () => {},
  laterPlan: [],
  setLaterPlan: () => {},
});


const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [addPlan, setAddPlan] = useState<Iproducts[]>([])
  const [laterPlan, setLaterPlan] = useState<Iproducts[]>([])
  const plans: ProductContextType = { addPlan, setAddPlan, laterPlan, setLaterPlan }
    // console.log(plans)
    
    return (
        <productContext.Provider value={plans}>
            {children}
        </productContext.Provider>
    );
};

export default ProductProvider;