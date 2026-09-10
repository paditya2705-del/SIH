import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import CustomerHome from '../pages/customer/CustomerHome';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import AdminDashboard from '../pages/admin/AdminDashboard';
import WorkerDashboard from '../pages/worker/WorkerDashboard';

const AppLanding = () => (
  <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
    <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
        <span>🤝</span>
        ShramSetu
      </div>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">Trusted local work</h1>
      <p className="mt-2 text-sm text-slate-600">Connect people to skilled help, transparent pricing, and dependable jobs.</p>
      <div className="mt-6 space-y-3">
        <a href="/login" className="block rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-slate-800">
          Login
        </a>
        <a href="/register" className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">
          Register
        </a>
      </div>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLanding />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    element: <ProtectedRoute allowedRoles={['CUSTOMER', 'WORKER', 'ADMIN']} />,
    children: [
      {
        path: '/customer',
        element: <CustomerHome />,
      },
      {
        path: '/worker',
        element: <WorkerDashboard />,
      },
      {
        path: '/admin',
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default router;
