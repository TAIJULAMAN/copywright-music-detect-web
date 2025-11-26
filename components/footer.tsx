import Image from "next/image";
import Link from "next/link";
import { Lock, ShieldCheck, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </div>
            <p className="text-sm">
              Disclaimer: CopyrightChecker.de automatically analyzes public
              content. The results are for informational purposes only and do
              not constitute legal advice. Direct links to affected Reels are
              provided solely for the user’s own processing..
            </p>
            <div className="mt-4 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">PayPal Protected</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5 text-sky-400" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5 text-purple-500" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-sky-500" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; © 2025 Social Media King. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
