"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface PaymentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentSuccessModal({
  isOpen,
  onClose,
}: PaymentSuccessModalProps) {
  const router = useRouter();
  const [generatingTime, setGeneratingTime] = useState(5);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setGeneratingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleViewResults = () => {
    onClose();
    router.push("/results");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center space-y-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <Image src="/payment.png" alt="PayPal" width={50} height={50} />
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Successful
          </h2>
          <p className="text-gray-600">
            Thank you! We're preparing your report...
          </p>
        </div>

        {/* Status Message */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <p className="text-sm text-gray-700">
            Your payment has been successfully processed, and we are now
            generating your detailed copyright scan report. This will be ready
            shortly.
          </p>
          <p className="text-sm font-semibold text-red-600">
            {generatingTime > 0
              ? `Generating your results, this might take a moment... (${generatingTime}s)`
              : "Your results are ready!"}
          </p>
        </div>

        {/* View Results Button */}
        <Button
          onClick={handleViewResults}
          className="w-full bg-red-600 text-white py-6 text-lg font-semibold rounded-lg transition-all"
        >
          View My Results
        </Button>
      </div>
    </div>
  );
}
