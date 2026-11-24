
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

    <a href="#books" class="nav-button">Explore Books</a>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-content">
        <p class="eyebrow">BOOKS. IDEAS. PERSPECTIVES.</p>
        <h1>A home for books,<br>ideas and meaningful<br>perspectives.</h1>
        <p class="hero-description">
          Discover books that encourage thoughtful reading,
          deeper understanding and meaningful conversations.
        </p>
        <a href="#books" class="primary-button">Explore Our Collection</a>
      </div>
    </section>

    <section class="intro" id="about">
      <p class="eyebrow">ABOUT ANIKOR HOUSE</p>
      <h2>More than books.<br>A place for ideas to live.</h2>
      <p>
        Anikor House is a publishing and literary platform
        dedicated to books, knowledge and perspectives that
        contribute to how we think, learn and understand life.
      </p>
    </section>

    <section class="books" id="books">
      <p class="eyebrow">THE ANIKOR COLLECTION</p>
      <h2>Explore our books</h2>
      <div class="book-grid">
        <div class="book-card">
          <div class="book-cover">WELLS OF<br>INSPIRATION</div>
          <h3>Wells of Inspiration: Sage's Secret</h3>
          <p>Discover the book</p>
        </div>

        <div class="book-card">
          <div class="book-cover">THE<br>INVISIBLE<br>WEALTH</div>
          <h3>The Invisible Wealth</h3>
          <p>Discover the book</p>
        </div>

        <div class="book-card">
          <div class="book-cover">JESUS<br>BEYOND<br>RELIGION</div>
          <h3>Jesus Beyond Religion</h3>
          <p>Discover the book</p>
        </div>

        <div class="book-card">
          <div class="book-cover">CATCH<br>THEM<br>YOUNG</div>
          <h3>Catch Them Young</h3>
          <p>Discover the book</p>
        </div>
      </div>
    </section>

    <section class="author">
      <p class="eyebrow">THE AUTHOR</p>
      <h2>Meet Daniel Anikor</h2>
      <p>
        Explore the thinking, experiences and ideas behind
        the books of Daniel Anikor.
      </p>
    </section>

    <section class="contact" id="contact">
      <h2>Let's stay connected.</h2>
      <p>For enquiries, partnerships and book-related questions.</p>
      <a href="mailto:hello@anikorhouse.com">Contact Anikor House</a>
    </section>
  </main>

  <footer>
    <p>© 2026 Anikor House. All rights reserved.</p>
  </footer>
`
