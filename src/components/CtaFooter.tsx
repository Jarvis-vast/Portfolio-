import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Linkedin, Github } from "lucide-react";
import Hls from "hls.js";
import ContactForm from "./ContactForm";

interface CtaFooterProps {
  onWorkWithMe?: () => void;
  onExploreWork?: () => void;
}

export default function CtaFooter({ onWorkWithMe, onExploreWork }: CtaFooterProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src =
      "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, []);

  const handleWorkWithMeClick = () => {
    setShowContactForm((prev) => !prev);
    if (onWorkWithMe) {
      onWorkWithMe();
    }
  };

  return (
    <section
      id="cta-footer"
      className="relative py-32 px-6 md:px-16 lg:px-24 text-center overflow-hidden"
    >
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Top black gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      {/* Bottom black gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to top, black, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] max-w-3xl mx-auto mb-4">
          Build the future. Don't just use it.
        </h2>

        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mx-auto mb-8">
          I build AI-powered businesses, products, and systems designed to make work easier, faster, and increasingly autonomous.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <button
            id="cta-work-with-me-btn"
            onClick={handleWorkWithMeClick}
            className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body cursor-pointer"
          >
            Work With Me
            <ArrowUpRight className="h-5 w-5" />
          </button>

          <button
            id="cta-explore-work-btn"
            onClick={onExploreWork}
            className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors font-body cursor-pointer"
          >
            Explore My Work
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Seamless Contact Form Component below CTA buttons */}
        <ContactForm />

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body font-light text-xs">
            &copy; 2026 Om Bhagwat. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                id={`footer-link-${link.toLowerCase()}`}
                className="text-white/40 hover:text-white/70 font-body font-light text-xs transition-colors"
              >
                {link}
              </a>
            ))}

            <div className="h-3 w-px bg-white/10 hidden sm:block" />

            {/* Verified Social Media Links from Resume */}
            <a
              id="footer-link-linkedin"
              href="https://www.linkedin.com/in/ombhagwat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 font-body font-light text-xs transition-colors flex items-center gap-1.5"
              aria-label="Om Bhagwat on LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              id="footer-link-github"
              href="https://github.com/Jarvis-vast"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 font-body font-light text-xs transition-colors flex items-center gap-1.5"
              aria-label="Om Bhagwat on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
