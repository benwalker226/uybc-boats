import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>UYBC Boat Managament</title>
      </Head>
      <main className="main-center-container" style={{ minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "2rem", textAlign: "center" }}>UYBC Boat Managament</h1>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/booking" passHref legacyBehavior>
            <a className="button-primary" style={{ minWidth: 200, textAlign: "center", fontSize: 18 }}>
              Boat Booking Form
            </a>
          </Link>
          <Link href="/maintenance" passHref legacyBehavior>
            <a className="button-primary" style={{ minWidth: 200, textAlign: "center", fontSize: 18 }}>
              Maintenance Report Form
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}