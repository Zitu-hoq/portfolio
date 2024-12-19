import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="top-0 bottom-0 left-0 right-0 fixed flex flex-col justify-center items-center h-full w-full bg-light dark:bg-dark z-50">
     
      <motion.div
        className="w-12 h-12 mb-4 border-4 border-green-500 border-t-transparent rounded-full"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, rotate: 360 }} 
        transition={{
            opacity: { delay: 5, duration: 0.5, ease: 'easeInOut' },
            rotate: { repeat: Infinity, duration: 1, ease: 'linear' }, 
        }}>
    </motion.div>

      <motion.div
        className="text-xl font-bold text-green-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay:3.5,
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        Loading 
        <motion.span
          className="ml-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0, 0, 1, 0, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          .&nbsp;
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          .&nbsp;
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 0, 0, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          .
        </motion.span>
      </motion.div>

      
      <motion.div
        className="bg-green-600 h-1 mt-4"
        initial={{ width: '0%' }}
        animate={{ width: '40%' }}
        transition={{
            delay:1,
          repeat: 2,
          duration: 1,
          ease: 'easeInOut',
          repeatType: 'reverse', 
        }}
      />
    </div>
  );
};

export default Loading;
