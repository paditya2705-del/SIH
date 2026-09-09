import { useMemo, useState } from "react";

const serviceOptions = [
  "Plumbing",
  "Electrical",
  "AC Repair",
  "Cleaning",
  "Carpentry",
  "Painting",
];

const urgencyOptions = ["Today", "This week", "Flexible"];

const workers = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Plumber",
    rating: 4.9,
    distance: "2.4 km away",
    earnings: "₹450 / visit",
    fairness: "FairMatch: #1",
    reason: "Best skill match + low recent workload",
    availability: "Available now",
  },
  {
    id: 2,
    name: "Amit Singh",
    role: "Electrician",
    rating: 4.8,
    distance: "3.1 km away",
    earnings: "₹520 / visit",
    fairness: "FairMatch: #2",
    reason: "Strong skill match, balanced allocation",
    availability: "Available in 20 min",
  },
  {
    id: 3,
    name: "Sonal Rani",
    role: "AC Repair",
    rating: 4.7,
    distance: "4.8 km away",
    earnings: "₹610 / visit",
    fairness: "FairMatch: #3",
    reason: "Good match with wage floor protected",
    availability: "Available in 35 min",
  },
];

const BookingFlow = () => {
  const [selectedService, setSelectedService] = useState("Plumbing");
  const [selectedUrgency, setSelectedUrgency] = useState("Today");
  const [selectedWorker, setSelectedWorker] = useState(workers[0]);

  const total = useMemo(() => {
    const base = 450;
    const urgencyFee = selectedUrgency === "Today" ? 80 : selectedUrgency === "This week" ? 40 : 0;
    return base + urgencyFee;
  }, [selectedUrgency]);

  return (
    <main className="min-h-screen bg-slate-50 pb-28">
      <div className="mx-auto max-w-md px-4 py-5">
        <header className="mb-5 flex items-center justify-between">
          <button className="text-xl text-slate-600">←</button>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Book service
          </p>
          <div className="w-6" />
        </header>

        <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Describe your issue
          </label>
          <textarea
            rows={4}
            defaultValue="Kitchen tap is leaking and water pressure is low. Need a quick repair today."
            className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 outline-none focus:border-indigo-400"
          />

          <div className="mt-4">
            <p className="mb-2 text-sm font-medium text-slate-700">Service type</p>
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedService(option)}
                  className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                    selectedService === option
                      ? "border-indigo-600 bg-indigo-600 text-white"
                      : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-sm font-medium text-slate-700">Urgency</p>
            <div className="flex gap-2">
              {urgencyOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedUrgency(option)}
                  className={`flex-1 rounded-xl border px-3 py-2 text-xs font-medium ${
                    selectedUrgency === option
                      ? "border-rose-500 bg-rose-50 text-rose-600"
                      : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Best workers for you</h2>
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
              FairDispatch ON
            </span>
          </div>

          <div className="space-y-3">
            {workers.map((worker) => {
              const isSelected = selectedWorker.id === worker.id;

              return (
                <button
                  key={worker.id}
                  onClick={() => setSelectedWorker(worker)}
                  className={`w-full rounded-3xl border p-3 text-left shadow-sm transition ${
                    isSelected
                      ? "border-indigo-500 bg-indigo-50 shadow-indigo-100"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-xl">
                      {worker.role === "Plumber" ? "🔧" : worker.role === "Electrician" ? "⚡" : "🛠️"}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="truncate font-semibold text-slate-900">{worker.name}</h3>
                        <span className="rounded-full bg-yellow-50 px-2 py-1 text-[10px] font-medium text-yellow-700">
                          ⭐ {worker.rating}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">{worker.role}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>{worker.distance}</span>
                    <span>{worker.availability}</span>
                  </div>

                  <div className="mt-3 rounded-2xl bg-white/60 p-2 text-xs text-slate-600">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-indigo-600">{worker.fairness}</span>
                      <span>{worker.earnings}</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500">{worker.reason}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Estimate</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">₹{total}</h3>
            </div>
            <div className="rounded-full bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700">
              Worker floor protected
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Service charge</span>
              <span>₹450</span>
            </div>
            <div className="flex justify-between">
              <span>Urgency fee</span>
              <span>₹{selectedUrgency === "Today" ? 80 : selectedUrgency === "This week" ? 40 : 0}</span>
            </div>
            <div className="flex justify-between">
              <span>Cooperative welfare</span>
              <span>₹{Math.round(total * 0.08)}</span>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
            <p className="font-medium text-slate-800">Allocation reason</p>
            <p className="mt-1">
              {selectedWorker.name} was ranked highest because of skill match, location, and low recent allocation burden.
            </p>
          </div>

          <button className="mt-5 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200">
            Confirm booking
          </button>
        </section>
      </div>
    </main>
  );
};

export default BookingFlow;
