```jsx
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("campusconnect-theme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setDarkMode(prefersDark);
      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";

    setDarkMode(!darkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("campusconnect-theme", newTheme);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site-wrapper">

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}

      {/* MOBILE SIDE MENU */}
      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span>Menu</span>

          <button
            className="close-menu"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="mobile-menu-actions">
          <a href="/login" className="mobile-login">
            Login
          </a>

          <a href="/register" className="mobile-register">
            Create Account
          </a>
        </div>
      </aside>

      {/* HEADER */}
      <header
        className="header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div className="header-inner">

          {/* LOGO */}
          <a href="#home" className="logo">
            <span className="logo-mark">C</span>
            <span>CampusConnect</span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav">
            <a href="#home">Home</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="desktop-actions">

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <a href="/login" className="login-button">
              Login
            </a>

            <a href="/register" className="register-button">
              Register
            </a>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="mobile-actions">

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <a
              href="/login"
              className="profile-button"
              aria-label="Login"
            >
              <span>♙</span>
            </a>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>

          </div>

        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>

        {/* HERO */}
        <section className="hero" id="home">

          <div className="hero-content">

            <div className="hero-badge">
              <span className="status-dot" />
              Built for a better campus
            </div>

            <h1>
              A better campus
              <span> starts with you.</span>
            </h1>

            <p className="hero-description">
              Report campus issues, track their progress, and help
              create a cleaner, safer, and better-connected campus
              for everyone.
            </p>

            <div className="hero-actions">
              <a href="/register" className="primary-button">
                Report an Issue
                <span>→</span>
              </a>

              <a href="#how-it-works" className="secondary-button">
                How It Works
              </a>
            </div>

            <div className="hero-note">
              <span>✓</span>
              Simple reporting &nbsp; • &nbsp;
              <span>✓</span>
              Transparent tracking
            </div>

          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">

            <div className="dashboard-card">

              <div className="dashboard-top">
                <div>
                  <span className="small-label">
                    CAMPUS OVERVIEW
                  </span>

                  <h3>Complaint Activity</h3>
                </div>

                <div className="mini-avatar">
                  C
                </div>
              </div>

              <div className="stats-row">

                <div className="stat-card">
                  <span>Reported</span>
                  <strong>128</strong>
                </div>

                <div className="stat-card">
                  <span>In Review</span>
                  <strong>24</strong>
                </div>

                <div className="stat-card">
                  <span>Resolved</span>
                  <strong>96</strong>
                </div>

              </div>

              <div className="complaint-preview">

                <div className="complaint-icon">
                  Wi
                </div>

                <div className="complaint-info">
                  <strong>Wi-Fi connectivity issue</strong>
                  <span>CSE Block • 12 min ago</span>
                </div>

                <span className="status-pill">
                  In Review
                </span>

              </div>

              <div className="complaint-preview">

                <div className="complaint-icon">
                  EL
                </div>

                <div className="complaint-info">
                  <strong>Classroom lighting</strong>
                  <span>Main Block • 1 hr ago</span>
                </div>

                <span className="status-pill resolved">
                  Resolved
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="section" id="how-it-works">

          <div className="section-heading">

            <span className="eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              From complaint to resolution.
            </h2>

            <p>
              CampusConnect keeps the entire process simple,
              transparent, and easy to follow.
            </p>

          </div>

          <div className="steps">

            <div className="step-card">
              <div className="step-number">01</div>

              <div className="step-icon">+</div>

              <h3>Report</h3>

              <p>
                Submit an issue with a description,
                location, and optional photo.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>

              <div className="step-icon">✓</div>

              <h3>Review</h3>

              <p>
                Campus administrators review and
                process the complaint.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>

              <div className="step-icon">↗</div>

              <h3>Resolve</h3>

              <p>
                Track the complaint until the issue
                is addressed and resolved.
              </p>
            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">

          <div className="about-content">

            <span className="eyebrow">
              WHY CAMPUSCONNECT
            </span>

            <h2>
              Your campus.
              <br />
              Your voice.
            </h2>

            <p>
              CampusConnect provides a structured way for
              students to report problems and stay informed
              about what happens next.
            </p>

            <div className="feature-list">

              <div>
                <span>✓</span>
                Easy complaint reporting
              </div>

              <div>
                <span>✓</span>
                Real-time complaint status
              </div>

              <div>
                <span>✓</span>
                Transparent resolution process
              </div>

            </div>

          </div>

          <div className="about-card">

            <div className="about-card-top">
              <span className="pulse" />
              SYSTEM STATUS
            </div>

            <h3>Campus issues, organized.</h3>

            <p>
              One place to report, manage, track,
              and resolve campus problems.
            </p>

            <div className="progress-line">
              <span />
            </div>

            <small>
              Making campus communication simpler.
            </small>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer" id="contact">

        <div className="footer-inner">

          <div className="footer-brand">

            <a href="#home" className="logo">
              <span className="logo-mark">C</span>
              <span>CampusConnect</span>
            </a>

            <p>
              Making campus communication
              simpler and more transparent.
            </p>

          </div>

          <div className="footer-links">

            <div>
              <h4>Platform</h4>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>

            <div>
              <h4>Support</h4>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 CampusConnect. All rights reserved.
          </span>

          <span>
            Built for a better campus.
          </span>

        </div>

      </footer>

    </div>
  );
}
```
