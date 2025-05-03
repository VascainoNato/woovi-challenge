
export default function Footer() { 
    return (
        <footer className="h-25 border border-gray-200 bg-blue-900 items-center md:h-20">
            <div className="w-full flex flex-col items-center pr-4 pl-4 h-25 justify-center gap-4 md:flex-row md:h-20 md:pl-10 md:pr-10 md:justify-between md:gap-0 xl:pr-20 xl:pl-20">
                <div className="flex items-center">
                    <h1 className="text-white transition duration-[800ms] ease hover:scale-105 cursor-pointer">© 2025 Rafael Satyro.</h1>
                </div>
                <div className="flex items-center gap-6">
                    <h1 className="text-white transition duration-[800ms] ease hover:scale-105 cursor-pointer">Vídeo Explicativo</h1>
                    <h1 className="text-white transition duration-[800ms] ease hover:scale-105 cursor-pointer">Outros Projetos</h1>
                    <h1 className="text-white transition duration-[800ms] ease hover:scale-105 cursor-pointer">Contato</h1>
                </div>
            </div>
        </footer>
    );
  }
  