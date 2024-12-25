import React from 'react'

const Background = () => {
  return (
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
  )
}

export default Background
