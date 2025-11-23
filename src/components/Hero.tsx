import { motion } from 'framer-motion';
import { AuroraBackground } from './ui/aurora-background';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { TextRevealCard } from './ui/text-reveal-card';
import { VideoText } from './ui/video-text';

const fadeInUp = {
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden scroll-mt-24">
      <AuroraBackground className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-6 relative z-10 w-full">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
          <motion.div
            variants={fadeInUp}
            className="h-12 md:h-16 w-full flex items-end justify-center pb-0 relative"
          >
            <VideoText
              src="https://cdn.magicui.design/ocean-small.webm"
              className="w-full h-full"
              fontSize={8}
              fontWeight="bold"
              as="h1"
            >
              Shaik Henna Yasmine
            </VideoText>
            <motion.div
              variants={fadeInUp}
              className="absolute top-full -mt-2 flex justify-center w-full"
            >
              <TextRevealCard
                text="Aspiring Data Analyst & Full-Stack Developer"
                revealText="Aspiring Data Analyst & Full-Stack Developer"
                className="w-full max-w-2xl"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="hidden"
          >
            <TextRevealCard
              text="Aspiring Data Analyst & Full-Stack Developer"
              revealText="Aspiring Data Analyst & Full-Stack Developer"
              className="w-full max-w-2xl"
            />
          </motion.div>

          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            variants={fadeInUp}
          >
            Data Analyst | Web & Mobile App Developer | Data Storytelling & Problem Solving
          </motion.p>

          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            variants={fadeInUp}
          >
            "I decode patterns in data and bring them to life through full-stack applications—merging analytics, machine learning, and intuitive design to create meaningful user experiences."
          </motion.p>

          <motion.div 
            className="flex justify-center"
            variants={fadeInUp}
          >
            <HoverBorderGradient
              as="a"
              href="https://drive.google.com/file/d/1LrWfkjRCsiExvLKIr_MoP8zCpjl9Gia5/view?usp=sharing"
              containerClassName="rounded-lg"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-lg"
            >
              Unlock Resume
            </HoverBorderGradient>
          </motion.div>
        </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
}

export default Hero;