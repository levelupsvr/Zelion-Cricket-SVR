import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Trophy, Target, Users, Play, Award } from 'lucide-react';

const HomeSection: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: TrendingUp, label: '4s', value: '15' },
    { icon: Target, label: '6s', value: '4' },
    { icon: Trophy, label: 'Strike Rate', value: '128' }
  ];

  return (
    <section id="home" className="py-24 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-white/10 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"
          animate={{ 
            rotate: -360,
            y: [-10, 10, -10],
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/15 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Scoreboard */}
          <motion.div
            className="lg:order-1 order-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-white/20 shadow-2xl">
              <h3 className="text-lg lg:text-xl font-title font-bold text-white mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                Match Scoreboard
              </h3>
              <div className="space-y-3">
                <motion.div 
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-green-200 font-medium text-sm lg:text-base">ZEL</span>
                  <span className="text-white font-bold text-lg lg:text-xl">228/7</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-green-200 font-medium text-sm lg:text-base">RIVALS</span>
                  <span className="text-white font-bold text-lg lg:text-xl">225/9</span>
                </motion.div>
                <motion.div 
                  className="border-t border-white/20 pt-3 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-yellow-400 font-semibold">Final</p>
                  <p className="text-green-200 text-sm">50 Overs</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Center Column - Main Content */}
          <motion.div
            className="lg:order-2 order-1 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="https://w9xzguul5i.ufs.sh/f/DTgx056qWoYPT5EuVQGC1sJXCDNerB53hAKGdbj0aw9Zko2t"
              alt="Zelion"
              className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6 lg:mb-8 drop-shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-title font-extrabold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Zelion Cricket
            </motion.h1>
            
            <motion.div
              className="space-y-2 mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-green-200 font-light">
                Vintage cricket, modern performance.
              </p>
              <p className="text-base lg:text-lg text-green-300 font-medium">
                Crafted for Champions.
              </p>
            </motion.div>

            {/* Cricket Seam Motif */}
            <motion.div
              className="flex justify-center mb-6 lg:mb-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-16 lg:w-20 h-2 lg:h-3 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-full" />
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={scrollToProducts}
                className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full text-base lg:text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Explore Products
              </motion.button>

              <motion.button
                className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full text-base lg:text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Story
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Player Stats */}
          <motion.div
            className="lg:order-3 order-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-white/20 shadow-2xl">
              <h3 className="text-lg lg:text-xl font-title font-bold text-white mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                Player of the Match
              </h3>
              <div className="text-center mb-4">
                <h4 className="text-base lg:text-lg font-bold text-white">Rahul Sharma</h4>
                <div className="space-y-2 mt-3">
                  <motion.div 
                    className="flex justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <span className="text-green-200 text-sm">Runs</span>
                    <span className="text-white font-bold">102</span>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <span className="text-green-200 text-sm">Wickets</span>
                    <span className="text-white font-bold">3</span>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <span className="text-green-200 text-sm">Catches</span>
                    <span className="text-white font-bold">2</span>
                  </motion.div>
                </div>
              </div>
              
              {/* Run Rate Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-green-200 mb-1">
                  <span>Run Rate</span>
                  <span>7.8</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 lg:gap-3 mt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-xl rounded-xl p-2 lg:p-3 text-center border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <stat.icon className="w-4 h-4 lg:w-5 lg:h-5 mx-auto mb-1 text-yellow-400" />
                  <p className="text-white font-bold text-sm lg:text-lg">{stat.value}</p>
                  <p className="text-green-200 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;