import React, { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="site-layout">
    <Head>
      {/* Best-practice: multiple icon sizes for different devices */}
      <link rel="icon" href="/logo/logo.png" type="image/png" sizes="64x64" />
      <link rel="icon" href="/logo/logo.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/logo/logo.png" type="image/png" sizes="16x16" />
      {/* fallback/default */}
      <link rel="icon" href="/logo/logo.png" type="image/png" sizes="64x64 32x32 16x16" />
    </Head>
    <header className="logo-header">
      <Image
        src="/logo/logo.png"
        alt="Logo"
        width={200}
        height={200}
        priority
        className="site-logo"
      />
    </header>
    {children}
  </div>
);

export default Layout;