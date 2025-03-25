import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="logo">
          <h1>Farm AI</h1>
        </div>
        <div className="nav-links">
          {user ? (
            <button className="nav-button" onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </button>
          ) : (
            <>
              <button className="nav-button" onClick={() => navigate('/login')}>
                Login
              </button>
              <button className="nav-button primary" onClick={() => navigate('/register')}>
                Register
              </button>
            </>
          )}
        </div>
      </nav>

      <main className="landing-main">
        <section className="hero-section">
          <h1>Welcome to Farm AI</h1>
          <p>Your intelligent farming assistant powered by artificial intelligence</p>
          {!user && (
            <button className="cta-button" onClick={() => navigate('/register')}>
              Get Started
            </button>
          )}
        </section>

        <section className="features-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Smart Crop Analysis</h3>
              <p>Get instant insights about your crops using AI-powered image recognition</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌤️</div>
              <h3>Weather Predictions</h3>
              <p>Receive accurate weather forecasts tailored to your farm location</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Yield Optimization</h3>
              <p>Optimize your farm's productivity with data-driven recommendations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI Assistant</h3>
              <p>Get instant answers to your farming questions from our AI chatbot</p>
            </div>
          </div>
        </section>

        <section className="social-section">
          <h2>Connect With Us</h2>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2024 Farm AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage; 