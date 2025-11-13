import { Package, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "总库存量",
    value: "12,847",
    change: "+234",
    trend: "up",
    icon: Package,
  },
  {
    title: "低库存商品",
    value: "23",
    change: "+5",
    trend: "up",
    icon: AlertTriangle,
    alert: true,
  },
  {
    title: "库存周转率",
    value: "4.2",
    change: "+0.3",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "缺货商品",
    value: "8",
    change: "-2",
    trend: "down",
    icon: TrendingDown,
  },
]

export function InventoryOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        const isPositive = stat.trend === "up" && !stat.alert

        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <Icon className={`h-4 w-4 ${stat.alert ? "text-destructive" : "text-muted-foreground"}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                <span
                  className={`text-sm font-medium ${
                    stat.alert ? "text-destructive" : isPositive ? "text-chart-2" : "text-muted-foreground"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-muted-foreground">vs 上月</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
