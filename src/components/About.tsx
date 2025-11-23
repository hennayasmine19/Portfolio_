import { motion } from 'framer-motion';
import pic from "/src/asserts/teena.jpg";
import { PixelImage } from './ui/pixel-image';
import { HyperText } from './ui/hyper-text';
import { MaskContainer } from './ui/svg-mask-effect';
import { UserCircle } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    rotate: -10
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export function About() {
  return (
    <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="relative flex items-center justify-center w-72 h-72 md:w-96 md:h-96"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="absolute inset-0 bg-blue-500 rounded-full opacity-20 -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative z-10 w-full h-full">
              <PixelImage 
              src={pic}
                grid="8x8"
                grayscaleAnimation={true}
                pixelFadeInDuration={800}
                maxAnimationDelay={1000}
                colorRevealDelay={1200}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2
              className="text-5xl font-heading font-bold mb-4 text-center md:text-left text-gray-900 dark:text-white flex items-center gap-3"
              id="about-heading"
            >
              <UserCircle className="w-10 h-10 text-black dark:text-white" />
              <span>About Me</span>
            </h2>
            <motion.p 
              variants={textVariants}
              className="text-xl text-gray-600 dark:text-gray-400 mb-6"
            >
              
            </motion.p>
            
            <div className="relative mb-8">
              <motion.div
                initial={{ width: "15rem" }}
                whileInView={{ width: "100%" }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"
              />
            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
                Ever wondered how technology, design, and data come together to shape meaningful solutions? That curiosity is what fuels my journey as a Data Analytics and Software Engineering student. I love turning scattered numbers into stories, transforming raw data into insights that can drive real decisions and smarter systems.
From building AI-powered driver monitoring solutions to designing interactive dashboards and intuitive digital experiences, I enjoy working at the intersection of analytics, UI/UX, and full-stack development.
What motivates me most is solving real-world problems—whether it's through predictive models, visual storytelling, or intelligent software that makes life easier. I'm driven by learning, creating, and bringing ideas to life with purpose and precision.
            </motion.p>
            </div>
            
            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              
            </motion.p>
            
            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              
            </motion.p>
            
            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              
            </motion.p>
          </motion.div>
        </div>
        
        <div className="mt-20">
          <MaskContainer
            revealText={
              <p className="text-3xl md:text-4xl font-bold text-center px-6">
                I am a full-stack developer who enjoys building seamless, user-focused digital experiences.
              </p>
            }
            size={10}
            revealSize={600}
            className="h-[300px] md:h-[400px] rounded-xl overflow-hidden"
          >
            <p className="text-3xl md:text-4xl font-bold text-center px-6">
              I am a data analyst who loves transforming raw numbers into clear, meaningful insights.
            </p>
          </MaskContainer>
        </div>
      </div>
    </section>
  );
}

export default About;