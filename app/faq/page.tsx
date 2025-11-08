"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [
    {
      question: "How does this tool work?",
      answer:
        "Our tool uses advanced AI algorithms to scan your Instagram reels and detect copyrighted music content by comparing audio fingerprints against a comprehensive database of protected tracks.",
    },
    {
      question: "Do I need to log in?",
      answer:
        "No, you don't need to create an account. Simply paste your Instagram profile link and we'll analyze your public reels instantly. No signup required.",
    },
    {
      question: "How accurate is the scan?",
      answer:
        "Our scanning technology is 99.8% accurate. We use advanced machine learning models trained on millions of audio samples to detect copyrighted content with high precision.",
    },
    {
      question: "What if my reel is private?",
      answer:
        "We only analyze public reels. Private reels cannot be scanned through our tool. Please make your reels public temporarily to run the copyright check.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "We accept all major payment methods including PayPal, Visa, Mastercard, and American Express. All payments are processed securely through our PayPal integration.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our Instagram Reel copyright checking tool."
        backLink={{ href: "/", text: "Back to Home" }}
      />

      {/* FAQ Accordion */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-sm transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h2>
          <p className="text-gray-600 mb-6">Can't find the answer you're looking for? We're here to help.</p>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-lg">
              Contact Support
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
