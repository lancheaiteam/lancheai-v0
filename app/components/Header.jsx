'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, BrainCircuit } from 'lucide-react';

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container-custom flex justify-between items-center py-4'>
        <a href='#' className='flex items-center gap-2 group'>
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='relative'
          >
            <BrainCircuit className='w-8 h-8 text-primary-500' />
            <div className='absolute inset-0 bg-primary-500/30 blur-xl -z-10 group-hover:bg-primary-500/50 transition-colors'></div>
          </motion.div>
          <span className='text-xl font-bold'>Lanche AI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className='relative text-white/80 hover:text-white transition-colors'
              onMouseEnter={() => setHoveredTab(item.name)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {item.name}
              {hoveredTab === item.name && (
                <motion.div
                  layoutId='navHighlight'
                  className='absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.a>
          ))}
          <motion.a
            href='#get-started'
            className='btn-primary'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label='Toggle menu'
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className='md:hidden bg-dark-900/95 backdrop-blur-lg'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className='container-custom flex flex-col py-4 space-y-4'>
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className='relative text-white/80 hover:text-white py-2 transition-colors'
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href='#get-started'
              className='btn-primary inline-block text-center'
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
