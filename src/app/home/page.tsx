// "use client"

// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
// import { Card, CardContent } from "@/components/ui/card"
// import { BarChartIcon as ChartBarIcon, ArrowRightIcon } from 'lucide-react'
// import Image from "next/image"
// import Link from "next/link"

// export default function Home() {
//   // Sample data - would come from your API
//   const stats = {
//     uniqueDonations: "4.6M",
//     projectsFunded: "5,242",
//     fundingDistributed: "$60,000,000+"
//   }

//   const rounds = [
//     {
//       title: "Dev Tooling",
//       tag: "OSS ROUND",
//       organization: "CrowdChain",
//       description: "This round funds projects enhancing developer tools for OSS and Web3. We support creation of environments, frameworks, and libraries for efficient, secure smart contract development. Goals: reduce barriers, boost efficiency, and show strong community adoption.",
//       matchingPool: "300,000",
//       currency: "USDC"
//     },
//     {
//       title: "Web3 Infrastructure",
//       tag: "OSS ROUND",
//       organization: "CrowdChain",
//       description: "This round aims to strengthen the ecosystem's foundational infrastructure by supporting projects crucial for its development, scalability, and security.",
//       matchingPool: "300,000",
//       currency: "USDC"
//     },
//     {
//       title: "dApps and Apps",
//       tag: "OSS ROUND",
//       organization: "CrowdChain",
//       description: "This initiative funds innovative dApps & Apps in two areas: 1) User-friendly applications enhancing Web3 accessibility and usability, and 2) Projects advancing financial inclusion, education, and social impact.",
//       matchingPool: "300,000",
//       currency: "USDC"
//     },
//     {
//       title: "Hackathon Alumni",
//       tag: "OSS ROUND",
//       organization: "CrowdChain",
//       description: "To foster the growth and impact of open-source software within the tech ecosystem, there's a growing need to support projects that have shown promising beginnings at recent hackathons.",
//       matchingPool: "100,000",
//       currency: "USDC"
//     }
//   ]

//   return (
    
//     <div className="min-h-screen bg-[#020817]">
//       {/* Header */}
//       <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#020817]/80 backdrop-blur-xl">
//         <div className="container mx-auto flex h-16 items-center justify-between px-4">
//           <div className="flex items-center gap-2">
//             <ChartBarIcon className="h-8 w-8 text-[#00ff9d]" />
//             <span className="text-xl font-bold text-white">CrowdChain</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <WalletMultiButton />
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 pt-24">
//         {/* Stats Section */}
//         <div className="mb-12 rounded-xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
//           <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
//             <ChartBarIcon className="h-6 w-6 text-[#00ff9d]" />
//             By the numbers...
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             <div>
//               <div className="mb-1 text-3xl font-bold text-white">{stats.uniqueDonations}</div>
//               <div className="text-sm text-gray-400">UNIQUE DONATIONS</div>
//             </div>
//             <div>
//               <div className="mb-1 text-3xl font-bold text-white">{stats.projectsFunded}</div>
//               <div className="text-sm text-gray-400">PROJECTS RAISED FUNDS</div>
//             </div>
//             <div>
//               <div className="mb-1 text-3xl font-bold text-white">{stats.fundingDistributed}</div>
//               <div className="text-sm text-gray-400">IN FUNDING DISTRIBUTED</div>
//             </div>
//           </div>
//         </div>

