"use client";

import { Button } from "@/components/ui/button";
import { Download, RotateCcw, Shield } from "lucide-react";

export default function ResultsPage() {
  const safeReels = 3;
  const flaggedReels = 1;

  const results = [
    {
      id: 1,
      name: "reel_001.mp4",
      size: "2.3MB",
      audio: "Original Audio Track",
      audioId: "OAT_12345",
      status: "safe",
      reason: "No copyright issues",
      action: "Ready to publish",
    },
    {
      id: 2,
      name: "reel_002.mp4",
      size: "4.1MB",
      audio: "Popular Song Track",
      audioId: "IAL_22222",
      status: "flagged",
      reason: "Copyrighted Content",
      copyright: "Protected by Universal Music",
      action: "Ready to publish",
    },
    {
      id: 3,
      name: "reel_003.mp4",
      size: "1.8MB",
      audio: "Royalty Free Music",
      audioId: "RFM_11111",
      status: "safe",
      reason: "Royalty-free content",
      action: "Ready to publish",
    },
    {
      id: 4,
      name: "reel_004.mp4",
      size: "3.2MB",
      audio: "Instagram Audio Library",
      audioId: "IAL_22222",
      status: "safe",
      reason: "Platform approved",
      action: "Ready to publish",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="border-b bg-white mt-20">
        <div className="container mx-auto px-5 lg:px-0 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Your Copyright Check Results
            </h1>
            <p className="text-gray-600 mt-1">
              Social Media King – Instagram Reels Copyright Checker
            </p>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Secure & Trusted</span>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-5 my-5">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <div className="text-yellow-600 mt-0.5">⏰</div>
          <p className="text-yellow-800 text-sm">
            All data is deleted 24 hours after report delivery.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-5 lg:px-0 py-8 space-y-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Safe Reels Card */}
          <div className="bg-white border-2 border-green-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">
                  {safeReels}
                </div>
                <p className="text-gray-600 font-medium">Safe Reels</p>
                <p className="text-sm text-gray-500">
                  No copyright issues detected
                </p>
              </div>
            </div>
          </div>

          {/* Flagged Reels Card */}
          <div className="bg-white border-2 border-red-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                </svg>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">
                  {flaggedReels}
                </div>
                <p className="text-gray-600 font-medium">Flagged Reels</p>
                <p className="text-sm text-gray-500">
                  Requires immediate attention
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Results Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Detailed Results
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Reel Link
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Audio Title/ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Reason
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Suggested Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((reel) => (
                  <tr
                    key={reel.id}
                    className={`${
                      reel.status === "safe"
                        ? "bg-green-50 border-l-4 border-green-300"
                        : "bg-red-50 border-l-4 border-red-300"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 flex-shrink-0" aria-label="Play">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                        <div>
                          <p className="font-medium text-gray-900">{reel.name}</p>
                          <p className="text-xs text-gray-500">{reel.size}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{reel.audio}</p>
                        <p className="text-xs text-gray-500">ID: {reel.audioId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                          reel.status === "safe"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {reel.status === "safe" ? "✓" : "⚠"}
                        {reel.status === "safe" ? "Safe" : "Flagged"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className={`text-sm ${reel.status === "safe" ? "text-gray-900" : "text-red-700"}`}>{reel.reason}</p>
                        {reel.copyright && (
                          <p className="text-xs text-gray-500">{reel.copyright}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 22h9a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-5l.54-2.17.02-.1c.05-.26.02-.53-.08-.77l-1-2.33A1 1 0 0 0 11.6 3H11a3 3 0 0 0-3 3v11H5a1 1 0 0 0 0 2h4v3z" />
                        </svg>
                        {reel.action}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Report (PDF/CSV)
          </Button>
          <Button
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 bg-transparent"
          >
            <RotateCcw className="w-5 h-5" />
            Request Recheck
          </Button>
        </div>
      </div>
    </div>
  );
}
