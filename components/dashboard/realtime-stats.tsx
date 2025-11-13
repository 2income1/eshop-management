import { Activity, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const realtimeData = [
  { page: "iPhone 15 Pro", visitors: 234, status: "hot" },
  { page: "MacBook Air", visitors: 189, status: "hot" },
  { page: "AirPods Pro", visitors: 156, status: "normal" },
  { page: "iPad Air", visitors: 123, status: "normal" },
  { page: "Apple Watch", visitors: 98, status: "normal" },
]

export function RealtimeStats() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>实时热度</CardTitle>
            <CardDescription>当前在线商品浏览</CardDescription>
          </div>
          <Activity className="h-5 w-5 text-chart-1 animate-pulse" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {realtimeData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium truncate">{item.page}</span>
                  {item.status === "hot" && (
                    <Badge variant="destructive" className="text-xs">
                      热门
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs text-muted-foreground">{item.visitors} 人在看</span>
                  <ArrowUpRight className="h-3 w-3 text-chart-2" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-20 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-chart-1 rounded-full"
                    style={{ width: `${(item.visitors / 250) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
