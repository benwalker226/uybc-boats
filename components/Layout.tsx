import React, { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="site-layout">
    <Head>
      {/* Mobile viewport for responsiveness */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Best-practice: multiple icon sizes for different devices */}
      <link rel="icon" href="/logo/logo.png" type="image/png" sizes="64x64" />
      <link rel="icon" href="/logo/logo.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/logo/logo.png" type="image/png" sizes="16x16" />
      {/* fallback/default */}
      <link rel="icon" href="/logo/logo.png" type="image/png" sizes="64x64 32x32 16x16" />
    </Head>
    {children}
    <footer style={{ textAlign: "center", marginTop: "2rem", padding: "1rem 0", color: "#888", fontSize: "0.95rem" }}>
      &copy; {new Date().getFullYear()} Ben Walker. All rights reserved.
      <span style={{ margin: "0 0.5em" }}>•</span>
      <a
        href="/LICENSE"
        style={{ color: "#888", textDecoration: "underline", transition: "color 0.2s" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        MIT License
      </a>
    </footer>
  </div>
);

export default Layout;