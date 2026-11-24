
import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <div class="logo">ANIKOR HOUSE</div>

    <nav>
      <a href="/">Home</a>
      <a href="/about.html">About</a>
      <a href="/books.html">Books</a>
      <a href="/meetAuthor.html">Meet the Author</a>
      <a href="/services.html">Services</a>
      <a href="/contact.html">Contact</a>
    </nav>

    <a href="/books.html" class="nav-button">Explore Books</a>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">THE AUTHOR BEHIND THE BOOKS</p>
        <h1>Meet Daniel<br>Anikor.</h1>
        <p class="hero-description">
          Writer, author and thinker. Explore the person,
          ideas and experiences behind the books.
        </p>
        <a href="#his-work" class="primary-button">Explore His Work</a>
      </div>
    </section>

    <section class="intro">
      <p class="eyebrow">ABOUT DANIEL</p>
      <h2>The man behind the manuscripts.</h2>
      <p>
        Daniel Anikor is an author, writer, ghostwriter
        and realtor whose work explores faith, leadership,
        wealth, purpose and human development.
      </p>
      <p>
        Through his writing and professional work, he
        engages ideas that encourage people to think
        more deeply about life and their experiences.
      </p>
    </section>

    <section class="books" id="his-work">
      <p class="eyebrow">HIS WORK</p>
      <h2>Ideas expressed through writing.</h2>
      <p class="hero-description">
        Explore Daniel Anikor's published books and
        discover the ideas behind each publication.
      </p>
      <a href="/books.html" class="primary-button">
        View His Books
      </a>
    </section>

    <section class="author">
      <p class="eyebrow">PROFESSIONAL ENGAGEMENT</p>
      <h2>Writing, consultation and mentorship.</h2>
      <p>
        Beyond his published works, Daniel offers
        professional services around writing and
        book development, alongside mentorship opportunities.
      </p>
      <a href="/services.html" class="primary-button">
        Explore Services
      </a>
    </section>

    <section class="contact">
      <p class="eyebrow">CONNECT</p>
      <h2>Start a conversation.</h2>
      <p>
        For writing projects, professional enquiries
        and other engagements, get in touch.
      </p>
      <a href="/contact.html">Contact Anikor House</a>
    </section>
  </main>

  <footer>
    <p>© 2026 Anikor House. All rights reserved.</p>
  </footer>
`
