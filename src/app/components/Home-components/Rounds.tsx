import React from "react";
import { RoundCard } from "../RoundCard";
const Rounds = () => {
  const rounds = [
    {
      title: "Dev Tooling",
      tag: "OSS ROUND",
      description:
        "This round funds projects enhancing developer tools for OSS and Web3. We support creation of environments, frameworks, and libraries for efficient, secure smart contract development. Goals: reduce barriers, boost efficiency, and show strong community adoption.",
      matchingPool: "300,000",
    },
    {
      title: "Web3 Infrastructure",
      tag: "OSS ROUND",
      description:
        "This round aims to strengthen the ecosystem's foundational infrastructure by supporting projects crucial for its development, scalability, and security.",
      matchingPool: "300,000",
    },
    {
      title: "dApps and Apps",
      tag: "OSS ROUND",
      description:
        "This initiative funds innovative dApps & Apps in two areas: 1) User-friendly applications enhancing Web3 accessibility and usability, and 2) Projects advancing financial inclusion, education, and social impact.",
      matchingPool: "300,000",
    },
    {
      title: "Hackathon Alumni",
      tag: "OSS ROUND",
      description:
        "To foster the growth and impact of open-source software within the tech ecosystem, there's a growing need to support projects that have shown promising beginnings at recent hackathons.",
      matchingPool: "100,000",
    },
  ];
  return (
    <div className="mb-8">
      <h1 className="mb-6 text-2xl font-bold text-white">Active Rounds</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {rounds.map((round, index) => (
          <RoundCard key={index} {...round} href={`/rounds/${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Rounds;
