import Link from 'next/link'
import { Home, Calendar, Package, Settings, Users, DollarSign, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Overview', href: '/dashboard', icon: Home },
  { name: 'Appointments', href: '/dashboard/appointments', icon: Calendar },
  { name: 'Services', href: '/dashboard/services', icon: Package },
  { name: 'Products', href: '/dashboard/inventory', icon: Package },
  { name: 'Customers', href: '/dashboard/customers', icon: Users },
  { name: 'Revenue', href: '/dashboard/revenue', icon: DollarSign },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function DashboardNav() {
  return (
    <aside className="hidden w-64 bg-white border-r lg:block">
      <div className="p-6">
        <h2 className="text-lg font-semibold">AutoElite Dashboard</h2>
        <p className="text-sm text-gray-500">Admin Panel</p>
      </div>
      <nav className="px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-gray-100",
                "text-gray-700 hover:text-gray-900"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}