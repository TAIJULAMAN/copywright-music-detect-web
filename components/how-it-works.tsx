import { Link2, Lock, FileText } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Link2,
      title: "Paste Your Profile Link",
      description: "Simply copy and paste your Instagram Reel URL",
    },
    {
      icon: Lock,
      title: "Pay Securely",
      description: "Secure payment processing with PayPal protection",
    },
    {
      icon: FileText,
      title: "Get Instant Report",
      description: "Receive detailed copyright analysis immediately",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600">Three simple steps to protect your content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center shadow-md ${
                      index === 0 ? "bg-red-500" : index === 1 ? "bg-green-500" : "bg-red-600"
                    }`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
