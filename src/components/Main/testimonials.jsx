import { useEffect, useState } from 'react'

import './testimonial.css'


export default function Testimonials({ testimonials }) {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 10000);
        return () => {
            clearInterval(interval);
        };
    }, [testimonials]);
    const currentTestimonial = testimonials[currentTestimonialIndex];
    return (
        <div className="testimonial-container">
            <div className="progress-bar"></div>
            <div className="fas fa-quote-right fa-quote"></div>
            <div className="fas fa-quote-left fa-quote"></div>
            <p className="testimonial">{currentTestimonial.text}</p>
            <div className="user">
                <img src={currentTestimonial.photo} alt="user" className="user-image" />
                <div className="user-details">
                    <h4 className="username">{currentTestimonial.name}</h4>
                    <p className="role">{currentTestimonial.position}</p>
                </div>
            </div>
        </div>
    )
}