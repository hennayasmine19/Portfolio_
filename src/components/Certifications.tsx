import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { DraggableCardBody, DraggableCardContainer, DraggableCardsBox } from "@/components/ui/draggable-card";
import { HyperText } from './ui/hyper-text';
import { TypingAnimation } from './ui/typing-animation';
import { TextAnimate } from './ui/text-animate';

const certifications = [
  {
    name: "RINL Project Trainee",
    issuer: "Rashtriya Ispat Nigam Limited",
    date: "2023",
    description: "Completed a hands-on project on Medium Voltage Drives, gaining insights into industrial automation and power systems.",
    skills: ["Industrial Automation", "Power Systems", "Technical Analysis"],
    url: "https://drive.google.com/file/d/1y52SjXCAw5l0xfRrOAH501wgrAOejTLA/view?usp=sharing"
  },
  {
    name: "Data Science for Engineers",
    issuer: "NPTEL",
    date: "2024",
    description: "Learned fundamental data science concepts, including statistical analysis, machine learning algorithms, and data visualization.",
    skills: ["Machine Learning", "Data Visualization", "Statistical Analysis"],
    url: "https://drive.google.com/file/d/1r3qe8PzYjhcDToOY480M9qihW8MYFXvK/view?usp=sharing"
  },
  {
    name: "Data Analytics Intern",
    issuer: "IBM",
    date: "2023",
    description: "Worked on real-world global analysis of depression data using Tableau, applying ETL techniques, SQL, and business intelligence tools.",
    skills: ["ETL", "SQL", "Business Intelligence", "Tableau"],
    url: "https://drive.google.com/file/d/1xl_Ko6B453vMNQ9OxIgHvVyoE_MVHsU1/view?usp=sharing"
  },
  {
    name: "Data Analytics",
    issuer: "YBI Foundation",
    date: "2024",
    description: "Developed proficiency in data analysis using Python, Power BI, and Tableau, focusing on real-world case studies.",
    skills: ["Python", "Power BI", "Tableau"],
    url: "https://drive.google.com/file/d/1NVrrkbQ3NWyrzV91dw3SuEG13_AWIqcB/view?usp=sharing"
  },
  {
    name: "UI UX",
    issuer: "Udemy",
    date: "2025",
    description: "Developed strong UI/UX fundamentals through practical projects involving user research, wireframes, prototypes, and design systems.",
    skills: ["UI Design", "UX Design", "Figma", "Wireframing", "Prototyping"],
    url: "https://drive.google.com/file/d/1SNgfCwZFejEdU36B3EqMrEts57rh45u1/view"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-zinc-50 dark:bg-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2
          className="text-5xl font-heading font-bold text-center mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-3"
          id="certifications-heading"
        >
          <Award className="w-10 h-10 text-black dark:text-white" />
          <span>Professional Certifications</span>
        </h2>
        <TextAnimate
          as="p"
          className="text-xl text-center text-gray-600 dark:text-gray-400 mb-6"
          animation="blurInUp"
          by="word"
          startOnView={true}
          once={true}
        >
          Industry-recognized certifications that validate my skills and commitment to continuous learning.
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
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <DraggableCardsBox>
            <div className="flex flex-wrap justify-center gap-8">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                >
                  <DraggableCardContainer>
                    <DraggableCardBody className="w-80 max-w-full">
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <motion.div 
                            className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </motion.div>
                          <motion.a 
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        </div>
                        <motion.h3 
                          className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {cert.name}
                        </motion.h3>
                        <motion.p 
                          className="text-base font-medium text-gray-700 dark:text-gray-300 mb-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {cert.issuer}
                        </motion.p>
                        <motion.p 
                          className="text-sm text-gray-600 dark:text-gray-400 mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {cert.date}
                        </motion.p>
                        <motion.p 
                          className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {cert.description}
                        </motion.p>
                        <motion.div 
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          {cert.skills.map((skill, i) => {
                            const colors = [
                              "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
                              "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
                              "bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300",
                              "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300",
                              "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300",
                            ];
                            const colorClass = colors[i % colors.length];
                            return (
                              <span 
                                key={i} 
                                className={`px-2 py-1 text-xs font-medium rounded-md ${colorClass}`}
                              >
                                {skill}
                              </span>
                            );
                          })}
                        </motion.div>
                      </div>
                    </DraggableCardBody>
                  </DraggableCardContainer>
                </motion.div>
              ))}
            </div>
          </DraggableCardsBox>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;