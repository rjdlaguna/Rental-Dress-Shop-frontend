/**
 * Blog posts data structure
 * Add new blog posts here to display them on the blog listing page
 */
export const blogPosts = [
  {
    id: 'wedding-gown-rental-tarlac',
    slug: 'wedding-gown-rental-tarlac',
    title: 'Where to Rent Wedding Gowns in Tarlac: Your Complete Guide',
    excerpt: 'Planning your dream wedding in Tarlac? Discover the best places to rent elegant wedding gowns that will make your special day unforgettable. From traditional Filipino designs to modern bridal wear, find everything you need right here in Tarlac City.',
    category: 'Wedding Planning',
    image: '/img/wedding-gown.png',
    imageAlt: 'Elegant wedding gown rental available in Tarlac',
    author: 'Joy Tienzo\'s Dress Shop',
    date: 'February 17, 2026',
    readTime: '5 min read',
    published: true
  },
  {
    id: 'custom-vs-ready-made-school-uniforms',
    slug: 'custom-vs-ready-made-school-uniforms',
    title: 'Custom vs Ready-Made School Uniforms: Which Is Better for Students?',
    excerpt: 'Choosing between custom-made and ready-made school uniforms? Discover the pros and cons of each option, cost comparisons, and expert advice to help you make the best decision for your students\' comfort, style, and budget.',
    category: 'Uniform Tailoring',
    image: '/img/student-uniform.png',
    imageAlt: 'Custom and ready-made school uniforms comparison',
    author: 'Joy Tienzo\'s Dress Shop',
    date: 'February 18, 2026',
    readTime: '6 min read',
    published: true
  },
  {
    id: 'affordable-gown-rental-tarlac',
    slug: 'affordable-gown-rental-tarlac',
    title: 'Affordable Gown Rental in Tarlac: How to Look Elegant on a Budget',
    excerpt: 'Looking elegant doesn\'t have to break the bank! Discover how to find affordable gown rentals in Tarlac that offer designer-quality dresses at budget-friendly prices. Learn money-saving tips, what to look for, and how to get the best value for your special occasion.',
    category: 'Gown Rental',
    image: '/img/dress1.png',
    imageAlt: 'Affordable elegant gown rental options in Tarlac',
    author: 'Joy Tienzo\'s Dress Shop',
    date: 'February 19, 2026',
    readTime: '5 min read',
    published: true
  }
  // Add more blog posts here as you create them
  // Example:
  // {
  //   id: 'another-post',
  //   slug: 'another-post',
  //   title: 'Another Blog Post Title',
  //   excerpt: 'Brief description...',
  //   category: 'Category Name',
  //   image: '/img/image.png',
  //   imageAlt: 'Alt text',
  //   author: 'Author Name',
  //   date: 'Date',
  //   readTime: 'X min read',
  //   published: true
  // }
]

/**
 * Get a blog post by slug
 */
export function getBlogPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug && post.published)
}

/**
 * Get all published blog posts
 */
export function getPublishedBlogPosts() {
  return blogPosts.filter(post => post.published)
}
