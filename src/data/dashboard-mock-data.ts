// Dashboard Mock Data
// Replace this with real data from your backend when connecting to Lovable Cloud

export const statsData = [
  {
    id: "pageviews",
    title: "Pageviews",
    value: "50.8K",
    change: 28.4,
    trend: "up" as const,
  },
  {
    id: "monthly-users",
    title: "Monthly Users",
    value: "23.6K",
    change: 12.6,
    trend: "up" as const,
  },
  {
    id: "new-signups",
    title: "New Sign Ups",
    value: "756",
    change: -3.2,
    trend: "down" as const,
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    value: "2,573",
    change: 11.9,
    trend: "up" as const,
  },
];

export const revenueData = [
  { month: "Jan", revenue: 18000, expenses: 12000 },
  { month: "Feb", revenue: 22000, expenses: 14000 },
  { month: "Mar", revenue: 19000, expenses: 11000 },
  { month: "Apr", revenue: 28000, expenses: 15000 },
  { month: "May", revenue: 24000, expenses: 13000 },
  { month: "Jun", revenue: 32000, expenses: 18000 },
  { month: "Jul", revenue: 29000, expenses: 16000 },
  { month: "Aug", revenue: 35000, expenses: 19000 },
  { month: "Sep", revenue: 31000, expenses: 17000 },
  { month: "Oct", revenue: 38000, expenses: 21000 },
  { month: "Nov", revenue: 42000, expenses: 23000 },
  { month: "Dec", revenue: 45000, expenses: 25000 },
];

export const profitData = [
  { month: "Jan", value: 6000 },
  { month: "Feb", value: 8000 },
  { month: "Mar", value: 8000 },
  { month: "Apr", value: 13000 },
  { month: "May", value: 11000 },
  { month: "Jun", value: 14000 },
];

export const sessionsData = [
  { day: "Mon", value: 1200 },
  { day: "Tue", value: 1800 },
  { day: "Wed", value: 1400 },
  { day: "Thu", value: 2200 },
  { day: "Fri", value: 1900 },
  { day: "Sat", value: 2400 },
  { day: "Sun", value: 2100 },
];

export const sidebarNavItems = [
  { title: "Dashboard", icon: "LayoutDashboard", href: "/dashboard", active: true },
  { title: "Analytics", icon: "BarChart3", href: "#" },
  { title: "Projects", icon: "FolderKanban", href: "#" },
  { title: "Team", icon: "Users", href: "#" },
  { title: "Messages", icon: "MessageSquare", href: "#" },
  { title: "Settings", icon: "Settings", href: "#" },
];
