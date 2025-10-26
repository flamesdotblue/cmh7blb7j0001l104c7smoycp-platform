import { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';

export default function AuthModals({ mode, onClose, onSignIn, onSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localMode, setLocalMode] = useState(mode);

  useEffect(() => {
    setLocalMode(mode);
    if (mode) {
      setEmail('');
      setPassword('');
    }
  }, [mode]);

  const title = useMemo(() => (localMode === 'signup' ? 'Create account' : 'Sign in'), [localMode]);

  if (!mode) return null;

  const submit = (e) => {
    e.preventDefault();
    if (localMode === 'signin') onSignIn(email);
    if (localMode === 'signup') onSignUp(email);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div onClick={onClose} className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-md mx-auto mt-28 rounded-2xl border border-white/10 bg-neutral-950 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="rounded-md p-2 hover:bg-white/5"><X size={18} /></button>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-neutral-900 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400"
              placeholder="you@starkindustries.com"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md bg-neutral-900 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full rounded-md bg-emerald-400 text-neutral-900 font-semibold px-4 py-2 hover:bg-emerald-300">
            {localMode === 'signin' ? 'Sign in' : 'Create account'}
          </button>
          <p className="text-center text-sm text-neutral-400">
            {localMode === 'signin' ? (
              <>
                New here?{' '}
                <button type="button" className="text-emerald-300 hover:text-emerald-200" onClick={() => setLocalMode('signup')}>
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button type="button" className="text-emerald-300 hover:text-emerald-200" onClick={() => setLocalMode('signin')}>
                  Sign in instead
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
