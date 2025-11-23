import ScanForm from "@/components/scan-form"
import ScanBenefits from "@/components/scan-benefits"

export default function ScanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">Scan Instagram Reels</h1>
          <p className="text-lg text-gray-600 text-balance">
            Check your Instagram Reels for copyrighted music and ensure your content is safe to publish
          </p>
        </div>

        {/* Scan Form Section */}
        <ScanForm />

        {/* Benefits Section */}
        <ScanBenefits />
      </div>
    </div>
  )
}
