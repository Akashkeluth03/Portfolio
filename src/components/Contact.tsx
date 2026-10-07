import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_DATA.email}?subject=${encodeURIComponent(
      subject || 'Hello from Portfolio'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Section Subtitle */}
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
            Get in Touch
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Let's Build Something Together.
          </h2>

          {/* Text */}
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
            I'm always interested in learning, building interesting projects, and connecting with other developers.
          </p>

          {/* Buttons: GitHub, LinkedIn, Email */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-all hover:translate-y-[-1px] shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-all hover:translate-y-[-1px]"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
            </a>

            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-all hover:translate-y-[-1px]"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-neutral-400 hover:text-neutral-200 bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 rounded-lg transition-colors"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{PERSONAL_DATA.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Minimal Quick Form */}
          <form onSubmit={handleSendMail} className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 space-y-4">
            <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider pb-2 border-b border-neutral-800/80">
              Quick Inquiry
            </div>

            <div>
              <label className="text-xs text-neutral-400 block mb-1">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Collaboration / Project / Internship inquiry"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
              />
            </div>

            <div>
              <label className="text-xs text-neutral-400 block mb-1">Message</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your ideas or connect with Akash..."
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Launch Mail Client</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
