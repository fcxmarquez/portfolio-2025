"use client";

import { DATA } from "@/data/resume";
import Link from "next/link";
import { useState, useEffect } from "react";

export function WinTaskbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="win-taskbar fixed bottom-0 left-0 right-0 z-50 h-[30px] flex items-center gap-1 px-1"
      role="toolbar"
      aria-label="Taskbar"
    >
      {/* Start Button */}
      <button className="win-start-btn" aria-label="Start">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <rect x="0" y="0" width="6" height="6" fill="#f00" />
          <rect x="8" y="0" width="6" height="6" fill="#0f0" />
          <rect x="0" y="8" width="6" height="6" fill="#00f" />
          <rect x="8" y="8" width="6" height="6" fill="#ff0" />
        </svg>
        <span>Start</span>
      </button>

      {/* Quick launch separator */}
      <div className="h-[22px] w-[2px] bg-[hsl(var(--win-dark-shadow))] mx-0.5" aria-hidden="true" />
      <div className="h-[22px] w-[1px] bg-[hsl(var(--win-light))] mr-1" aria-hidden="true" />

      {/* Nav items as taskbar buttons */}
      {DATA.navbar.map((item) => {
        const Icon = item.icon;
        const isDisabled = item.disabled ?? false;
        if (isDisabled) return null;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="h-[24px] px-2 flex items-center gap-1 win-btn text-[11px] min-w-[90px]"
          >
            <Icon className="w-3 h-3" aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}

      {/* Spacer */}
      <div className="flex-1" />

      {/* System tray */}
      <div
        className="win-sunken h-[22px] flex items-center gap-2 px-2 text-[11px] text-black bg-[hsl(var(--win-silver))]"
        aria-label="System tray"
      >
        {Object.entries(DATA.contact.social)
          .filter(([_, s]) => s.navbar)
          .map(([name, social]) => (
            <Link
              key={name}
              href={social.url}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <social.icon className="w-3 h-3" aria-hidden="true" />
              <span className="sr-only">{name}</span>
            </Link>
          ))}
        <div className="h-[14px] w-[1px] bg-[hsl(var(--win-shadow))]" aria-hidden="true" />
        <time
          dateTime={new Date().toISOString()}
          className="text-[10px] font-sans tabular-nums"
        >
          {time}
        </time>
      </div>
    </div>
  );
}
