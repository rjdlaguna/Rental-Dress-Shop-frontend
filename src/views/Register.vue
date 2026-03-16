<template>
  <section class="register-page">
    <div class="register-container">
      <div class="register-card">
        <div class="register-header">
          <h1>Sign Up</h1>
          <p>Create your account</p>
        </div>
        
        <form @submit="handleRegister" class="register-form">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input 
                v-model="firstName" 
                type="text" 
                id="firstName" 
                placeholder="Enter your first name"
                required 
                class="form-input"
              />
            </div>
            
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input 
                v-model="lastName" 
                type="text" 
                id="lastName" 
                placeholder="Enter your last name"
                required 
                class="form-input"
              />
            </div>
          </div>
          
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
            <label for="phone">Phone</label>
            <input 
              v-model="phone" 
              type="tel" 
              id="phone" 
              placeholder="Enter your phone number"
              required 
              class="form-input"
            />
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="password">Password</label>
              <input 
                v-model="password" 
                type="password" 
                id="password" 
                placeholder="Create a password"
                required 
                class="form-input"
              />
            </div>
            
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input 
                v-model="confirmPassword" 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirm your password"
                required 
                class="form-input"
              />
            </div>
          </div>
          
          <div class="form-options">
            <label class="checkbox-label">
              <input v-model="agreeTerms" type="checkbox" id="agreeTerms" required>
              I agree to the Terms of Service
            </label>
          </div>
          
          <div class="form-options">
            <label class="checkbox-label">
              <input v-model="newsletter" type="checkbox" id="newsletter">
              Send me updates and offers
            </label>
          </div>
          
          <button type="submit" class="register-btn" :class="{ loading: isLoading }">
            {{ isLoading ? 'Creating Account...' : 'Sign Up' }}
          </button>
          
          <div v-if="error" class="error-message">
            {{ error }}
          </div>
          
          <div v-if="success" class="success-message">
            {{ success }}
          </div>
          
          <div class="login-link">
            Already have an account? <router-link to="/login">Sign in</router-link>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
      newsletter: false,
      error: '',
      success: '',
      isLoading: false
    }
  },
  methods: {
    async handleRegister(event) {
      event.preventDefault()
      console.log('Register attempt with:', { 
        firstName: this.firstName, 
        lastName: this.lastName, 
        email: this.email, 
        phone: this.phone 
      })
      
      const { firstName, lastName, email, phone, password, confirmPassword, agreeTerms } = this
      
      if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
        this.error = 'Please fill in all required fields'
        console.log('Validation failed: missing required fields')
        return
      }
      
      if (password !== confirmPassword) {
        this.error = 'Passwords do not match'
        console.log('Validation failed: passwords do not match')
        return
      }
      
      if (password.length < 6) {
        this.error = 'Password must be at least 6 characters long'
        console.log('Validation failed: password too short')
        return
      }
      
      if (!agreeTerms) {
        this.error = 'Please agree to the Terms of Service'
        console.log('Validation failed: terms not agreed')
        return
      }
      
      this.isLoading = true
      this.error = ''
      this.success = ''
      
      try {
        console.log('Simulating registration API call...')
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        const userData = {
          firstName,
          lastName,
          email,
          phone,
          password, // Store password for demo (in real app, this would be hashed)
          newsletter: this.newsletter,
          createdAt: new Date().toISOString()
        }
        
        console.log('Registration successful, user data:', userData)
        
        // Store user credentials for login system
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
        existingUsers.push(userData)
        localStorage.setItem('registeredUsers', JSON.stringify(existingUsers))
        
        console.log('User credentials stored for login system')
        
        this.success = 'Account created successfully! You can now login with your credentials.'
        
        setTimeout(() => {
          console.log('Redirecting to login...')
          this.$router.push('/login')
        }, 2000)
        
      } catch (error) {
        console.error('Registration error:', error)
        this.error = 'Registration failed. Please try again.'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.register-page {
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

.register-page::before {
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

.register-container {
  width: 100%;
  max-width: 500px;
}

.register-card {
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

.register-card::before {
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

.register-header h1 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 8px;
}

.register-header p {
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  margin-bottom: 30px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-row .form-group {
  flex: 1;
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
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
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

.register-btn {
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

.register-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.register-btn:hover:not(.loading) {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(44, 95, 45, 0.4);
}

.register-btn:hover:not(.loading)::before {
  left: 100%;
}

.register-btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 20px rgba(44, 95, 45, 0.3);
}

.register-btn.loading {
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

.success-message {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.login-link {
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
}

.login-link a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
  text-decoration: underline;
}

/* Mobile Responsive */
@media (max-width: 480px) {
  .register-card {
    padding: 30px 20px;
  }
  
  .register-header h1 {
    font-size: 1.8rem;
  }
  
  .form-row {
    flex-direction: column;
    gap: 15px;
  }
  
  .form-options {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
}
</style>
