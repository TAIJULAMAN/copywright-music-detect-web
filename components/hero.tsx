import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/background.png')",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
      }}
      className="min-h-[80vh] md:min-h-[70vh] bg-[#f7f7f5] w-full overflow-hidden"
    >
      <div className="h-full flex items-center">
        <div className="container mx-auto px-5 lg:px-0 py-10 md:py-20 lg:py-24">
          <div className="max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap- md:gap-8 mb-6 md:mb-8">
            <div className="w-full md:w-3/4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Check Your
                <br className="hidden sm:block" />
                <span>Instagram Reels for </span>
                <br className="hidden sm:block" />
                <span className="text-red-500 whitespace-nowrap">Copyrighted Music</span>
              </h1>
            </div>
            <div className="w-full md:w-1/4 flex justify-center md:justify-end">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative">
                <Image
                  src="/hero.png"
                  alt="Copyright Check Badge"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 256px"
                />
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-gray-700 text-base sm:text-lg mb-6 md:mb-8">
              Protect your content and avoid copyright strikes. Our AI‑powered
              tool scans your Instagram Reels for copyrighted music in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 text-base sm:text-lg w-full sm:w-auto flex-shrink-0"
                size="lg"
              >
                <span className="mr-2">▶</span> Check My Reels Now
              </Button>
              <div className="flex items-center justify-center sm:justify-start text-sm text-gray-600">
                <p className="text-center sm:text-left">
                  No account required • Instant results • Secure payment
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4 mb-8">
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

          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
            <span className="underline">CopyrightChecker.de</span> automatically analyzes public content. The
            results are for informational purposes only and do not constitute
            legal advice. Direct links to affected Reels are provided solely for
            the user's own processing.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}
