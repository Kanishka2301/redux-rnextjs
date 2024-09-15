"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { signIn } from "@/auth";

function Header() {
  async function handleOauthSignIn() {
    await signIn("github");
  }

  return (
    <header className="flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href="/" className="text-lg font-bold">
          Shopping Cart
        </Link>
      </div>

      <ul className="flex gap-6 items-center justify-center mr-10">
        <li className="text-lg font-semibold">
          <Link href="/" className="hover:underline">
            Products
          </Link>
        </li>
        <li className="text-lg font-semibold">
          <Link href="/cart" className="hover:underline">
            Cart
          </Link>
        </li>
      </ul>

      <div className="flex space-x-3">
        <form action={handleOauthSignIn}>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </header>
  );
}

export default Header;
