import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Blog() {
  const posts = [
    {
      image: "/b1.png",
      title: "What is Lorem Ipsum?",
      date: "Posted on Sept 22, 2025",
      excerpt: "Simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "/b2.png",
      title: "What is Lorem Ipsum?",
      date: "Posted on Aug 23, 2025",
      excerpt: "Simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "/b3.png",
      title: "What is Lorem Ipsum?",
      date: "Posted on April 20, 2025",
      excerpt: "Simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "/b3.png",
      title: "What is Lorem Ipsum?",
      date: "Posted on April 20, 2025",
      excerpt: "Simply dummy text of the printing and typesetting industry...",
    },
  ];

  return (
    <main className=" bg-[#1b224a]">
      <section className="container mx-auto py-20 w-full ">
        <div className="w-full flex flex-col gap-2 justify-center items-center px-5 lg:px-0">
          <h2 className="text-4xl font-bold text-white">Blog</h2>
          <p className="text-gray-300 mt-2">
            Expert insights, tips, and updates to help you
          </p>
        </div>
        <div className="w-full px-5 lg:px-0 mt-5">
          <div className="flex justify-between items-center mb-10">
            <div className="flex  items-center gap-2">
              <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-semibold">
                Recent
              </div>
              <span className="text-white text-sm font-medium">Articles</span>
            </div>
            <Link
              href="#"
              className="text-white font-semibold flex items-center gap-2"
            >
              See all Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {posts.map((post, index) => (
              <article key={index} className="overflow-hidden">
                <div className="bg-gradient-to-br from-purple-600 to-pink-500 h-48 rounded-lg flex items-center justify-center text-6xl mb-4 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-white text-sm mb-4">{post.date}</p>
                <p className="text-white text-sm mb-4">{post.excerpt}</p>
                <Link
                  href="#"
                  className="text-white text-sm font-semibold flex items-center gap-2"
                >
                  <Button className="bg-white text-black">
                    Read the article
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
