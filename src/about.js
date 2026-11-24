
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
        <p class="eyebrow">ABOUT ANIKOR HOUSE</p>
        <h1>A home for books,<br>ideas and perspectives.</h1>
        <p class="hero-description">
          We believe books are more than pages. They are
          opportunities to learn, think and see the world
          from different perspectives.
        </p>
      </div>
    </section>

    <section class="intro">
      <p class="eyebrow">WHO WE ARE</p>
      <h2>Built around the value of ideas.</h2>
      <p>
        Anikor House is a publishing and literary platform
        dedicated to books, knowledge and meaningful
        perspectives. We bring readers and ideas together
        through thoughtful publications and conversations.
      </p>
    </section>

    <section class="author">
      <p class="eyebrow">OUR DIRECTION</p>
      <h2>Encouraging a culture of thoughtful reading.</h2>
      <p>
        Our aim is to make valuable ideas accessible to
        readers and create room for conversations that
        continue beyond the pages of a book.
      </p>
    </section>
  </main>

  <footer>
    <p>© 2026 Anikor House. All rights reserved.</p>
  </footer>
`
