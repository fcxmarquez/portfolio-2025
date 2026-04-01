"use client";

import { useState } from "react";

interface WinWindowProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
  defaultMinimized?: boolean;
  id?: string;
}

export function WinWindow({
  title,
  icon,
  children,
  className = "",
  defaultMinimized = false,
  id,
}: WinWindowProps) {
  const [minimized, setMinimized] = useState(defaultMinimized);

  return (
    <div className={`win-window ${className}`} id={id}>
      {/* Title Bar */}
      <div className="win-titlebar select-none">
        {icon && (
          <img
            src={icon}
            alt=""
            className="w-4 h-4 object-contain"
            aria-hidden="true"
          />
        )}
        {!icon && (
          <div className="w-4 h-4 bg-white/20 flex items-center justify-center text-[8px]" aria-hidden="true">
            ☰
          </div>
        )}
        <span className="flex-1 text-white text-[11px] font-bold">{title}</span>
        {/* Window controls */}
        <div className="flex gap-0.5 ml-2">
          <button
            onClick={() => setMinimized(!minimized)}
            className="w-[16px] h-[14px] win-btn flex items-center justify-center text-[10px] leading-none px-0 min-w-0"
            aria-label={minimized ? "Restore" : "Minimize"}
          >
            _
          </button>
          <button
            className="w-[16px] h-[14px] win-btn flex items-center justify-center text-[10px] leading-none px-0 min-w-0"
            aria-label="Maximize"
          >
            □
          </button>
          <button
            className="w-[16px] h-[14px] win-btn flex items-center justify-center text-[10px] leading-none px-0 min-w-0 font-bold"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
      {/* Content */}
      {!minimized && (
        <div className="p-2 bg-[hsl(var(--win-silver))]">{children}</div>
      )}
    </div>
  );
}
