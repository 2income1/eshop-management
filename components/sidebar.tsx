"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  BarChart3,
  Activity,
  Users,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Warehouse,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "数据监控",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "商品管理",
    href: "/products",
    icon: Package,
  },
  {
    title: "库存管理",
    href: "/inventory",
    icon: Warehouse,
  },
  {
    title: "流量管理",
    href: "/traffic",
    icon: BarChart3,
  },
  {
    title: "流量监控",
    href: "/analytics",
    icon: Activity,
  },
  {
    title: "权限控制",
    href: "/permissions",
    icon: Users,
  },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "relative flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">电商后台</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-1 p-3">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.title}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="border-t border-sidebar-border p-4">
          <div className="text-xs text-muted-foreground">
            <p>© 2025 电商后台系统</p>
            <p className="mt-1">v1.0.0</p>
          </div>
        </div>
      )}
    </aside>
  )
}
