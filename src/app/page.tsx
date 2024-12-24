"use client";
import Link from "next/link"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 
export default function Home() {
  return (

    <div className="relative min-h-screen overflow-hidden bg-[#020817]">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#020817] to-[#020817]">
          {/* Neon Gradient Overlays */}
          <div className="absolute -left-[25%] top-0 h-[500px] w-[500px] rotate-12 bg-gradient-to-r from-[#00ff9d]/20 to-[#00f0ff]/20 blur-[120px]" />
          <div className="absolute -right-[25%] top-[30%] h-[500px] w-[500px] rotate-45 bg-gradient-to-l from-[#00ff9d]/10 to-[#00f0ff]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-[20%] h-[400px] w-[600px] bg-gradient-to-t from-[#00ff9d]/10 to-[#00f0ff]/10 blur-[120px]" />
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full border border-[#00ff9d]/10" />
          <div className="absolute right-[15%] top-[30%] h-24 w-24 rounded-full border border-[#00f0ff]/10" />
          <div className="absolute bottom-[20%] left-[20%] h-40 w-40 rounded-full border border-[#00ff9d]/10" />
          <div className="absolute bottom-[30%] right-[25%] h-16 w-16 rounded-full border border-[#00f0ff]/10" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
      </div>

    {/* Header */}
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#020817]/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold text-white">
            CrowdChain
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/home" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
              Launch Program
            </Link>
            {/* <Link href="#" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
              Get Funding
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
              Resources
            </Link> */}
          </nav>
          <div className="flex items-center gap-4">
            <WalletMultiButton style={{}} />
          </div>
        </div>
      </header>

      {/* Rest of the landing page sections */}
      <section className="relative container mx-auto px-4 pt-32 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl bg-clip-text">
            Get funding & grow
            <br />
            your ecosystem
          </h1>
          <p className="mb-8 text-xl text-gray-400">
            CrowdChain is a seasonal initiative empowering early-stage builders through a combination of crowdfunding and grants
          </p>
          <Link href="/app">
            <Button size="lg" className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#00ff9d] to-[#00f0ff] text-black hover:from-[#00ff9d]/90 hover:to-[#00f0ff]/90">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 blur transition-opacity duration-500 hover:opacity-100" />
              <span className="relative">Explore</span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative container mx-auto px-4 py-24">
        <div className="rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl p-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 font-mono text-4xl font-bold text-white">3,715</div>
              <div className="text-sm uppercase tracking-wide text-gray-400">Projects Raised Funds</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-mono text-4xl font-bold text-white">3.8M</div>
              <div className="text-sm uppercase tracking-wide text-gray-400">Unique Donations</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-mono text-4xl font-bold text-white">$50,000,000+</div>
              <div className="text-sm uppercase tracking-wide text-gray-400">Towards Public Goods</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative container mx-auto px-4 py-24">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">How it works</h2>
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl p-8">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                title: "Funds are pooled",
                subtitle: "CrowdChain raises a pool of funds",
                content: "First, we raise an initial pool of matching funds with the support of the CrowdChain community. These matching funders include: individuals, organizations, repeat donors and champions of public goods. Their combined resources fund the matching pool for the round."
              },
              {
                title: "Application Period",
                subtitle: "Projects submit applications for round participation",
                content: "Projects can apply to a specific round or in some cases, multiple rounds, where they meet the eligibility criteria before going through an onboarding process."
              },
              {
                title: "Review Period",
                subtitle: "CrowdChain reviews applications against set of criteria",
                content: "Our team carefully reviews each application against our established criteria to ensure quality and alignment with our mission."
              },
              {
                title: "Crowdfunding Period",
                subtitle: "Supporters vote and donate",
                content: "During this period, the community can support their favorite projects through donations and voting."
              },
              {
                title: "Funds are Distributed",
                subtitle: "Successful projects receive funding",
                content: "After the crowdfunding period ends, funds are distributed to successful projects through smart contracts on the Solana blockchain."
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border-white/5">
                <AccordionTrigger className="text-left text-xl font-normal hover:text-[#00ff9d] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-sm text-gray-400">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.subtitle}</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-12 text-gray-400">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>  
  );
}
