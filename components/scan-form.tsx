"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, InfoIcon } from "lucide-react"

export default function ScanForm() {
  const [profileLink, setProfileLink] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!profileLink.trim()) return

    setIsLoading(true)
    // Store the profile link in session/context for later use
    sessionStorage.setItem("instagramProfileLink", profileLink)
    setTimeout(() => {
      router.push("/pricing")
    }, 1000)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Paste Your Profile Link</h2>
        <p className="text-gray-600">Enter your Instagram profile URL to begin the scan</p>
      </div>

      <form onSubmit={handleScan} className="space-y-6">
        {/* Input Field */}
        <div className="relative">
          <Input
            type="url"
            placeholder="Paste your profile link"
            value={profileLink}
            onChange={(e) => setProfileLink(e.target.value)}
            className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
          <InfoIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-900">We only analyze public Reels. Private Reels cannot be scanned.</p>
        </div>

        {/* Scan Button */}
        <Button
          type="submit"
          disabled={isLoading || !profileLink.trim()}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
        >
          <Search className="w-5 h-5" />
          {isLoading ? "Scanning..." : "Start Scan"}
        </Button>
      </form>
    </div>
  )
}
