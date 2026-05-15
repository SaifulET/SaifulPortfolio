import { ReactNode } from 'react';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  url: string;
  tech: string;
  fullDes: string;
};

export default function ServiceCard({ icon, title, description, url,tech ,fullDes}: ServiceCardProps) {
  const techs = tech.split(" ");
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-2xl border-4 border-black bg-card shadow-[0_0_20px_10px_#0E2D33]'>
      <div className="relative group h-52 w-full overflow-hidden shadow-lg sm:h-60">
      {/* Scrollable preview container */}
      <div className="absolute inset-0 overflow-hidden group-hover:opacity-0 transition-opacity duration-300">
        <div className="h-[200%] animate-scroll-preview origin-top-left scale-[0.5]">
          <iframe
            src={url}
            title={title}
            className="w-[200%] h-[200%] pointer-events-none border-none"
          />
        </div>
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100  transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
        <div className="text-primary text-4xl mb-3">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-muted text-sm mb-4">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white hover:text-black px-4 py-2 rounded hover:bg-orange-200 transition"
        >
          View Project
        </a>
      </div>
    </div>
    <div className='overflow-hidden px-5 pb-8 pt-5 text-left sm:px-8 sm:pb-10'>
    <h1 className='font-bold text-gray-100 text-lg sm:text-xl pb-4' >{title}</h1>
    <h5 className='min-h-28 font-semibold text-gray-400'>{fullDes}</h5>
    <div className='mt-5 flex flex-wrap gap-2'>
      {techs.map((Technology,i)=>{
        return(
          <span key={i} className='rounded-lg bg-gray-800 p-2 text-sm font-semibold text-blue-500'>{Technology}</span>
        )
      })}
    </div>
    </div>
    

    </div>
  );
}
