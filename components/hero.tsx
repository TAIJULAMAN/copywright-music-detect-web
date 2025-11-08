import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-5 md:px-0 py-5 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Check Your Instagram Reels for <span className="text-red-500">Copyrighted Music</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Protect your content and avoid takedowns. Scan your Instagram Reels for copyrighted music in seconds.
            </p>

            <div className="mb-8">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg">▶ Check My Reels Now</Button>
            </div>

            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <p>✓ No account required • Instant results • Secure payment</p>
            </div>

            <div className="flex gap-6">
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
                <span className="text-gray-700 text-sm">SSL Protected</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              {/* Background gradient circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-100 rounded-3xl transform rotate-12"></div>

              {/* White card with Instagram logo */}
              <div className="absolute inset-8 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-6xl">📸</div>
              </div>

              {/* Decorative squares */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow-400 rounded-xl shadow-md"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-2xl shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
