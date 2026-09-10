import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../features/auth/authThunks';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error, isAuthenticated, user } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: 'Aditya User',
    email: 'newuser@example.com',
    password: 'password123',
    role: 'CUSTOMER',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(form)).then((result) => {
      if (registerUser.fulfilled.match(result)) {
        const rolePath = result.payload.user.role.toLowerCase();
        navigate(`/${rolePath}`);
      }
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-md rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-6 text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-700">
            <span>🤝</span>
            ShramSetu
          </div>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Create account</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Join today</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Role</label>
            <select
              value={form.role}
              onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none"
            >
              <option value="CUSTOMER">Customer</option>
              <option value="WORKER">Worker</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none"
            />
          </div>

          {error && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 disabled:opacity-60"
          >
            {status === 'loading' ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-indigo-600">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
