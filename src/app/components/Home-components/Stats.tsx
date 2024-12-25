import React from "react";
import { BarChartIcon as ChartBarIcon } from "lucide-react";

const Stats = () => {
  const stats = {
    uniqueDonations: "4.6M",
    projectsFunded: "5,242",
    fundingDistributed: "$60,000,000+",
  };
  return (
    <div className="mb-12 rounded-xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
        <ChartBarIcon className="h-6 w-6 text-[#00ff9d]" />
        By the numbers...
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="mb-1 font-mono text-3xl font-bold text-white">
            {stats.uniqueDonations}
          </div>
          <div className="text-sm tracking-wide text-gray-400">
            UNIQUE DONATIONS
          </div>
        </div>
        <div>
          <div className="mb-1 font-mono text-3xl font-bold text-white">
            {stats.projectsFunded}
          </div>
          <div className="text-sm tracking-wide text-gray-400">
            PROJECTS RAISED FUNDS
          </div>
        </div>
        <div>
          <div className="mb-1 font-mono text-3xl font-bold text-white">
            {stats.fundingDistributed}
          </div>
          <div className="text-sm tracking-wide text-gray-400">
            IN FUNDING DISTRIBUTED
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
