"use client";

export function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/30 to-transparent dark:from-blue-950/30"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                           linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-200/20 dark:bg-blue-500/10 blur-3xl"></div>
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-purple-200/20 dark:bg-purple-500/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-teal-200/20 dark:bg-teal-500/10 blur-3xl"></div>
    </div>
  );
}