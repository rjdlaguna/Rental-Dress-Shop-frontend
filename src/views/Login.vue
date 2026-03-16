<template>
  <section class="login-page">
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h1>Login</h1>
          <p>Sign in to your account</p>
        </div>
        
        <form @submit="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              v-model="email" 
              type="email" 
              id="email" 
              placeholder="Enter your email"
              required 
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              v-model="password" 
              type="password" 
              id="password" 
              placeholder="Enter your password"
              required 
              class="form-input"
            />
          </div>
          
          <div class="form-options">
            <label class="checkbox-label">
              <input v-model="rememberMe" type="checkbox" id="rememberMe">
              Remember me
            </label>
            <router-link to="/forgot-password" class="forgot-link">Forgot password?</router-link>
          </div>
          
          <button type="submit" class="login-btn" :class="{ loading: isLoading }">
            {{ isLoading ? 'Signing in...' : 'Sign in' }}
          </button>
          
          <div v-if="error" class="error-message">
            {{ error }}
          </div>
          
          <div class="register-link">
            Don't have an account? <router-link to="/register">Sign up</router-link>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      error: '',
      isLoading: false
    }
  },
  methods: {
    async handleLogin(event) {
      event.preventDefault()
      console.log('Login attempt with:', { email: this.email, password: this.password })
      
      const { email, password, rememberMe } = this
      
      if (!email || !password) {
        this.error = 'Please enter your email and password'
        console.log('Validation failed: missing email or password')
        return
      }
      
      this.isLoading = true
      this.error = ''
      
      try {
        console.log('Checking credentials...')
        
        // Check demo credentials first
        if (email === 'demo@tienzoboutique.shop' && password === 'demo123') {
          console.log('Demo login successful')
          this.loginSuccess('Demo Customer', email)
          return
        }
        
        // Check registered users
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
        const user = registeredUsers.find(u => u.email === email && u.password === password)
        
        if (user) {
          console.log('Registered user login successful:', user)
          this.loginSuccess(`${user.firstName} ${user.lastName}`, email)
          return
        }
        
        console.log('Invalid credentials')
        this.error = 'Invalid email or password'
        
      } catch (error) {
        console.error('Login error:', error)
        this.error = 'Login failed. Please try again.'
      } finally {
        this.isLoading = false
      }
    },
    
    loginSuccess(userName, email) {
      // Store session data
      localStorage.setItem('userToken', 'user-token-' + Date.now())
      localStorage.setItem('userEmail', email)
      localStorage.setItem('userName', userName)
      localStorage.setItem('isLoggedIn', 'true')
      
      console.log('Login successful, redirecting to homepage...')
      
      // Redirect to homepage instead of dashboard
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, 
    rgba(44, 95, 45, 0.9) 0%, 
    rgba(151, 188, 98, 0.8) 25%, 
    rgba(248, 228, 183, 0.7) 50%, 
    rgba(216, 216, 220, 0.6) 75%,
    rgba(214, 185, 248, 0.5) 100%
  ),
  url("/img/header.png") center/cover;
  background-blend-mode: overlay;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
}

.login-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.login-container {
  width: 100%;
  max-width: 400px;
}

.login-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.2);
  padding: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.login-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    transparent 50%, 
    rgba(255, 255, 255, 0.05) 100%
  );
  pointer-events: none;
}

.login-header h1 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 8px;
}

.login-header p {
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  margin-bottom: 30px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  text-align: left;
}

.form-group label {
  display: block;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 8px;
  font-size: 14px;
}

.form-input {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(44, 95, 45, 0.15),
              0 8px 25px rgba(44, 95, 45, 0.1);
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-1px);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.checkbox-label input {
  margin-right: 8px;
  accent-color: var(--primary);
}

.forgot-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}

.forgot-link:hover {
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(44, 95, 45, 0.3);
}

.login-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.login-btn:hover:not(.loading) {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(44, 95, 45, 0.4);
}

.login-btn:hover:not(.loading)::before {
  left: 100%;
}

.login-btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 20px rgba(44, 95, 45, 0.3);
}

.login-btn.loading {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.register-link {
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
}

.register-link a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
}

/* Mobile Responsive */
@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
  }
  
  .login-header h1 {
    font-size: 1.8rem;
  }
  
  .form-options {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
}
</style>
