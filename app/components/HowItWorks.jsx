import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Upload, Cpu, BarChart3, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <Upload className='w-10 h-10 text-primary-500' />,
      title: 'Input Your Data',
      description:
        'Upload your datasets or connect to your existing data sources with our simple integration tools.',
    },
    {
      icon: <Cpu className='w-10 h-10 text-primary-500' />,
      title: 'AI Processing',
      description:
        'Our advanced neural networks analyze your data, identifying patterns and insights in real-time.',
    },
    {
      icon: <BarChart3 className='w-10 h-10 text-primary-500' />,
      title: 'Visualize Results',
      description:
        'See your data transformed into clear, actionable insights through our intuitive dashboard.',
    },
    {
      icon: <CheckCircle className='w-10 h-10 text-primary-500' />,
      title: 'Implement & Optimize',
      description:
        'Apply the insights to your workflows and continuously refine with our adaptive learning system.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id='how-it-works' className='section bg-dark-950 relative z-10'>
      <div className='container-custom'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='mb-6'
          >
            How{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600'>
              It Works
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-white/70 text-lg'
          >
            Our streamlined process makes integrating advanced AI into your
            workflow simple and efficient.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='relative'
        >
          {/* Connection Line */}
          <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500/30 via-primary-500 to-primary-500/30 -translate-x-1/2 z-0'></div>

          {/* Steps */}
          <div className='space-y-12 md:space-y-0 relative z-10'>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='flex flex-col md:flex-row items-center md:items-start gap-8'
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <div className='glass-card p-8 h-full'>
                    <div className='flex items-center gap-4 mb-4'>
                      <div className='flex-shrink-0 w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center border border-primary-500/50'>
                        {step.icon}
                      </div>
                      <h3 className='text-2xl font-semibold'>{step.title}</h3>
                    </div>
                    <p className='text-white/70'>{step.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className='hidden md:flex items-center justify-center md:w-0'>
                  <div className='w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold'>
                    {index + 1}
                  </div>
                </div>

                {/* Empty div for spacing on alternate sides */}
                <div
                  className={`hidden md:block w-1/2 ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
