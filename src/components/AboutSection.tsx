import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, History, Star, Users, Trophy, Zap, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handcrafted with the finest materials and traditional techniques passed down through generations.'
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Every product is meticulously designed for optimal performance and consistency on the field.'
    },
    {
      icon: History,
      title: 'Rich Heritage',
      description: 'Inspired by the golden era of cricket, blending vintage aesthetics with modern innovation.'
    },
    {
      icon: Star,
      title: 'Champion Trusted',
      description: 'Used by professionals and amateurs alike, delivering excellence in every match.'
    }
  ];

  const achievements = [
    { icon: Users, number: '25+', label: 'Years of Excellence', color: 'text-blue-400' },
    { icon: Trophy, number: '10k+', label: 'Happy Customers', color: 'text-green-400' },
    { icon: Zap, number: '500+', label: 'Matches Played', color: 'text-yellow-400' },
    { icon: Shield, number: '50+', label: 'Championship Wins', color: 'text-purple-400' }
  ];

  return (
    <section id="about" className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-10 left-10 w-24 lg:w-32 h-24 lg:h-32 border-4 border-green-600 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-16 lg:w-24 h-16 lg:h-24 border-4 border-green-600 rounded-full"
          animate={{ rotate: -360, y: [-10, 10, -10] }}
          transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, y: { duration: 3, repeat: Infinity } }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-12 lg:w-16 h-12 lg:h-16 border-4 border-green-600 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-title font-bold text-gray-900 mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About <span className="text-green-600">Zelion Cricket</span>
          </motion.h2>
          
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 lg:mb-6">
              Zelion crafts premium cricket balls and gear with unmatched quality and performance. 
              Our inspiration is drawn from the golden era of cricket, where tradition meets innovation 
              to create equipment that champions trust.
            </p>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              From grassroots cricket to professional leagues, our products are designed to elevate 
              your game and honor the spirit of cricket. Every piece tells a story of craftsmanship, 
              precision, and passion for the gentleman's game.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </motion.div>
              
              <h3 className="text-lg lg:text-xl font-title font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-green-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="flex justify-center mb-3 lg:mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                  </div>
                </motion.div>
                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-5xl font-title font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-green-100 text-sm lg:text-lg font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;