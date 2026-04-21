"use client";

import { useState, useCallback } from "react";
import { Mail } from "lucide-react";
import { copyToClipboard } from "@/lib/clipboard";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.04c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.48.1-3.08 0 0 .97-.31 3.18 1.18a10.93 10.93 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.61 1.6.22 2.78.1 3.08.73.81 1.17 1.84 1.17 3.1 0 4.44-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

type Item = {
  label: string;
  Icon: React.ComponentType<{ size?: number }>;
};

const items: readonly Item[] = [
  { label: "frank_code@126.com", Icon: Mail },
  { label: "github.com/frank99-owl", Icon: GitHubIcon },
];

export function FooterSocial({ copiedLabel }: { copiedLabel: string }) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = useCallback(
    async (label: string) => {
      await copyToClipboard(label);
      setCopied(label);
      setTimeout(() => setCopied(null), 1500);
    },
    []
  );

  return (
    <ul className="space-y-5">
      {items.map(({ label, Icon }) => {
        const isCopied = copied === label;
        return (
          <li key={label} className="group flex items-center gap-3">
            {/* Icon: static, decorative, no navigation, no color change */}
            <span className="text-ink-soft shrink-0">
              <Icon size={16} />
            </span>
            {/* Text: click-to-copy button, hover-reveal, fixed-width so no jump */}
            <button
              type="button"
              onClick={() => copy(label)}
              aria-label={`${copiedLabel} ${label}`}
              className="relative text-sm text-ink-soft hover:text-orange transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100 cursor-pointer text-left"
            >
              {/* Reserve layout width with the full label (invisible when showing feedback) */}
              <span className={isCopied ? "invisible" : ""}>{label}</span>
              {/* Feedback overlay — absolute so it never shifts layout */}
              {isCopied && (
                <span className="absolute inset-0 flex items-center text-orange">
                  {copiedLabel}
                </span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
