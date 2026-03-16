import { AnimatePresence, motion } from 'framer-motion'

export default function Logo({isExpanded}: {isExpanded: boolean}) {
  return (
       <motion.a
       id='logo'
       href='/'
        initial={false}
        style={{boxShadow: 
             `0 0 2px #00D4FF,
              0 0 2px #00D4FF,
              0 0 10px #00D4FF`}}
        className='p-1 text-xl bg-linear-to-br from-primary to-secondary rounded-lg flex justify-center items-center'
        animate={{
          width: isExpanded ? '140px':'36px'
        }}
        transition={{delay: !isExpanded ? 0.4:0}}
        >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.h1
            key="long"
            initial={{ opacity: 0, x: 10}}
            animate={{ opacity: 1, x: 0}}
            exit={{ opacity: 0, x: -10}}
            transition={{ duration: 0.4 }}
          >
            NuKe Digital
          </motion.h1>
        ) : (
          <motion.h1
            key="short"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4 }}
          >
            NK
          </motion.h1>
        )}
      </AnimatePresence>
      </motion.a>
  )
}
