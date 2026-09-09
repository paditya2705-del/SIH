const AdminDashboard = () => {
  const stats = [
    { label: "Bookings", value: "428", trend: "+12%" },
    { label: "Completed", value: "391", trend: "+8%" },
    { label: "Unassigned", value: "12", trend: "-3%" },
    { label: "Complaints", value: "31", trend: "-2%" },
  ];

  const fairnessData = [
    { name: "Plumbing", value: 86 },
    { name: "Electrical", value: 72 },
    { name: "AC", value: 68 },
    { name: "Cleaning", value: 80 },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-24 md:pb-10">
      <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-4 md:px-6 lg:px-8">
        <header className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Operations overview</p>
            <h1 className="text-[24px] font-bold tracking-tight text-slate-900 sm:text-[28px]">Admin</h1>
          </div>

          <button className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
            Export
          </button>
        </header>

        <section className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{stat.value}</h3>
              <p className="mt-1 text-xs font-medium text-emerald-600">{stat.trend}</p>
            </div>
          ))}
        </section>

        <div className="lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:gap-6">
          <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Workforce fairness</h2>
                <span className="text-sm font-medium text-indigo-600">Balanced</span>
              </div>

              <div className="space-y-3">
                {fairnessData.map((item) => (
                  <div key={item.name}>
                    <div className="mb-1 flex items-center justify-between text-xs text-slate-600">
                      <span>{item.name}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Demand forecast</h2>
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-amber-600">
                  Next 7 days
                </span>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>AC repair</span>
                  <span className="font-semibold text-rose-600">↑ 31%</span>
                </div>
                <div className="flex justify-between">
                  <span>Plumbing</span>
                  <span className="font-semibold text-amber-600">↑ 18%</span>
                </div>
                <div className="flex justify-between">
                  <span>Electrical</span>
                  <span className="font-semibold text-indigo-600">↑ 12%</span>
                </div>
                <div className="flex justify-between">
                  <span>Painting</span>
                  <span className="font-semibold text-slate-500">↓ 4%</span>
                </div>
              </div>
            </section>
          </div>

          <aside className="mt-6 lg:mt-0">
            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Intervention alert</h2>
                <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-semibold text-amber-700">
                  Priority
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-600">
                Zone 3 is expected to face an AC technician shortage. Recommend redeploying 3 workers from Zone 2 and scheduling 2 training slots.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
