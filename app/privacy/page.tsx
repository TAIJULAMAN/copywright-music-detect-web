import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <span className="text-red-600 hover:text-red-700 flex items-center gap-1">← Back to Home</span>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: November 2024</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                ReelCheck ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and otherwise handle your information when you use our website
                and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We collect information you provide directly to us, such as:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Your Instagram profile link</li>
                <li>Email address</li>
                <li>Payment information (processed securely through PayPal)</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Scan and analyze your Instagram reels for copyright issues</li>
                <li>Generate and deliver copyright scan reports</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send you notifications and updates about your reports</li>
                <li>Improve and optimize our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Retention</h2>
              <p className="text-gray-700">
                All scan data and personal information is automatically deleted 24 hours after your report is delivered.
                We do not retain your data longer than necessary to provide our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your data against unauthorized
                access, alteration, disclosure, or destruction. All data transmission is encrypted using SSL/TLS
                protocol.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
              <p className="text-gray-700">
                We use PayPal for payment processing. Their privacy practices are governed by their own privacy policy.
                We do not share your personal information with other third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of communications</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at
                support@reelcheck.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
