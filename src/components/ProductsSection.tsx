import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, Palette, Package, Zap } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  rating: number;
  description: string;
  price: number;
  image: string;
  category: string;
  customizable: boolean;
}

interface CustomizationOptions {
  colors: string[];
  sizes: string[];
  engravings: boolean;
}

const ProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [customization, setCustomization] = useState({
    color: '',
    size: '',
    engraving: ''
  });

  const products: Product[] = [
    {
      id: 1,
      name: 'Vintage Willow Bat',
      rating: 4.5,
      description: 'Handcrafted from premium willow, inspired by classic cricket eras.',
      price: 4999,
      image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg',
      category: 'bats',
      customizable: true
    },
    {
      id: 2,
      name: 'Classic Leather Ball',
      rating: 5.0,
      description: 'Timeless red leather for champions — made for the match, perfect on display.',
      price: 799,
      image: 'https://images.pexels.com/photos/1661951/pexels-photo-1661951.jpeg',
      category: 'balls',
      customizable: true
    },
    {
      id: 3,
      name: 'Vintage Cap',
      rating: 4.0,
      description: 'Wool-blend, deep red with gold embroidery, timeless style.',
      price: 1299,
      image: 'https://images.pexels.com/photos/1661952/pexels-photo-1661952.jpeg',
      category: 'apparel',
      customizable: true
    },
    {
      id: 4,
      name: 'Professional Gloves',
      rating: 4.8,
      description: 'Premium leather gloves with superior grip and comfort.',
      price: 2499,
      image: 'https://images.pexels.com/photos/1661953/pexels-photo-1661953.jpeg',
      category: 'gear',
      customizable: true
    },
    {
      id: 5,
      name: 'Elite Stumps Set',
      rating: 4.7,
      description: 'Tournament-grade stumps with perfect balance and durability.',
      price: 1899,
      image: 'https://images.pexels.com/photos/1661954/pexels-photo-1661954.jpeg',
      category: 'gear',
      customizable: false
    },
    {
      id: 6,
      name: 'Heritage Kit Bag',
      rating: 4.6,
      description: 'Spacious canvas bag with vintage styling and modern functionality.',
      price: 3299,
      image: 'https://images.pexels.com/photos/1661955/pexels-photo-1661955.jpeg',
      category: 'accessories',
      customizable: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: Package },
    { id: 'bats', name: 'Bats', icon: Zap },
    { id: 'balls', name: 'Balls', icon: Package },
    { id: 'gear', name: 'Gear', icon: ShoppingCart },
    { id: 'apparel', name: 'Apparel', icon: Palette },
    { id: 'accessories', name: 'Accessories', icon: Package }
  ];

  const customizationOptions: CustomizationOptions = {
    colors: ['Classic Red', 'Forest Green', 'Royal Blue', 'Golden Yellow', 'Pure White'],
    sizes: ['Youth', 'Adult', 'Large', 'Extra Large'],
    engravings: true
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const openCustomization = (product: Product) => {
    setSelectedProduct(product);
    setCustomization({ color: '', size: '', engraving: '' });
  };

  const closeCustomization = () => {
    setSelectedProduct(null);
    setCustomization({ color: '', size: '', engraving: '' });
  };

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-green-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-500 rounded-full blur-3xl" />
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
            Our Cricket <span className="text-green-600">Products</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our top-notch cricket balls and vintage-inspired gear. 
            Each product is crafted with professional-grade quality and attention to detail.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {product.customizable && (
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Customizable
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                      <span className="ml-1 text-sm text-gray-600">({product.rating})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      ₹{product.price.toLocaleString()}
                    </span>
                    
                    <div className="flex gap-2">
                      <motion.button
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Enquire
                      </motion.button>
                      
                      {product.customizable && (
                        <motion.button
                          onClick={() => openCustomization(product)}
                          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200 font-medium flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Palette className="w-4 h-4 mr-1" />
                          Customize
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Customization Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCustomization}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Customize {selectedProduct.name}
              </h3>
              
              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Choose Color
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {customizationOptions.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setCustomization(prev => ({ ...prev, color }))}
                      className={`p-3 text-left rounded-lg border transition-all duration-200 ${
                        customization.color === color
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Choose Size
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {customizationOptions.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setCustomization(prev => ({ ...prev, size }))}
                      className={`p-3 text-center rounded-lg border transition-all duration-200 ${
                        customization.size === size
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Engraving */}
              {customizationOptions.engravings && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Custom Engraving (Optional)
                  </label>
                  <input
                    type="text"
                    value={customization.engraving}
                    onChange={(e) => setCustomization(prev => ({ ...prev, engraving: e.target.value }))}
                    placeholder="Enter your text here..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    maxLength={20}
                  />
                  <p className="text-xs text-gray-500 mt-1">Maximum 20 characters</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={closeCustomization}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                  Add to Quote
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsSection;