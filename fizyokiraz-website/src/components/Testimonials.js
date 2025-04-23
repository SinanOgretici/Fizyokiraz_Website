import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            feedback: "The services provided were exceptional! Highly recommend."
        },
        {
            name: "Jane Smith",
            feedback: "A wonderful experience! The staff is very professional."
        },
        {
            name: "Alice Johnson",
            feedback: "I felt a significant improvement after just a few sessions."
        }
    ];

    return (
        <div className="testimonials">
            <h2>Client Testimonials</h2>
            <ul>
                {testimonials.map((testimonial, index) => (
                    <li key={index}>
                        <p>"{testimonial.feedback}"</p>
                        <p>- {testimonial.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Testimonials;