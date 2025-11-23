import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { ExpandableCard } from "@/components/ui/expandable-card";
import { TextAnimate } from './ui/text-animate';

const experiences = [
  {
    title: "Software Intern",
    company: "Startrit Infratech Pvt. Ltd.",
    location: "Remote",
    period: "May 2025 - Aug 2025",
    type: "Internship",
    certificateUrl: "https://drive.google.com/file/d/1E_Bm6zjkYywzf5o07Hn7D0D0Tw-E9TPx/view?usp=sharing", // Add your certificate URL here
    achievements: [
      "Developed a driver monitoring system using computer vision to detect drowsiness, distraction, mobile usage, seat belt compliance, and face authentication.",
      "Built a parking violation automation system using OpenCV, automatically capturing vehicle details and issuing fines.",
      "Contributed to a fleet management web platform with a hierarchical structure (enterprises → organizations → managers → drivers).",
      "Developed an interactive vehicle performance dashboard using OBD logger data to analyze fuel efficiency and performance metrics.",
      "Integrated smart notifications for vehicle document due dates, implemented a leaderboard system rewarding drivers based on compliance and customer feedback.",
      "Built GPS analytics for real-time tracking and performance insights.",
      "Collaborated with the mobile app team on React Native Expo frontend designs, gaining cross-platform development experience."
    ],
    techStack: ["React", "Express.js", "Supabase", "Postman", "OpenCV", "React Native", "Expo"],
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

export function ProfessionalExperience() {
  return (
    <section id="experience" className="py-20 bg-zinc-50 dark:bg-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2
          className="text-5xl font-heading font-bold text-center mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-3"
          id="experience-heading"
        >
          <Briefcase className="w-10 h-10 text-black dark:text-white" />
          <span>Professional Experience</span>
        </h2>
        <TextAnimate
          as="p"
          className="text-xl text-center text-gray-600 dark:text-gray-400 mb-6"
          animation="blurInUp"
          by="word"
          startOnView={true}
          once={true}
        >
          Discover my professional journey, internships, and the impactful projects I've contributed to.
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
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
            >
              <ExpandableCard
                title={exp.title}
                company={exp.company}
                location={exp.location}
                period={exp.period}
                type={exp.type}
                achievements={exp.achievements}
                techStack={exp.techStack}
                status={exp.status}
                certificateUrl={exp.certificateUrl}
                icon={<Briefcase className="text-xl text-black dark:text-white" />}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProfessionalExperience;

