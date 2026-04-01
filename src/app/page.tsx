import { WinWindow } from "@/components/win2k/win-window";
import { WinTaskbar } from "@/components/win2k/win-taskbar";
import { WinResumeCard } from "@/components/win2k/win-resume-card";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

export default function Page() {
  return (
    <>
      {/* Desktop */}
      <main
        className="min-h-screen pb-[34px] p-4 bg-[hsl(var(--win-desktop))]"
        style={{ backgroundImage: "none" }}
      >
        {/* Desktop Icons row */}
        <div className="flex flex-col gap-4 items-start mb-4 sm:flex-row sm:flex-wrap">
          {/* My Computer icon */}
          <button className="flex flex-col items-center gap-1 w-16 cursor-default group" aria-label="My Computer">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 32 32" width="40" height="40" aria-hidden="true">
                <rect x="2" y="3" width="28" height="20" rx="1" fill="#c0c0c0" stroke="#666" strokeWidth="1" />
                <rect x="4" y="5" width="24" height="16" fill="#000080" />
                <rect x="5" y="6" width="22" height="14" fill="#008080" />
                <rect x="10" y="23" width="12" height="3" fill="#c0c0c0" stroke="#666" strokeWidth="0.5" />
                <rect x="6" y="26" width="20" height="2" fill="#c0c0c0" stroke="#666" strokeWidth="0.5" />
              </svg>
            </div>
            <span className="text-[10px] text-white text-center leading-tight font-sans" style={{ textShadow: "1px 1px 2px #000" }}>
              My Computer
            </span>
          </button>

          {/* Recycle Bin */}
          <button className="flex flex-col items-center gap-1 w-16 cursor-default group" aria-label="Recycle Bin">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 32 32" width="40" height="40" aria-hidden="true">
                <rect x="8" y="10" width="16" height="18" rx="1" fill="#c0c0c0" stroke="#666" strokeWidth="1" />
                <rect x="10" y="12" width="3" height="14" fill="#666" />
                <rect x="14" y="12" width="3" height="14" fill="#666" />
                <rect x="18" y="12" width="3" height="14" fill="#666" />
                <rect x="6" y="8" width="20" height="3" rx="0.5" fill="#a0a0a0" stroke="#666" strokeWidth="0.5" />
                <rect x="12" y="5" width="8" height="4" rx="0.5" fill="#c0c0c0" stroke="#666" strokeWidth="0.5" />
              </svg>
            </div>
            <span className="text-[10px] text-white text-center leading-tight font-sans" style={{ textShadow: "1px 1px 2px #000" }}>
              Recycle Bin
            </span>
          </button>

          {/* Portfolio icon */}
          <button className="flex flex-col items-center gap-1 w-16 cursor-default group" aria-label="Portfolio">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 32 32" width="40" height="40" aria-hidden="true">
                <rect x="2" y="8" width="28" height="22" rx="1" fill="#f5c518" stroke="#b8860b" strokeWidth="1" />
                <rect x="10" y="5" width="12" height="5" rx="1" fill="#d4a500" stroke="#b8860b" strokeWidth="1" />
                <rect x="4" y="16" width="10" height="8" fill="white" stroke="#999" strokeWidth="0.5" />
                <rect x="17" y="16" width="10" height="2" fill="#c0c0c0" />
                <rect x="17" y="19" width="10" height="2" fill="#c0c0c0" />
                <rect x="17" y="22" width="7" height="2" fill="#c0c0c0" />
              </svg>
            </div>
            <span className="text-[10px] text-white text-center leading-tight font-sans" style={{ textShadow: "1px 1px 2px #000" }}>
              Portfolio.exe
            </span>
          </button>
        </div>

        {/* Main layout: left column + right column on larger screens */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          {/* Left column */}
          <div className="flex flex-col gap-4 flex-1 min-w-0">

            {/* Hero / Profile Window */}
            <WinWindow title={`Francisco Márquez — Portfolio`} icon="/me.jpg">
              <div className="flex items-start gap-3 p-1">
                {/* Avatar */}
                <div className="win-raised flex-shrink-0 w-[64px] h-[64px] bg-[hsl(var(--win-silver))] flex items-center justify-center p-0.5">
                  <img
                    src={DATA.avatarUrl}
                    alt={`${DATA.name} avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="win-section-header mb-1.5">
                    Welcome, user!
                  </div>
                  <p className="text-[13px] font-bold text-black">{DATA.name}</p>
                  <p className="text-[11px] text-[hsl(var(--win-shadow))] mt-0.5">{DATA.description}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                      <circle cx="6" cy="6" r="5" fill="#00aa00" stroke="#006600" strokeWidth="1" />
                    </svg>
                    <span className="text-[10px] text-[hsl(var(--win-shadow))]">Online — {DATA.location}</span>
                  </div>
                  {/* Action buttons */}
                  <div className="flex gap-1 mt-2 flex-wrap">
                    <a
                      href={`mailto:${DATA.contact.email}`}
                      className="win-btn text-[11px] no-underline"
                    >
                      Send Mail
                    </a>
                    {Object.entries(DATA.contact.social)
                      .filter(([_, s]) => s.navbar)
                      .map(([name, social]) => (
                        <a
                          key={name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="win-btn text-[11px] no-underline"
                        >
                          {name}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </WinWindow>

            {/* About Window */}
            <WinWindow title="About Me — Notepad">
              <div className="win-sunken bg-white p-2 min-h-[80px]">
                <Markdown
                  className="text-[11px] text-black leading-relaxed font-sans prose-sm max-w-none"
                  components={{
                    p: ({ children }) => <p className="mb-1 text-[11px]">{children}</p>,
                    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                  }}
                >
                  {DATA.summary}
                </Markdown>
              </div>
              {/* Notepad status bar */}
              <div className="flex gap-0 mt-1">
                <div className="win-sunken flex-1 text-[10px] text-[hsl(var(--muted-foreground))] px-1 py-0.5">
                  Ln 1, Col 1
                </div>
                <div className="win-sunken w-24 text-[10px] text-[hsl(var(--muted-foreground))] px-1 py-0.5">
                  100%
                </div>
                <div className="win-sunken w-24 text-[10px] text-[hsl(var(--muted-foreground))] px-1 py-0.5">
                  Windows (CRLF)
                </div>
              </div>
            </WinWindow>

            {/* Skills Window */}
            <WinWindow title="Skills — System Properties">
              <div className="p-1">
                <div className="win-section-header mb-2">Installed Components</div>
                <div className="win-sunken bg-white p-2">
                  <div className="flex flex-wrap gap-1">
                    {DATA.skills.map((skill) => (
                      <span key={skill} className="win-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {/* fake progress bar */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] text-black whitespace-nowrap">Skill Level:</span>
                  <div className="win-sunken flex-1 h-[14px] bg-white overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        width: "85%",
                        background: "repeating-linear-gradient(90deg, #000080 0px, #000080 8px, #1084d0 8px, #1084d0 16px)",
                      }}
                    />
                  </div>
                  <span className="text-[10px] text-black">85%</span>
                </div>
              </div>
            </WinWindow>

          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4 flex-1 min-w-0">

            {/* Work Experience Window */}
            <WinWindow title="Work Experience — Windows Explorer">
              <div className="p-1">
                {/* toolbar mock */}
                <div className="flex items-center gap-0.5 mb-1 pb-1 border-b border-[hsl(var(--win-shadow))]">
                  <button className="win-btn text-[10px] px-1 py-0.5 min-w-0">File</button>
                  <button className="win-btn text-[10px] px-1 py-0.5 min-w-0">Edit</button>
                  <button className="win-btn text-[10px] px-1 py-0.5 min-w-0">View</button>
                  <button className="win-btn text-[10px] px-1 py-0.5 min-w-0">Help</button>
                </div>
                <div className="flex flex-col gap-1">
                  {DATA.work.map((work) => (
                    <WinResumeCard
                      key={`${work.company}-${work.title}`}
                      logoUrl={work.logoUrl}
                      altText={work.company}
                      title={work.company}
                      subtitle={work.title}
                      href={work.href}
                      badges={work.badges as readonly string[]}
                      period={`${work.start} - ${work.end ?? "Present"}`}
                      description={work.description}
                    />
                  ))}
                </div>
              </div>
            </WinWindow>

            {/* Education Window */}
            <WinWindow title="Education — My Documents">
              <div className="p-1">
                <div className="flex flex-col gap-1">
                  {DATA.education.map((edu) => {
                    const end = "end" in edu ? edu.end : undefined;
                    const period = end ? `${edu.start} - ${end}` : edu.start;
                    return (
                      <WinResumeCard
                        key={edu.school}
                        logoUrl={edu.logoUrl}
                        altText={edu.school}
                        title={edu.school}
                        subtitle={edu.degree}
                        href={edu.href}
                        period={period}
                      />
                    );
                  })}
                </div>
              </div>
            </WinWindow>

            {/* Contact Window */}
            <WinWindow title="Contact — Send Message">
              <div className="p-1">
                <div className="win-section-header mb-2">Get in Touch</div>
                <div className="win-sunken bg-white p-3 text-[11px] text-black">
                  <p className="mb-2">
                    Want to chat? Reach out via email:
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-[hsl(var(--win-shadow))]">To:</span>
                    <div className="win-input flex-1">
                      <a
                        href={`mailto:${DATA.contact.email}`}
                        className="text-blue-700 underline text-[11px]"
                      >
                        {DATA.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mt-2 justify-end">
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className="win-btn text-[11px] no-underline"
                  >
                    Send
                  </a>
                  <button className="win-btn text-[11px]">Cancel</button>
                </div>
              </div>
            </WinWindow>

          </div>
        </div>

        {/* System info footer on desktop */}
        <div className="mt-4 flex items-center gap-2">
          <div className="win-raised bg-[hsl(var(--win-silver))] px-2 py-0.5 text-[10px] text-black flex items-center gap-1">
            <span>Microsoft Windows 2000</span>
            <span className="text-[hsl(var(--win-shadow))]">|</span>
            <span>{DATA.name}</span>
            <span className="text-[hsl(var(--win-shadow))]">|</span>
            <span>Version 5.0.2195</span>
          </div>
        </div>
      </main>

      {/* Taskbar */}
      <WinTaskbar />
    </>
  );
}
