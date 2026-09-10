import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ServiceCard from "../../components/customer/ServiceCard";
import EmergencyCard from "../../components/customer/EmergencyCard";
import WorkerCard from "../../components/customer/workerCard";
import BottomNav from "../../components/navigation/BottomNav";
import { logoutUser } from '../../features/auth/authThunks';
import { fetchNotifications } from '../../features/notifications/notificationThunks';
import { fetchServices } from '../../features/services/serviceThunks';
import { fetchNearbyWorkers } from '../../features/workers/workerThunks';

const CustomerHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: services, status, error } = useSelector((state) => state.services);
  const {
    nearbyWorkers,
    nearbyStatus,
    nearbyError,
  } = useSelector((state) => state.workers);
  const { unreadCount, status: notificationStatus } = useSelector((state) => state.notifications);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchServices());
    }
    if (nearbyStatus === 'idle') {
      dispatch(fetchNearbyWorkers());
    }
    if (notificationStatus === 'idle') {
      dispatch(fetchNotifications());
    }
  }, [dispatch, status, nearbyStatus, notificationStatus]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-24 md:pb-10">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6">
          <div className="space-y-6 lg:min-w-0">
            <header className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Good morning 👋</p>
                <h1 className="text-[24px] font-bold tracking-tight text-slate-900 sm:text-[28px]">
                  Aditya
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm ring-1 ring-slate-200">
                  <span>🔔</span>
                  {unreadCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                      {unreadCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={handleLogout}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm"
                >
                  Logout
                </button>
              </div>
            </header>

            <section>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm ring-1 ring-slate-100 sm:px-4">
                <span className="text-lg text-slate-400">🔎</span>
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
            </section>

            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">What do you need?</h2>
                <button className="text-sm font-medium text-indigo-600">See all</button>
              </div>

              {status === 'loading' ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="h-20 animate-pulse rounded-2xl bg-slate-200" />
                  ))}
                </div>
              ) : status === 'failed' ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                  {error || 'Services could not be loaded.'}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.id || service.name}
                      icon={service.icon}
                      name={service.name}
                      accent={service.accent}
                    />
                  ))}
                </div>
              )}
            </section>

            <EmergencyCard />

            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Trusted workers near you</h2>
                <button className="text-sm font-medium text-indigo-600">View all</button>
              </div>

              {nearbyStatus === 'loading' ? (
                <div className="flex gap-3 overflow-x-auto pb-1 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-2 xl:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="h-28 min-w-[240px] shrink-0 animate-pulse rounded-2xl bg-slate-200 md:min-w-0" />
                  ))}
                </div>
              ) : nearbyStatus === 'failed' ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                  {nearbyError || 'Workers could not be loaded.'}
                </div>
              ) : (
                <div className="flex gap-3 overflow-x-auto pb-1 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-2 xl:grid-cols-3">
                  {nearbyWorkers.map((worker) => (
                    <div key={worker.id} className="min-w-[240px] shrink-0 md:min-w-0">
                      <WorkerCard
                        name={worker.name}
                        role={worker.role}
                        rating={String(worker.rating)}
                        distance={worker.distanceLabel}
                        earnings={worker.earnings}
                        accent={worker.accent}
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="mt-6 lg:mt-0 lg:min-w-0">
            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                    Active booking
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">Kitchen tap repair</h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  On the way
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-3">
                <div>
                  <p className="text-sm text-slate-500">Technician</p>
                  <p className="font-semibold text-slate-900">Rahul Verma</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">ETA</p>
                  <p className="font-semibold text-slate-900">12 mins</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>

      <BottomNav />
    </main>
  );
};

export default CustomerHome;
