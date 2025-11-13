"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Smartphone, Tablet } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const devices = [
  {
    name: "桌面端",
    icon: Monitor,
    percentage: 52,
    visitors: 23400,
    color: "hsl(var(--chart-1))",
  },
  {
    name: "移动端",
    icon: Smartphone,
    percentage: 38,
    visitors: 17100,
    color: "hsl(var(--chart-2))",
  },
  {
    name: "平板",
    icon: Tablet,
    percentage: 10,
    visitors: 4500,
    color: "hsl(var(--chart-3))",
  },
]

export function DeviceBreakdown() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>设备分布</CardTitle>
        <CardDescription>不同设备的访问情况</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {devices.map((device) => {
          const Icon = device.icon

          return (
            <div key={device.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: device.color, opacity: 0.2 }}
                  >
                    <Icon className="h-5 w-5" style={{ color: device.color }} />
                  </div>
                  <div>
                    <div className="font-medium">{device.name}</div>
                    <div className="text-sm text-muted-foreground">{device.visitors.toLocaleString()} 访客</div>
                  </div>
                </div>
                <div className="text-2xl font-bold">{device.percentage}%</div>
              </div>
              <Progress value={device.percentage} className="h-2" />
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
