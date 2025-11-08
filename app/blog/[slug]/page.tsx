"use client"

import Link from "next/link"
import { Calendar, User, Clock } from "lucide-react"
import { useParams } from "next/navigation"
import PageHeader from "@/components/page-header"

export default function BlogDetail() {
  const params = useParams()
  const slug = params.slug as string

  // Sample blog posts data
  const posts: Record<string, any> = {
    "understanding-instagram-copyright": {
      title: "Understanding Instagram's Copyright Detection System",
      author: "Sarah Chen",
      date: "September 22, 2025",
      readTime: "5 min read",
      category: "Copyright",
      image: "https://placeholder.svg?height=400&width=800&query=concert-crowd-stage-lights",
      content: `
        <h2>Introduction</h2>
        <p>Instagram has become one of the most popular platforms for content creators, with millions of reels uploaded daily. However, with great creative freedom comes the responsibility of respecting intellectual property rights, particularly when it comes to music and audio content.</p>
        
        <h2>How Instagram Detects Copyrighted Content</h2>
        <p>Instagram uses a sophisticated system called Content ID to detect copyrighted music in reels. This technology works by analyzing the audio in your video and comparing it against a vast database of registered music and sound recordings.</p>
        
        <h3>The Audio Fingerprinting Process</h3>
        <p>The system creates a unique fingerprint of the audio in your video. This fingerprint is distinct from the actual audio data, making it impossible to avoid detection through simple audio manipulation like pitch shifting or volume adjustment.</p>
        
        <h2>What Happens When Copyright is Detected?</h2>
        <p>When Instagram detects copyrighted music in your reel, several things can happen depending on the rights holder's policies:</p>
        <ul>
          <li><strong>Muting:</strong> The audio may be automatically muted</li>
          <li><strong>Monetization:</strong> Ads may be placed on your video, with revenue going to the copyright holder</li>
          <li><strong>Blocking:</strong> In some cases, the entire video may be blocked from distribution</li>
          <li><strong>Copyright Strike:</strong> Repeated violations can result in account suspension</li>
        </ul>
        
        <h2>Protecting Your Content</h2>
        <p>To ensure your reels remain safe from copyright strikes, consider these strategies:</p>
        <ol>
          <li>Use royalty-free music from legitimate sources</li>
          <li>Purchase proper licenses for copyrighted music</li>
          <li>Create original audio content</li>
          <li>Use Instagram's built-in music library which is cleared for use</li>
          <li>Consider using our copyright checking tool before publishing</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Understanding how Instagram's copyright detection system works is crucial for any content creator. By being proactive and using legitimate audio sources, you can create content confidently without fear of strikes or takedowns.</p>
      `,
    },
    "royalty-free-music-sources": {
      title: "Best Royalty-Free Music Sources for Your Reels",
      author: "James Miller",
      date: "August 23, 2025",
      readTime: "7 min read",
      category: "Resources",
      image: "https://placeholder.svg?height=400&width=800&query=microphone-recording-studio",
      content: `
        <h2>Introduction</h2>
        <p>Finding quality music for your Instagram reels doesn't have to be expensive or risky. There are numerous platforms offering royalty-free music that you can use legally without worrying about copyright strikes.</p>
        
        <h2>Top Royalty-Free Music Platforms</h2>
        <p>We've compiled a list of the best platforms where you can find high-quality music for your content:</p>
        
        <h3>1. Epidemic Sound</h3>
        <p>One of the most popular choices for content creators, offering over 40,000 tracks and 60,000 sound effects with high-quality audio.</p>
        
        <h3>2. Artlist</h3>
        <p>Provides unlimited downloads of music and sound effects with a single subscription, perfect for creators on a budget.</p>
        
        <h3>3. Free Music Archive</h3>
        <p>A community-driven platform with thousands of free tracks contributed by independent artists.</p>
        
        <h2>Tips for Choosing the Right Music</h2>
        <p>When selecting music for your reels, consider these factors to maximize engagement and fit your content perfectly.</p>
        
        <h2>Conclusion</h2>
        <p>With so many excellent royalty-free music sources available, there's no reason to risk using copyrighted content. Start exploring these platforms and elevate your reel production quality today.</p>
      `,
    },
    "music-licenses-multiple-platforms": {
      title: "How to Repurpose Music Licenses for Multiple Platforms",
      author: "Emma Rodriguez",
      date: "April 20, 2025",
      readTime: "8 min read",
      category: "Licensing",
      image: "https://placeholder.svg?height=400&width=800&query=neon-dj-turntable-nightclub",
      content: `
        <h2>Understanding Music Licenses</h2>
        <p>When you purchase a music license, it's important to understand what rights you're actually purchasing. Different platforms have different requirements and restrictions.</p>
        
        <h2>Platform-Specific Licensing Requirements</h2>
        <p>Each social media platform has its own guidelines for music usage. Let's explore the specifics for popular platforms.</p>
        
        <h3>Instagram</h3>
        <p>Instagram allows music from its extensive music library, but for external music, you'll need proper licensing.</p>
        
        <h3>YouTube</h3>
        <p>YouTube offers both Creative Commons tracks and the Audio Library with extensive royalty-free content.</p>
        
        <h2>Best Practices</h2>
        <p>Always read the terms of your music license carefully to ensure compliance across all platforms.</p>
      `,
    },
    "copyright-myths-debunked": {
      title: "Common Copyright Myths Debunked",
      author: "David Park",
      date: "March 15, 2025",
      readTime: "6 min read",
      category: "Legal",
      image: "https://placeholder.svg?height=400&width=800&query=podcast-microphone-headphones",
      content: `
        <h2>Myth 1: Giving Credit Avoids Copyright</h2>
        <p>One of the most common misconceptions is that crediting the original artist means you can use their music freely. This is false. Credit does not replace a proper license.</p>
        
        <h2>Myth 2: Modified Audio Can't be Detected</h2>
        <p>Many creators believe that changing the pitch or tempo of music will fool copyright detection systems. Modern audio fingerprinting technology can identify songs even with these modifications.</p>
        
        <h2>Myth 3: Private Videos Are Exempt</h2>
        <p>Copyright laws apply to all videos, whether they're public or private. The platform may handle them differently, but you're still legally obligated to respect copyright.</p>
        
        <h2>Myth 4: 10 Seconds Avoids Copyright</h2>
        <p>There's no "magic duration" that exempts you from copyright. Any unauthorized use of copyrighted content, regardless of length, is technically infringement.</p>
        
        <h2>The Truth About Fair Use</h2>
        <p>Fair use is a complex legal concept, and many creators misunderstand its scope. It's narrow and specific, and commenting, criticism, news reporting, and teaching may qualify, but entertainment generally does not.</p>
      `,
    },
    "creating-original-content": {
      title: "Creating Original Content: A Creator's Guide",
      author: "Lisa Thompson",
      date: "February 10, 2025",
      readTime: "9 min read",
      category: "Creation",
      image: "https://placeholder.svg?height=400&width=800&query=music-production-studio-mixing",
      content: `
        <h2>Why Create Original Content?</h2>
        <p>Original content stands out in a crowded digital landscape. It shows your unique perspective and builds a loyal audience.</p>
        
        <h2>Tools for Creating Original Audio</h2>
        <p>There are many affordable and accessible tools for creating original music and audio:</p>
        <ul>
          <li>GarageBand for Mac users</li>
          <li>FL Studio for comprehensive music production</li>
          <li>Audacity for audio editing</li>
          <li>CapCut for video and audio editing</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>Begin with simple audio experiments and gradually build your skills. Your audience will appreciate the effort and originality.</p>
      `,
    },
    "2025-copyright-updates": {
      title: "2025 Copyright Law Updates for Content Creators",
      author: "Michael Zhang",
      date: "January 30, 2025",
      readTime: "7 min read",
      category: "Updates",
      image: "https://placeholder.svg?height=400&width=800&query=audio-waveform-digital-production",
      content: `
        <h2>Major Changes in 2025</h2>
        <p>The copyright landscape continues to evolve. Here are the key changes every content creator should know about in 2025.</p>
        
        <h2>Enhanced Protection for Creators</h2>
        <p>New regulations are being implemented to better protect creators while also respecting copyright holders' rights.</p>
        
        <h2>Platform Responsibilities</h2>
        <p>Social media platforms are taking on more responsibility for copyright enforcement and creator protection.</p>
        
        <h2>What This Means for You</h2>
        <p>As a content creator, staying informed about these changes helps you navigate the digital landscape successfully.</p>
      `,
    },
  }

  const post = posts[slug] || posts["understanding-instagram-copyright"]

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        backLink={{ href: "/blog", text: "Back to Blog" }}
        maxWidth="4xl"
        className="pb-8"
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden h-96 bg-gradient-to-br from-purple-600 to-pink-500">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Header */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-4 h-4" />
              <span className="text-sm">{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.readTime}</span>
            </div>
            <div className="inline-block">
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded">
                {post.category}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="space-y-6 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">')
                .replace(/<h3>/g, '<h3 class="text-2xl font-bold text-gray-800 mt-6 mb-3">')
                .replace(/<p>/g, '<p class="text-gray-700 mb-4">')
                .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 space-y-2">')
                .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4 space-y-2">')
                .replace(/<li>/g, '<li class="text-gray-700">'),
            }}
          />
        </article>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to protect your content?</h2>
          <p className="mb-6">Check your Instagram reels for copyrighted music before publishing.</p>
          <Link href="/scan">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Scan
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
