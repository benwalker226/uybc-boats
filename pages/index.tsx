import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>UYBC Boat Management</title>
      </Head>
      <main className="main-center-container" style={{ minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {/* Logo centered above the title */}
        <div className="logo-header">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={360}
            height={360}
            priority
            className="site-logo"
            style={{ width: '100%', height: 'auto' }}
            sizes="(max-width: 500px) 140px, (max-width: 1200px) 18vw, 360px"
          />
        </div>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "2rem", textAlign: "center" }}>UYBC Boat Management</h1>
        <div className="button-group flex flex-col gap-2 md:flex-row md:gap-6 w-full items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc2jc31Qzd3DL5zLmYHnT7td6JchvFHFurqVWzwqgt4XQQ9OA/viewform?usp=dialog"
            className="button-primary"
            style={{
              minWidth: 200,
              textAlign: "center",
              fontSize: 18,
              backgroundColor: "#73afe3",
              color: "#fff",
              border: "none"
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Boat Repair Form
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfv9o3g3zsjfV4C6dVc26KBMdSDEbuYQLDDDxj5MeXDCgmJfg/viewform?usp=dialog"
            className="button-primary"
            style={{
              minWidth: 200,
              textAlign: "center",
              fontSize: 18,
              backgroundColor: "#73afe3",
              color: "#fff",
              border: "none"
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Equipment Repair Form
          </a>
        </div>
      </main>
    </>
  );
}