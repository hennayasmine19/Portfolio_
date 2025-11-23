"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useRef } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ChevronDown, MapPin, Calendar, Award, CheckCircle2 } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export const ExpandableCard = ({
  title,
  company,
  location,
  period,
  type,
  achievements,
  techStack,
  status,
  certificateUrl,
  icon,
  className,
}: {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
  techStack: string[];
  status: string;
  certificateUrl?: string;
  icon: React.ReactNode;
  className?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useOutsideClick(cardRef, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative w-full max-w-2xl", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardSpotlight className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 p-0">
        <motion.div
          className="relative z-10 cursor-pointer p-6"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4 flex-1">
            <motion.div
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-black dark:text-white">
                {icon}
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-1">
                {title}
              </h3>
              <p className="text-2xl font-medium text-black dark:text-white mb-2">
                {company}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-base">
                <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400">
                  <MapPin className="w-4 h-4" />
                  {location}
                </span>
                <span className="text-gray-400">•</span>
                <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                  <Calendar className="w-4 h-4" />
                  {period}
                </span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4"
          >
            <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-300 dark:border-gray-700 space-y-4">
                <div>
                  <div className="flex items-center text-base mb-1">
                    <Award className="w-5 h-5 text-black dark:text-white mr-2" />
                    <span className="font-bold text-black dark:text-white">Type:</span>
                    <span className="ml-2 text-black dark:text-white">{type}</span>
                  </div>
                </div>

                <div>
                  <p className="text-base font-bold text-black dark:text-white mb-2 flex items-center gap-1">
                    <CheckCircle2 className="w-5 h-5 text-black dark:text-white" />
                    Key Achievements:
                  </p>
                  <ul className="text-base space-y-1.5 ml-4">
                    {achievements.map((achievement, idx) => (
                      <li key={idx} className="list-disc text-gray-700 dark:text-gray-300">{achievement}</li>
                    ))}
                  </ul>
                </div>

                {techStack && techStack.length > 0 && (
                  <div>
                    <p className="text-base font-bold text-black dark:text-white mb-1">
                      Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {techStack.map((tech, idx) => {
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
                            className={`text-base px-2 py-1 rounded ${colorClass}`}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-sm px-2 py-1 rounded bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    {status}
                  </span>
                  {certificateUrl && (
                    <a
                      href={certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <InteractiveHoverButton
                        className="bg-black dark:bg-black text-white border-black dark:border-black hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black [&_.bg-primary]:bg-white [&_.text-primary-foreground]:text-black group-hover:[&_.text-primary-foreground]:text-black"
                      >
                        View Certificate
                      </InteractiveHoverButton>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </motion.div>
      </CardSpotlight>
    </motion.div>
  );
};

