const BottomNav = () => {
  const items = [
    { label: "Home", icon: "🏠", active: true },
    { label: "Bookings", icon: "📅" },
    { label: "Wallet", icon: "💳" },
    { label: "Profile", icon: "👤" },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md border-t border-slate-200 bg-white/95 px-3 py-2.5 backdrop-blur-sm md:hidden">
      <div className="grid grid-cols-4 gap-2">
        {items.map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[10px] font-medium transition ${
              item.active ? "text-indigo-600" : "text-slate-500"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="leading-none">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;