import { Card, CardContent } from "@/app/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface RoundCardProps {
  title: string;
  tag: string;
  description: string;
  matchingPool: string;
  href: string;
}

export function RoundCard({
  title,
  tag,
  description,
  matchingPool,
  href,
}: RoundCardProps) {
  return (
    <Link href={href}>
      <Card className="group h-full overflow-hidden border-white/5 bg-white/5 transition-all hover:border-white/10 hover:bg-white/[0.07]">
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="mb-4">
              <h3 className="mb-1 font-display text-2xl font-medium tracking-tight text-white">
                {title}
              </h3>
              <div className="text-sm tracking-wide text-gray-400">{tag}</div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-gray-400">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/5 pt-4">
            <div>
              <div className="text-xs text-gray-500">Matching Pool</div>
              <div className="flex items-center gap-2">
                <div className="font-mono text-lg font-medium text-white">
                  {matchingPool}
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
            <ChevronRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-0.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
