
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
        <p class="eyebrow">PROFESSIONAL SERVICES</p>
        <h1>Ideas deserve<br>the right guidance.</h1>
        <p class="hero-description">
          Explore writing, book development and mentorship
          opportunities with Daniel Anikor.
        </p>
      </div>
    </section>

    <section class="intro">
      <p class="eyebrow">BOOK & WRITING CONSULTATIONS</p>
      <h2>Bring your book ideas to life.</h2>
      <p>
        Have a book idea, manuscript or writing project?
        Get professional guidance on developing your ideas
        and moving your writing project forward.
      </p>
      <p>
        Services include ghostwriting enquiries,
        manuscript development and book project consultations.
      </p>
    </section>

    <section class="books">
      <p class="eyebrow">MENTORSHIP</p>
      <h2>Guidance for your next stage.</h2>
      <p class="hero-description">
        Explore mentorship opportunities with Daniel Anikor.
        Share your goals and the kind of guidance you are seeking.
      </p>
    </section>

    <section class="author">
      <p class="eyebrow">MAKE AN ENQUIRY</p>
      <h2>Let's discuss your project.</h2>
      <p>
        Tell us what you need, and the Anikor House team
        will get back to you with the next steps.
      </p>
      <a href="/contact.html" class="primary-button">
        Send an Enquiry
      </a>
    </section>
  </main>

  <footer>
    <p>© 2026 Anikor House. All rights reserved.</p>
  </footer>
`