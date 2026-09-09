import ServiceCard from "../../components/customer/ServiceCard";
import EmergencyCard from "../../components/customer/EmergencyCard";
import WorkerCard from "../../components/customer/workerCard";
import BottomNav from "../../components/navigation/BottomNav";

const CustomerHome = () => {
  const services = [
    { icon: "⚡", name: "Electrical", accent: "amber" },
    { icon: "🔧", name: "Plumbing", accent: "sky" },
    { icon: "🪚", name: "Carpentry", accent: "violet" },
    { icon: "❄️", name: "AC Repair", accent: "indigo" },
    { icon: "🎨", name: "Painting", accent: "rose" },
    { icon: "🧹", name: "Cleaning", accent: "emerald" },
    { icon: "🔨", name: "Appliance", accent: "amber" },
    { icon: "•••", name: "More", accent: "indigo" },
  ];

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

              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm ring-1 ring-slate-200">
                🔔
              </button>
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

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
                {services.map((service) => (
                  <ServiceCard
                    key={service.name}
                    icon={service.icon}
                    name={service.name}
                    accent={service.accent}
                  />
                ))}
              </div>
            </section>

            <EmergencyCard />

            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Trusted workers near you</h2>
                <button className="text-sm font-medium text-indigo-600">View all</button>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-1 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-2 xl:grid-cols-3">
                <div className="min-w-[240px] shrink-0 md:min-w-0">
                  <WorkerCard
                    name="Rahul Verma"
                    role="Plumber"
                    rating="4.9"
                    distance="2.4 km away"
                    earnings="₹450 / visit"
                    accent="emerald"
                  />
                </div>
                <div className="min-w-[240px] shrink-0 md:min-w-0">
                  <WorkerCard
                    name="Amit Singh"
                    role="Electrician"
                    rating="4.8"
                    distance="3.1 km away"
                    earnings="₹520 / visit"
                    accent="amber"
                  />
                </div>
                <div className="min-w-[240px] shrink-0 md:min-w-0">
                  <WorkerCard
                    name="Sonal Rani"
                    role="AC Repair"
                    rating="4.7"
                    distance="4.8 km away"
                    earnings="₹610 / visit"
                    accent="sky"
                  />
                </div>
              </div>
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
