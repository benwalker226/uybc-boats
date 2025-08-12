import React from "react";
import Layout from "../components/Layout";
import { Game } from "../components/Game";

export default function GamePage() {
  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginTop: "2rem", marginBottom: "1.5rem" }}>
        Conway&apos;s Game of Life
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Game rows={25} cols={25} />
      </div>
    </Layout>
  );
}