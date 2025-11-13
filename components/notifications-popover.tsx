"use client"

import { Bell, Package, TrendingDown, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const notifications = [
  {
    id: "1",
    type: "warning",
    icon: AlertCircle,
    title: "库存预警",
    message: 'MacBook Pro 14" 库存已低于安全值',
    time: "5分钟前",
    read: false,
  },
  {
    id: "2",
    type: "info",
    icon: Package,
    title: "新订单",
    message: "收到3个新订单，待处理",
    time: "15分钟前",
    read: false,
  },
  {
    id: "3",
    type: "error",
    icon: TrendingDown,
    title: "库存不足",
    message: "时尚休闲T恤已缺货",
    time: "1小时前",
    read: false,
  },
  {
    id: "4",
    type: "success",
    icon: CheckCircle,
    title: "入库完成",
    message: "iPhone 15 Pro Max 已入库200件",
    time: "2小时前",
    read: true,
  },
]

export function NotificationsPopover() {
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4">
          <h3 className="font-semibold">通知</h3>
          {unreadCount > 0 && <Badge variant="secondary">{unreadCount} 条未读</Badge>}
        </div>
        <Separator />
        <ScrollArea className="h-[400px]">
          <div className="space-y-1 p-2">
            {notifications.map((notification, index) => {
              const Icon = notification.icon
              return (
                <div key={notification.id}>
                  <button
                    className="w-full text-left p-3 rounded-md hover:bg-muted transition-colors"
                    onClick={() => console.log("[v0] Notification clicked:", notification.id)}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`mt-0.5 ${
                          notification.type === "error"
                            ? "text-destructive"
                            : notification.type === "warning"
                              ? "text-chart-5"
                              : notification.type === "success"
                                ? "text-emerald-500"
                                : "text-primary"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium leading-none">{notification.title}</p>
                          {!notification.read && <span className="h-2 w-2 rounded-full bg-primary" />}
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    </div>
                  </button>
                  {index < notifications.length - 1 && <Separator className="my-1" />}
                </div>
              )
            })}
          </div>
        </ScrollArea>
        <Separator />
        <div className="p-2">
          <Button variant="ghost" className="w-full" onClick={() => console.log("[v0] Mark all as read")}>
            标记全部已读
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
