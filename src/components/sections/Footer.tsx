import React from "react";

interface FooterProps {
  /** Optional custom content to render inside the footer */
  children?: React.ReactNode;
}

/**
 * Basic footer component that displays provided children or a default
 * copyright message.
 */
export default function Footer({ children }: FooterProps) {
  return (
    <footer className="border-t py-6 text-center text-sm text-muted-foreground">
      {children ?? (
        <p>&copy; {new Date().getFullYear()} Accruwise. All rights reserved.</p>
      )}
    </footer>
  );
}
