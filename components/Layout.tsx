import React, { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="site-layout">
    <Head>
      <link rel="icon" href="/logo.png" />
    </Head>
    <header className="logo-header">
      <Image
        src={logo}
        alt="Logo"
        width={120}
        height={120}
        priority
        unoptimized
      />
    </header>
    {children}
  </div>
);

export default Layout;