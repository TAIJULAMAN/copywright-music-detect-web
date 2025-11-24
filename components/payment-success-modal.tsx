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

        <div className="rounded-lg border border-gray-200 p-4 text-left space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Invoice</p>
              <p className="font-semibold text-gray-900">#CW-2025-0001</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium text-gray-900">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700">Instagram Reels Copyright Scan</span>
              <span className="text-gray-900 font-medium">$9.99</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Payment Method</span>
              <span className="text-gray-700">PayPal</span>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">Total Paid</span>
            <span className="text-base font-bold text-gray-900">$9.99</span>
          </div>
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
