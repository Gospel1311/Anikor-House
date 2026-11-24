
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
        <p class="eyebrow">THE ANIKOR COLLECTION</p>
        <h1>Books for the<br>thinking reader.</h1>
        <p class="hero-description">
          Explore publications that invite reflection,
          expand understanding and offer new perspectives.
        </p>
      </div>
    </section>

    <section class="books">
      <p class="eyebrow">OUR COLLECTION</p>
      <h2>Explore our books</h2>

      <div class="book-grid">
        <div class="book-card">
          <div class="book-cover">WELLS OF<br>INSPIRATION</div>
          <h3>Wells of Inspiration: Sage's Secret</h3>
          <p>Explore this book</p>
        </div>

        <div class="book-card">
          <div class="book-cover">THE<br>INVISIBLE<br>WEALTH</div>
          <h3>The Invisible Wealth</h3>
          <p>Explore this book</p>
        </div>

        <div class="book-card">
          <div class="book-cover">JESUS<br>BEYOND<br>RELIGION</div>
          <h3>Jesus Beyond Religion</h3>
          <p>Explore this book</p>
        </div>

        <div class="book-card">
          <div class="book-cover">CATCH<br>THEM<br>YOUNG</div>
          <h3>Catch Them Young</h3>
          <p>Explore this book</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <p>© 2026 Anikor House. All rights reserved.</p>
  </footer>
`
