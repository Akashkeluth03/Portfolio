import React, { useState } from 'react';
import { X, Mail, Copy, Check, Send, Github, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState('Deepfake Audio Detection & ML Research');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const topics = [
    'Deepfake Audio Detection & ML Research',
    'Catch My Dream International Student Portal',
    'Cloud Architecture & DevOps Pipelines',
    'Fullstack Web / Python Collaboration',
    'General Tech Discussion / Internship'
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Collab Inquiry] ${topic} - ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Akash,\n\nI came across your GitHub profile and interactive showcase.\n\nTopic: ${topic}\n\nMessage:\n${message}\n\nBest regards,\n${senderName || 'Anonymous'}\n${senderEmail ? `Email: ${senderEmail}` : ''}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
            Let's Build Something High-Impact
          </div>
          <h3 className="text-2xl font-bold text-white font-display">
            Connect with Akash Keluth
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Open for collaborations in Python, Machine Learning, Fullstack Web, and DevOps cloud systems.
          </p>
        </div>

        {/* Info Box */}
        <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs mb-5 space-y-1.5 text-neutral-400">
          <div className="flex items-center gap-2 text-neutral-300">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Information Science & Engineering · Ramaiah Institute of Technology</span>
          </div>
          <div className="flex items-center justify-between text-neutral-400">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-neutral-500" />
              <span>Bangalore, India</span>
            </span>
            <button
              onClick={handleCopy}
              className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 font-mono"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSendMail} className="space-y-4">
          <div>
            <label className="text-xs text-neutral-300 block mb-1 font-medium">Collaboration Area</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            >
              {topics.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-neutral-300 block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
                required
              />
            </div>
            <div>
              <label className="text-xs text-neutral-300 block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="sarah@company.com"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-neutral-300 block mb-1 font-medium">Message / Project Proposal</label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell Akash about your ideas, questions, or project timeline..."
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white"
            >
              <Github className="w-4 h-4" />
              <span>GitHub @{PERSONAL_INFO.githubUsername}</span>
            </a>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-md shadow-cyan-400/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch Mail Client</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
