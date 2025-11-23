export default function HowItWorks() {
  const steps = [
    {
      title: "Paste Your Profile Link",
      description: "Simply copy and paste your Instagram Reel URL",
    },
    {
      title: "Create Account - Pay Securely",
      description: "Secure payment processing with PayPal protection",
    },
    {
      title: "Get Instant Report",
      description: "Receive detailed copyright analysis immediately",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-[#1b2149]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">How It Works</h2>
          <p className="text-gray-300 text-sm md:text-base">Three simple steps to protect your content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-5 md:p-6 relative pt-10 md:pt-12">
              <div className="absolute top-0 left-0">
                <div className="w-10 h-10 md:w-11 md:h-11 bg-red-600 text-white text-base md:text-lg font-extrabold rounded-br-lg flex items-center justify-center shadow">
                  {index + 1}.
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
