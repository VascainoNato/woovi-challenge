import Image from 'next/image';
import Logo from '../public/challenge.png';

export default function Header() {
    return (
        <header className="h-22.5 text-white border border-gray-200">
            <div className="flex items-center pr-20 pl-20 w-full">
                <Image
                    src={Logo}
                    alt="Logo"
                    className="w-30 transition duration-500 ease hover:scale-110"
                > 
                </Image>
            </div>
        </header>
    );
}
  