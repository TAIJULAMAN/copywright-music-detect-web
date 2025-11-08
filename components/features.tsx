import { Users, Shield, Zap, Download } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "No Login Needed",
      description: "Start checking immediately without creating an account",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Protected by industry-standard encryption",
    },
    {
      icon: Zap,
      title: "AI-Powered Detection",
      description: "Start checking immediately without creating an account",
    },
    {
      icon: Download,
      title: "PDF/CSV Report",
      description: "Download detailed reports in multiple formats",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Service</h2>
          <p className="text-gray-600">Advanced features for complete copyright protection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colors = ["bg-red-500", "bg-green-500", "bg-red-600", "bg-teal-500"]
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colors[index]}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
