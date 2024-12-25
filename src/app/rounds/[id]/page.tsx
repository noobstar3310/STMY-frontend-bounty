"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const { connected } = useWallet();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // This would come from your API/database
  const project = {
    title: "Dev Tooling",
    tag: "OSS ROUND",
    description:
      "This round funds projects enhancing developer tools for OSS and Web3. We support creation of environments, frameworks, and libraries for efficient, secure smart contract development. Goals: reduce barriers, boost efficiency, and show strong community adoption.",
    longDescription: `Our mission is to accelerate the development of robust developer tools for the Web3 ecosystem. We believe that by improving the developer experience, we can significantly reduce barriers to entry and increase the quality of blockchain applications.

Key Focus Areas:
• Smart Contract Development Tools
• Testing and Debugging Frameworks
• Security Analysis Tools
• Developer Documentation
• Integration Tools and SDKs

Impact Metrics:
• Number of active developers using the tools
• Reduction in development time
• Security vulnerabilities prevented
• Community engagement and contributions`,
    matchingPool: "300,000",
    raised: "125,000",
    contributors: 89,
    daysLeft: 15,
  };

  const handleContribute = async () => {
    setIsLoading(true);
    // Implement Solana transaction logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020817]">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#020817]/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href="/home"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Rounds
          </Link>
          <WalletMultiButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Project Details - Left Side */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="mb-2 font-display text-3xl font-medium text-white">
                {project.title}
              </h1>
              <div className="text-sm text-gray-400">{project.tag}</div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400">{project.longDescription}</p>
            </div>
          </div>

          {/* Contribution Panel - Right Side */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-white/5 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="mb-2 text-sm text-gray-400">
                    Matching Pool
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-2xl font-medium text-white">
                      {project.matchingPool}
                      <span className="ml-1 text-sm text-gray-400">
                        {project.currency}
                      </span>
                    </div>
                    <Image
                      src="/Solana-Logo.png"
                      alt="Solana"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4 border-y border-white/5 py-4">
                  <div>
                    <div className="font-mono text-lg font-medium text-white">
                      {project.raised}
                    </div>
                    <div className="text-xs text-gray-400">SOL Raised</div>
                  </div>
                  <div>
                    <div className="font-mono text-lg font-medium text-white">
                      {project.contributors}
                    </div>
                    <div className="text-xs text-gray-400">Contributors</div>
                  </div>
                  <div>
                    <div className="font-mono text-lg font-medium text-white">
                      {project.daysLeft}
                    </div>
                    <div className="text-xs text-gray-400">Days Left</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Amount (SOL)
                    </label>
                    <Input
                      type="number"
                      placeholder="0.0"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="border-white/10 bg-white/5 font-mono"
                    />
                  </div>

                  {!connected ? (
                    <WalletMultiButton className="w-full" />
                  ) : (
                    <Button
                      onClick={handleContribute}
                      disabled={isLoading || !amount}
                      className="w-full bg-[#00ff9d] text-black hover:bg-[#00ff9d]/90"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Contributing...
                        </>
                      ) : (
                        "Contribute"
                      )}
                    </Button>
                  )}

                  <div className="rounded-lg border border-white/5 bg-white/5 p-4">
                    <div className="text-sm text-gray-400">
                      By contributing, you agree to support this project's
                      development and understand that funds will be transferred
                      immediately via the Solana blockchain.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
