import React from 'react'
import Link from "next/link"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#020817]/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold text-white">
            CrowdChain
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/home" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
              Launch Program
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <WalletMultiButton style={{}} />
          </div>
        </div>
      </header>
  )
}

export default Navbar
