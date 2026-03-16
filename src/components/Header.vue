<template>
  <header role="banner">
    <div class="header-content">
      <div class="logo">
        <router-link to="/" class="logo-link" aria-label="Joy Tienzo's Dress Shop - Premier boutique in Tarlac City - Home">
          <div class="logo-content">
            <img src="/img/logo-mark.png" alt="Joy Tienzo's Dress Shop Logo" class="logo-image" />
            <div class="logo-text">
              Joy Tienzo
              <span class="dress-shop">Dress Shop</span>
            </div>
          </div>
        </router-link>
      </div>
      <nav role="navigation" aria-label="Main navigation">
        <router-link to="/" aria-label="Home page">Home</router-link>
        <router-link to="/services" aria-label="Services page">Services</router-link>
        <router-link to="/gallery" aria-label="Gallery page">Gallery</router-link>
        <router-link to="/blog" aria-label="Blog page">Blog</router-link>
        <router-link to="/contact" aria-label="Contact page">Contact</router-link>
      </nav>
      <div class="auth-section">
        <div v-if="isLoggedIn" class="user-menu">
          <div class="user-info">
            <span class="welcome-text">Welcome, {{ userName }}</span>
          </div>
          <button @click="logout" class="logout-btn" aria-label="Logout from your account">
            Logout
          </button>
        </div>
        <router-link v-else to="/login" class="login-btn" aria-label="Login to your account">
          <span class="btn-text">Login</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isLoggedIn: false,
      userName: ''
    }
  },
  created() {
    this.checkLoginStatus()
  },
  methods: {
    checkLoginStatus() {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
      const userName = localStorage.getItem('userName')
      
      this.isLoggedIn = isLoggedIn
      this.userName = userName || 'Guest'
    },
    logout() {
      // Clear all session data
      localStorage.removeItem('userToken')
      localStorage.removeItem('userEmail')
      localStorage.removeItem('userName')
      localStorage.removeItem('isLoggedIn')
      
      // Update component state
      this.isLoggedIn = false
      this.userName = ''
      
      // Redirect to home page
      this.$router.push('/')
    }
  },
  watch: {
    // Watch for route changes to update login status
    '$route'() {
      this.checkLoginStatus()
    }
  }
}
</script>

<style scoped>
header {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 25px 60px;
  box-shadow: 0 4px 20px var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;
}

.logo-content {
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform 0.3s ease;
}

.logo-image {
  height: 100px;
  width: auto;
  max-width: 130px;
  transition: transform 0.3s ease;
}

.logo-text {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: white;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.dress-shop {
  display: block;
  font-size: 1.2rem;
  margin-top: 5px;
  opacity: 0.9;
}

.logo-content:hover {
  transform: scale(1.05);
}

.logo-content:hover .logo-image,
.logo-content:hover .logo-text {
  transform: scale(1.05);
}

nav {
  display: flex;
  gap: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 10px 16px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
}

nav a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  transform: scale(0);
  transition: transform 0.3s ease;
}

nav a:hover::before,
nav a.router-link-active::before {
  transform: scale(1);
}

nav a:hover,
nav a.router-link-active {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.auth-section {
  display: flex;
  align-items: center;
}

.login-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.login-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  transform: scale(0);
  transition: transform 0.3s ease;
}

.login-btn:hover::before,
.login-btn.router-link-active::before {
  transform: scale(1);
}

.login-btn:hover,
.login-btn.router-link-active {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.btn-text {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-info {
  display: flex;
  align-items: center;
}

.welcome-text {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.logout-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

@media (max-width: 1000px) {
  header {
    padding: 20px 30px;
  }
  
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  nav {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  nav a {
    margin: 5px;
    padding: 8px 14px;
  }
  
  .auth-section {
    margin-top: 10px;
  }
  
  .login-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  .user-menu {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  
  .user-info {
    align-items: center;
  }
  
  .welcome-text {
    font-size: 12px;
  }
  
  .logo-text {
    font-size: 2rem;
  }
  
  .dress-shop {
    font-size: 1rem;
  }
  
  .logo-content {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
  
  .logo-image {
    max-width: 100px;
    height: 75px;
  }
}
</style>
