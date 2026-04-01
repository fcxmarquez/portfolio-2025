"use client";

import React, { useState } from "react";
import Link from "next/link";

interface WinResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: React.ReactNode;
}

export function WinResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: WinResumeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEmptyHref = !Boolean(href);
  const isExternalHref = Boolean(
    href && (href.startsWith("http://") || href.startsWith("https://"))
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isEmptyHref) {
      e.preventDefault();
      return;
    }
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      onClick={handleClick}
      target={isExternalHref ? "_blank" : undefined}
      rel={isExternalHref ? "noopener noreferrer" : undefined}
      className="block"
      aria-disabled={isEmptyHref || undefined}
    >
      <div className="win-raised bg-[hsl(var(--win-silver))] cursor-default hover:bg-[hsl(var(--win-light))] transition-colors">
        {/* Row */}
        <div className="flex items-center gap-2 p-1.5">
          {/* Icon */}
          <div className="win-sunken w-10 h-10 flex-shrink-0 bg-white flex items-center justify-center">
            <img
              src={logoUrl}
              alt={altText}
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1 flex-wrap">
                <span className="font-bold text-[11px] text-black">{title}</span>
                {badges && badges.map((badge, i) => (
                  <span key={i} className="win-badge">{badge}</span>
                ))}
              </div>
              <span className="text-[10px] text-[hsl(var(--muted-foreground))] tabular-nums whitespace-nowrap shrink-0">
                {period}
              </span>
            </div>
            {subtitle && (
              <div className="text-[10px] text-[hsl(var(--win-shadow))] mt-0.5">{subtitle}</div>
            )}
          </div>

          {/* Expand arrow */}
          {description && !isEmptyHref && (
            <div
              className="text-[10px] text-black ml-1 w-4 flex-shrink-0"
              aria-hidden="true"
            >
              {isExpanded ? "▼" : "▶"}
            </div>
          )}
        </div>

        {/* Expanded description */}
        {isExpanded && description && (
          <div className="win-sunken mx-1.5 mb-1.5 p-2 bg-white text-[10px] text-black leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </Link>
  );
}
