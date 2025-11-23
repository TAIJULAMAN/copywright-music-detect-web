import { Users, Shield, Zap, Download } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Prevent Copyright Violations",
      description: "Start checking immediately without creating an account",
    },
    {
      icon: Shield,
      title: "Save Time, reduce risk",
      description: "Check content in minutes and delete risky posts fast.",
    },
    {
      icon: Zap,
      title: "AI‑Powered Detection",
      description: "Technology that outperforms manual checks.",
    },
    {
      icon: Download,
      title: "PDF/CSV Report",
      description: "Download detailed reports in multiple formats",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-[#1b2149]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Why Choose Our Service</h2>
          <p className="text-gray-300 text-sm md:text-base">Advanced features for complete copyright protection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorSets = [
              { ring: "ring-green-500/30", text: "text-green-600", bg: "bg-green-50" },
              { ring: "ring-red-500/30", text: "text-red-600", bg: "bg-red-50" },
              { ring: "ring-emerald-500/30", text: "text-emerald-600", bg: "bg-emerald-50" },
              { ring: "ring-teal-500/30", text: "text-teal-600", bg: "bg-teal-50" },
            ]
            const cs = colorSets[index % colorSets.length]
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow border border-gray-200">
                <div className={`w-10 h-10 rounded-md ${cs.bg} ${cs.ring} ring-2 flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${cs.text}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-base md:text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
