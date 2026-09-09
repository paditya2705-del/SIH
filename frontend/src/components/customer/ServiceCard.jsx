const ServiceCard = ({ icon, name, accent = "indigo" }) => {
  const accentStyles = {
    indigo: "bg-indigo-50 text-indigo-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
    sky: "bg-sky-50 text-sky-600",
    violet: "bg-violet-50 text-violet-600",
  };

  return (
    <button className="flex min-w-0 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm transition duration-150 active:scale-[0.98] hover:shadow-md sm:p-3">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg sm:h-11 sm:w-11 sm:text-xl ${accentStyles[accent] || accentStyles.indigo}`}
      >
        {icon}
      </span>
      <span className="text-[10px] font-medium text-slate-700 sm:text-[11px]">{name}</span>
    </button>
  );
};

export default ServiceCard;
