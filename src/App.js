import React from 'react';
import './App.css';

// ─── HEADER ───────────────────────────────────────────────
const Header = () => (
  <header className="header">
    <div className="header-logo">⚛ MyApp</div>
    <nav className="header-nav">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
    <button className="header-btn">Get Started</button>
  </header>
);

// ─── HERO SECTION ─────────────────────────────────────────
const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Welcome to <span>MyApp</span> 🚀</h1>
      <p>
        Discover amazing features, explore our services,
        and take your experience to the next level.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary">Explore Now</button>
        <button className="btn-secondary">Learn More</button>
      </div>
    </div>
    <div className="hero-image">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
        alt="Hero"
      />
    </div>
  </section>
);

// ─── CARDS DATA ───────────────────────────────────────────
const cardsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
    category: '💻 Technology',
    title: 'Modern Web Development',
    description: 'Build fast, responsive, and beautiful web apps using the latest tools and frameworks.',
    author: 'John Doe',
    date: 'Jun 10, 2026',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400',
    category: '🎨 Design',
    title: 'UI/UX Design Principles',
    description: 'Learn how great design transforms user experience and drives product success.',
    author: 'Jane Smith',
    date: 'Jun 12, 2026',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
    category: '📊 Business',
    title: 'Data-Driven Decisions',
    description: 'Use analytics and insights to make smarter business decisions every day.',
    author: 'Alex Brown',
    date: 'Jun 13, 2026',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
    category: '🤝 Team',
    title: 'Collaborate Effectively',
    description: 'Discover tools and practices that supercharge remote and hybrid team collaboration.',
    author: 'Maria Lopez',
    date: 'Jun 14, 2026',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
    category: '📚 Learning',
    title: 'Continuous Learning Culture',
    description: 'Grow your skills and stay ahead with curated learning paths and resources.',
    author: 'Chris Evans',
    date: 'Jun 15, 2026',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400',
    category: '🚀 Innovation',
    title: 'Innovate Without Limits',
    description: 'Explore how innovation fuels growth and reshapes industries worldwide.',
    author: 'Sara Kim',
    date: 'Jun 15, 2026',
  },
];

// ─── SINGLE CARD ──────────────────────────────────────────
const Card = ({ image, category, title, description, author, date }) => (
  <div className="card">
    <div className="card-image-wrapper">
      <img src={image} alt={title} className="card-image" />
      <span className="card-category">{category}</span>
    </div>
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
    <div className="card-footer">
      <span className="card-author">👤 {author}</span>
      <span className="card-date">📅 {date}</span>
    </div>
  </div>
);

// ─── CARDS SECTION ────────────────────────────────────────
const CardsSection = () => (
  <section className="cards-section">
    <div className="section-header">
      <h2>✨ Featured Articles</h2>
      <p>Explore our latest stories, tips, and insights handpicked for you.</p>
    </div>
    <div className="cards-grid">
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  </section>
);

// ─── STATS BANNER ─────────────────────────────────────────
const StatsBanner = () => (
  <section className="stats-banner">
    <div className="stat">
      <h2>10K+</h2>
      <p>Happy Users</p>
    </div>
    <div className="stat">
      <h2>500+</h2>
      <p>Articles Published</p>
    </div>
    <div className="stat">
      <h2>50+</h2>
      <p>Expert Authors</p>
    </div>
    <div className="stat">
      <h2>99%</h2>
      <p>Satisfaction Rate</p>
    </div>
  </section>
);

// ─── NEWSLETTER ───────────────────────────────────────────
const Newsletter = () => (
  <section className="newsletter">
    <h2>📬 Stay in the Loop</h2>
    <p>Subscribe to our newsletter and never miss an update.</p>
    <div className="newsletter-form">
      <input type="email" placeholder="Enter your email..." />
      <button>Subscribe</button>
    </div>
  </section>
);

// ─── FOOTER ───────────────────────────────────────────────
const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <h3>⚛ MyApp</h3>
        <p>Building the future, one component at a time. Made with ❤ using React.</p>
      </div>
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div className="footer-links">
        <h4>Support</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div className="footer-links">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="#">🐦 Twitter</a></li>
          <li><a href="#">💼 LinkedIn</a></li>
          <li><a href="#">📸 Instagram</a></li>
          <li><a href="#">▶ YouTube</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2026 MyApp. All rights reserved.</p>
    </div>
  </footer>
);

// ─── APP ROOT ─────────────────────────────────────────────
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CardsSection />
        <StatsBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;