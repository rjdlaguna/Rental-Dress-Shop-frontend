<template>
  <section class="dashboard-page">
    <!-- Dashboard Header -->
    <div class="dashboard-header">
      <div class="header-content">
        <div class="welcome-section">
          <h1>Welcome back, {{ userName }}!</h1>
          <p class="welcome-subtitle">Manage your appointments and explore our exclusive collection</p>
        </div>
        <div class="user-actions">
          <button @click="logout" class="logout-btn">
            <span class="btn-icon">🚪</span>
            <span class="btn-text">Sign Out</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Dashboard Content -->
    <div class="dashboard-content">
      <div class="dashboard-container">
        <!-- Quick Actions -->
        <section class="quick-actions">
          <h2>Quick Actions</h2>
          <div class="actions-grid">
            <router-link to="/services" class="action-card">
              <div class="card-icon">👗</div>
              <h3>Browse Services</h3>
              <p>Explore our gown rental and custom tailoring services</p>
            </router-link>
            
            <router-link to="/gallery" class="action-card">
              <div class="card-icon">🖼️</div>
              <h3>View Gallery</h3>
              <p>Browse our exclusive collection of elegant gowns</p>
            </router-link>
            
            <router-link to="/contact" class="action-card">
              <div class="card-icon">📞</div>
              <h3>Book Appointment</h3>
              <p>Schedule a consultation with our expert designers</p>
            </router-link>
            
            <router-link to="/blog" class="action-card">
              <div class="card-icon">📖</div>
              <h3>Fashion Tips</h3>
              <p>Read our latest fashion guides and styling advice</p>
            </router-link>
          </div>
        </section>

        <!-- Account Information -->
        <section class="account-info">
          <h2>Account Information</h2>
          <div class="info-grid">
            <div class="info-card">
              <h3>Profile Details</h3>
              <div class="info-item">
                <span class="info-label">Email:</span>
                <span class="info-value">{{ userEmail }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Member Since:</span>
                <span class="info-value">{{ memberSince }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Status:</span>
                <span class="info-value status-active">Active Member</span>
              </div>
            </div>
            
            <div class="info-card">
              <h3>Quick Stats</h3>
              <div class="stats-grid">
                <div class="stat-item">
                  <span class="stat-number">0</span>
                  <span class="stat-label">Appointments</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">0</span>
                  <span class="stat-label">Orders</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">5</span>
                  <span class="stat-label">Favorites</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Recent Activity -->
        <section class="recent-activity">
          <h2>Recent Activity</h2>
          <div class="activity-list">
            <div class="activity-item">
              <div class="activity-icon">🎉</div>
              <div class="activity-content">
                <h4>Welcome to Joy Tienzo's!</h4>
                <p>Thank you for joining our exclusive boutique community</p>
                <span class="activity-time">Just now</span>
              </div>
            </div>
            
            <div class="activity-item">
              <div class="activity-icon">👗</div>
              <div class="activity-content">
                <h4>Account Created</h4>
                <p>Your customer account has been successfully created</p>
                <span class="activity-time">Just now</span>
              </div>
            </div>
            
            <div class="activity-item">
              <div class="activity-icon">✨</div>
              <div class="activity-content">
                <h4>Exclusive Access Granted</h4>
                <p>You now have access to our premium collections and services</p>
                <span class="activity-time">Just now</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      userEmail: '',
      userName: '',
      memberSince: ''
    }
  },
  created() {
    console.log('Dashboard component created')
    // Check if user is logged in
    const token = localStorage.getItem('userToken')
    const email = localStorage.getItem('userEmail')
    const name = localStorage.getItem('userName')
    
    console.log('Checking authentication:', { token, email, name })
    
    if (!token) {
      console.log('No token found, redirecting to login')
      // Redirect to login if not authenticated
      this.$router.push('/login')
      return
    }
    
    console.log('User authenticated, setting up dashboard')
    this.userEmail = email || 'customer@tienzoboutique.shop'
    this.userName = name || 'Valued Customer'
    this.memberSince = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  },
  methods: {
    logout() {
      console.log('Logout initiated')
      // Clear session
      localStorage.removeItem('userToken')
      localStorage.removeItem('userEmail')
      localStorage.removeItem('userName')
      
      console.log('Session cleared, redirecting to home')
      // Redirect to home
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f4f8 50%, #d6b9f8 100%);
}

.dashboard-header {
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.95), rgba(216, 216, 220, 0.9));
  color: white;
  padding: 80px 40px;
  position: relative;
  overflow: hidden;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}

.welcome-section h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  letter-spacing: -0.5px;
}

.welcome-subtitle {
  font-size: 1.3rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
}

.user-actions {
  display: flex;
  gap: 15px;
}

.logout-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(10px);
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.dashboard-content {
  padding: 60px 40px;
}

.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
}

.quick-actions,
.account-info,
.recent-activity {
  margin-bottom: 60px;
}

.quick-actions h2,
.account-info h2,
.recent-activity h2 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 30px;
  text-align: center;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.action-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.action-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.action-card:hover::before {
  opacity: 1;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.action-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 15px;
}

.action-card p {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.info-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.info-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.info-item:last-child {
  border-bottom: none;
}

.info-label {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
}

.info-value {
  font-weight: 600;
  color: var(--primary);
}

.status-active {
  color: #16a34a;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: center;
}

.stat-item {
  padding: 20px;
  background: rgba(72, 61, 139, 0.1);
  border-radius: 12px;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
}

.activity-list {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.activity-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 8px;
}

.activity-content p {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
  margin-bottom: 8px;
}

.activity-time {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.5);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .dashboard-header {
    padding: 60px 20px;
  }
  
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
  
  .welcome-section h1 {
    font-size: 2.5rem;
  }
  
  .dashboard-content {
    padding: 40px 20px;
  }
  
  .actions-grid,
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .activity-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
