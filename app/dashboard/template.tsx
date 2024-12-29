"use client"
import { useState } from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-dashed border-black p-4 mx-auto">
      <div className="flex gap-4 font-bold text-lg mb-4 text-purple-500">
        <Link href="/dashboard/about">About</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <h2>dashboard layout</h2>
      <button className="bg-black text-white p-2 my-4" onClick={() => setCount(count + 1)}>Increment {count}</button>
      {children}
    </div>

  );
}