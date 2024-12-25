"use client";

import Stats from "../components/Home-components/Stats";
import Navbar from "../components/LandingPage-components/Navbar";
import Rounds from "../components/Home-components/Rounds";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#020817]">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <Stats />
        <Rounds />
      </main>
    </div>
  );
}