//         {/* Rounds Section */}
//         <div className="mb-8">
//           <h1 className="mb-6 text-2xl font-bold text-white">Active Rounds</h1>
//           <div className="grid gap-6 md:grid-cols-2">
//             {rounds.map((round, index) => (
//               <Link href={`/rounds/${index}`} key={index}>
//                 <Card className="h-full border-white/5 bg-white/5 transition-colors hover:bg-white/10">
//                   <CardContent className="p-6">
//                     <div className="mb-4 flex items-start justify-between">
//                       <div>
//                         <h3 className="mb-1 text-xl font-semibold text-white">{round.title}</h3>
//                         <div className="mb-2 text-sm text-gray-400">{round.tag}</div>
//                       </div>
//                       <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00ff9d]/10">
//                         <ChartBarIcon className="h-4 w-4 text-[#00ff9d]" />
//                       </div>
//                     </div>
//                     <p className="mb-6 text-sm text-gray-400">{round.description}</p>
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-sm text-gray-400">Matching Pool</div>
//                         <div className="text-lg font-semibold text-white">
//                           {round.matchingPool} <span className="text-sm">{round.currency}</span>
//                         </div>
//                       </div>
//                       <ArrowRightIcon className="h-5 w-5 text-gray-400" />
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }
"use client"

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Card, CardContent } from "@/components/ui/card"
import { BarChartIcon as ChartBarIcon } from 'lucide-react'
import { RoundCard } from "../components/RoundCard"

export default function Home() {
  const stats = {
    uniqueDonations: "4.6M",
    projectsFunded: "5,242",
    fundingDistributed: "$60,000,000+"
  }

  const rounds = [
    {
      title: "Dev Tooling",
      tag: "OSS ROUND",
      description: "This round funds projects enhancing developer tools for OSS and Web3. We support creation of environments, frameworks, and libraries for efficient, secure smart contract development. Goals: reduce barriers, boost efficiency, and show strong community adoption.",
      matchingPool: "300,000",
      currency: "USDC"
    },
    {
      title: "Web3 Infrastructure",
      tag: "OSS ROUND",
      description: "This round aims to strengthen the ecosystem's foundational infrastructure by supporting projects crucial for its development, scalability, and security.",
      matchingPool: "300,000",
      currency: "USDC"
    },
    {
      title: "dApps and Apps",
      tag: "OSS ROUND",
      description: "This initiative funds innovative dApps & Apps in two areas: 1) User-friendly applications enhancing Web3 accessibility and usability, and 2) Projects advancing financial inclusion, education, and social impact.",
      matchingPool: "300,000",
      currency: "USDC"
    },
    {
      title: "Hackathon Alumni",
      tag: "OSS ROUND",
      description: "To foster the growth and impact of open-source software within the tech ecosystem, there's a growing need to support projects that have shown promising beginnings at recent hackathons.",
      matchingPool: "100,000",
      currency: "USDC"
    }
  ]

  return (
    <div className="min-h-screen bg-[#020817]">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#020817]/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <ChartBarIcon className="h-8 w-8 text-[#00ff9d]" />
            <span className="text-xl font-bold text-white">CrowdChain</span>
          </div>
          <div className="flex items-center gap-4">
            <WalletMultiButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24">
        {/* Stats Section */}
        <div className="mb-12 rounded-xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
            <ChartBarIcon className="h-6 w-6 text-[#00ff9d]" />
            By the numbers...
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-1 font-mono text-3xl font-bold text-white">{stats.uniqueDonations}</div>
              <div className="text-sm tracking-wide text-gray-400">UNIQUE DONATIONS</div>
            </div>
            <div>
              <div className="mb-1 font-mono text-3xl font-bold text-white">{stats.projectsFunded}</div>
              <div className="text-sm tracking-wide text-gray-400">PROJECTS RAISED FUNDS</div>
            </div>
            <div>
              <div className="mb-1 font-mono text-3xl font-bold text-white">{stats.fundingDistributed}</div>
              <div className="text-sm tracking-wide text-gray-400">IN FUNDING DISTRIBUTED</div>
            </div>
          </div>
        </div>

        {/* Rounds Section */}
        <div className="mb-8">
          <h1 className="mb-6 text-2xl font-bold text-white">Active Rounds</h1>
          <div className="grid gap-6 md:grid-cols-2">
            {rounds.map((round, index) => (
              <RoundCard
                key={index}
                {...round}
                href={`/rounds/${index}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

