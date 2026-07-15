"use client";

import { sendGAEvent } from "@next/third-parties/google";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  channel: "whatsapp" | "phone" | "email";
  label: string;
  children: ReactNode;
}

export default function TrackedLink({ channel, label, onClick, children, ...rest }: TrackedLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    sendGAEvent("event", "contact_click", {
      channel,
      label,
      page: typeof window !== "undefined" ? window.location.pathname : "",
    });
    onClick?.(e);
  };

  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
