import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const Faq = () => {
  return (
    <section className="relative container mx-auto px-4 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        How it works
      </h2>
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl p-8">
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              title: "Funds are pooled",
              subtitle: "CrowdChain raises a pool of funds",
              content:
                "First, we raise an initial pool of matching funds with the support of the CrowdChain community. These matching funders include: individuals, organizations, repeat donors and champions of public goods. Their combined resources fund the matching pool for the round.",
            },
            {
              title: "Application Period",
              subtitle: "Projects submit applications for round participation",
              content:
                "Projects can apply to a specific round or in some cases, multiple rounds, where they meet the eligibility criteria before going through an onboarding process.",
            },
            {
              title: "Review Period",
              subtitle:
                "CrowdChain reviews applications against set of criteria",
              content:
                "Our team carefully reviews each application against our established criteria to ensure quality and alignment with our mission.",
            },
            {
              title: "Crowdfunding Period",
              subtitle: "Supporters vote and donate",
              content:
                "During this period, the community can support their favorite projects through donations and voting.",
            },
            {
              title: "Funds are Distributed",
              subtitle: "Successful projects receive funding",
              content:
                "After the crowdfunding period ends, funds are distributed to successful projects through smart contracts on the Solana blockchain.",
            },
          ].map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-white/5"
            >
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
  );
};

export default Faq;
