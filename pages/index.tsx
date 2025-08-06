import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>UYBC Boat Managament</title>
      </Head>
      <main className="main-center-container" style={{ minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {/* Logo centered above the title */}
        <div className="logo-header">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={260}
            height={260}
            priority
            className="site-logo"
          />
        </div>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "2rem", textAlign: "center" }}>UYBC Boat Managament</h1>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/booking" passHref legacyBehavior>
            <a
              className="button-primary"
              style={{
                minWidth: 200,
                textAlign: "center",
                fontSize: 18,
                backgroundColor: "#73afe3",
                color: "#fff",
                border: "none"
              }}
            >
              Boat Damage/Repair Report
            </a>
          </Link>
          <Link href="/maintenance" passHref legacyBehavior>
            <a
              className="button-primary"
              style={{
                minWidth: 200,
                textAlign: "center",
                fontSize: 18,
                backgroundColor: "#73afe3",
                color: "#fff",
                border: "none"
              }}
            >
              Equipment Request
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}