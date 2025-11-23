import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { PinContainer } from './ui/3d-pin';
import { TextAnimate } from './ui/text-animate';
import { Handshake } from 'lucide-react';
import { WorldMap } from './ui/world-map';

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/henna-yasmine-shaik-860129260/",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900"
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/hennayasmine19",
    color: "text-gray-900 dark:text-white",
    bgColor: "bg-gray-100 dark:bg-gray-800"
  },
  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:hennayasmineshaik@gmail.com",
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-900"
  }
];

export function Connect() {
  return (
    <section id="connect" className="py-20 bg-zinc-50 dark:bg-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2
          className="text-5xl font-heading font-bold text-center mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-3"
          id="connect-heading"
        >
          <Handshake className="w-10 h-10 text-black dark:text-white" />
          <span>Let's Connect</span>
        </h2>
        <TextAnimate
          as="p"
          className="text-xl text-center text-gray-600 dark:text-gray-400 mb-6"
          animation="blurInUp"
          by="word"
          startOnView={true}
          once={true}
        >
          Reach out to collaborate, discuss opportunities, or just say hello!
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
        <div className="max-w-5xl mx-auto mb-12">
          <WorldMap 
            dots={[
              {
                start: { lat: 20.5937, lng: 78.9629, label: "India" }, // India
                end: { lat: 40.7128, lng: -74.0060, label: "USA" }, // USA
              },
            ]}
            lineColor="#0ea5e9"
          />
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <PinContainer
              key={index}
              href={social.href}
              title={social.name}
              containerClassName="h-[200px]"
            >
              <div className="flex flex-col items-center justify-center text-center space-y-4 h-full">
                <div className={`p-4 ${social.bgColor} rounded-lg`}>
                  <social.icon className={`w-8 h-8 ${social.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {social.name}
                </h3>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Connect;

