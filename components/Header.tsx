import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {
  children: React.ReactNode;
  className: string;
};

export default function Header({ children, className }: HeaderProps) {
  return (
    <div className={`header ${className}`}>
      <Link href="/">
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
