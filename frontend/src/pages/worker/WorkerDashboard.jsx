const WorkerDashboard = () => {
  const jobs = [
    {
      title: "Kitchen pipe repair",
      time: "10:00 AM",
      distance: "2.4 km",
      pay: "₹450",
      status: "Urgent",
    },
    {
      title: "Bathroom tap fix",
      time: "12:30 PM",
      distance: "3.1 km",
      pay: "₹380",
      status: "Normal",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-24 md:pb-10">
      <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-4 md:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1.4fr_0.9fr] lg:gap-6">
          <div className="space-y-6">
            <header className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Good morning 👋</p>
                <h1 className="text-[24px] font-bold tracking-tight text-slate-900 sm:text-[28px]">Rahul</h1>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Online
              </div>
            </header>

            <section className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-4 text-white shadow-lg shadow-indigo-200 md:p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-100">Earnings today</p>
              <h2 className="mt-2 text-3xl font-bold">₹1,240</h2>
              <div className="mt-4 flex items-center justify-between text-sm text-indigo-100">
                <span>Welfare balance</span>
                <span>₹420</span>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Next job</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">Kitchen pipe repair</h3>
                </div>
                <span className="rounded-full bg-rose-50 px-2 py-1 text-[10px] font-semibold text-rose-600">
                  Urgent
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-slate-500">Time</p>
                  <p className="mt-1 font-semibold text-slate-900">10:00 AM</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-slate-500">Distance</p>
                  <p className="mt-1 font-semibold text-slate-900">2.4 km</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-slate-500">Pay</p>
                  <p className="mt-1 font-semibold text-slate-900">₹450</p>
                </div>
              </div>

              <button className="mt-5 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200">
                Accept job
              </button>
            </section>

            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Available jobs</h2>
                <button className="text-sm font-medium text-indigo-600">View all</button>
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-2">
                {jobs.map((job) => (
                  <div key={job.title} className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm md:p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold text-slate-900">{job.title}</h3>
                      <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                        job.status === "Urgent"
                          ? "bg-rose-50 text-rose-600"
                          : "bg-sky-50 text-sky-600"
                      }`}>
                        {job.status}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-2 text-sm text-slate-500">
                      <span>{job.time}</span>
                      <span>{job.distance}</span>
                      <span className="font-semibold text-slate-900">{job.pay}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="mt-6 space-y-6 lg:mt-0">
            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Fairness status</h2>
                <span className="text-sm font-medium text-indigo-600">78%</span>
              </div>

              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>Allocation fairness</span>
                <span>Healthy</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              </div>
              <p className="mt-3 text-xs text-slate-500">
                You were ranked #2 because another eligible worker had lower recent allocation burden.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Shift summary</p>
              <div className="mt-3 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Jobs matched</span>
                  <strong className="text-slate-900">9</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Acceptance rate</span>
                  <strong className="text-slate-900">92%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Rating</span>
                  <strong className="text-slate-900">4.9</strong>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default WorkerDashboard;
