"use client";

import {
  LogoutLink,
  LoginLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../components/ui/logo.jsx";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  const [isLogoLoading, setIsLogoLoading] = useState(true);

  useEffect(() => {
    console.log(user);
    console.log(isAuthenticated);
  }, [user, isAuthenticated]);

  useEffect(() => {
    if (!isLoading) {
      setIsLogoLoading(false);
    }
  }, [isLoading]);

  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <header className="relative flex items-center justify-between p-4 shadow-sm bg-white border-b-2 border-gray-200">
      <div className="flex items-center pt-9  gap-10">
        {isLogoLoading ? (
          <div className="animate-pulse pb-9">
            <div className="w-32 h-8 bg-gray-300 rounded-md"></div>
          </div>
        ) : (
          <div className="pb-9 transition-opacity duration-300 ease-in-out opacity-100">
            <Logo />
          </div>
        )}

        <ul className="text-secondary md:flex gap-8 hidden">
          {Menu.map((item) => (
            <li key={item.id} className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out mt-1 pb-9">
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
          <li className="relative text-primary font-bold cursor-pointer hover:scale-105 transition-all ease-in-out text-xl pb-9">
            <Link href="/genie">Genie</Link>
            
          </li>
        </ul>
      </div>

      {isAuthenticated ? (
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger>
              <Image
                src={user?.picture}
                alt="profile-img"
                width={40}
                height={30}
                className="rounded-full transition-all duration-300 ease-in-out"
              />
            </PopoverTrigger>
            <PopoverContent className="w-44">
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:bg-slate-200 p-2 rounded-md">
                  Profile
                </li>
                <li className="cursor-pointer hover:bg-slate-200 p-2 rounded-md">
                  My Bookings
                </li>
                <li className="cursor-pointer hover:bg-slate-200 p-2 rounded-md">
                  <LogoutLink>Logout</LogoutLink>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <LoginLink>
          <Button>Book Now</Button>
        </LoginLink>
      )}
    </header>
  );
};

export default Header;
