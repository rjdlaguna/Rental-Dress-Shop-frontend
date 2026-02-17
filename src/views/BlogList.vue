<template>
  <section class="blog-list-page">
    <!-- Blog Header Section -->
    <section class="blog-intro fade-in-up">
      <div class="container">
        <div class="blog-intro-content">
          <span class="blog-subtitle">OUR BLOG</span>
          <h1 class="blog-main-title">Wedding Gown Trends, Tips & Guides</h1>
          <p class="blog-description">
            Stay updated with the latest wedding gown trends, styling tips, and expert advice 
            from Joy Tienzo's Dress Shop in Tarlac City. Discover everything you need to know 
            about renting and choosing the perfect gown for your special occasion.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="blog-posts-section fade-in-up">
      <div class="container">
        <div class="blog-posts-grid">
          <article 
            v-for="post in publishedPosts" 
            :key="post.id"
            class="blog-card hover-lift"
            @click="navigateToPost(post.slug)"
          >
            <div class="blog-card-image-wrapper">
              <img 
                :src="post.image" 
                :alt="post.imageAlt"
                class="blog-card-image"
                loading="lazy"
                width="400"
                height="300"
              />
              <span class="blog-category-tag">{{ post.category }}</span>
            </div>
            
            <div class="blog-card-content">
              <div class="blog-card-meta">
                <span class="meta-item">
                  <svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {{ post.date }}
                </span>
                <span class="meta-item">
                  <svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {{ post.readTime }}
                </span>
              </div>
              
              <h2 class="blog-card-title">{{ post.title }}</h2>
              
              <p class="blog-card-excerpt">{{ post.excerpt }}</p>
              
              <div class="blog-card-footer">
                <span class="blog-card-author">By {{ post.author }}</span>
                <span class="blog-card-read-more">
                  Read More 
                  <svg class="read-more-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State (if no posts) -->
        <div v-if="publishedPosts.length === 0" class="blog-empty-state">
          <p>No blog posts available at the moment. Check back soon!</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { getPublishedBlogPosts } from '../config/blog'

export default {
  name: 'BlogList',
  data() {
    return {
      posts: []
    }
  },
  computed: {
    publishedPosts() {
      return getPublishedBlogPosts()
    }
  },
  mounted() {
    // Update meta tags for SEO
    document.title = "Blog | Joy Tienzo's Dress Shop - Wedding Gown Tips & Guides"
    
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Stay updated with the latest wedding gown trends, styling tips, and expert advice from Joy Tienzo\'s Dress Shop in Tarlac City.')
    }
  },
  methods: {
    navigateToPost(slug) {
      this.$router.push(`/blog/${slug}`)
    }
  }
}
</script>

<style scoped>
.blog-list-page {
  min-height: 100vh;
}

/* Blog Intro Section */
.blog-intro {
  background: linear-gradient(135deg, rgba(44, 95, 45, 0.95), rgba(151, 188, 98, 0.9)),
    url("/img/header.png") center/cover;
  color: white;
  padding: 120px 60px 100px;
  text-align: center;
  position: relative;
}

.blog-intro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  pointer-events: none;
}

.blog-intro-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.blog-subtitle {
  display: inline-block;
  color: var(--secondary);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.15);
  padding: 8px 20px;
  border-radius: 25px;
  backdrop-filter: blur(10px);
}

.blog-main-title {
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 25px;
  letter-spacing: 1px;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.blog-description {
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.95;
  max-width: 800px;
  margin: 0 auto;
}

/* Blog Posts Section */
.blog-posts-section {
  padding: 80px 60px;
  background: var(--gradient);
}

.blog-posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

/* Blog Card */
.blog-card {
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px var(--shadow);
  border: 1px solid rgba(181, 201, 154, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px var(--shadow);
}

.blog-card-image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: var(--accent);
}

.blog-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.blog-card:hover .blog-card-image {
  transform: scale(1.1);
}

.blog-category-tag {
  position: absolute;
  top: 15px;
  left: 15px;
  background: var(--secondary);
  color: var(--white);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.blog-card-content {
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-card-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(26, 26, 26, 0.6);
  font-size: 0.85rem;
}

.meta-icon {
  width: 14px;
  height: 14px;
  stroke-width: 2.5;
}

.blog-card-title {
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 15px;
  line-height: 1.3;
  letter-spacing: 0.3px;
  flex: 1;
}

.blog-card-excerpt {
  color: rgba(26, 26, 26, 0.75);
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 0.95rem;
  flex: 1;
}

.blog-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(181, 201, 154, 0.2);
  margin-top: auto;
}

.blog-card-author {
  color: rgba(26, 26, 26, 0.6);
  font-size: 0.9rem;
}

.blog-card-read-more {
  color: var(--secondary);
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
}

.blog-card:hover .blog-card-read-more {
  color: var(--primary);
  gap: 8px;
}

.read-more-arrow {
  transition: transform 0.3s ease;
}

.blog-card:hover .read-more-arrow {
  transform: translateX(4px);
}

.blog-empty-state {
  text-align: center;
  padding: 80px 20px;
  color: rgba(26, 26, 26, 0.6);
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 1000px) {
  .blog-intro {
    padding: 100px 30px 80px;
  }

  .blog-main-title {
    font-size: 2.5rem;
  }

  .blog-description {
    font-size: 1.1rem;
  }

  .blog-posts-section {
    padding: 60px 30px;
  }

  .blog-posts-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .blog-main-title {
    font-size: 2rem;
  }

  .blog-subtitle {
    font-size: 0.8rem;
    padding: 6px 16px;
  }

  .blog-posts-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .blog-card-image-wrapper {
    height: 220px;
  }

  .blog-card-content {
    padding: 25px;
  }

  .blog-card-title {
    font-size: 1.3rem;
  }
}
</style>
