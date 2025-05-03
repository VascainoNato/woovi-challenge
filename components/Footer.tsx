
export default function Footer() {
    return (
        <footer className="h-20 border border-gray-200 bg-blue-900 items-center">
            <div className="w-full flex items-center pr-20 pl-20 h-20 justify-between">
                <div className="flex items-center">
                    <h1 className="text-white transition duration-500 ease hover:scale-105 cursor-pointer">© 2025 Rafael Satyro.</h1>
                </div>
                <div className="flex items-center gap-6">
                    <h1 className="text-white transition duration-500 ease hover:scale-105 cursor-pointer">Vídeo Explicativo</h1>
                    <h1 className="text-white transition duration-500 ease hover:scale-105 cursor-pointer">Outros Projetos</h1>
                    <h1 className="text-white transition duration-500 ease hover:scale-105 cursor-pointer">Contato</h1>
                </div>
            </div>
        </footer>
    );
  }
  