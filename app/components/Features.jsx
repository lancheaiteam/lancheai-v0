import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Lightbulb, Zap as ZapFast, Lock } from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Cpu className='w-12 h-12 text-primary-500' />,
      title: 'Advanced AI Processing',
      description:
        'Process complex data sets with our state-of-the-art neural networks, designed to handle even the most demanding computational tasks.',
    },
    {
      icon: <Lightbulb className='w-12 h-12 text-primary-500' />,
      title: 'Intelligent Insights',
      description:
        'Transform raw data into actionable intelligence with our adaptive learning algorithms that surface valuable patterns and trends.',
    },
    {
      icon: <ZapFast className='w-12 h-12 text-primary-500' />,
      title: 'Lightning-Fast Workflows',
      description:
        'Accelerate your tasks with our optimized performance engine, reducing processing time by up to 85% compared to traditional methods.',
    },
    {
      icon: <Lock className='w-12 h-12 text-primary-500' />,
      title: 'Enterprise-Grade Security',
      description:
        'Keep your data secure with end-to-end encryption, role-based access controls, and comprehensive compliance with global regulations.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id='features' className='section bg-black relative z-10'>
      <div className='container-custom'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='mb-6'
          >
            Cutting-Edge{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600'>
              Features
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-white/70 text-lg'
          >
            Lanche AI combines advanced neural networks, machine learning, and
            natural language processing to deliver unparalleled results.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='card p-8 flex flex-col items-center md:items-start text-center md:text-left'
            >
              <div className='mb-6'>{feature.icon}</div>
              <h3 className='text-xl font-semibold mb-4'>{feature.title}</h3>
              <p className='text-white/70'>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='mt-16 text-center'
        >
          <a href='#get-started' className='btn-primary'>
            Explore All Features
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
