// components/About.tsx

'use client';

import { useEffect, useState } from 'react';

type Skill = { name: string; percent: number };

const skills: Skill[] = [
  { name: 'HTML', percent: 90.5 },
  { name: 'CSS', percent: 75 },
  { name: 'Javascript', percent: 80 },
  { name: 'React', percent: 90 },
  { name: 'next Js', percent: 60 },
  { name: 'Typescript', percent: 40 },
  { name: 'NodeJs', percent: 60 },
  { name: 'ExpressJs', percent: 65 },
  { name: 'Mongoose', percent: 65 },
  { name: 'Git', percent: 70 },
];

function AnimatedSkillCircle({ skill }: { skill: Skill }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = 10;
    const duration = 1000;
    const increment = skill.percent / (duration / step);

    const interval = setInterval(() => {
      start += increment;
      if (start >= skill.percent) {
        start = skill.percent;
        clearInterval(interval);
      }
      setProgress(Math.round(start));
    }, step);

    return () => clearInterval(interval);
  }, [skill.percent]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-24 h-24 mb-2 flex items-center justify-center">
        <svg className="absolute top-0 left-0" width="96" height="96">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#222"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#1445D9"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress / 100)}
            style={{
              transition: 'stroke-dashoffset 0.2s linear',
            }}
            strokeLinecap="round"
          />
        </svg>
        <span className="relative text-xl font-bold text-gray-200">
          {progress}%
        </span>
      </div>
      <p className="text-gray-200 text-sm font-medium">{skill.name}</p>
    </div>
  );
}








export default function About() {



  
  return (
    <section id='skill' className="bg-dark px-4 py-16 text-center sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-200 mb-4">Technical Skills</h2>
      <p className="text-gray-400 text-base sm:text-lg font-semibold max-w-2xl mx-auto mb-12 md:mb-16">
      I’ve worked with a wide range of technologies and frameworks,
crafting responsive, user-friendly interfaces and web applications.
My focus is on creating visually engaging and high-performance digital experiences.
      </p>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill,i) => (
          <div key={i} className="flex flex-col items-center">
            <AnimatedSkillCircle key={skill.name} skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
