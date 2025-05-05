'use client';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../public/challenge.png';
import Github from '../public/github.png';
import ChallengeModal from './ChallengeModal';

export default function Header() {
    const [showModal, setShowModal] = useState(false);
        return (
            <>
            <header className="h-35 text-white border-b border-gray-200 md:h-20">
                <div className="flex flex-col items-center h-35 gap-2 pr-4 pl-4 w-full md:flex md:flex-row md:h-20 md:pl-10 md:pr-10 md:justify-between md:gap-0 xl:pr-20 xl:pl-20">
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
                        <a href="https://github.com/VascainoNato/woovi-challenge" target='_blank' rel="noopener noreferrer">
                            <Image
                                src={Github}
                                alt="GitHub Logo"
                                className='hidden md:flex md:w-12 transition duration-[800ms] ease hover:scale-105 cursor-pointer'
                            >
                            </Image>
                            <h1 className="text-blue-900 transition duration-[800ms] ease hover:scale-105 cursor-pointer font-semibold md:hidden">Github</h1>
                        </a>
                    </div>
                </div>
            </header>
            <ChallengeModal isOpen={showModal} onClose={() => setShowModal(false)} />
            </>
        );
}
  