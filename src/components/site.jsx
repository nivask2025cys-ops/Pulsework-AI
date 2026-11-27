import { useState } from 'react'
import {
  ArrowUpRight,
  BrainCircuit,
  Camera,
  Check,
  Code2,
  ChevronRight,
  Clock3,
  Layers3,
  LockKeyhole,
  Menu,
  MessageSquareText,
  Sparkles,
  TrendingUp,
  UsersRound,
  Workflow,
  X,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button, Card } from './ui.jsx'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Brand({ light = false }) {
  return (
    <Link
      to="/"
      aria-label="PulseWorks AI home"
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight ${light ? 'text-white' : 'text-slate-950'}`}
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
        <Sparkles size={19} strokeWidth={2.2} />
      </span>
      <span className="text-[17px]">
        PulseWorks<span className="text-indigo-600">-AI</span>
      </span>
    </Link>
  )
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100/80 bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        <Brand />
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Button as={Link} to="/login" variant="subtle">
            Log in
          </Button>
          <Button as={Link} to="/register" className="px-4">
            Get started <ArrowUpRight size={16} />
          </Button>
        </div>
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <Button as={Link} to="/login" variant="secondary">
                Log in
              </Button>
              <Button as={Link} to="/register">
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

const features = [
  {
    title: 'AI-powered automation',
    description: 'Automate the busywork and give your best ideas more room to grow.',
    icon: Zap,
    tone: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Smart workflow management',
    description: 'Bring every project, process, and priority together in one place.',
    icon: Workflow,
    tone: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Intelligent insights',
    description: 'Turn complex information into clear, confident next steps.',
    icon: BrainCircuit,
    tone: 'bg-violet-50 text-violet-600',
  },
  {
    title: 'Real-time collaboration',
    description: 'Keep your team aligned with conversations right where work happens.',
    icon: MessageSquareText,
    tone: 'bg-sky-50 text-sky-600',
  },
  {
    title: 'Secure by design',
    description: 'Your work stays protected with privacy at the heart of every feature.',
    icon: LockKeyhole,
    tone: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Productivity analytics',
    description: 'See progress clearly, celebrate momentum, and keep improving.',
    icon: TrendingUp,
    tone: 'bg-rose-50 text-rose-600',
  },
]

export function FeatureCard({ feature }) {
  const Icon = feature.icon

  return (
    <Card className="group h-full rounded-2xl border-slate-200/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/[0.05]">
      <div className={`mb-5 flex size-12 items-center justify-center rounded-2xl ${feature.tone}`}>
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3 className="mb-2 text-base font-semibold tracking-tight text-slate-900">
        {feature.title}
      </h3>
      <p className="text-sm leading-6 text-slate-500">{feature.description}</p>
    </Card>
  )
}

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[570px] px-3 pb-5 pt-4 sm:px-8">
      <div className="absolute -left-2 top-10 size-28 rounded-full bg-indigo-200/60 blur-3xl" />
      <div className="absolute -right-2 bottom-8 size-36 rounded-full bg-violet-200/70 blur-3xl" />
      <Card className="relative overflow-hidden rounded-[22px] border-white/80 bg-white p-3 shadow-[0_30px_90px_-28px_rgba(54,58,120,0.28)] sm:p-4">
        <div className="flex items-center justify-between border-b border-slate-100 px-2 pb-3 sm:px-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Layers3 size={16} />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-900">Workspace</p>
              <p className="text-[10px] text-slate-400">Monday, October 21</p>
            </div>
          </div>
          <div className="flex -space-x-2">
            {['bg-orange-300', 'bg-violet-300', 'bg-sky-300'].map((color, i) => (
              <span
                key={color}
                className={`flex size-7 items-center justify-center rounded-full border-2 border-white ${color} text-[9px] font-bold text-white`}
                aria-label={`Team member ${i + 1}`}
              >
                {['A', 'J', 'M'][i]}
              </span>
            ))}
            <span className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[8px] font-semibold text-slate-500">
              +4
            </span>
          </div>
        </div>
        <div className="grid gap-3 p-1 pt-3 sm:grid-cols-[1.4fr_1fr] sm:p-2 sm:pt-4">
          <div className="rounded-xl bg-slate-50 p-3 sm:p-4">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-[11px] font-semibold text-slate-700">Weekly productivity</p>
                <p className="mt-1 text-[10px] text-slate-400">Your team is on a roll</p>
              </div>
              <span className="rounded-md bg-emerald-50 px-1.5 py-1 text-[9px] font-semibold text-emerald-600">
                +18.4%
              </span>
            </div>
            <div className="flex h-[106px] items-end justify-between gap-2 border-b border-l border-slate-200 px-2">
              {[34, 52, 43, 69, 58, 84, 72].map((height, index) => (
                <div
                  key={index}
                  className={`w-full rounded-t-md ${index === 5 ? 'bg-indigo-500' : 'bg-indigo-200'}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between px-1 pt-2 text-[9px] text-slate-400">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl bg-indigo-600 p-3.5 text-white sm:p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] text-indigo-100">Tasks completed</span>
                <Check size={14} className="text-indigo-200" />
              </div>
              <p className="text-2xl font-semibold">128</p>
              <p className="mt-1 text-[9px] text-indigo-100">Looking good this week</p>
            </div>
            <div className="flex-1 rounded-xl border border-slate-100 p-3.5 sm:p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  <Sparkles size={14} />
                </span>
                <span className="text-[10px] font-semibold text-slate-700">AI assistant</span>
              </div>
              <p className="text-[10px] leading-4 text-slate-500">
                Your team saved <strong className="text-slate-700">6.5 hours</strong> with automation this week.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-1 mt-1 flex items-center gap-2 rounded-xl border border-slate-100 px-3 py-2.5 sm:mx-2">
          <span className="flex size-6 items-center justify-center rounded-full bg-amber-50 text-amber-500">
            <Clock3 size={12} />
          </span>
          <p className="text-[10px] text-slate-500">
            <strong className="text-slate-700">Project launch</strong> · Design review starts in 30 minutes
          </p>
          <ChevronRight className="ml-auto shrink-0 text-slate-400" size={14} />
        </div>
      </Card>
      <div className="absolute -bottom-1 right-0 hidden items-center gap-2 rounded-xl border border-white bg-white px-3 py-2 shadow-lg shadow-indigo-950/10 sm:flex">
        <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
          <TrendingUp size={15} />
        </span>
        <div>
          <p className="text-[9px] text-slate-400">Team efficiency</p>
          <p className="text-xs font-semibold text-slate-800">Up 24% this month</p>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10 lg:py-16">
        <div>
          <Brand light />
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            A little more clarity. A lot more momentum. Make your everyday work feel effortless.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { label: 'Instagram', Icon: Camera },
              { label: 'Facebook', Icon: UsersRound },
              { label: 'GitHub', Icon: Code2 },
            ].map(({ label, Icon }) => (
              <a
                key={label}
                href="https://example.com"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">Explore</h2>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a className="hover:text-white" href="#home">Home</a></li>
            <li><a className="hover:text-white" href="#features">Features</a></li>
            <li><a className="hover:text-white" href="#about">About us</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">Say hello</h2>
          <p className="text-sm leading-6 text-slate-400">
            Questions or just want to chat?
            <br />
            <a className="text-indigo-300 hover:text-white" href="mailto:hello@pulseworks.ai">
              hello@pulseworks.ai
            </a>
            <br />
            123 Innovation Drive, San Francisco, CA
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} PulseWorks-AI. All rights reserved.</p>
          <p>Made for people who make things happen.</p>
        </div>
      </div>
    </footer>
  )
}

export function FeatureList() {
  return features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)
}

export function CallToAction() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-indigo-600 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="absolute -left-12 -top-20 size-64 rounded-full border border-white/10" />
        <div className="absolute -right-10 -bottom-32 size-80 rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-2xl">
          <span className="mx-auto mb-4 flex size-11 items-center justify-center rounded-2xl bg-white/15 text-indigo-50">
            <Sparkles size={21} />
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to Work Smarter?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-indigo-100 sm:text-base">
            Your next great idea deserves a better workflow. Let&apos;s make it happen.
          </p>
          <Button
            as={Link}
            to="/register"
            className="mt-7 bg-white text-indigo-700 hover:bg-indigo-50"
          >
            Get Started Today <ArrowUpRight size={17} />
          </Button>
        </div>
      </div>
    </section>
  )
}

