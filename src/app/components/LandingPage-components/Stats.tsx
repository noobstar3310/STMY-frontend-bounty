import React from 'react'

const Stats = () => {
  return (
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
  )
}

export default Stats
