"use client";

import Link from "next/link";
import { BookOpen, Zap, Database, Brain, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const navItems = [
    { href: "/howto", icon: <BookOpen className="h-4 w-4 mr-2" />, label: "How-To" },
    { href: "/tipsnips", icon: <Zap className="h-4 w-4 mr-2" />, label: "Tip Snips" },
    { href: "/resources", icon: <Database className="h-4 w-4 mr-2" />, label: "Resources" },
  ];

  return (
    <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-2">
              <Brain className="h-6 w-6 text-blue-500" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI Learning Hub
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} passHref>
                      <Button variant="ghost" className="text-gray-300 hover:text-blue-400 hover:bg-gray-900">
                        {item.icon}
                        {item.label}
                      </Button>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-300" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gray-900 border-gray-800">
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-2 mb-6">
                    <Brain className="h-6 w-6 text-blue-500" />
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      AI Learning Hub
                    </span>
                  </Link>
                  
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                        {item.icon}
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
