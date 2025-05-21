import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import {
  FaTimes,
  FaTelegramPlane,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contact' className='bg-dark-950 relative z-10 pt-20 pb-8'>
      <div className='container-custom'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='flex items-center gap-2 mb-6'>
              <BrainCircuit className='w-8 h-8 text-primary-500' />
              <span className='text-xl font-bold'>Lanche AI</span>
            </div>
            <p className='text-white/70 mb-6'>
              Revolutionizing workflows and boosting productivity with
              cutting-edge artificial intelligence solutions.
            </p>
            <div className='flex gap-4'>
              <a
                href='https://x.com/LancheAI'
                className='w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white/70 hover:text-primary-500 hover:bg-dark-700 transition-colors'
                aria-label='Twitter'
              >
                <FaTimes size={18} />
              </a>
              <a
                href='https://t.me/LancheAI'
                className='w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white/70 hover:text-primary-500 hover:bg-dark-700 transition-colors'
                aria-label='LinkedIn'
              >
                <FaTelegramPlane size={18} />
              </a>
              <a
                href='https://github.com/lancheaiteam'
                className='w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white/70 hover:text-primary-500 hover:bg-dark-700 transition-colors'
                aria-label='GitHub'
              >
                <FaGithub size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className='text-xl font-semibold mb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#features'
                  className='text-white/70 hover:text-primary-400 transition-colors'
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href='#how-it-works'
                  className='text-white/70 hover:text-primary-400 transition-colors'
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href='#use-cases'
                  className='text-white/70 hover:text-primary-400 transition-colors'
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-white/70 hover:text-primary-400 transition-colors'
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-white/70 hover:text-primary-400 transition-colors'
                >
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className='text-xl font-semibold mb-6'>Contact Us</h3>
            <ul className='space-y-4'>
              <li>
                <a
                  href='mailto:info@lancheai.com'
                  className='flex items-start gap-3 text-white/70 hover:text-primary-400 transition-colors'
                >
                  <Mail className='w-5 h-5 mt-0.5' />
                  <span>info@lancheai.com</span>
                </a>
              </li>
              <li>
                <a
                  href='tel:+12345678900'
                  className='flex items-start gap-3 text-white/70 hover:text-primary-400 transition-colors'
                >
                  <Phone className='w-5 h-5 mt-0.5' />
                  <span>+234 915 741 6631</span>
                </a>
              </li>
              <li className='flex items-start gap-3 text-white/70'>
                <MapPin className='w-5 h-5 mt-0.5' />
                <span>Nsukka, Enugu State.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className='text-xl font-semibold mb-6'>Stay Updated</h3>
            <p className='text-white/70 mb-4'>
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className='space-y-3'>
              <input
                type='email'
                placeholder='Your email address'
                className='w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 text-white'
                required
              />
              <button
                type='submit'
                className='w-full px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors'
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <div className='border-t border-dark-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-white/50 text-sm'>
              &copy; {currentYear} Lanche AI. All rights reserved.
            </p>
            <div className='flex gap-6 mt-4 md:mt-0'>
              <a
                href='#'
                className='text-white/50 hover:text-white/80 text-sm transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-white/50 hover:text-white/80 text-sm transition-colors'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='text-white/50 hover:text-white/80 text-sm transition-colors'
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
