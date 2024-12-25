"use client";
import Link from "next/link"
import Navbar from "./components/LandingPage-components/Navbar";
import Background from "./components/Background";
import Hero from "./components/LandingPage-components/Hero";
import Stats from "./components/LandingPage-components/Stats";
import Faq from "./components/LandingPage-components/Faq";

 
export default function Home() {
  return (

    <div className="relative min-h-screen overflow-hidden bg-[#020817]">
      <Background />
      <Navbar />
      <Hero />
      <Stats />
      <Faq />
    </div>  
  );
}
