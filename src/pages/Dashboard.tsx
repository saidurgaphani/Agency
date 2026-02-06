import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Users, UserPlus, CreditCard } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { ProfitWidget } from "@/components/dashboard/profit-widget";
import { SessionsWidget } from "@/components/dashboard/sessions-widget";
import { statsData } from "@/data/dashboard-mock-data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  pageviews: <Eye className="w-5 h-5 text-muted-foreground" />,
  "monthly-users": <Users className="w-5 h-5 text-muted-foreground" />,
  "new-signups": <UserPlus className="w-5 h-5 text-muted-foreground" />,
  subscriptions: <CreditCard className="w-5 h-5 text-muted-foreground" />,
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simple auth check - replace with real auth when connecting to Lovable Cloud
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar - Desktop */}
      <div className="hidden lg:block">
        <DashboardSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          onLogout={handleLogout}
        />
      </div>

      {/* Sidebar - Mobile */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="lg:hidden">
            <DashboardSidebar
              collapsed={false}
              onToggle={() => setMobileMenuOpen(false)}
              onLogout={handleLogout}
            />
          </div>
        </>
      )}

      {/* Main Content */}
      <main
        className={cn(
          "transition-all duration-300",
          sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"
        )}
      >
        <DashboardHeader onMenuClick={() => setMobileMenuOpen(true)} />

        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {statsData.map((stat) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                trend={stat.trend}
                icon={iconMap[stat.id]}
              />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Revenue Chart - Takes 2 columns */}
            <div className="xl:col-span-2">
              <RevenueChart />
            </div>

            {/* Side Widgets - Match chart height */}
            <div className="flex flex-col gap-6">
              <ProfitWidget className="flex-1" />
              <SessionsWidget className="flex-1" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
