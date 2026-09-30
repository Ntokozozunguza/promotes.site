import React, { useState } from 'react';

export default function App() {
  const [alertPopupOpen, setAlertPopupOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [balance] = useState<number>(184.50);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleTestAlert = () => {
    setAlertPopupOpen(true);
    try {
      window.alert('button disabled -test mode');
    } catch {
      // Handled if iframe restricts native alert
    }
    showToast('button disabled -test mode');
  };

  const closeLegalModal = () => {
    setLegalModal(null);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="logo">
          promotes<span>.site</span>
        </div>
        <div className="navlinks">
          <a onClick={() => scrollToId('feed')}>Interest Feed</a>
          <a onClick={() => scrollToId('how')}>How it works</a>
          <a onClick={() => scrollToId('pricing')}>Pricing</a>
          <a onClick={() => scrollToId('contact')}>Contact us</a>
        </div>
        <div className="navbuttons">
          <button id="nav-earn-btn" type="button" className="btn btn-light" onClick={handleTestAlert}>
            Discover Content &amp; Earn
          </button>
          <button id="nav-grow-btn" type="button" className="btn btn-dark" onClick={handleTestAlert}>
            Launch Targeted Campaign
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div>
          <div className="eyebrow" style={{ marginBottom: '8px' }}>
            The Targeted Content Discovery Marketplace
          </div>
          <h1>
            Connect with Real Audiences.
            <br />
            <span style={{ color: '#7357ff' }}>Discover Content You Actually Care About.</span>
          </h1>
          <p>
            Promotes.site is a targeted discovery marketplace. We match digital creators, brands, and startups with a highly engaged panel of independent curators based strictly on shared interests and categories.
          </p>
          <div className="hero-actions">
            <button id="hero-create-btn" type="button" className="btn btn-purple" onClick={handleTestAlert}>
              Launch Targeted Campaign
            </button>
            <button id="hero-earn-btn" type="button" className="btn btn-light" onClick={handleTestAlert}>
              Discover Content &amp; Earn
            </button>
          </div>
          <div className="hero-note">Zero Bots • Verified Human Curation • Interest-Targeted Feeds</div>
        </div>

        {/* Live Marketplace Feed / Available Campaigns Preview */}
        <div className="mock" id="feed">
          <div className="mock-inner">
            <div className="mock-top">
              <div>
                <div className="small">Available Campaigns</div>
                <div style={{ fontSize: '20px', fontWeight: 850, color: '#17171c', marginTop: '2px' }}>
                  Interest-Targeted Feed
                </div>
              </div>
              <div className="balance">
                CURATOR BALANCE: R{balance.toFixed(2)}
              </div>
            </div>

            {/* Campaign 1: Fashion */}
            <div className="campaign">
              <span className="niche-tag">👗 Fashion &amp; Lifestyle</span>
              <div className="campaign-head">
                <div style={{ fontSize: '22px' }}>📁</div>
                <div>
                  <div className="handle">Campaign ID: #10842</div>
                  <div className="small" style={{ color: '#654be4', fontWeight: 600 }}>
                    Type: Content Review &amp; Curation
                  </div>
                </div>
                <div className="pay">+ R0.40</div>
              </div>
              <p style={{ marginTop: '10px', marginBottom: '12px' }}>
                Review this Fashion Creator&apos;s profile for 30 seconds to earn a R0.40 curation reward. If you genuinely love their style, feel free to subscribe for updates.
              </p>
              <button id="view-task-1-btn" type="button" onClick={handleTestAlert}>
                Review Profile
              </button>
            </div>

            {/* Campaign 2: Fitness */}
            <div className="campaign">
              <span className="niche-tag">💪 Fitness &amp; Wellness</span>
              <div className="campaign-head">
                <div style={{ fontSize: '22px' }}>📁</div>
                <div>
                  <div className="handle">Campaign ID: #10493</div>
                  <div className="small" style={{ color: '#654be4', fontWeight: 600 }}>
                    Type: Digital Media Evaluation
                  </div>
                </div>
                <div className="pay">+ R0.30</div>
              </div>
              <p style={{ marginTop: '10px', marginBottom: '12px' }}>
                Explore this fitness creator&apos;s media feed and evaluate content relevance for 30 seconds. Support if it matches your lifestyle.
              </p>
              <button id="view-task-2-btn" type="button" onClick={handleTestAlert}>
                Review Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats">
        <div className="stat">
          <b>2,500+</b>
          <span>Active Human Curators</span>
        </div>
        <div className="stat">
          <b>8,000+</b>
          <span>Content Reviews Completed</span>
        </div>
        <div className="stat">
          <b>R0.20–R0.50</b>
          <span>Typical Curation Reward</span>
        </div>
      </div>

      {/* Two Ways to Use Promotes.site / How it works */}
      <section className="section" id="how">
        <div className="center">
          <div className="eyebrow">The Interest-Driven Discovery Model</div>
          <h2>How It Works</h2>
          <p className="section-lead">
            advertise your brands and socials to genuine human attention, content evaluation, and voluntary interest-based following
          </p>
        </div>

        <div className="cards">
          {/* Advertisers */}
          <div className="card">
            <h3>How It Works for Advertisers</h3>
            <p>
              Target audiences that genuinely care about your vertical to build sustainable, high-retention engagement.
            </p>
            <ul className="step-list">
              <li>
                <span className="step-num-badge">1</span>
                <b>Categorise Your Content</b>
                Select your niche (e.g., Fashion, Tech, Fitness, Gaming, Business).
              </li>
              <li>
                <span className="step-num-badge">2</span>
                <b>Pay R10 per Campaign</b>
                Simply pay R10 to advertise your brand or socials to 350 genuine people.
              </li>
              <li>
                <span className="step-num-badge">3</span>
                <b>Organic Retention</b>
                Our panel reviews your media. Genuine interest drives real, lasting community growth.
              </li>
            </ul>
            <button id="how-grow-btn" type="button" className="btn btn-purple" onClick={handleTestAlert}>
              Launch Campaign (R10)
            </button>
          </div>

          {/* Curators */}
          <div className="card">
            <h3>How It Works for Curators</h3>
            <p>
              Get rewarded for your time and thoughtful feedback on fresh digital media that matches your taste.
            </p>
            <ul className="step-list">
              <li>
                <span className="step-num-badge">1</span>
                <b>Pick Your Interests</b>
                Tell us what you like to watch, read, and engage with online.
              </li>
              <li>
                <span className="step-num-badge">2</span>
                <b>Review &amp; Refine</b>
                Browse your customized feed of new creators, apps, and media links.
              </li>
              <li>
                <span className="step-num-badge">3</span>
                <b>Earn Curation Rewards</b>
                Earn a micro-reward for your time spent evaluating and interacting with matching content.
              </li>
            </ul>
            <button id="how-earn-btn" type="button" className="btn btn-dark" onClick={handleTestAlert}>
              Discover Content &amp; Earn
            </button>
          </div>
        </div>

        {/* Compliance and Brand Protection Highlights */}
        <div className="trust-banner">
          <div className="trust-item">
            <h4>🛡️ No Forced Actions</h4>
            <p>
              You pay users for their time, attention, and honest evaluation—never for buying artificial metric counters or bot clicks.
            </p>
          </div>
          <div className="trust-item">
            <h4>🎯 100% Interest Matching</h4>
            <p>
              Curators only receive media matching the specific categories they voluntarily selected, ensuring authentic relevance.
            </p>
          </div>
          <div className="trust-item">
            <h4>🌱 High Organic Retention</h4>
            <p>
              Curators voluntarily choose to follow or bookmark creators only if they genuinely love what they discover during their review.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="section pricing" id="pricing" style={{ maxWidth: 'none' }}>
        <div className="center">
          <div className="eyebrow">Pricing Structure</div>
          <h2>Start small. Scale when it works.</h2>
          <p className="section-lead">
            Our budget allocations are highly flexible for independent tests and growing MVPs.
          </p>
        </div>
        <div className="pricebox">
          <div>
            <div className="small">Example Campaign</div>
            <div className="price">
              R10.00
            </div>
            <p style={{ color: '#555', lineHeight: '1.6', marginTop: '10px' }}>
              R10 to advertise your brand or socials to 350 genuine people.
            </p>
            <button id="pricing-launch-btn" type="button" className="btn btn-purple" onClick={handleTestAlert}>
              Launch Campaign for R10
            </button>
          </div>
          <ul className="price-list">
            <li>R10 to advertise your brand or socials to 350 genuine people</li>
            <li>Direct campaign setup &amp; instant launch</li>
            <li>Interest &amp; niche demographic matching</li>
            <li>Verified human dwell &amp; review tracking</li>
            <li>Live campaign exposure &amp; performance logs</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="cta">
          <h2>Ready to connect with real audiences or earn as a curator?</h2>
          <p>Join the targeted discovery marketplace on the side that matches your goals.</p>
          <button id="cta-get-started-btn" type="button" className="btn" onClick={handleTestAlert}>
            Get Started Free
          </button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="section" id="contact">
        <div className="center">
          <div className="eyebrow">Get in touch</div>
          <h2>Contact Us</h2>
          <p className="section-lead">
            Have questions regarding niche targeting, billing, APIs, or custom enterprise solutions? Send us a message.
          </p>
          <div className="contact-info-badges">
            <a href="mailto:promotesite8@gmail.com" className="contact-badge">
              <span>✉️</span>
              <span>promotesite8@gmail.com</span>
            </a>
            <a href="tel:+27630652735" className="contact-badge">
              <span>📞</span>
              <span>+27 63 065 2735</span>
            </a>
            <a
              href="https://wa.me/27630652735"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-badge contact-badge-whatsapp"
              aria-label="Chat on WhatsApp"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 175.216 175.216"
                aria-hidden="true"
                style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
              >
                <path
                  fill="#25D366"
                  d="M87.608 0C39.227 0 0 39.227 0 87.608c0 15.474 4.025 30.569 11.667 43.834L.272 173.344a3.84 3.84 0 0 0 4.795 4.795l42.348-11.233c12.798 7.218 27.323 11.026 42.193 11.026 48.381 0 87.608-39.227 87.608-87.608S135.989 0 87.608 0z"
                />
                <path
                  fill="#FFFFFF"
                  d="M129.742 108.97c-2.315-1.157-13.693-6.758-15.815-7.53-2.122-.772-3.665-1.157-5.208 1.157-1.543 2.315-5.98 7.53-7.331 9.074-1.35 1.543-2.701 1.736-5.016.579-2.315-1.157-9.769-3.602-18.608-11.488-6.883-6.14-11.531-13.727-12.882-16.042-1.35-2.315-.144-3.567 1.013-4.724 1.042-1.041 2.315-2.701 3.473-4.051 1.157-1.35 1.543-2.315 2.315-3.859.772-1.543.386-2.894-.193-4.051-.579-1.157-5.208-12.541-7.138-17.172-1.879-4.509-3.791-3.897-5.208-3.97-1.35-.07-2.894-.085-4.437-.085s-4.051.579-6.173 2.894c-2.122 2.315-8.103 7.917-8.103 19.308 0 11.391 8.296 22.397 9.453 23.94 1.157 1.543 16.326 24.935 39.549 34.966 5.523 2.385 9.837 3.808 13.197 4.877 5.549 1.767 10.598 1.517 14.593.921 4.453-.665 13.693-5.602 15.623-11.026 1.93-5.424 1.93-10.071 1.35-11.036-.579-.965-2.122-1.544-4.437-2.701z"
                />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="contact-card">
          <form
            id="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleTestAlert();
            }}
          >
            <div className="formrow">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="formrow">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="write your message , to send to us"
                required
              ></textarea>
            </div>
            <button
              id="contact-send-btn"
              type="submit"
              className="btn btn-purple"
              style={{ width: '100%', marginTop: '10px' }}
            >
              Send Message
            </button>
          </form>
        </div>
        <p className="outside-disclaimer">
          promotes.site is a site to advertise your brand and socials  to relevant genuine people  , we dont gurantee follows , likes , reposts , comments .
        </p>
      </section>

      {/* Footer with Mandatory Legal Links */}
      <footer className="footer">
        <div>
          <b>promotes.site</b> • © 2026 promotes.site MVP
        </div>
        <div className="footer-links">
          <button
            type="button"
            className="footer-link-btn"
            onClick={() => setLegalModal('privacy')}
          >
            Privacy Policy
          </button>
          <span className="footer-dot">•</span>
          <button
            type="button"
            className="footer-link-btn"
            onClick={() => setLegalModal('terms')}
          >
            Terms and Conditions / Refund Policy
          </button>
        </div>
      </footer>

      {/* Legal Modal: Privacy Policy & Terms */}
      <div
        className={`modal ${legalModal ? 'show' : ''}`}
        id="legal-modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLegalModal();
        }}
      >
        <div className="legal-modal-box" role="dialog" aria-modal="true">
          <button className="close" onClick={closeLegalModal} aria-label="Close modal">
            ×
          </button>

          {legalModal === 'privacy' && (
            <div>
              <h2>Privacy Policy for Promotes.site</h2>
              <div className="last-updated">Last Updated: September 2026</div>
              <p>
                Promotes.site (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information in compliance with the Protection of Personal Information Act (POPIA) of South Africa.
              </p>

              <h3>1. Information We Collect</h3>
              <p>
                We collect information you provide directly to us when you create an account, launch a targeted campaign, or review content:
              </p>
              <ul>
                <li>
                  <strong>Account Information:</strong> Name, email address, contact details, selected interest categories, and banking details (for processing payouts to curators).
                </li>
                <li>
                  <strong>Campaign Data:</strong> Public URLs or links to digital media/content you wish to distribute across the targeted discovery network.
                </li>
                <li>
                  <strong>Transactional Data:</strong> Details of payments made to or from your account via our secure integrated payment gateways.
                </li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              <p>
                We use the collected information strictly to operate, maintain, and improve the content discovery marketplace, match curators with category-appropriate media, process transactions, verify dwell times, and prevent platform fraud.
              </p>

              <h3>3. Data Protection and Third Parties</h3>
              <p>
                Your data is securely stored. We do not sell or rent personal data. Financial transactions are securely processed through our licensed third-party payment gateways, and we do not store your private banking credentials.
              </p>
              <p style={{ marginTop: '12px' }}>
                For any privacy questions or requests under POPIA, please reach out to us at <strong>promotesite8@gmail.com</strong> or phone <strong>+27 63 065 2735</strong>.
              </p>

              <button
                type="button"
                className="btn btn-dark"
                style={{ width: '100%', marginTop: '24px' }}
                onClick={closeLegalModal}
              >
                Close
              </button>
            </div>
          )}

          {legalModal === 'terms' && (
            <div>
              <h2>Terms and Conditions for Promotes.site</h2>
              <div className="last-updated">Last Updated: September 2026</div>
              <p>
                Welcome to Promotes.site. By accessing our platform, launching targeted content discovery campaigns, or reviewing digital media, you agree to comply with and be bound by the following Terms and Conditions.
              </p>

              <h3>1. Platform Operations</h3>
              <p>
                Promotes.site operates strictly as a targeted digital content discovery marketplace and curation platform.
              </p>
              <ul>
                <li>
                  <strong>Advertisers / Creators:</strong> Advertisers pay R10 per promotional campaign to advertise their brand or socials to 350 genuine people.
                </li>
                <li>
                  <strong>Curators:</strong> Independent users browse and evaluate interest-aligned media links, receiving micro-rewards strictly for their time, attention, and review feedback.
                </li>
              </ul>

              <h3>2. Payment and Refund Policy</h3>
              <ul>
                <li>
                  <strong>Campaign Payments:</strong> Advertisers pay R10 per campaign to reach 350 genuine people through licensed external gateways.
                </li>
                <li>
                  <strong>Refund Policy:</strong> Because campaign payments are immediately converted into live promotional allocations distributed directly to independent human reviewers, all campaign payments are strictly non-refundable once a campaign is launched or distributed.
                </li>
              </ul>

              <h3>3. Limitation of Liability</h3>
              <p>
                Promotes.site serves as an intermediary platform matching independent users. We do not guarantee permanent organic algorithm shifts on external third-party digital networks.
              </p>
              <p style={{ marginTop: '12px' }}>
                Support inquiries: <strong>promotesite8@gmail.com</strong> | Phone: <strong>+27 63 065 2735</strong>
              </p>

              <button
                type="button"
                className="btn btn-dark"
                style={{ width: '100%', marginTop: '24px' }}
                onClick={closeLegalModal}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Test Mode Alert Popup Modal */}
      <div
        className={`modal test-alert-modal ${alertPopupOpen ? 'show' : ''}`}
        id="test-alert-popup"
        onClick={(e) => {
          if (e.target === e.currentTarget) setAlertPopupOpen(false);
        }}
      >
        <div className="test-alert-box" role="dialog" aria-modal="true" aria-labelledby="test-alert-title">
          <button
            className="close"
            type="button"
            onClick={() => setAlertPopupOpen(false)}
            aria-label="Close alert"
          >
            ×
          </button>
          <div className="test-alert-header">
            <h3 id="test-alert-title">Alert</h3>
          </div>
          <p className="test-alert-message">
            button disabled -test mode
          </p>
          <button
            id="test-alert-ok-btn"
            type="button"
            className="btn btn-dark"
            style={{ width: '100%', marginTop: '18px' }}
            onClick={() => setAlertPopupOpen(false)}
          >
            OK
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`toast ${toastMessage ? 'show' : ''}`} id="toast">
        {toastMessage}
      </div>
    </div>
  );
}
