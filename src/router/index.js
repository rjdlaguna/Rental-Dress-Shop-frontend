import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Joy Tienzo's Dress Shop | Gown Rental & Custom Tailoring in Tarlac",
      description: 'Elegant gown rentals, custom-made gowns, and professional uniform tailoring in Tarlac City. Wedding gowns, debut gowns, barong, and school uniforms.'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: "Our Services | Joy Tienzo's Dress Shop",
      description: 'Gown rental, custom-made gowns, and uniform tailoring services in Tarlac. Professional attire for weddings, debuts, and schools.'
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      title: "Gallery | Joy Tienzo's Dress Shop - Our Creations",
      description: 'Explore our collection of rental gowns, custom-made dresses, and professionally tailored uniforms.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: "Contact Us | Joy Tienzo's Dress Shop",
      description: 'Get in touch with Joy Tienzo\'s Dress Shop. Located in Brgy. San Nicolas, Tarlac City. Call 0906-470-7230 or message us on Facebook.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// SEO: Update document title and meta description per route
import { SITE_CONFIG } from '../config/site'
const BASE_URL = SITE_CONFIG.BASE_URL
const DEFAULT_TITLE = "Joy Tienzo's Dress Shop | Gown Rental & Custom Tailoring"
const DEFAULT_DESCRIPTION = 'Elegant gown rentals, custom-made gowns, and professional uniform tailoring in Tarlac City.'

router.afterEach((to) => {
  const title = to.meta?.title || DEFAULT_TITLE
  const description = to.meta?.description || DEFAULT_DESCRIPTION

  document.title = title

  let metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', description)

  // Update canonical URL for each page
  const canonical = `${BASE_URL}${to.path === '/' ? '' : to.path}`
  let linkCanonical = document.querySelector('link[rel="canonical"]')
  if (linkCanonical) linkCanonical.setAttribute('href', canonical)
})

export default router
