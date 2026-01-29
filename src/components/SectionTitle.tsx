import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <motion.div
        className={`h-1 w-20 rounded-full mt-4 gradient-bg ${centered ? 'mx-auto' : ''}`}
        initial={{ width: 0 }}
        animate={isInView ? { width: 80 } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
};

export default SectionTitle;
