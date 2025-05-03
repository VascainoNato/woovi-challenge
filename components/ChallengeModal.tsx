import { ChallengeModalProps } from "../types/modals";

export default function ChallengeModal({ isOpen, onClose }: ChallengeModalProps) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 bg-opacity-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
          <h2 className="text-xl font-bold text-blue-900 mb-2">Desafio Woovi</h2>
          <p className="text-sm text-gray-700">
            Esse desafio técnico demonstra a implementação de um layout com Next.js, Tailwind CSS e
            foco em responsividade, boas práticas e UI clara.
          </p>
        </div>
      </div>
    );
}