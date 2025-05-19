'use client';

import Image from 'next/image';
import Link from 'next/link';



export default function Navbar() {
    return (
        <nav className="w-full flex items-center px-10 py-12 text-white bg-transparent relative z-10   ">
            <div className="flex-shrink-0 pl-140 ">
                <Image src="/spotify.ico" alt="Logo" width={80} height={80} className='rounded-b-full rounded-e-full rounded-l-full ' />
            </div>
            <div className="hidden md:flex gap-6  font-bold text-3xl pl-90 ">
               
                <Link className='ml-30 rounded-4xl border-1 border-transparent ' href="/">Inicio</Link>
               
                <Link className='ml-30 rounded-4xl border-1 border-transparent' href="#">Servicios</Link>
               
                <Link className='ml-30 rounded-4xl border-1 border-transparent' href="#">Contacto</Link>
                

                
            </div>

        </nav>
    );
}
