import React from "react";
import { NavMenu } from "@/components/local/NavMenu";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={120} height={120} />
      </Link>
      <NavMenu />
      <Link
        href="https://app.markettaxpro.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="default" className="px-6 h-12">
          Launch App
        </Button>
      </Link>
    </header>
  );
}
