import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';
import { Meteors } from './ui/meteors';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#connect' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/henna-yasmine-shaik-860129260/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/hennayasmine19', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hennayasmineshaik@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-black border-t border-zinc-700 overflow-hidden">
      <StarsBackground />
      <ShootingStars />
      <Meteors number={30} minDelay={0.2} maxDelay={1.2} minDuration={2} maxDuration={10} />
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Henna Yasmine
            </h3>
            <p className="text-white/80 text-base mb-4 italic leading-relaxed">
            Crafting modern, intuitive, and high-performing solutions that bring your vision to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start md:translate-x-[150px]">
            <h4 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-blue-400 transition-colors text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="md:-ml-20">
            <h4 className="text-xl font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center text-white text-base">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:hennayasmineshaik@gmail.com" className="hover:text-blue-400 transition-colors">
                  hennayasmineshaik@gmail.com
                </a>
              </li>
              <li className="flex items-center text-white text-base">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+919014343328" className="hover:text-blue-400 transition-colors">
                  +91 90143 43328
                </a>
              </li>
              <li className="flex items-start text-white text-base">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Vijayawada,Andhra Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-zinc-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-base text-white">
            <p>
              © {currentYear} Henna Yasmine. All rights reserved.
            </p>
            <div className="mt-2 md:mt-0 flex gap-4">
              <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

