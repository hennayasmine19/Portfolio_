import { motion } from 'framer-motion';
import { HyperText } from './ui/hyper-text';
import { TypingAnimation } from './ui/typing-animation';
import { TextAnimate } from './ui/text-animate';
import { FolderKanban } from 'lucide-react';
import { WobbleCard } from './ui/wobble-card';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, Sparkles, TrendingUp, Brain, BarChart3 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Edge-Based Real-Time Skin Disease Detection Using CNN and Raspberry Pi',
    description: 'Designed and implemented a deep learning-based system to detect Acne, Hives, Rosacea, Psoriasis, and healthy skin using a custom dataset (~2,500 images/class).Trained a CNN (AlexNet) model in MATLAB, achieving 96–97% accuracy on validation and real-time hospital-sourced images.Deployed the trained model using TensorFlow and OpenCV for real-time inference.Integrated with Raspberry Pi 4 and Pi Camera for edge-based image acquisition and processing.',
    technologies: ['Python','MATLAB (AlexNet)', 'Raspberry Pi', 'TensorFlow', 'OpenCV'],
    githubUrl: 'https://github.com/hennayasmine19/Skin_Streamlit',
    category: 'Machine Learning',
    icon: Brain,
    year: '2024',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Interactive Visualization of Global Depression Trends',
    description: 'Preprocessed a global dataset of 50,000+ records on mental health disorders (alcohol, drug use, eating, anxiety, bipolar, schizophrenia, depression), improving data quality by ~30% through handling missing values and duplicates.Built 10+ interactive Tableau dashboards and stories to visualize depression trends, demographic breakdowns, and socio-economic correlations, reducing manual data exploration time up to 70% for faster, data-driven decision-making.Developed a web interface (HTML, CSS, JavaScript) to embed dashboards for broader accessibility.',
    technologies: ['Python[Pandas,NumPy]','Tableau','HTML','CSS','JavaScript','Excel'],
    githubUrl: 'https://github.com/hennayasmine19/Depression-A-Common-Mental-Disorder',
    category: 'Data Visualization',
    icon: BarChart3,
    year: '2024',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Sales Performance Dashboard',
    description: 'Designed an interactive Power BI sales dashboard integrating 15+ KPIs, trend analysis, and forecasting models to visualize revenue performance across regions and customer segments. Enhanced data quality and modeling accuracy by 20% using Power Query transformations and DAX measures. The dashboard provided actionable insights into sales patterns and purchasing behavior, helping businesses improve decision-making and optimize marketing strategies through historical and predictive analytics.',
    technologies: ['Power BI', 'SQL', 'DAX','Power Query'],
    githubUrl: 'https://github.com/hennayasmine19',
    category: 'Business Intelligence',
    icon: TrendingUp,
    year: '2024',
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Real Estate Price Prediction',
    description: 'Preprocessed a real estate dataset of 10,000+ property records, improving data quality by 25% through handling missing values, outliers, and inconsistent entries. Built and evaluated multiple regression models—Linear, Ridge, and Lasso—to predict property prices with an improved accuracy of up to 85% based on features such as location, size, and market trends. Created insightful data visualizations that uncovered key pricing patterns and feature importance, enabling buyers and investors to make more informed, data-driven real estate decisions.',
    technologies: ['Python', 'Scikit-Learn', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/hennayasmine19/Real_Estate',
    category: 'Predictive Analytics',
    icon: Sparkles,
    year: '2023',
    status: 'Completed'
  }
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
      ease: "easeOut"
    }
  }
};

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2
          className="text-5xl font-heading font-bold text-center mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-3"
          id="projects-heading"
        >
          <FolderKanban className="w-10 h-10 text-black dark:text-white" />
          <span>Featured Projects</span>
        </h2>
        <TextAnimate
          as="p"
          className="text-xl text-center text-gray-600 dark:text-gray-400 mb-6"
          animation="blurInUp"
          by="word"
          startOnView={true}
          once={true}
        >
          Showcasing innovative solutions combining data analytics, machine learning, and full-stack development.
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => {
            const colorClasses = [
              "bg-blue-100 dark:bg-blue-900",
              "bg-purple-100 dark:bg-purple-900",
              "bg-green-100 dark:bg-green-900",
              "bg-orange-100 dark:bg-orange-900",
            ];
            return (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={cn(
                "w-full transition-all duration-300 ease-out",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
              )}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <WobbleCard
                containerClassName={colorClasses[index % colorClasses.length]}
                className="px-6 py-8 sm:px-8 sm:py-10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="p-2 bg-white/20 dark:bg-black/20 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <project.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                    </motion.div>
                    <div>
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-500 ml-2">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-50"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block p-2 bg-white/20 dark:bg-black/20 rounded-lg hover:bg-white/30 dark:hover:bg-black/30 transition-colors cursor-pointer relative z-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                      </a>
                    </motion.div>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
              <motion.h3 
                  className="text-xl font-semibold mb-3 text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                  className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>
              <motion.div 
                  className="flex flex-wrap gap-2 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                  {project.technologies.map((tech, techIndex) => {
                    const techColorClasses = [
                      "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
                      "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
                      "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
                      "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
                      "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300",
                      "bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300",
                      "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300",
                      "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300",
                    ];
                    return (
                  <motion.span
                    key={tech}
                        className={cn(
                          "px-3 py-1 rounded-full text-sm font-medium",
                          techColorClasses[techIndex % techColorClasses.length]
                        )}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                    );
                  })}
              </motion.div>
              </WobbleCard>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;