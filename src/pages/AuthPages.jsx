import { useState } from 'react'
import { Eye, EyeOff, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Brand } from '../components/site.jsx'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Input,
  Label,
} from '../components/ui.jsx'

function AuthLayout({ children, subtitle }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute -left-32 top-[-7rem] size-80 rounded-full bg-indigo-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-[-8rem] size-96 rounded-full bg-violet-200/50 blur-3xl" />
      <div className="relative w-full max-w-[440px]">
        <div className="mb-7 flex flex-col items-center text-center">
          <Brand />
          <p className="mt-4 text-sm text-slate-500">{subtitle}</p>
        </div>
        <Card className="rounded-2xl border-slate-200/80 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.2)]">
          {children}
        </Card>
        <p className="mt-6 text-center text-xs text-slate-400">
          <Sparkles className="mr-1 inline-block text-indigo-400" size={13} />
          Thoughtful tools for your best work.
        </p>
      </div>
    </main>
  )
}

function FormField({ id, label, error, children }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

function PasswordInput({ id, value, onChange, autoComplete, error }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative">
      <Input
        id={id}
        name={id}
        type={visible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder="••••••••"
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="pr-12"
      />
      <button
        type="button"
        onClick={() => setVisible((shown) => !shown)}
        className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-slate-400 transition hover:text-slate-700"
        aria-label={visible ? 'Hide password' : 'Show password'}
      >
        {visible ? <EyeOff size={17} /> : <Eye size={17} />}
      </button>
    </div>
  )
}

function FormNotice({ children }) {
  if (!children) return null
  return (
    <p
      className="rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-3 text-xs leading-5 text-amber-800"
      role="status"
    >
      {children}
    </p>
  )
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function LoginPage() {
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  function update(field) {
    return (event) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      setErrors((current) => ({ ...current, [field]: '' }))
      setNotice('')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!values.email.trim()) nextErrors.email = 'Enter your email address.'
    else if (!validateEmail(values.email)) nextErrors.email = 'Enter a valid email address.'
    if (!values.password) nextErrors.password = 'Enter your password.'
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setNotice('Your details are valid. Connect an authentication provider to enable sign-in.')
    }
  }

  return (
    <AuthLayout subtitle="Sign in to continue to PulseWorks-AI.">
      <CardHeader className="px-6 pt-7 sm:px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-950">Welcome Back</h1>
        <p className="mt-1.5 text-sm text-slate-500">Good to see you again. Let&apos;s get to work.</p>
      </CardHeader>
      <CardContent className="px-6 pb-7 sm:px-8">
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <FormField id="email" label="Email address" error={errors.email}>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={update('email')}
              placeholder="you@company.com"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
          </FormField>
          <FormField id="password" label="Password" error={errors.password}>
            <PasswordInput
              id="password"
              value={values.password}
              onChange={update('password')}
              autoComplete="current-password"
              error={errors.password}
            />
          </FormField>
          <div className="flex items-center justify-between gap-3">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <Checkbox
                name="remember"
              />
              Remember me
            </label>
            <a
              href="mailto:hello@pulseworks.ai?subject=Password%20reset"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Forgot password?
            </a>
          </div>
          <FormNotice>{notice}</FormNotice>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-700">
            Create one
          </Link>
        </p>
      </CardContent>
    </AuthLayout>
  )
}

function getPasswordStrength(password) {
  return [
    password.length >= 8,
    /[A-Z]/.test(password) && /[a-z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length
}

const strengthNames = ['', 'Weak', 'Fair', 'Good', 'Strong']
const strengthColors = ['', 'bg-red-400', 'bg-amber-400', 'bg-lime-500', 'bg-emerald-500']

export function RegisterPage() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')
  const strength = getPasswordStrength(values.password)

  function update(field) {
    return (event) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      setErrors((current) => ({ ...current, [field]: '' }))
      setNotice('')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Enter your full name.'
    if (!values.email.trim()) nextErrors.email = 'Enter your email address.'
    else if (!validateEmail(values.email)) nextErrors.email = 'Enter a valid email address.'
    if (!values.password) nextErrors.password = 'Create a password.'
    else if (values.password.length < 8) nextErrors.password = 'Use at least 8 characters.'
    if (!values.confirmPassword) nextErrors.confirmPassword = 'Confirm your password.'
    else if (values.confirmPassword !== values.password) {
      nextErrors.confirmPassword = 'Passwords do not match.'
    }
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setNotice('Your details are valid. Connect an authentication provider to create an account.')
    }
  }

  return (
    <AuthLayout subtitle="Join PulseWorks-AI and experience smarter productivity.">
      <CardHeader className="px-6 pt-7 sm:px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-950">Create Your Account</h1>
        <p className="mt-1.5 text-sm text-slate-500">A smarter, calmer workday starts here.</p>
      </CardHeader>
      <CardContent className="px-6 pb-7 sm:px-8">
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <FormField id="name" label="Full name" error={errors.name}>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={update('name')}
              placeholder="Alex Morgan"
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
          </FormField>
          <FormField id="email" label="Email address" error={errors.email}>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={update('email')}
              placeholder="you@company.com"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
          </FormField>
          <FormField id="password" label="Password" error={errors.password}>
            <PasswordInput
              id="password"
              value={values.password}
              onChange={update('password')}
              autoComplete="new-password"
              error={errors.password}
            />
            {values.password && (
              <div className="mt-2" aria-live="polite">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((step) => (
                    <span
                      key={step}
                      className={`h-1 flex-1 rounded-full ${step <= strength ? strengthColors[strength] : 'bg-slate-100'}`}
                    />
                  ))}
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  Password strength: {strengthNames[strength] || 'Very weak'}
                </p>
              </div>
            )}
          </FormField>
          <FormField
            id="confirmPassword"
            label="Confirm password"
            error={errors.confirmPassword}
          >
            <PasswordInput
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={update('confirmPassword')}
              autoComplete="new-password"
              error={errors.confirmPassword}
            />
          </FormField>
          <FormNotice>{notice}</FormNotice>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
        <p className="mt-5 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-700">
            Sign in
          </Link>
        </p>
      </CardContent>
    </AuthLayout>
  )
}
