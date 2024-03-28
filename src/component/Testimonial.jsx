import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            "name": "John D",
            "photoUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "text": "Outstanding service! I've been using this product for years and it never disappoints."
        },
        {
            "name": "Emily S",
            "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "text": "I'm impressed by the quality and attention to detail. Highly recommended!"
        },
        {
            "name": "Michael W",
            "photoUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
            "text": "I've tried many alternatives, but this is by far the best. Great job!"
        },
        {
            "name": "Sarah L",
            "photoUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
            "text": "Fantastic experience from start to finish. Will definitely be a returning customer."
        },
        {
            "name": "David P",
            "photoUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "text": "I can't believe I didn't discover this sooner. It's a game-changer!"
        },
    ];

    const [testimonialIndex, setTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <section className="text-center">
            <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item">
                        <FaChevronLeft className='leftIcon' onClick={prevTestimonial} />
                        <div className="testimonial4_slide">
                            <img src={testimonials[testimonialIndex].photoUrl} alt="user-image" className="img-circle img-responsive" style={{ objectFit: "cover" }} />
                            <p>{testimonials[testimonialIndex].text}</p>
                            <h4>- {testimonials[testimonialIndex].name}</h4>
                        </div>
                        <FaChevronRight className='rightIcon' onClick={nextTestimonial} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
