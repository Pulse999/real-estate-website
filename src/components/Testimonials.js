import React, { useState } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const testimonials = [
    {
      name: 'Johnny Test',
      date: 'October 1, 2024',
      text: 'This real estate service is amazing. They helped me find my dream home quickly and efficiently. Highly recommend them to anyone looking for a new home!',
    },
    {
      name: 'Marry Jane',
      date: 'September 20, 2024',
      text: 'I had a fantastic experience working with the agents. They went above and beyond to make sure everything was smooth. I would definitely work with them again in the future.',
    },
    {
      name: 'Michael Johnson',
      date: 'August 15, 2024',
      text: 'They made the home buying process easy and stress-free. I appreciate all the effort and attention to detail. Will recommend them to family and friends.',
    },
    {
      name: 'Alice Thompson',
      date: 'July 10, 2024',
      text: 'Very professional and helpful throughout the process. I felt like they had my best interests in mind every step of the way. Will definitely recommend them to others.',
    },
    {
      name: 'David Lee',
      date: 'June 25, 2024',
      text: 'I was able to sell my house quickly with their help. The agents were responsive and communicated everything clearly. Highly recommend for both buying and selling.',
    },
    {
      name: 'Sarah Parker',
      date: 'May 5, 2024',
      text: 'Excellent service! From start to finish, the agents were knowledgeable, friendly, and always available to answer questions. They made the entire process seamless.',
    },
  ];

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    setExpanded(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setExpanded(false);
  };

  const currentText = expanded
    ? testimonials[currentTestimonial].text
    : testimonials[currentTestimonial].text.slice(0, 150);

  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-container">
        <button className="testimonial-arrow left" onClick={prevTestimonial}>
          &#8249;
        </button>
        <div className="testimonial-content">
          <p>{currentText}{!expanded && testimonials[currentTestimonial].text.length > 150 && '...'}
          </p>
          {testimonials[currentTestimonial].text.length > 150 && (
            <button className="read-more" onClick={toggleExpand}>
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          )}
          <p className="testimonial-name">
            - {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].date}
          </p>
        </div>
        <button className="testimonial-arrow right" onClick={nextTestimonial}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
