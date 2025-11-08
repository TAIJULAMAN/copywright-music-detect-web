"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"
import PaymentSuccessModal from "@/components/payment-success-modal"

interface Plan {
  name: string
  price: number
}

export default function CheckoutPage() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  useEffect(() => {
    // Load selected plan from session storage
    const planData = sessionStorage.getItem("selectedPlan")
    if (planData) {
      setSelectedPlan(JSON.parse(planData))
    }
  }, [])

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccessModal(true)
    }, 2000)
  }

  if (!selectedPlan) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Your Payment to Receive the Results
            </h1>
            <p className="text-gray-600">
              Pay ${selectedPlan.price} for {selectedPlan.name} or ${selectedPlan.price === 29 ? 39 : 29} for{" "}
              {selectedPlan.name === "Basic Check" ? "Full Report" : "Basic Check"}
            </p>
          </div>

          {/* Payment Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            {/* Order Summary */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">You're About to Purchase</h2>

              <div className="space-y-4 border-b border-gray-200 pb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Selected Plan:</span>
                  <span className="font-semibold text-gray-900">{selectedPlan.name}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Price:</span>
                  <span className="font-semibold text-purple-600 text-lg">${selectedPlan.price}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Reels Checked:</span>
                  <span className="font-semibold text-gray-900">5 Reels</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-4 bg-purple-50 px-4 rounded-lg mt-6">
                <span className="font-bold text-gray-900">Total Price:</span>
                <span className="text-2xl font-bold text-purple-600">${selectedPlan.price}</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-4 mb-8">
              {/* PayPal Info Box */}
              <div className="border-2 border-purple-600 rounded-lg p-4 flex items-center gap-3 bg-purple-50">
                <div className="text-2xl">🅿️</div>
                <span className="text-purple-900 font-semibold">Pay Securely via PayPal</span>
              </div>

              {/* Pay Button */}
              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Lock className="w-5 h-5" />
                {isProcessing ? "Processing Payment..." : "Pay Securely with PayPal"}
              </Button>
            </div>

            {/* Security Info */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">🛡️</div>
                  <span className="text-gray-700 font-semibold">SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl">🅿️</div>
                  <span className="text-gray-700 font-semibold">PayPal Secure</span>
                </div>
              </div>

              <p className="text-center text-sm text-gray-600">
                Your payment is securely processed through PayPal. We never store your financial data.
              </p>

              <div className="text-center">
                <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center justify-center gap-1 mx-auto">
                  What happens after I pay? →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Success Modal */}
      <PaymentSuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </>
  )
}
