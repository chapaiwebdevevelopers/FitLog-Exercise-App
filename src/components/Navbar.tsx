'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import Logo from '../../public/logo.png'
import { productContext } from '@/context/Context';
import { Iproducts } from '@/types/products.type';
import { usePathname } from 'next/navigation';

 
const Navbar = () => {
  const pathName= usePathname()
 const {addPlan,laterPlan} = useContext(productContext)

    const NavLinks = <>
         <li  > <Link className={pathName==='/'? "navcolor":""} href="/"> Home </Link> </li>
         <li> <Link className={pathName==='/my-plan'? "navcolor":""} href="/my-plan"> My Plan </Link> </li>
         <li> <Link className={pathName==='/my-plan'? "navcolor":""} href="/my-plan"> Saved </Link> </li>
         <li> <Link className={pathName==='/products'? "navcolor":""} href="/products"> Exercises </Link> </li>
    </>
    
    




    return (
        <div className=" bg-base-100 shadow-sm">
                <div className="navbar container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {NavLinks}
      </ul>
    </div>
    <div className='flex gap-2'>
        <Image alt="logo" src={Logo}></Image><a className=" text-xl"> FITLOG</a>
        
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NavLinks}
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    <div className="badge badge-ghost px-2 py-4 ">Plan <span className='px-2 py-1 bg-primary rounded-2xl text-white'>{addPlan.length}</span></div>
    <div className="badge badge-ghost px-2 py-4">Saved <span className='px-2 py-1  rounded-2xl border border-gray-300' >{laterPlan.length}</span></div>
  </div>
</div>
        </div>

    );
};

export default Navbar;