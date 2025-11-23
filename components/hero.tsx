import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/background.png')",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
      }}
      className="min-h-[70vh] bg-[#f7f7f5]"
    >
      <div className="container mx-auto px-5 md:px-0 py-10 md:py-40">
        <div className="max-w-4xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 mt-1 inline-flex items-center justify-center gap-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Check Your
                <br />
                <span>Instagram Reels for </span>
                <br />
                <span className="text-red-500">Copyrighted Music</span>
              </h1>
              <Image
                src="/hero.png"
                alt="Badge"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </div>

          <p className="text-gray-700 text-base sm:text-lg max-w-xl mb-8">
            Protect your content and avoid copyright strikes. Our AI‑powered
            tool scans your Instagram Reels for copyrighted music in minutes.
          </p>

          <div className="mb-6">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
              ▶ Check My Reels Now
            </Button>
          </div>

          <div className="text-sm text-gray-600 mb-6">
            <p>No account required • Instant results • Secure payment</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 text-sm">PayPal Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 text-sm">
                No Instagram Login required
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 text-sm">AI‑Detection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 text-sm">Instant Results</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            <span className="underline">CopyrightChecker.de</span> automatically analyzes public content. The
            results are for informational purposes only and do not constitute
            legal advice. Direct links to affected Reels are provided solely for
            the user’s own processing.
          </p>
        </div>
      </div>
    </section>
  );
}
