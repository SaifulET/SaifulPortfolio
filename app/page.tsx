import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServiceCard from "./components/ServiceCard";
import ResumeTabs from "./components/ResumeTabs";
import ContactCTA from "./components/ContactCTA";
import { FaLightbulb} from "react-icons/fa";

export default function HomePage() {
  return (
    <main className=" bg-[#182233] text-white min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      {/* What I Do Section */}
      <section id='work' className="bg-[#0F172A] px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">What I Do</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ServiceCard icon={<FaLightbulb />} title="Business Website with Admin Panel" description="Multi-page site plus authenticated admin dashboard."url="https://blogsiteforall.netlify.app/"tech="React Express JWT"fullDes="Multi-page site (Blog, Services, About, Contact) plus authenticated admin dashboard."  />
          <ServiceCard icon={<FaLightbulb />} title="E-commerce Web Application" description="E-commerce site with login, filters, and order tracking."url="https://github.com/SaifulET/Ecommarce_app"tech="Bootstrap React Zustand Express Mongoose" fullDes="Full-featured online store with product filtering, OTP-based authentication, and order management. " />
          <ServiceCard icon={<FaLightbulb />} title="Landing Page Web Application" description="Single-page restaurant listing and service site."url="https://food-delivery-app-gzxm.vercel.app/"tech="Nextjs Tailwind Typescript" fullDes="Single-page site showcasing restaurant listings and services. 
• Hero search, category keywords, feature highlights, auto-sliding client reviews, and mobile-app promo."/>
          <ServiceCard icon={<FaLightbulb />} title="Kanban Board Web Application" description="Task-tracking tool with drag-and-drop columns "url="https://guileless-dodol-f43ebb.netlify.app/"tech="React Tailwind Express Mongoose context-api " fullDes="Task-tracking tool with drag-and-drop columns (“To Do”, “In Progress”, “Done”). 
• Tasks store title, description, due date, priority; real-time reordering with priority recalculation. "/>
          <ServiceCard icon={<FaLightbulb />} title="Bluestar Interiors Showcase" description="Explore three unique design styles with detailed galleries and easy contact for a seamless client experience."url="https://blue-start.vercel.app/"tech="React Tailwind Express Nodemailer" fullDes="Presenting three distinguished interior design styles, complete with detailed galleries and descriptions, offering a seamless platform for clients to connect and realize their design vision. "/>
          {/* <ServiceCard icon={<FaCode />} title="Web Development" description="Modern, responsive, and fast websites." /> */}
          {/* <ServiceCard icon={<FaPalette />} title="UI/UX Design" description="Beautiful and user-friendly interfaces." /> */}
        </div>
      </section>
      {/* Resume Section */}
      <ResumeTabs />
      <ContactCTA />
    </main>
  );
}
