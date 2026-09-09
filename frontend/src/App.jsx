import { useState } from "react";
import CustomerHome from "./pages/customer/CustomerHome";
import WorkerDashboard from "./pages/worker/WorkerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

const App = () => {
  const [selectedRole, setSelectedRole] = useState("customer");

  const roles = [
    { key: "customer", label: "Customer" },
    { key: "worker", label: "Worker" },
    { key: "admin", label: "Admin" },
  ];

  const renderRoleScreen = () => {
    switch (selectedRole) {
      case "customer":
        return <CustomerHome />;
      case "worker":
        return <WorkerDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <CustomerHome />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-3 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white/90 px-2 py-2 shadow-sm backdrop-blur-sm sm:px-3">
          <div className="ml-auto w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[520px]">
            <div className="flex gap-2 rounded-2xl bg-slate-100 p-1">
              {roles.map((role) => (
                <button
                  key={role.key}
                  onClick={() => setSelectedRole(role.key)}
                  className={`flex-1 rounded-xl px-3 py-2 text-sm font-medium transition ${
                    selectedRole === role.key
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {renderRoleScreen()}
    </div>
  );
};

export default App;
