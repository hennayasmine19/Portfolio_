import { FloatingDock } from './ui/floating-dock';
import { ThemeToggle } from './ThemeToggle';
import { 
  IconHome, 
  IconUser, 
  IconCode, 
  IconSchool, 
  IconBriefcase,
  IconAward, 
  IconFolder, 
  IconLanguage,
  IconBrandLinkedin
} from '@tabler/icons-react';

export function Header() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Education",
      icon: (
        <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#education",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Certifications",
      icon: (
        <IconAward className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#certifications",
    },
    {
      title: "Projects",
      icon: (
        <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Languages",
      icon: (
        <IconLanguage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#languages",
    },
    {
      title: "Connect",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#connect",
    },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto flex max-w-5xl items-center gap-4 rounded-2xl border border-zinc-200/60 bg-zinc-50/80 px-4 py-3 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/80">
        <a href="#home" className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          Henna Yasmine
        </a>
        <FloatingDock 
          items={links} 
          desktopClassName="mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-zinc-50 px-4 pb-3 md:flex dark:bg-zinc-900"
          mobileClassName="fixed bottom-4 right-4 z-50"
        />
        <ThemeToggle />
      </div>
    </header>
  );
}