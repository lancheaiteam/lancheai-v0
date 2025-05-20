import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, FlaskConical, Stethoscope, DollarSign } from 'lucide-react';

const UseCases = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const useCases = [
    {
      icon: <Building2 className='w-12 h-12 text-primary-500' />,
      title: 'Enterprise',
      description:
        'Optimize operations, enhance customer experiences, and drive innovation with AI-powered workflows and insights.',
      examples: [
        'Process Automation',
        'Customer Analytics',
        'Resource Optimization',
      ],
    },
    {
      icon: <FlaskConical className='w-12 h-12 text-primary-500' />,
      title: 'Research',
      description:
        'Accelerate discoveries and gain deeper insights by processing vast datasets and identifying hidden patterns.',
      examples: ['Data Analysis', 'Pattern Recognition', 'Simulation Models'],
    },
    {
      icon: <Stethoscope className='w-12 h-12 text-primary-500' />,
      title: 'Healthcare',
      description:
        'Improve patient outcomes with advanced diagnostic assistance, treatment planning, and operational efficiency.',
      examples: [
        'Diagnostic Support',
        'Treatment Planning',
        'Patient Monitoring',
      ],
    },
    {
      icon: <DollarSign className='w-12 h-12 text-primary-500' />,
      title: 'Finance',
      description:
        'Enhance risk management, detect fraud, and optimize investment strategies with predictive analytics.',
      examples: ['Risk Assessment', 'Fraud Detection', 'Market Analysis'],
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id='use-cases' className='section bg-black relative z-10'>
      <div className='container-custom'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='mb-6'
          >
            Industry{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600'>
              Use Cases
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-white/70 text-lg'
          >
            Discover how Lanche AI is transforming operations and driving
            innovation across multiple industries.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='card p-8'
            >
              <div className='flex flex-col md:flex-row md:items-start gap-6'>
                <div className='flex-shrink-0'>
                  <div className='w-16 h-16 rounded-2xl bg-dark-800 flex items-center justify-center border border-primary-500/30'>
                    {useCase.icon}
                  </div>
                </div>
                <div>
                  <h3 className='text-2xl font-semibold mb-3'>
                    {useCase.title}
                  </h3>
                  <p className='text-white/70 mb-4'>{useCase.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {useCase.examples.map((example, i) => (
                      <span
                        key={i}
                        className='px-3 py-1 bg-primary-900/50 border border-primary-700/30 rounded-full text-sm text-primary-300'
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='mt-16 text-center'
        >
          <a href='#contact' className='btn-primary'>
            Contact for Custom Solutions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
