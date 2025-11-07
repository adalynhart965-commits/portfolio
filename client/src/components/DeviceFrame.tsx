interface DeviceFrameProps {
  type: "mobile" | "desktop" | "none";
  children: React.ReactNode;
}

export default function DeviceFrame({ type, children }: DeviceFrameProps) {
  if (type === "none") {
    return <div className="w-full h-full">{children}</div>;
  }

  if (type === "mobile") {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative w-full max-w-[280px] aspect-[9/19] bg-black/20 rounded-[2.5rem] p-3 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black/30 rounded-b-2xl z-10" />
          
          <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
            {children}
          </div>
        </div>
      </div>
    );
  }

  if (type === "desktop") {
    return (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="w-full max-w-[85%]">
          <div className="bg-black/10 rounded-t-lg px-3 py-2 flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          
          <div className="w-full aspect-video rounded-b-lg overflow-hidden shadow-2xl border-4 border-black/10">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
