import { BarChart, Database, Server, Monitor, Code, GitBranch, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import { OrbitingCircles } from './ui/orbiting-circles';
import { TextAnimate } from './ui/text-animate';
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiExpress, 
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiVsco,
  SiPostman,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiTailwindcss
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skills = [
  {
    name: 'Programming Languages',
    description: [
      'Python',
      'Java',
      'SQL',
      'JavaScript'
    ],
    icon: Code
  },
  {
    name: 'Frontend Development',
    description: [
      'HTML5',
      'CSS3',
      'React.js',
      'Tailwind CSS'
    ],
    icon: Monitor
  },
  {
    name: 'Backend Development',
    description: [
      'Express.js',
      'RESTful APIs',
      'Flask'
    ],
    icon: Server
  },
  {
    name: 'Database Management',
    description: [
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'SQLite'
    ],
    icon: Database
  },
  {
    name: 'Data Analytics & Visualization',
    description: [
      'Pandas',
      'NumPy',
      'Power BI',
      'Tableau',
      'Matplotlib',
      'Seaborn'
    ],
    icon: BarChart
  },
  {
    name: 'Version Control & Tools',
    description: [
      'Git',
      'GitHub',
      'VS Code',
      'Matlab',
      'Postman'
    ],
    icon: GitBranch
  },
  {
    name: 'Soft Skills',
    description: [
      'Analytical Thinking',
      'Continuous learning mindset',
      'Cross-functional teamwork,',
      'Presentation and public speaking'
    ],
    icon: Users
  }
];

export function Skills() {
  const skillColors = [
    { bg: 'linear-gradient(to bottom right, #3b82f6, #1d4ed8)', text: '#3b82f6' }, // Blue for Programming Languages
    { bg: 'linear-gradient(to bottom right, #8b5cf6, #6d28d9)', text: '#8b5cf6' }, // Purple for Frontend
    { bg: 'linear-gradient(to bottom right, #ef4444, #dc2626)', text: '#ef4444' }, // Red for Backend
    { bg: 'linear-gradient(to bottom right, #10b981, #059669)', text: '#10b981' }, // Green for Database
    { bg: 'linear-gradient(to bottom right, #f59e0b, #d97706)', text: '#f59e0b' }, // Orange for Data Analytics
    { bg: 'linear-gradient(to bottom right, #ec4899, #db2777)', text: '#ec4899' }, // Pink for Version Control
    { bg: 'linear-gradient(to bottom right, #06b6d4, #0891b2)', text: '#06b6d4' }, // Cyan for Soft Skills
  ];

  const stickyContent = skills.map((skill, index) => ({
    title: skill.name,
    description: skill.description,
    color: skillColors[index % skillColors.length],
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center p-8 text-white">
        <skill.icon className="w-16 h-16 mb-4 text-white" />
        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
      </div>
    ),
  }));

  const techStackIcons = [
    { Icon: SiPython, name: 'Python', color: '#3776AB' },
    { Icon: FaJava, name: 'Java', color: '#ED8B00' },
    { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { Icon: SiReact, name: 'React', color: '#61DAFB' },
    { Icon: SiExpress, name: 'Express.js', color: '#000000' },
    { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { Icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { Icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { Icon: SiGit, name: 'Git', color: '#F05032' },
    { Icon: SiGithub, name: 'GitHub', color: '#181717' },
    { Icon: SiVsco, name: 'VS Code', color: '#007ACC' },
    { Icon: SiPostman, name: 'Postman', color: '#FF6C37' },
    { Icon: SiFlask, name: 'Flask', color: '#000000' },
    { Icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { Icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-50 dark:bg-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2
          className="text-5xl font-heading font-bold text-center mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-3"
          id="skills-heading"
        >
          <Code className="w-10 h-10 text-black dark:text-white" />
          <span>My Tech Stack</span>
        </h2>
        <TextAnimate
          as="p"
          className="text-xl text-center text-gray-600 dark:text-gray-400 mb-6"
          animation="blurInUp"
          by="word"
          startOnView={true}
          once={true}
        >
          Explore the technologies and tools I use to build innovative solutions and analyze data.
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
        <div className="relative h-[500px] w-full overflow-hidden mb-20 flex items-center justify-center">
          <OrbitingCircles radius={160} iconSize={50}>
            {techStackIcons.map(({ Icon, name, color }, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 p-3 shadow-lg hover:scale-110 transition-transform"
                title={name}
              >
                <Icon className="w-8 h-8" style={{ color }} />
              </div>
            ))}
          </OrbitingCircles>
          <OrbitingCircles radius={100} reverse iconSize={40}>
            {techStackIcons.slice(0, 6).map(({ Icon, name, color }, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 p-2 shadow-lg hover:scale-110 transition-transform"
                title={name}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
            ))}
          </OrbitingCircles>
        </div>
        <StickyScroll content={stickyContent} />
      </div>
    </section>
  );
}

export default Skills;