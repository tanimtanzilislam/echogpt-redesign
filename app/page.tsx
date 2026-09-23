"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Chrome,
  Command,
  Menu,
  MessageSquareText,
  Moon,
  Play,
  Sparkles,
  Sun,
  X,
  Zap
} from "lucide-react";

const models = [
  { name: "GPT-4o", note: "Best for everyday work", color: "#7c5cff", icon: "✦" },
  { name: "Claude 3.5", note: "Thoughtful & articulate", color: "#e07a45", icon: "◈" },
  { name: "Gemini 1.5", note: "Built for long context", color: "#4285f4", icon: "✧" }
];

const features = [
  { icon: Zap, title: "One prompt, every model", text: "Compare answers side-by-side and choose the best response without switching tabs." },
  { icon: Command, title: "AI wherever you work", text: "Bring EchoGPT into your browser with a shortcut. Your workflow stays uninterrupted." },
  { icon: MessageSquareText, title: "Conversations that click", text: "Organize ideas, save your best chats, and find anything with fast, natural search." }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeModel, setActiveModel] = useState(models[0].name);
  const [demoPrompt, setDemoPrompt] = useState("");
  const [sentPrompt, setSentPrompt] = useState("");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function submitDemoPrompt(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const prompt = demoPrompt.trim();
    if (prompt) {
      setSentPrompt(prompt);
      setDemoPrompt("");
    }
  }

  function submitWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setJoined(true);
  }

  return (
    <main id="top">
      <a className="skip-link" href="#features">Skip to content</a>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#" aria-label="EchoGPT home"><span className="brand-mark"><Sparkles size={17} /></span>echogpt<span className="brand-dot">.</span></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#features">Features</a><a href="#models">AI models</a><a href="#extension">Extension</a><a href="#faq">FAQ</a>
          <a className="mobile-cta" href="#cta">Get started <ArrowRight size={15} /></a>
        </div>
        <div className="nav-actions"><button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>{theme === "light" ? <Moon size={15} /> : <Sun size={15} />}</button><a className="login" href="#login">Log in</a><a className="button button-small" href="#cta">Get started <ArrowRight size={15} /></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button></div>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> Your AI, everywhere</div>
          <h1>Think bigger.<br /><em>With every AI.</em></h1>
          <p className="hero-text">EchoGPT brings the world&apos;s most capable AI models into one focused workspace, so you can do your best work without the tab chaos.</p>
          <div className="hero-actions"><a className="button" href="#cta">Start creating free <ArrowRight size={17} /></a><a className="watch-link" href="#preview"><span className="play"><Play size={13} fill="currentColor" /></span> See how it works</a></div>
          <div className="proof"><div className="avatars"><span>AM</span><span>JR</span><span>SK</span><span>+</span></div><span>Join 40,000+ curious minds</span></div>
        </div>
        <div className="hero-visual" aria-label="EchoGPT conversation preview">
          <div className="glow glow-one" /><div className="glow glow-two" />
          <div className="window-card">
            <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>New conversation</span><span className="window-icon">⌘ K</span></div>
            <div className="chat-content"><div className="chat-label">You <span>just now</span></div><p className="question">{sentPrompt || "Give me three fresh angles for a launch campaign."}</p><div className="chat-divider" /><div className="chat-label ai-label"><span className="ai-avatar"><Sparkles size={12} /></span> EchoGPT <span>3 models</span></div><div className="answer-grid">{models.map((model, index) => <div className="answer" key={model.name}><div className="model-name"><span style={{ color: model.color }}>{model.icon}</span>{model.name}<small>{index === 0 ? "Best match" : "View answer"}</small></div><p>{index === 0 ? "Turn the launch into a story your audience wants to be part of — not just another announcement." : index === 1 ? "Make the product the beginning of a conversation. Invite your audience to shape what comes next." : "Lead with the feeling of possibility. Show people what becomes easy when the right tool is in reach."}</p></div>)}</div></div><form className="composer" onSubmit={submitDemoPrompt}><input value={demoPrompt} onChange={(event) => setDemoPrompt(event.target.value)} placeholder="Try a prompt..." aria-label="Try a prompt in the demo" /><button aria-label="Send prompt" type="submit"><ArrowRight size={15} /></button></form>
          </div>
        </div>
      </section>

      <div className="model-strip"><div className="shell strip-inner"><span className="strip-label">Your favorite models, together</span>{models.map(model => <span className="model-pill" key={model.name}><b style={{ color: model.color }}>{model.icon}</b>{model.name}</span>)}<span className="model-pill muted">+ more coming</span></div></div>

      <section className="section shell" id="features"><div className="section-heading"><div><span className="eyebrow">A better way to think</span><h2>Less switching.<br /><em>More making.</em></h2></div><p>Everything you need to move from a spark of an idea to work you&apos;re proud of — all in one calm, considered space.</p></div><div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><a href="#cta">Explore feature <ArrowRight size={14} /></a></article>)}</div></section>

      <section className="models-section shell" id="models"><div className="section-heading"><div><span className="eyebrow">The right perspective</span><h2>Meet your<br /><em>AI team.</em></h2></div><p>Different models shine in different moments. EchoGPT lets you choose the right collaborator without losing your context.</p></div><div className="model-cards">{models.map((model) => <button className={`model-card ${activeModel === model.name ? "selected" : ""}`} key={model.name} onClick={() => setActiveModel(model.name)} aria-pressed={activeModel === model.name}><span className="model-symbol" style={{ color: model.color }}>{model.icon}</span><span><strong>{model.name}</strong><small>{model.note}</small></span><ArrowRight size={16} /></button>)}</div><div className="selected-model-note"><span className="ai-avatar"><Sparkles size={12} /></span><span><b>{activeModel}</b> is ready when you are. Compare it with the rest of your team in a single conversation.</span><a href="#preview">Try the workspace <ArrowRight size={14} /></a></div></section>

      <section className="preview-section" id="preview"><div className="shell preview-layout"><div><span className="eyebrow">Meet your new command center</span><h2>One clear view<br />of <em>what&apos;s possible.</em></h2><p>EchoGPT gives every model a seat at the table. Ask once, see every perspective, and keep the answer that feels right.</p><div className="check-list"><span><Check size={16} /> Compare responses instantly</span><span><Check size={16} /> Keep your context in one place</span><span><Check size={16} /> Pick up where you left off</span></div><a className="text-link" href="#cta">Explore the workspace <ArrowRight size={16} /></a></div><div className="stacked-cards"><div className="stack-card back-card" /><div className="stack-card mid-card" /><div className="stack-card front-card"><div className="mini-top"><span className="ai-avatar"><Sparkles size={11} /></span><span>EchoGPT workspace</span><Moon size={14} /></div><div className="mini-prompt">How do I make my writing more memorable?</div><div className="mini-response"><span className="response-line long" /><span className="response-line" /><span className="response-line short" /></div><div className="mini-footer"><span>GPT-4o · Claude 3.5 · Gemini</span><span className="mini-send"><ArrowRight size={12} /></span></div></div></div></div></section>

      <section className="extension-section shell" id="extension"><div className="extension-copy"><span className="eyebrow">The browser extension</span><h2>Good ideas don&apos;t<br /><em>wait for a new tab.</em></h2><p>Use your favorite AI wherever you are. Highlight text, open the side panel, and keep your momentum going.</p><button className="button" onClick={() => setWorkspaceOpen(true)}><Chrome size={17} /> Preview extension <ArrowRight size={15} /></button></div><div className="extension-demo"><div className="browser-bar"><span className="browser-dot" /><span className="browser-url">yourworkspace.com</span><span>•••</span></div><div className="browser-content"><div className="fake-lines"><span /><span /><span /><span /><span /><span /></div><div className="side-panel"><div className="panel-brand"><span className="brand-mark"><Sparkles size={12} /></span>echogpt<span className="brand-dot">.</span><span className="panel-more">•••</span></div><div className="panel-model"><span style={{ color: "#7c5cff" }}>✦</span> GPT-4o <span>⌄</span></div><div className="panel-prompt">Summarize this page in three key points.<div className="prompt-send"><ArrowRight size={13} /></div></div><div className="panel-answer"><span className="ai-avatar"><Sparkles size={10} /></span><div><b>Here&apos;s the short version</b><span /><span /><span /></div></div></div></div></div></section>

      <section className="faq-section shell" id="faq"><div><span className="eyebrow">Questions, answered</span><h2>Curious?<br /><em>Good.</em></h2></div><div className="faq-list">{["What is EchoGPT?", "Which AI models can I use?", "Is EchoGPT free to use?", "Where can I use the extension?"].map((question, i) => <details key={question} open={i === 0}><summary>{question}<span>+</span></summary><p>EchoGPT brings multiple leading AI models into one simple workspace, helping you compare, create, and find your flow. Start free and see where it takes you.</p></details>)}</div></section>

      <section className="cta-section shell" id="cta"><div className="cta-inner"><div className="cta-spark"><Sparkles size={22} /></div><h2>Your next great idea<br /><em>starts here.</em></h2><p>Join thousands of people thinking, making, and doing more with EchoGPT.</p>{joined ? <p className="success-message" role="status">You&apos;re on the list. We&apos;ll save you a seat.</p> : <form className="waitlist-form" onSubmit={submitWaitlist}><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required aria-label="Email address" /><button className="button button-light" type="submit">Start for free <ArrowRight size={17} /></button></form>}</div></section>
      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark"><Sparkles size={17} /></span>echogpt<span className="brand-dot">.</span></a><span>© 2024 EchoGPT. Made for curious minds.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#twitter">Twitter</a></div></footer>
      {workspaceOpen && <div className="modal-backdrop" role="presentation" onClick={() => setWorkspaceOpen(false)}><section className="workspace-modal" role="dialog" aria-modal="true" aria-labelledby="workspace-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setWorkspaceOpen(false)} aria-label="Close extension preview"><X size={17} /></button><span className="eyebrow">EchoGPT extension</span><h2 id="workspace-title">Bring your<br /><em>best thinking.</em></h2><p>Highlight any text on the web, or open the side panel with <kbd>⌘</kbd> <kbd>J</kbd>. Your next answer is always one shortcut away.</p><div className="modal-shortcuts"><span><kbd>⌘</kbd><kbd>J</kbd> Open side panel</span><span><kbd>⌘</kbd><kbd>Enter</kbd> Send prompt</span></div><button className="button" onClick={() => setWorkspaceOpen(false)}>Got it <ArrowRight size={15} /></button></section></div>}
    </main>
  );
}
