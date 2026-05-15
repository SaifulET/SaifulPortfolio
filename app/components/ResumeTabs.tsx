'use client';
// components/ResumeTabs.tsx
import { useState } from 'react';
import Image from 'next/image';
import about from "../images/about.jpg"

const education = [
  { title: 'BSC in CSE', desc: 'Mymensingh Engineering college',gpa:"CGPA 3.64" },
  { title: 'HSC', desc: 'Dhaka Imperial College',gpa:"GPA 4.17" },
  { title: 'SSC', desc: 'Kadamtoli Alia Madrasah',gpa:"GPA 4.78" },

];
const experience = [
  { title: 'VLSI 7Days Training', desc: 'ULKASEMI',gpa:"" },
  { title: 'MERN Stack Development Course', desc: 'OSTAD',gpa:"" },
  { title: 'Junior Full Stack Developer', desc: 'Sparktech Agency (Betopia company) - From 1st August,2025',gpa:"" },
];

export default function ResumeTabs() {
  const [tab, setTab] = useState<'Education' | 'Experience'>('Education');
  const data = tab === 'Education' ? education : experience;

  return (
    <section id='about' className="bg-[#0f0f0f] px-4 py-16 text-center sm:px-6 lg:px-8">
      
      <h2 className="text-xl font-bold text-white mb-8">ABOUT ME</h2>
      <h2 className="mx-auto mb-10 max-w-3xl text-3xl font-bold text-white sm:text-4xl">Get me know <span className='text-cyan-400'>who I am</span> </h2>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start'>
      <div className='flex justify-center'>
      <Image
            src={about}
            alt="John Lio"
            width={400}
            height={400}
            className="h-auto w-full max-w-sm rounded-lg object-cover sm:max-w-md lg:max-w-full"
          />
      </div>
      
      <div>
        <div className='text-left text-base font-semibold leading-7 text-gray-100 sm:text-lg'><h1 className='pb-5 text-center text-2xl font-bold sm:text-3xl lg:text-left'>Junior Fullstack Developer</h1>
{"I'm a passionate front-end developer with a keen eye for design and a dedication to creating intuitive, engaging user experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality.My journey in web development started 5 years ago, and I've been in love with crafting digital experiences ever since. I specialize in building responsive, accessible websites and applications that not only look great but perform exceptionally well.When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or hiking in the mountains to recharge my creative batteries."}</div>
      <div className='flex flex-col gap-8 pt-10 md:flex-row md:justify-between'>
        <div className='text-left'>
            <h1 className='font-bold text-[#0FF0FC] text-xl'>Name</h1>
            <h3 className='font-bold text-lg mb-5 text-gray-100'>Saiful Islam</h3>
            <h1 className='font-bold text-[#0FF0FC] text-xl'>Location</h1>
            <h3 className='font-bold text-lg mb-5 text-gray-100'>{"Jatrabari,Dhaka"}</h3>
            <h1 className='font-bold text-[#0FF0FC] text-xl'>Gmail</h1>
            <h3  className='break-all font-bold text-lg mb-5 text-gray-100'>si912999@gmail.com</h3>
            <h1 className='font-bold text-[#0FF0FC] text-xl'>Mobile</h1>
            <h3  className='font-bold text-lg mb-5 text-gray-100'>01707961402</h3>
        </div>
      <div className="w-full md:max-w-md">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          className={`px-5 py-2 rounded-full text-base font-semibold sm:text-lg ${tab === 'Education' ? 'bg-primary text-[#0FF0FC]' : 'bg-card text-white'}`}
          onClick={() => setTab('Education')}
        >
          Education
        </button>
        <button
          className={`px-5 py-2 rounded-full text-base font-semibold sm:text-lg ${tab === 'Experience' ? 'bg-primary text-[#0FF0FC]' : 'bg-card text-white'}`}
          onClick={() => setTab('Experience')}
        >
          Experience
        </button>
      </div>
      <div className="flex flex-col items-center gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-gray-400 p-5 sm:p-6 rounded-lg w-full max-w-md border-l-4 border-primary text-left">
            <h3 className="text-lg font-bold text-[#0f0f0f]">{item.title}</h3>
            <p className="text-gray-700 font-bold">{item.desc}</p>
            <p className="text-gray-700 font-bold">{item.gpa}</p>
          </div>
        ))}
      </div>
      </div>
      </div>
      
      </div>
      </div>
      
      
    </section>
  );
}
