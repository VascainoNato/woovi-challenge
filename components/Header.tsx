'use client';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../public/challenge.png';
import ChallengeModal from './ChallengeModal';

export default function Header() {
    const [showModal, setShowModal] = useState(false);
        return (
            <>
            <header className="h-35 text-white border border-gray-200 md:h-20">
                <div className="flex flex-col items-center h-35 pr-4 pl-4 w-full gap-2 md:flex md:flex-row md:h-20 md:pl-10 md:pr-10 md:justify-between md:gap-0 xl:pr-20 xl:pl-20">
                    <div className="flex items-center">
                        <Image
                            src={Logo}
                            alt="Logo"
                            className="w-30 transition duration-[800ms] ease hover:scale-105"
                        > 
                        </Image>
                    </div>
                    <div className="flex items-center gap-6">
                        <h1 className="text-blue-900 transition cursor-pointer animate-pulse-slow font-semibold" onClick={() => setShowModal(true)}>Challenge</h1>
                        <h1 className="text-blue-900 transition duration-[800ms] ease hover:scale-105 cursor-pointer font-semibold">Vídeo Explicativo</h1>
                        <h1 className="text-blue-900 transition duration-[800ms] ease hover:scale-105 cursor-pointer font-semibold">Github</h1>
                    </div>
                </div>
            </header>
            <ChallengeModal isOpen={showModal} onClose={() => setShowModal(false)} />
            </>
        );
}
  