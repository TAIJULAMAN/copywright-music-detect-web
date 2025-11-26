import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export default function HelpCenter() {
  const faqs = [
    {
      question: "How do I check my Instagram reels for copyright issues?",
      answer:
        "Simply go to the scan page, paste your Instagram profile link, and click 'Start Scan'. Select your preferred plan and complete the payment. Our system will then analyze all your public reels for copyright issues.",
    },
    {
      question: "What's the difference between Basic Check and Full Report?",
      answer:
        "Basic Check ($29) provides a quick copyright detection on your reels. Full Report ($39) includes advanced copyright detection, detailed analysis of each reel, and PDF/CSV export options for your records.",
    },
    {
      question: "Can you scan private reels?",
      answer:
        "No, we only analyze public reels. Private reels cannot be scanned as they're not accessible through Instagram's public API.",
    },
    {
      question: "How long does the scan take?",
      answer:
        "Most scans complete within seconds to a few minutes, depending on the number of reels. You'll receive an instant notification once your results are ready.",
    },
  ]

  const categories = [
    { title: "Getting Started", items: ["How to scan reels", "Understanding results", "Subscription plans"] },
    { title: "Troubleshooting", items: ["Scan not starting", "Payment issues", "Can't see results"] },
    { title: "Security", items: ["Data privacy", "Information safety", "Encryption methods"] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PageHeader
        title="Help Center"
        description="Find answers and get support"
        backLink={{ href: "/", text: "Back to Home" }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-purple-600 hover:text-purple-700 text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-purple-50 rounded-lg border border-purple-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-6">Can't find what you're looking for? Get in touch with our support team.</p>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
