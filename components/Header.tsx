import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo with name"
          className="hidden md:block"
          height={32}
          width={120}
        />
        <Image
          src="/assets/icons/logo'icon.svg"
          alt="Logo mobile"
          className="block md:hidden"
          height={32}
          width={32}
        />
      </Link>
      {children}
    </div>
  );
}
