import React from "react";
import { NavMenu } from "@/components/local/NavMenu";

interface HeaderProps {
  /**
   * Optional content rendered on the left side of the header.
   * This can be a logo or any React node.
   */
  children?: React.ReactNode;
}

/**
 * Displays the global navigation for the site. The component accepts
 * optional children which are placed to the left of the navigation menu,
 * allowing consumers to easily inject a logo or other custom content.
 */
export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4">
      {children}
      <NavMenu />
    </header>
  );
}
