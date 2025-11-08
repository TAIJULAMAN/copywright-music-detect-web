import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      image: "🎵",
      title: "What is Lorem Ipsum?",
      date: "Posted on Sept 22, 2025",
      excerpt: "Simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "🎙️",
      title: "What is Lorem Ipsum?",
      date: "Posted on Aug 23, 2025",
      excerpt: "Simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "🎸",
      title: "What is Lorem Ipsum?",
      date: "Posted on April 20, 2025",
      excerpt: "Simply dummy text of the printing and typesetting industry...",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-semibold">Recent</div>
              <span className="text-gray-600 text-sm font-medium">Articles</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Blog</h2>
            <p className="text-gray-600 mt-2">Expert insights, tips, and updates to help you</p>
          </div>
          <Link href="#" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2">
            See all Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="overflow-hidden">
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 h-48 rounded-lg flex items-center justify-center text-6xl mb-4">
                {post.image}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
              <Link
                href="#"
                className="text-purple-600 hover:text-purple-700 text-sm font-semibold flex items-center gap-2"
              >
                Read the article <ArrowRight className="w-3 h-3" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
