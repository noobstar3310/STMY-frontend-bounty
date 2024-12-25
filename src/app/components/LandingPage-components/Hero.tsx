import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

const Hero = () => {
  return (
    <section className="relative container mx-auto px-4 pt-32 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl bg-clip-text">
          Get funding & grow
          <br />
          your ecosystem
        </h1>
        <p className="mb-8 text-xl text-gray-400">
          CrowdChain is a seasonal initiative empowering early-stage builders
          through a combination of crowdfunding and grants
        </p>
        <Link href="/home">
          <Button
            size="lg"
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#00ff9d] to-[#00f0ff] text-black hover:from-[#00ff9d]/90 hover:to-[#00f0ff]/90"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 blur transition-opacity duration-500 hover:opacity-100" />
            <span className="relative">Explore</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
