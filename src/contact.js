
import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <div class="logo">ANIKOR HOUSE</div>

    <nav>
      <a href="/">Home</a>
      <a href="/about.html">About</a>
      <a href="/books.html">Books</a>
      <a href="/meet-author.html">Meet the Author</a>
      <a href="/services.html">Services</a>
      <a href="/contact.html">Contact</a>
    </nav>

    <a href="/books.html" class="nav-button">Explore Books</a>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">GET IN TOUCH</p>
        <h1>We'd love to<br>hear from you.</h1>
        <p class="hero-description">
          Whether you have a question about our books,
          a partnership proposal or a professional enquiry,
          we're happy to hear from you.
        </p>
      </div>
    </section>

    <section class="intro">
      <p class="eyebrow">CONTACT ANIKOR HOUSE</p>
      <h2>Let's start a conversation.</h2>

      <p>
        Reach out to us about book orders, publishing,
        ghostwriting, mentorship or collaborations.
      </p>

      <p>
        Email: <a href="mailto:hello@anikorhouse.com">
          hello@anikorhouse.com
        </a>
      </p>
    </section>
  </main>

  <footer>
    <p>© 2026 Anikor House. All rights reserved.</p>
  </footer>
`