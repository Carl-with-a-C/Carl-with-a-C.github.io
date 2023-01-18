import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <div id="nav-logo-section" class="nav-section">
          <a href="#">
            LOGO
            <i className="fa-solid fa-dumpster-fire"></i>
          </a>
        </div>
        <div id="nav-link-section" className="nav-section">
          <a href="#">ABOUT</a>
          <a href="#">WORK</a>
        </div>
        <div id="nav-social-section" className="nav-section">
          <a href="#">
            linkedin
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            dribble
            <i className="fa-brands fa-dribble"></i>
          </a>
          <a href="#">
            github
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div id="nav-contact-section" className="nav-section">
          <a href="#">CONTACT ME</a>
        </div>
      </nav>
      <main>
        <article>
          <div className="article-image-section article-section"></div>
          <div className="article-description-section article-section"></div>
          <div className="article-title-section article-section"></div>
          <div className="article-nav-section article-section"></div>
        </article>
        <article></article>
        <article></article>
        <article></article>
      </main>
    </div>
  );
}

export default App;
