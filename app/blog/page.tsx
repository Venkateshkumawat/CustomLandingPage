import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Natural Light Photography",
    excerpt:
      "Discover how to harness natural light to create stunning photographs that capture the essence of your subjects.",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    date: "2024-02-15",
    readTime: "5 min read",
    category: "Photography Tips",
  },
  {
    id: 2,
    title: "Essential Gear for Wedding Photography",
    excerpt: "A comprehensive guide to the equipment you need to capture perfect wedding moments.",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    date: "2024-02-10",
    readTime: "8 min read",
    category: "Wedding Photography",
  },
  {
    id: 3,
    title: "Mastering Portrait Photography",
    excerpt: "Learn the techniques and approaches to create compelling portrait photographs that tell a story.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    date: "2024-02-05",
    readTime: "6 min read",
    category: "Portrait Photography",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Photography Blog
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Insights, tips, and stories from the world of photography
          </p>
        </div>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 sm:px-6 mb-16">
        <div className="relative group overflow-hidden rounded-2xl bg-secondary">
          <div className="aspect-[21/9] relative">
            <Image
              src={blogPosts[0].image || "/placeholder.svg"}
              alt={blogPosts[0].title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          </div>
          <div className="absolute bottom-0 p-6 sm:p-8 md:p-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm mb-4">
              {blogPosts[0].category}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">{blogPosts[0].title}</h2>
            <p className="text-muted-foreground max-w-2xl mb-6">{blogPosts[0].excerpt}</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{blogPosts[0].readTime}</span>
              </div>
            </div>
          </div>
          <Link href={`/blog/${blogPosts[0].id}`} className="absolute inset-0">
            <span className="sr-only">Read more</span>
          </Link>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="group bg-secondary rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary hover:text-accent transition-colors duration-300"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

