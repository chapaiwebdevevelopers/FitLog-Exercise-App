import Image from 'next/image';
import Logo from '../../public/logo.png'
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
            <div className='flex gap-2'>
                <Image alt="logo" src={Logo}></Image><a className=" text-xl"> FITLOG</a>
                
            </div>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
     <p>© {new Date().getFullYear()} FitLog  — Workout Library. Train hard, log honest.</p>
  </nav>
</footer>
    );
};

export default Footer;