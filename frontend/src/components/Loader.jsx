import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing cloud sequence visual */}
        <motion.div
          className="w-24 h-24 rounded-full border-4 border-primary border-t-transparent shadow-[0_0_30px_rgba(0,240,255,0.5)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <div className="mt-8 text-primary font-mono text-sm tracking-widest text-glow">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            INITIALIZING CLOUD ENVIRONMENT...
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25, repeat: Infinity, repeatType: 'reverse' }}
            className="mt-2 text-xs opacity-70"
          >
            LOADING DIGITAL EXPERIENCE...
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
