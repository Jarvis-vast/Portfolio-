import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Sparkles } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
      setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 4000);
    }, 800);
  };

  return (
    <div
      id="cta-contact-form-container"
      className="w-full max-w-xl mx-auto mt-10 liquid-glass-strong rounded-3xl p-6 sm:p-8 text-left border border-white/10 shadow-2xl transition-all duration-300"
    >
      {isSubmitted ? (
        <div className="py-8 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
            <CheckCircle2 className="w-6 h-6 text-white animate-pulse" />
          </div>
          <h4 className="text-2xl font-heading italic text-white mb-2">
            Inquiry Dispatched
          </h4>
          <p className="text-xs text-white/60 font-body font-light max-w-sm">
            Thank you, {name || "partner"}. Om Bhagwat will review your message and connect regarding potential collaboration.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-body">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2 text-white/80 text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-white/60" />
              <span>Direct Strategic Contact</span>
            </div>
            <span className="text-[10px] text-white/40 tracking-wider">
              Om Bhagwat &bull; OM Ecosystem
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="cta-form-name"
                className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5"
              >
                Name
              </label>
              <input
                id="cta-form-name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Om / Alex"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="cta-form-email"
                className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5"
              >
                Email
              </label>
              <input
                id="cta-form-email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cta-form-message"
              className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5"
            >
              Message / Project Vision
            </label>
            <textarea
              id="cta-form-message"
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Outline your inquiry, autonomous systems vision, or strategic partnership idea..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-[11px] text-white/40 font-light">
              Replies typically within 24–48 hours
            </span>
            <button
              id="cta-form-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="liquid-glass-strong rounded-full px-6 py-2.5 text-xs font-medium text-white flex items-center gap-2 hover:bg-white/15 transition-all font-body cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
