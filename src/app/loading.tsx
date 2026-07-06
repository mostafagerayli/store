export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md">
      
      <div className="flex flex-col items-center gap-6">

        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-black animate-pulse" />
          <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-black animate-ping" />
        </div>

        <p className="text-lg font-semibold">Loading</p>

        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-black animate-bounce" />
        </div>

      </div>
    </div>
  );
}