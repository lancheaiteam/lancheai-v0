import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center pt-20'>
      <div className='container-custom relative z-10'>
        <div className='max-w-3xl mx-auto md:mx-0 text-center md:text-left'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 font-medium text-sm mb-4 backdrop-blur-sm border border-primary-500/30'
          >
            <Sparkles className='w-4 h-4' />
            <span className='hidden'>Next-Generation AI Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='font-bold mb-6 leading-tight'
          >
            Unleash Your{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 relative'>
              Workflow Potential
              <span className='absolute inset-0 bg-primary-500/20 blur-3xl -z-10'></span>
            </span>{' '}
            With Advanced AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-xl text-white/80 mb-10 max-w-2xl md:mx-0 mx-auto'
          >
            Lanche AI streamlines complex processes, boosts productivity, and
            delivers intelligent insights, transforming how you work in the
            digital age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'
          >
            <a
              href='#get-started'
              className='btn-primary inline-flex items-center justify-center gap-2 group'
            >
              <span>Get Started</span>
              <Zap className='w-4 h-4 group-hover:animate-pulse' />
            </a>
            <a
              href='#how-it-works'
              className='btn-secondary inline-flex items-center justify-center gap-2 group'
            >
              <span>Learn More</span>
              <Shield className='w-4 h-4 group-hover:rotate-12 transition-transform' />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-12 flex gap-8 justify-center md:justify-start'
          >
            <div className='flex flex-col items-center md:items-start'>
              <span className='text-3xl font-bold text-primary-500'>99%</span>
              <span className='text-sm text-white/60'>Accuracy Rate</span>
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <span className='text-3xl font-bold text-primary-500'>85%</span>
              <span className='text-sm text-white/60'>Time Saved</span>
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <span className='text-3xl font-bold text-primary-500'>24/7</span>
              <span className='text-sm text-white/60'>Support</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-2/5 aspect-square'
        >
          <div className='relative w-full h-full'>
            <div className='absolute inset-0 bg-gradient-to-br from-primary-500/30 to-transparent rounded-full blur-3xl'></div>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-3/4 h-3/4 border-4 border-primary-500/40 rounded-full animate-pulse'></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className='flex justify-center mt-auto pb-8'
      >
        <a
          href='#features'
          className='flex flex-col items-center text-white/50 hover:text-white/80 transition-colors'
        >
          <span className='text-sm mb-2'>Discover more</span>
          <ChevronDown className='w-5 h-5 animate-bounce' />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
