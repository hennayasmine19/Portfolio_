import { motion } from 'framer-motion';
import { FlipWords } from './ui/flip-words';
import { TextAnimate } from './ui/text-animate';
import { Globe } from 'lucide-react';

const languages = ["English", "Hindi", "Telugu", "Urdu", "Spanish"];
const languageColors = [
  "rgb(37, 99, 235)", // English - blue-600
  "rgb(234, 179, 8)", // Hindi - yellow-500
  "rgb(34, 197, 94)", // Telugu - green-500
  "rgb(239, 68, 68)", // Urdu - red-500
  "rgb(168, 85, 247)", // Spanish - purple-500
];

export function Languages() {
  return (
    <section id="languages" className="py-20 bg-zinc-50 dark:bg-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2
          className="text-5xl font-heading font-bold text-center mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-3"
          id="languages-heading"
        >
          <Globe className="w-10 h-10 text-black dark:text-white" />
          <span>Languages</span>
        </h2>
        <TextAnimate
          as="p"
          className="text-xl text-center text-gray-600 dark:text-gray-400 mb-6"
          animation="blurInUp"
          by="word"
          startOnView={true}
          once={true}
        >
          The languages I speak and communicate in, reflecting my diverse cultural background.
        </TextAnimate>
        <div className="relative mb-12">
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "100%" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white">
            Confident and articulate{" "}
            <FlipWords 
              words={languages} 
              duration={2000} 
              colors={languageColors}
            />
            {" "}communication.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;