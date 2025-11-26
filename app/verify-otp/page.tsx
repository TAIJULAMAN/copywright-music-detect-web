"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function VerifyOTPPage() {
  const router = useRouter()
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [timer, setTimer] = useState(60)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus()
    }
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const otpCode = otp.join("")
    if (otpCode.length !== 6) {
      setError("Please enter a valid 6-digit code")
      setLoading(false)
      return
    }

    // Simulate verification
    setTimeout(() => {
      sessionStorage.setItem("otpVerified", "true")
      setLoading(false)
      router.push("/reset-password")
    }, 1000)
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">Verify Your Code</CardTitle>
            <CardDescription>Enter the 6-digit code sent to your email</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerify} className="space-y-4">
              {error && <div className="bg-red-50 text-red-600 p-3 rounded text-sm">{error}</div>}

              <div className="flex gap-2 justify-center">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-lg font-bold"
                    disabled={loading}
                  />
                ))}
              </div>

              <div className="text-center text-sm text-gray-600">
                {timer > 0 ? (
                  <p>
                    Resend code in <span className="font-semibold text-purple-600">{timer}s</span>
                  </p>
                ) : (
                  <button type="button" className="text-purple-600 hover:text-purple-700 font-medium">
                    Resend code
                  </button>
                )}
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={loading}>
                {loading ? "Verifying..." : "Verify Code"}
              </Button>

              <p className="text-center text-sm text-gray-600">
                <Link href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
                  Back to login
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </main>
    </>
  )
}
