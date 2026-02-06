import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export const DashboardHeader = ({ onMenuClick }: DashboardHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-foreground text-xl font-semibold">Dashboard</h1>
            <p className="text-muted-foreground text-sm hidden sm:block">Welcome back! Here's what's happening.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-9 w-64 bg-white/5 border-border focus:border-foreground"
            />
          </div>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:text-foreground"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>

          {/* User Avatar */}
          <div className="w-9 h-9 rounded-full bg-zinc-700 flex items-center justify-center">
            <span className="text-sm font-medium text-white">JS</span>
          </div>
        </div>
      </div>
    </header>
  );
};
