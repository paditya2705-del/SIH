const BookingConfirmation = () => {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <div className="mx-auto max-w-md px-4 py-5">
        <header className="mb-5 flex items-center justify-between">
          <button className="text-xl text-slate-600">←</button>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Booking
          </p>
          <div className="w-6" />
        </header>

        <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-600">Confirmed</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Your job is booked</h2>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white">
              ✓
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Service</p>
                <p className="font-semibold text-slate-900">Kitchen tap repair</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                On the way
              </span>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              🔧
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900">Rahul Verma</h3>
              <p className="text-sm text-slate-500">Plumber • 4.9 rating</p>
            </div>
            <span className="rounded-full bg-yellow-50 px-2 py-1 text-[10px] font-semibold text-yellow-700">
              ⭐ 4.9
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="text-slate-500">ETA</p>
              <p className="mt-1 font-semibold text-slate-900">12 mins</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="text-slate-500">Payment</p>
              <p className="mt-1 font-semibold text-slate-900">₹530</p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Booking summary</h3>

          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Service charge</span>
              <span>₹450</span>
            </div>
            <div className="flex justify-between">
              <span>Urgency fee</span>
              <span>₹80</span>
            </div>
            <div className="flex justify-between">
              <span>Welfare contribution</span>
              <span>₹42</span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-3 font-semibold text-slate-900">
              <span>Total</span>
              <span>₹572</span>
            </div>
          </div>
        </section>

        <button className="mt-6 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200">
          Track job
        </button>
      </div>
    </main>
  );
};

export default BookingConfirmation;
