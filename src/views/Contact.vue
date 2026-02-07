<template>
  <section>
    <div class="container">
      <h1 class="section-title">Contact Us</h1>

      <div class="contact-grid">
        <div class="card facebook-card">
          <h3>Contact Us on Facebook</h3>
          <p>
            Message us directly on Facebook for faster responses about gown
            rentals, custom-made gowns, and uniform tailoring.
          </p>
          <div class="facebook-preview">
            <img
              src="/img/tienzoFB.jpg"
              alt="Joy Dela Cruz Tienzo - Joy Tienzo's Dress Shop on Facebook"
              width="400"
              height="300"
              loading="lazy"
              decoding="async"
            />
          </div>
          <a
            href="https://www.facebook.com/joy.d.c.tienzo"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-facebook"
          >
            Message Me on Facebook
          </a>
        </div>

        <div class="card info-card">
          <h3>Visit or Contact Us</h3>
          <p><strong>Business Name:</strong> Joy Tienzo's Dress Shop</p>
          <p>
            <strong>Services:</strong> Gown Rental, Custom Gowns, Uniform
            Tailoring
          </p>
          <p><strong>Location:</strong> Brgy. San Nicolas, Tarlac City</p>
          <p>
            <strong>Phone:</strong>
            <a href="tel:+639064707230">0906-470-7230</a>
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:tienzojoy15@gmail.com">tienzojoy15@gmail.com</a>
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.8!2d120.59!3d15.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI4JzQ4LjAiTiAxMjDCsDM1JzI0LjAiRQ!5e0!3m2!1sen!2sph!4v1600000000000!5m2!1sen!2sph"
            allowfullscreen=""
            loading="lazy"
            title="Joy Tienzo's Dress Shop - Brgy. San Nicolas, Tarlac City"
          >
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.section-title {
  text-align: center;
  color: var(--primary);
  margin-bottom: 50px;
  font-size: 2.5rem;
  font-weight: 300;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.card {
  padding: 40px;
  background: var(--white);
  border-radius: 20px;
  box-shadow: 0 15px 35px var(--shadow);
  border: 1px solid rgba(181, 201, 154, 0.1);
  display: flex;
  flex-direction: column;
}

.card h3 {
  color: var(--primary);
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 600;
}

.card p {
  margin-bottom: 15px;
  line-height: 1.7;
  color: var(--dark);
  opacity: 0.9;
}

.facebook-card .facebook-preview {
  margin: 25px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px var(--shadow);
}

.facebook-card .facebook-preview img {
  width: 100%;
  height: auto;
  display: block;
}

.btn-facebook {
  display: inline-block;
  margin-top: auto;
  padding: 16px 28px;
  background: #1877f2;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(24, 119, 242, 0.3);
}

.btn-facebook:hover {
  background: #166fe5;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(24, 119, 242, 0.4);
}

.info-card a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.info-card a:hover {
  color: var(--secondary);
  text-decoration: underline;
}

.info-card iframe {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  border: 0;
  margin-top: 25px;
  box-shadow: 0 10px 25px var(--shadow);
}

@media (max-width: 1000px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
