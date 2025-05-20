'use client';
import { Search, Library } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';



export default function Navbar() {
    return (
        <nav className="w-full flex items-center flex-ro text-white bg-transparent relative z-10 px-40 py-10 ">
            <div className="grid grid-cols-2">
                <Image src="/mini2.jpeg" alt="Logo" width={60} height={60} />
                <Image src="/mini3.jpeg" alt="Logo" width={60} height={60} />
                <Image src="/mini1.jpeg" alt="Logo" width={60} height={60} />
                <Image src="/redondos.jpg" alt="Logo" width={60} height={60} />
            </div>

            <div className="hidden md:flex gap-6  font-bold text-3xl pl-200 ">

                <Link className='ml-30 rounded-4xl border-1 border-transparent ' href="/">Inicio</Link>
                <div className="flex items-center space-x-2 pl-8">
                    <Search className="w-8 h-8" />
                    <span>Buscar</span>
                </div>

                <div className="flex items-center space-x-2 pl-8">
                    <Library className="w-8 h-8" href="/" />
                    <span>Biblioteca</span>
                </div>
            </div>
        </nav>
    );
}
