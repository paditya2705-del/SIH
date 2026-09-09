const EmergencyCard = () => {
  return (
    <section className="mb-6 rounded-3xl bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 p-4 text-white shadow-lg shadow-rose-200">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-red-100">
            Emergency
          </p>
          <h3 className="mt-2 text-xl font-bold">Need urgent help?</h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-2xl">
          🚑
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm text-red-50">Response in 15 min</p>
          <p className="text-xs text-red-100">Plumbing • Electrical • AC</p>
        </div>
        <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-rose-600 shadow-sm">
          Book now
        </button>
      </div>
    </section>
  );
};

export default EmergencyCard;