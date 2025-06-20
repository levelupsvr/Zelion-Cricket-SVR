import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  team: string;
  quote: string;
  rating: number;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rahul Menon',
      role: 'Fast Bowler',
      team: 'Kerala State Team',
      quote: 'Zelion balls gave me the grip and swing I needed in every match. The consistency is remarkable.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
    },
    {
      id: 2,
      name: 'Suresh Desai',
      role: 'Cricket Coach',
      team: 'Mumbai Academy',
      quote: 'The consistency of Zelion balls is unmatched — game after game, they deliver the same quality.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681011/pexels-photo-1681011.jpeg'
    },
    {
      id: 3,
      name: 'Priya Iyer',
      role: 'All-rounder',
      team: 'National Women\'s League',
      quote: 'I\'ve never bowled with a ball that feels this balanced and durable. Zelion is my go-to choice.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681012/pexels-photo-1681012.jpeg'
    },
    {
      id: 4,
      name: 'Ravi Nair',
      role: 'Captain',
      team: 'U-19 South Zone',
      quote: 'From net practice to finals, Zelion never disappoints. The quality speaks for itself.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681013/pexels-photo-1681013.jpeg'
    },
    {
      id: 5,
      name: 'Anjali Sharma',
      role: 'Wicket Keeper',
      team: 'Delhi Women\'s Team',
      quote: 'The vintage aesthetics combined with modern performance make Zelion products truly special.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681014/pexels-photo-1681014.jpeg'
    },
    {
      id: 6,
      name: 'Vikram Singh',
      role: 'Opening Batsman',
      team: 'Rajasthan Royals Academy',
      quote: 'Every cricketer deserves quality equipment. Zelion delivers that and more with their premium products.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681015/pexels-photo-1681015.jpeg'
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-green-600 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-green-600 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-green-600 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What <span className="text-green-600">Players Say</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Trusted by professionals for unmatched quality and precision. 
            Here's what champions have to say about Zelion Cricket.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto"
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <motion.div
                className="flex-shrink-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-green-200 shadow-lg"
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Quote className="w-8 h-8 text-green-600 mb-4 mx-auto md:mx-0" />
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-green-600 font-medium mb-1">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {testimonials[currentIndex].team}
                  </p>
                  
                  <div className="flex justify-center md:justify-start">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-green-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Mini Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={`mini-${testimonial.id}`}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                  <p className="text-sm text-green-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">
                "{testimonial.quote.substring(0, 80)}..."
              </p>
              <div className="flex mt-3">
                {renderStars(testimonial.rating)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;