export default function HeroBackground() {
  return (
    <div
      id="hero-cinematic-background"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Deep black core background */}
      <div className="absolute inset-0 bg-black" />

      {/* Atmospheric center radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] sm:h-[600px] rounded-full opacity-20 blur-[130px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(200,200,220,0.05) 45%, rgba(0,0,0,0) 80%)",
        }}
      />

      {/* Ambient subtle secondary illumination */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full opacity-25 blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Subtle fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Top subtle fade to blend with navbar */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      {/* Bottom fade to seamlessly transition into Philosophy section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, black, transparent)",
        }}
      />
    </div>
  );
}
