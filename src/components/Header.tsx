import Link from "next/link";

import { NavItem } from "@/components/ui/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/ui/mobile-navbar";
import { MobileNavItem } from "@/components/ui/mobile-nav-item";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between gap-10 py-4 bg-white shadow fixed top-0 ">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-3">
          <svg
            fill="none"
            viewBox="0 0 238 238"
            className="size-6 text-primary"
          >
            {/* SVG Path */}
          </svg>
          <span className="font-heading text-xl font-bold">Reweb</span>
        </Link>
        <div className="flex items-center gap-10">
          <nav className="hidden items-center gap-10 md:flex justify-end">
            <NavItem href="/about" label="About" />
            <NavItem href="/docs" label="Docs" />
            <NavItem href="/blog" label="Blog" />
            <NavItem href="/pricing" label="Pricing" />
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild>
              <Link href="#" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
        <MobileNavbar>
          <div className="rounded-b-lg bg-background py-4 w-full text-foreground shadow-xl">
            <nav className="flex flex-col gap-1 pt-2">
              <MobileNavItem href="/about" label="About" />
              <MobileNavItem href="/docs" label="Docs" />
              <MobileNavItem href="/blog" label="Blog" />
              <MobileNavItem href="/pricing" label="Pricing" />
              <Button size="lg" asChild className="mt-2 w-full">
                <Link href="#" className="cursor-pointer">
                  Get Started
                </Link>
              </Button>
            </nav>
          </div>
        </MobileNavbar>
      </div>
    </header>
  );
}
