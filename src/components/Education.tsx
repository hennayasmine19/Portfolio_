import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, GraduationCap } from 'lucide-react';
import { FaUniversity } from "react-icons/fa";
import { CometCard } from "@/components/ui/comet-card";
import { HyperText } from './ui/hyper-text';
import { TextAnimate } from './ui/text-animate';
import { Particles } from './ui/particles';

const education = [
  {
    degree: "B.Tech in Electronics and Communication",
    institution: "VIT-AP University",
    year: "2021-2025",
    location: "Amaravati, Andhra Pradesh",
    description: "ECE with Minor in Data Analytics",
    cgpa: "CGPA : 9.18",
    achievements: ["Ranked in the Top 10 students of the ECE stream."],
    courses: ["DBMS","DWDM","DV","Data Science"],
    status: "Completed"
  },
  {
    degree: "Intermediate Education in MPC",
    institution: "Sri Chaitanya College",
    year: "2019-2021",
    location: "Vijayawada, Andhra Pradesh",
    description: "MPC",
    cgpa: "Percentage : 96.4%",
    courses: ["Mathematics", "Physics", "Chemistry"],
    status: "Completed"
  },
  {
    degree: "Secondary Education",
    institution: "Nirmala High School",
    year: "2018-2019",
    location: "Vijayawada, Andhra Pradesh",
    description: "Science Stream",
    cgpa: "CGPA : 9.3",
    achievements: ["Best Student Award"],
    courses: ["Mathematics", "Science", "English", "Hindi", "Socail Studies"],
    status: "Completed"
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
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export function Education() {
  return (
    <section id="education" className="py-20 bg-zinc-50 dark:bg-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2
          className="text-5xl font-heading font-bold text-center mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-3"
          id="education-heading"
        >
          <GraduationCap className="w-10 h-10 text-black dark:text-white" />
          <span>Education</span>
        </h2>
        <TextAnimate
          as="p"
          className="text-xl text-center text-gray-600 dark:text-gray-400 mb-6"
          animation="blurInUp"
          by="word"
          startOnView={true}
          once={true}
        >
          My academic background and educational achievements that have shaped my expertise.
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
            >
              <CometCard>
                <div className="rounded-xl p-6 bg-zinc-100 dark:bg-zinc-800 relative z-10 h-full overflow-hidden">
                  <Particles
                    className="absolute inset-0"
                    quantity={50}
                    ease={80}
                    color="#3b82f6"
                    size={0.5}
                  />
                  <div className="flex flex-col gap-4 relative z-10">
                    <motion.div 
                      className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg w-fit"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaUniversity className="text-xl" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className="text-lg font-semibold text-gray-900 dark:text-white mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.p 
                        className="text-base font-medium text-gray-800 dark:text-gray-200 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {edu.institution}
                      </motion.p>
                      <motion.div 
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </motion.div>
                      <motion.div 
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.year}
                      </motion.div>
                      {edu.description && (
                        <motion.div 
                          className="mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-1">
                            <BookOpen className="w-4 h-4 mr-2" />
                            <span className="font-medium">Stream:</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 ml-6">
                            {edu.description}
                          </p>
                        </motion.div>
                      )}
                      <motion.div 
                        className="mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-1">
                          <Award className="w-4 h-4 mr-2" />
                          <span className="font-medium">{edu.cgpa}</span>
                        </div>
                      </motion.div>
                      {edu.achievements && edu.achievements.length > 0 && (
                        <motion.div 
                          className="mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 }}
                        >
                          <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Achievements:
                          </p>
                          <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="list-disc">{achievement}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                      {edu.courses && edu.courses.length > 0 && (
                        <motion.div 
                          className="mb-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Key Courses:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {edu.courses.map((course, idx) => {
                              const colors = [
                                "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
                                "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
                                "bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300",
                                "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300",
                                "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300",
                                "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
                                "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300",
                                "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
                              ];
                              const colorClass = colors[idx % colors.length];
                              return (
                                <span 
                                  key={idx} 
                                  className={`text-xs px-2 py-1 rounded ${colorClass}`}
                                >
                                  {course}
                                </span>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                      <motion.div 
                        className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        <span className={`text-xs px-2 py-1 rounded ${
                          edu.status === "Pursuing" 
                            ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                            : "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        }`}>
                          {edu.status}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CometCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Education;