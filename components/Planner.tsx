export default function Planner() {
    return (
      <div className="relative flex-1 min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10 pointer-events-none select-none"
          style={{ backgroundImage: "url('/watermark.png')" }}
        />
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-blue-900">Aqui vai ser o Planner</h1>
        </div>
      </div>
    );
  }
  