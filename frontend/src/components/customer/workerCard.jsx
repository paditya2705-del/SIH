const WorkerCard = ({ name, role, rating, distance, earnings, accent = "emerald" }) => {
  const accentStyles = {
    emerald: "bg-emerald-50 text-emerald-600",
    sky: "bg-sky-50 text-sky-600",
    violet: "bg-violet-50 text-violet-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="flex h-full min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition duration-150 hover:shadow-md md:p-3.5">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl sm:h-14 sm:w-14 sm:text-2xl ${
          accentStyles[accent] || accentStyles.emerald
        }`}
      >
        {role === "Plumber" ? "🔧" : role === "Electrician" ? "⚡" : "🛠️"}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="truncate text-sm font-semibold text-slate-900 sm:text-base">{name}</h4>
          <span className="rounded-full bg-yellow-50 px-2 py-1 text-[10px] font-semibold text-yellow-700">
            ⭐ {rating}
          </span>
        </div>

        <p className="text-xs text-slate-500 sm:text-sm">{role}</p>

        <div className="mt-2 flex items-center justify-between gap-2 text-[10px] text-slate-500 sm:text-xs">
          <span className="truncate">{distance}</span>
          <span className="shrink-0">{earnings}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;