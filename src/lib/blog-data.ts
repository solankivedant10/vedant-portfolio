// ============================================
// BLOG POSTS - TypeScript Data Layer
// ============================================

export interface BlogPost {
    id: number
    title: string
    excerpt: string
    date: string
    readTime: string
    tags: string[]
    slug: string
    featured: boolean
    content: string
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Building InfiJobs: What I Learned While Building My First Project",
        excerpt:
            "Lessons from my first real project—how I handled AI-based code evaluation, database security, and performance as a junior developer.",
        date: "Jan 01, 2026",
        readTime: "8 min read",
        tags: [
            "React",
            "Supabase",
            "Serverless",
            "Gemini AI",
            "Learning in Public"
        ],
        slug: "building-infijobs-first-project",
        featured: true,
        content: `

How I Built a Serverless AI Platform: 3 Key Lessons for Junior Developers

Moving from tutorials to building an actual product is intimidating. I had built small projects before, but InfiJobs was the first time I had to look beyond just "making things work" and focus on real-world engineering like security, performance, and scalability.

InfiJobs is a career preparation platform I built where developers can practice coding and track their progress. Along the way, I made plenty of mistakes and changed approaches multiple times.

Here are the three biggest technical challenges I faced and exactly how I solved them.

Challenge 1: Evaluating Code Without a Backend Sandbox

The Problem
Platforms like LeetCode execute user code inside isolated containers (sandboxes). As a solo developer, maintaining that kind of complex, secure infrastructure wasn't realistic. I needed a way to evaluate user code without running untrusted scripts on my own servers.

The Solution
I used the Google Gemini 2.0 Flash API as a serverless evaluation engine.

Instead of executing the code, I treated the users solution and the problem constraints as a prompt. I asked the AI to evaluate correctness, edge cases, and efficiency.

To ensure the output wasn't just random text, I enforced structured JSON responses that matched my TypeScript interfaces.

This allowed my frontend to safely parse results—like pass/fail status and hints—without ever needing a traditional execution backend.

Challenge 2: Enforcing Security at the Database Level

The Problem
When you have multiple users, data isolation is critical. My first instinct was to check user IDs in my API logic. The issue? Missing a single check in one API route could lead to a serious data leak.

The Solution
I moved security down to the database layer using PostgreSQL Row Level Security (RLS) with Supabase.

This ensures the database itself enforces the rules. Even if my frontend code makes a mistake and requests the wrong data, the database will refuse to return it.

Lesson Learned: Never rely on just one layer for security. The database is often the safest place to enforce access rules.

Challenge 3: Improving Performance by 40%

The Problem
As I added dashboards, analytics, and AI tools, the app became heavy. Users were downloading code for sections of the site they weren't even visiting.

The Solution
I implemented lazy loading and manual chunk splitting using React and Vite. I split large AI libraries into separate chunks and ensured heavy routes were only loaded via React.lazy() when requested.

The Result
The initial page load time improved by roughly 40%, making the app feel significantly snappier.

Final Thoughts

Building InfiJobs pushed me to think about trade-offs rather than just code syntax. I learned to accept extra SQL complexity for better security and to optimize for simplicity over premature scaling.

I am actively looking for Software Developer opportunities where I can apply these skills to real-world products.

Thanks for reading. 
`
    }
]

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
    return [...blogPosts].sort((a, b) => {
        return Date.parse(b.date) - Date.parse(a.date)
    })
}


/**
 * Get featured posts for homepage (max 3)
 * If no posts are marked as featured, returns the 3 most recent
 */
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
    const featured = blogPosts.filter(post => post.featured)
    if (featured.length > 0) {
        return featured.slice(0, limit)
    }
    return getAllPosts().slice(0, limit)
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug)
}

/**
 * Check if there are any blog posts
 */
export function hasPosts(): boolean {
    return blogPosts.length > 0
}

/**
 * Get total number of posts
 */
export function getPostCount(): number {
    return blogPosts.length
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
    const tags = blogPosts.flatMap(post => post.tags || [])
    return [...new Set(tags)]
}