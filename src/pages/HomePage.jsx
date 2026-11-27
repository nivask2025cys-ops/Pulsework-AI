import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  CallToAction,
  DashboardPreview,
  FeatureList,
  Footer,
  Navbar,
} from '../components/site.jsx'
import { Button } from '../components/ui.jsx'

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section
          id="home"
          className="overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-white"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-4 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1fr_1.04fr] lg:gap-0 lg:px-10 lg:pb-24 lg:pt-20">
            <div className="relative z-10 mx-auto max-w-xl lg:mx-0">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-xs font-medium text-indigo-700 shadow-sm">
                <Sparkles size={14} />
                Your workday, thoughtfully reimagined
              </div>
              <h1 className="text-[2.65rem] font-semibold leading-[1.1] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.6rem]">
                Transform Your Workflow with{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Intelligent AI
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Empower your productivity with PulseWorks-AI. Experience smarter workflows, intelligent automation, and seamless collaboration through next-generation AI technology.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button as={Link} to="/register" className="min-h-12 px-6">
                  Get Started <ArrowRight size={17} />
                </Button>
                <Button
                  as="a"
                  href="#features"
                  variant="secondary"
                  className="min-h-12 px-6"
                >
                  Explore Features
                </Button>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-500 sm:text-sm">
                {['No credit card required', 'Set up in minutes'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check size={15} className="text-emerald-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <DashboardPreview />
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                Everything in sync
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Work flows better from here
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                Thoughtful AI tools that make room for more meaningful work, without adding complexity to your day.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              <FeatureList />
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                A calmer kind of productivity
              </span>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Technology should make work feel more human.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                PulseWorks-AI brings your tools, information, and people together so you can spend less time keeping work moving and more time doing work that matters. We pair practical AI with a simple, secure workspace built around your team.
              </p>
              <Button as={Link} to="/register" variant="secondary" className="mt-6">
                Meet your new workspace <ArrowRight size={16} />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: 'One place', label: 'for your team’s work' },
                { value: 'Less busywork', label: 'more room to create' },
                { value: 'Built for teams', label: 'that work together' },
                { value: 'AI with purpose', label: 'thoughtful by design' },
              ].map((item) => (
                <div key={item.value} className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-6">
                  <p className="text-base font-semibold text-slate-900 sm:text-lg">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
