import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  FolderKanban,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  onLogout: () => void;
}

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Analytics", icon: BarChart3, href: "#" },
  { title: "Projects", icon: FolderKanban, href: "#" },
  { title: "Team", icon: Users, href: "#" },
  { title: "Messages", icon: MessageSquare, href: "#" },
  { title: "Settings", icon: Settings, href: "#" },
];

export const DashboardSidebar = ({ collapsed, onToggle, onLogout }: DashboardSidebarProps) => {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-background border-r border-border transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!collapsed && (
          <Link to="/">
            <img src={logo} alt="Logo" className="w-full h-auto max-w-[120px]" />
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={cn("h-8 w-8 text-muted-foreground hover:text-foreground", collapsed && "mx-auto")}
        >
          {collapsed ? <PanelLeft className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.title}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all",
                isActive
                  ? "bg-white/10 text-foreground"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.title}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <button
          onClick={onLogout}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-xl w-full transition-all",
            "text-muted-foreground hover:bg-white/5 hover:text-foreground"
          )}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
};
