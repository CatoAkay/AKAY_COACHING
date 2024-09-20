import React from 'react';
import '../App.css'; // You can add your CSS styles here

const Testimonials = () => {
  // Testimonials data
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      testimonial: "Akay Coaching changed my life! I'm stronger, more confident, and healthier than ever."
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial: "The coaching sessions were transformative. Akay helped me unlock my true potential."
    },
    {
      id: 3,
      name: "Mike Johnson",
      testimonial: "With Akay's guidance, I achieved my fitness goals in a way I never thought possible."
    }
  ];

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <img
          src="https://via.placeholder.com/1500x500"
          alt="Akay Coaching"
          className="header-image"
        />
        <h1 className="header-title">Welcome to Akay Coaching</h1>
      </header>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hi, I'm Akay, a certified coach passionate about helping you reach your full potential. Whether it's fitness,
          health, or well-being, I'm here to guide you every step of the way.
        </p>
        <img
          src="/pic/cato1.jpg"
          alt="About Akay"
          className="section-image"
        />
      </section>

      {/* What to Expect Section */}
      <section id="what-to-expect" className="expect-section">
        <h2>What to Expect</h2>
        <ul>
          <li>Personalized coaching plans tailored to your needs</li>
          <li>Weekly check-ins and progress tracking</li>
          <li>Support and motivation to keep you going</li>
        </ul>
        <img
          src="/pic/cato2.jpg"
          alt="What to Expect"
          className="section-image"
        />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2>What People Are Saying</h2>
        <div className="testimonials-list">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <p>"{testimonial.testimonial}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2>Pricing</h2>
        <ul>
          <li>1-on-1 Coaching: $100/session</li>
          <li>Monthly Coaching Package: $350/month</li>
          <li>Group Coaching: $200/session</li>
        </ul>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Pricing"
          className="section-image"
        />
      </section>
    </div>
  );
};

export default Testimonials;
