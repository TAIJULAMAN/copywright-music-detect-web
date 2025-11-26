"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Pricing() {
  const router = useRouter();

  const plans = [
    {
      name: "1-Account Check",
      price: 29,
      description: "Single reel analysis",
      features: ["Copyright detection", "Basic report", "Email delivery"],
    },
    {
      name: "2-Account Checks",
      price: 39,
      description: "Complete analysis package",
      featured: true,
      features: [
        "Advanced copyright detection",
        "Detailed analysis report",
        "PDF & CSV export",
        "Priority support",
      ],
    },
  ];

  const handleBuyNow = (planName: string, price: number) => {
    sessionStorage.setItem(
      "selectedPlan",
      JSON.stringify({ name: planName, price })
    );
    router.push("/checkout");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600">Transparent pricing for every need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 ${
                plan.featured
                  ? "border-2 border-yellow-400 bg-white shadow-lg"
                  : "border border-gray-200 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </div>
              )}

              <div className="flex justify-center items-center gap-2">
                {" "}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
              </div>
              <div className="space-y-3 mt-5">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-baseline justify-center my-5">
                <span className="text-4xl font-bold text-[#1b2149]">
                  ${plan.price}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
              </div>

              <Button
                onClick={() => handleBuyNow(plan.name, plan.price)}
                className={`w-full mb-6 ${
                  plan.featured
                    ? "bg-[#d6322f] hover:bg-[#d6322f]"
                    : "bg-[#d6322f] hover:bg-[#d6322f]"
                } text-white`}
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
