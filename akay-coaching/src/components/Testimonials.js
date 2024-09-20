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
    </div>
  );
};

export default Testimonials;
