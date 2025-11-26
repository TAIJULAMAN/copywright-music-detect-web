"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      image: "https://placeholder.svg?height=300&width=400&query=concert-crowd-stage-lights",
      title: "Understanding Instagram's Copyright Detection System",
      excerpt:
        "Learn how Instagram identifies copyrighted content and what creators need to know to avoid strikes on their reels.",
      date: "Posted on Sept 22, 2025",
      author: "Sarah Chen",
      category: "Copyright",
      readTime: "5 min read",
      slug: "understanding-instagram-copyright",
    },
    {
      id: 2,
      image: "https://placeholder.svg?height=300&width=400&query=microphone-recording-studio",
      title: "Best Royalty-Free Music Sources for Your Reels",
      excerpt:
        "Discover the top platforms where you can find high-quality royalty-free music for your Instagram content.",
      date: "Posted on Aug 23, 2025",
      author: "James Miller",
      category: "Resources",
      readTime: "7 min read",
      slug: "royalty-free-music-sources",
    },
    {
      id: 3,
      image: "https://placeholder.svg?height=300&width=400&query=neon-dj-turntable-nightclub",
      title: "How to Repurpose Music Licenses for Multiple Platforms",
      excerpt:
        "A comprehensive guide on managing music licenses across different social media platforms and streaming services.",
      date: "Posted on April 20, 2025",
      author: "Emma Rodriguez",
      category: "Licensing",
      readTime: "8 min read",
      slug: "music-licenses-multiple-platforms",
    },
    {
      id: 4,
      image: "https://placeholder.svg?height=300&width=400&query=podcast-microphone-headphones",
      title: "Common Copyright Myths Debunked",
      excerpt: "We break down common misconceptions about copyright law and what creators actually need to know.",
      date: "Posted on March 15, 2025",
      author: "David Park",
      category: "Legal",
      readTime: "6 min read",
      slug: "copyright-myths-debunked",
    },
    {
      id: 5,
      image: "https://placeholder.svg?height=300&width=400&query=music-production-studio-mixing",
      title: "Creating Original Content: A Creator's Guide",
      excerpt: "Tips and strategies for creating original music and audio content that won't trigger copyright issues.",
      date: "Posted on Feb 10, 2025",
      author: "Lisa Thompson",
      category: "Creation",
      readTime: "9 min read",
      slug: "creating-original-content",
    },
    {
      id: 6,
      image: "https://placeholder.svg?height=300&width=400&query=audio-waveform-digital-production",
      title: "2025 Copyright Law Updates for Content Creators",
      excerpt: "Stay informed about the latest changes in copyright regulations that affect your content creation.",
      date: "Posted on Jan 30, 2025",
      author: "Michael Zhang",
      category: "Updates",
      readTime: "7 min read",
      slug: "2025-copyright-updates",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Blog"
        description="Expert insights, tips, and updates to help you protect your content"
        backLink={{ href: "/", text: "Back to Home" }}
      />

      {/* Blog Grid */}
      <main className="container mx-auto px-5 md:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex flex-col">
                    <p className="text-xs text-gray-500">{post.date}</p>
                    <p className="text-xs text-gray-500">By {post.author}</p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-1"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
