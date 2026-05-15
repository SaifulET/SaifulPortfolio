"use client";
import { useState } from 'react';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const ContactCTA = () => {
  const [form, setForm] = useState({ firstname: '',lastname:'', email: '',subject:'', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form)
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    console.log(data)
    if (data.success) alert('Message sent!');
    else alert('Failed to send.');
  };
  return (
    <section id='contact' className="bg-[#0F172A] text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block font-bold bg-[#1dd4bf]/20 text-[#1dd4bf] px-4 py-1 rounded-full mb-2">Contact</span>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Get In <span className="text-[#1dd4bf]">Touch</span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-gray-400">
          Have a idea in mind or just want to say hello? Feel free to reach out!
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Contact Info */}
        <div className="col-span-12 md:col-span-4 bg-[#1E293B] rounded-xl p-5 shadow-lg sm:p-8">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="shrink-0 text-[#1dd4bf] text-xl" />
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Email</p>
                <p className="break-all text-sm">si912999@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="shrink-0 text-[#1dd4bf] text-xl" />
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-sm">+8801707961402</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="shrink-0 text-[#1dd4bf] text-xl" />
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm mb-2 text-gray-400">Connect with me</p>
            <div className="flex gap-4">
              <a href="https://github.com/SaifulET?tab=repositories"target="_blank" className="bg-[#0F172A] hover:bg-[#1dd4bf] p-3 rounded-full text-white"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/saiful-islam-834467317/"target='_blank' className="bg-[#0F172A] hover:bg-[#1dd4bf] p-3 rounded-full text-white"><FaLinkedinIn /></a>
              <a href="https://www.facebook.com/md.saiful.islam.867178"target='_blank' className="bg-[#0F172A] hover:bg-[#1dd4bf] p-3 rounded-full text-white"><FaFacebookF /></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-span-12 md:col-span-8 bg-[#1E293B] rounded-xl p-5 shadow-lg sm:p-8">
          <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={form.firstname}
                onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                className="p-3 bg-[#334155] rounded w-full focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={form.lastname}
                onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                className="p-3 bg-[#334155] rounded w-full focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-3 bg-[#334155] rounded w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="p-3 bg-[#334155] rounded w-full focus:outline-none"
            />
            <textarea
              placeholder="Message"
              value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="p-3 bg-[#334155] rounded w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#0ff0fc] to-[#1dd4bf] text-black font-semibold py-3 px-6 rounded w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
